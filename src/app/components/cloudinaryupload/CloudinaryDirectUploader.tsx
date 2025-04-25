"use client";

import React, { useState, useEffect, useRef } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// Vẫn giữ plugin và CSS preview cho file người dùng tự chọn
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// Vẫn cần FilePondFile nếu bạn dùng nó ở đâu đó, nếu không có thể bỏ
import type { FilePondFile } from "filepond";

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

// --- Interface Props đã loại bỏ imageDefault ---
interface CloudinaryManualUploaderProps {
  onUploadSuccess: (imageUrl: string) => void; // Hàm callback vẫn giữ lại
  // imageDefault?: string; // <<<--- ĐÃ XÓA
  labelIdle?: string; // Giữ lại nếu bạn muốn tùy chỉnh label
}

function CloudinaryManualUploader({
  onUploadSuccess,
  // imageDefault, // <<<--- ĐÃ XÓA KHỎI DESTRUCTURING
  labelIdle = "+", // Có thể đặt giá trị mặc định ở đây hoặc để cha truyền vào
}: CloudinaryManualUploaderProps) {

  // --- SỬA ĐỔI CHÍNH: Khởi tạo state files luôn là mảng rỗng ---
  const [files, setFiles] = useState<FilePondFile[]>([]);

  // console.log(imageDefault) // <<<--- ĐÃ XÓA LOG

  // Các state và ref khác giữ nguyên
  const [isConfigValid, setIsConfigValid] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{
    [key: string]: number;
  }>({});
  const pondRef = useRef<FilePond>(null);

  // useEffect đăng ký plugin giữ nguyên
  useEffect(() => {
    registerPlugin(
      FilePondPluginImageExifOrientation,
      FilePondPluginImagePreview, // Giữ lại để preview file user chọn
      FilePondPluginFileValidateType
    );
  }, []);

  // useEffect kiểm tra config giữ nguyên
  useEffect(() => {
    if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET) {
      setIsConfigValid(true);
    } else {
      console.error("LỖI CẤU HÌNH CLOUDINARY!");
      setIsConfigValid(false);
    }
  }, []);

  // --- Không còn useEffect nào để xử lý imageDefault ---

  // ----- Hàm uploadFileToCloudinary giữ nguyên -----
  const uploadFileToCloudinary = (
    file: File,
    onProgress: (percentage: number) => void
  ): Promise<string> => {
    // ... (code như cũ) ...
    return new Promise((resolve, reject) => {
        if (!isConfigValid) {
          reject("Lỗi cấu hình Cloudinary.");
          return;
        }

        const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
        const formData = new FormData();
        formData.append("file", file, file.name);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET!);

        const request = new XMLHttpRequest();
        request.open("POST", url, true);

        request.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            const percentage = Math.round((e.loaded * 100) / e.total);
            onProgress(percentage);
          }
        };

        request.onload = () => {
          if (request.status >= 200 && request.status < 300) {
            try {
              const response = JSON.parse(request.responseText);
              console.log(`Uploaded ${file.name}:`, response);
              if (response && response.secure_url) {
                resolve(response.secure_url);
              } else {
                console.error("Không tìm thấy secure_url trong response từ Cloudinary:", response);
                reject("Không nhận được URL ảnh hợp lệ từ Cloudinary.");
              }
            } catch (e) {
              console.error("Lỗi khi parse JSON response từ Cloudinary:", e, request.responseText);
              reject("Lỗi parse response từ Cloudinary.");
            }
          } else {
            let errorMsg = `Lỗi ${request.status}: ${request.statusText}`;
            try {
              const errorResponse = JSON.parse(request.responseText);
              errorMsg = errorResponse?.error?.message || errorMsg;
            } catch (e) { /* Ignore */ }
            console.error(`Cloudinary upload error (${request.status}):`, errorMsg, request.responseText);
            reject(errorMsg);
          }
        };
        request.onerror = () => { console.error("Lỗi mạng trong quá trình upload lên Cloudinary."); reject("Lỗi mạng khi tải lên Cloudinary."); };
        request.onabort = () => { console.log("Upload lên Cloudinary đã bị hủy."); reject("Upload đã bị hủy."); };
        request.send(formData);
      });
  };

  // ----- Hàm handleUploadAll giữ nguyên -----
  const handleUploadAll = async () => {
     // ... (code như cũ) ...
       if (!files || files.length === 0) { alert("Vui lòng chọn một ảnh để tải lên."); return; }
       if (!isConfigValid) { alert("Lỗi cấu hình Cloudinary, không thể tải lên."); return; }
       const fileItem = files[0];
       const actualFile = fileItem?.file as File;
       const fileId = fileItem?.id;
       if (!(actualFile instanceof File) || !fileId) { console.error("Đối tượng file không hợp lệ:", fileItem); alert("Có lỗi với file đã chọn, vui lòng thử lại."); return; }
       setIsUploading(true);
       setUploadProgress({ [fileId]: 0 });
       try {
         const imageUrl = await uploadFileToCloudinary( actualFile, (percentage) => { setUploadProgress(prev => ({ ...prev, [fileId]: percentage })); } ); // Sửa lại setUploadProgress
         console.log(`Upload thành công, URL: ${imageUrl}`);
         // alert(`Tải lên thành công!`); // Có thể bỏ alert
         onUploadSuccess(imageUrl);
         if (pondRef.current) {
           const currentPondInstance = pondRef.current;
           const fileToRemove = currentPondInstance.getFile(fileId);
           if (fileToRemove) { currentPondInstance.removeFile(fileToRemove.id); }
         }
         setUploadProgress({}); // Reset progress sau khi thành công và xóa file
       } catch (error) {
         console.error("Lỗi khi tải lên file:", error);
         alert(`Tải lên thất bại: ${error}`);
         setUploadProgress(prev => ({ ...prev, [fileId]: -1 })); // Đánh dấu lỗi
       } finally {
         setIsUploading(false);
       }
  };

  // Logic tính toán canUpload, currentProgress giữ nguyên
   const canUpload = !isUploading && files.length > 0 && files[0]?.file instanceof File && isConfigValid;
   const currentProgress = isUploading && files.length > 0 && files[0]?.id ? uploadProgress[files[0].id] ?? 0 : 0;
   const progressValue = currentProgress === -1 ? "Lỗi" : `${currentProgress}%`;

  return (
    <div>
      {/* Thông báo lỗi cấu hình giữ nguyên */}
      {!isConfigValid && ( <div style={{ /*...*/ }}> Lỗi cấu hình Cloudinary... </div> )}

      {/* Component FilePond giữ nguyên các props CƠ BẢN */}
      <FilePond
        ref={pondRef}
        files={files as any} // <<<--- Truyền state files (luôn bắt đầu rỗng)
        onupdatefiles={setFiles}
        allowMultiple={false}
        maxFiles={1}
        name="file"
        labelIdle={labelIdle} // <<<--- Sử dụng labelIdle đã được xử lý
        acceptedFileTypes={[
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/webp",
        ]}
        fileValidateTypeLabelExpectedTypes="Chỉ chấp nhận file ảnh ({allButLastType} hoặc {lastType})"
        labelFileTypeNotAllowed="Loại file không hợp lệ"
        labelFileProcessing="Đang tải lên"
        labelTapToCancel="Nhấn để hủy"
        
      />

      {/* Nút Upload giữ nguyên logic hiển thị và disabled */}
      {/* Sửa lại điều kiện hiển thị nút cho chính xác hơn */}
      {files.length > 0 && files[0]?.file instanceof File && (
        <button
            onClick={handleUploadAll} // Đổi tên hàm lại nếu muốn
            disabled={!canUpload} // Dùng biến canUpload
            style={{ marginTop:'137px', padding: '10px 20px', cursor: canUpload ? 'pointer' : 'not-allowed', backgroundColor: canUpload ? '#007bff': '#cccccc', color: 'white', border: 'none', borderRadius: '5px' }}
        >
            {isUploading ? `Đang tải lên... (${progressValue})` : `Upload ảnh`}
        </button>
      )}

      {/* Hiển thị tiến trình chi tiết (Tùy chọn, có thể bỏ nếu đã tích hợp vào nút) */}
      {/* {isUploading && Object.keys(uploadProgress).length > 0 && ... } */}
    </div>
  );
}

export default CloudinaryManualUploader;
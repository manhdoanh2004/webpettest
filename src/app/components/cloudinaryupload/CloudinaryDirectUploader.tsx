
"use client";

import React, { useState, useEffect, useRef } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview"; // Cần cho preview
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"; // Cần CSS cho preview
import type { FilePondFile } from "filepond";

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

interface CloudinaryManualUploaderProps {
  onUploadSuccess: (imageUrl: string) => void;
  labelIdle?: string;
}

function CloudinaryManualUploader({
  onUploadSuccess,
  labelIdle = "+",
}: CloudinaryManualUploaderProps) {
  const [files, setFiles] = useState<FilePondFile[]>([]);
  const [isConfigValid, setIsConfigValid] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{
    [key: string]: number;
  }>({});
  const pondRef = useRef<FilePond>(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);

  useEffect(() => {
    registerPlugin(
      FilePondPluginImageExifOrientation,
      FilePondPluginImagePreview, // Giữ lại plugin preview
      FilePondPluginFileValidateType
    );
  }, []);

  useEffect(() => {
    if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET) {
      setIsConfigValid(true);
    } else {
      console.error("LỖI CẤU HÌNH CLOUDINARY!");
      setIsConfigValid(false);
    }
  }, []);

  const uploadFileToCloudinary = (
    file: File,
    onProgress: (percentage: number) => void
  ): Promise<string> => {
    // ... (code upload như cũ) ...
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

  const handleUpload = async () => {
    if (!files || files.length === 0) { /*...*/ return; }
    if (!isConfigValid) { /*...*/ return; }

    const fileItem = files[0];
    const actualFile = fileItem?.file as File;
    const fileId = fileItem?.id;

    if (!(actualFile instanceof File) || !fileId) { /*...*/ return; }

    setIsUploading(true);
    setUploadProgress({ [fileId]: 0 });
    setUploadCompleted(false);

    try {
      const imageUrl = await uploadFileToCloudinary(
        actualFile,
        (percentage) => {
          setUploadProgress((prev) => ({ ...prev, [fileId]: percentage }));
        }
      );
    
      onUploadSuccess(imageUrl);
      setUploadCompleted(true); // Đánh dấu đã xong
      setUploadProgress({}); // Reset progress


    } catch (error) {
      console.error("Lỗi khi tải lên file:", error);
      alert(`Tải lên thất bại: ${error}`);
      setUploadProgress((prev) => ({ ...prev, [fileId]: -1 }));
      setUploadCompleted(false);
    } finally {
      setIsUploading(false);
    }
  };

  // Hàm này vẫn cần để reset trạng thái khi chọn file MỚI
  const handleUpdateFiles = (fileItems: FilePondFile[]) => {
      setFiles(fileItems);
      // Nếu có file mới được chọn (hoặc thay thế file cũ)
      if (fileItems.length > 0) {
          // Kiểm tra xem file mới này có phải là file đã upload trước đó không
          // Nếu người dùng chỉ remove file thì fileItems sẽ là []
          // Chỉ reset khi có file MỚI thực sự được thêm vào
          setUploadCompleted(false); // Reset để nút upload hiện lại cho file mới
      } else {
          // Nếu không còn file nào (người dùng tự xóa), cũng nên reset completed
          setUploadCompleted(false);
      }
  };

  const canUpload = !isUploading && files.length > 0 && files[0]?.file instanceof File && isConfigValid && !uploadCompleted;
  const currentProgress = isUploading && files.length > 0 && files[0]?.id ? uploadProgress[files[0].id] ?? 0 : 0;
  const progressValue = currentProgress === -1 ? "Lỗi" : `${currentProgress}%`;

  return (
    <div>
      {!isConfigValid && ( <div style={{ color: 'red', marginBottom: '10px' }}> Lỗi cấu hình Cloudinary. Không thể upload. </div> )}

      <FilePond
        ref={pondRef}
        files={files as any}
        onupdatefiles={handleUpdateFiles} // Sử dụng hàm xử lý cập nhật
        allowMultiple={false}
        maxFiles={1}
        name="file"
        labelIdle={labelIdle}
        acceptedFileTypes={[
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/webp",
        ]}
        fileValidateTypeLabelExpectedTypes="Chỉ chấp nhận file ảnh ({allButLastType} hoặc {lastType})"
        labelFileTypeNotAllowed="Loại file không hợp lệ"
        // --- Quan trọng: Các label này liên quan đến trạng thái của FilePond,
        // không trực tiếp liên quan đến nút upload thủ công của chúng ta ---
        // labelFileProcessing="Đang xử lý" // FilePond xử lý trước khi ta upload
        // labelFileProcessingComplete="Hoàn thành" // Trạng thái của FilePond, không phải của ta
        // labelTapToCancel="Nhấn để hủy"
        // labelTapToRetry="Nhấn để thử lại"

        // Đảm bảo các plugin preview hoạt động
        allowImagePreview={true} // Bật rõ ràng (thường là mặc định)
        imagePreviewHeight={50} // Có thể tùy chỉnh chiều cao preview
        // instantUpload={false} // Rất quan trọng, không để FilePond tự upload
        // server={undefined} // Không dùng server của FilePond
      />

      {/* Điều kiện hiển thị nút vẫn giữ nguyên: có file và chưa upload xong */}
      {files.length > 0 && files[0]?.file instanceof File && !uploadCompleted && (
        <button
            onClick={handleUpload}
            disabled={!canUpload || isUploading}
            style={{ marginTop:'100px', padding: '10px 20px', cursor: (canUpload && !isUploading) ? 'pointer' : 'not-allowed', backgroundColor: (canUpload && !isUploading) ? '#007bff': '#cccccc', color: 'white', border: 'none', borderRadius: '5px' }}
        >
            {isUploading ? `Đang tải lên... (${progressValue})` : `Upload ảnh`}
        </button>
      )}

      {/* Có thể thêm thông báo thành công nếu muốn */}
      {uploadCompleted && files.length > 0 && ( // Hiện khi hoàn thành và file vẫn còn
          <div style={{ marginTop: '10px', color: 'green' }}>Upload thành công!</div>
      )}

    </div>
  );
}

export default CloudinaryManualUploader;
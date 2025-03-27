'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {

    // Xóa cookie 'loggedIn' bằng cách set Max-Age=0
    document.cookie = 'loggedIn=; Path=/; Max-Age=0';
    router.push('/login');
  }, [router]);

  return <p>Đang đăng xuất...</p>;
}
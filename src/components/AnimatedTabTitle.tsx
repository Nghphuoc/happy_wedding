"use client";

import { useEffect } from "react";

export default function AnimatedTabTitle() {
  useEffect(() => {
    // Các thông điệp sẽ lần lượt được gõ ra
    const messages = [
      "Quang Vinh & Diễm Linh 💍", 
      "Save The Date ✨"
    ];
    
    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentMsg = messages[msgIndex];
      
      // Tạo text hiện tại kèm theo dấu nháy "|" đằng sau để nhìn như con trỏ chuột
      const displayText = currentMsg.substring(0, charIndex);
      document.title = displayText + (charIndex === currentMsg.length ? "" : " |");

      if (isDeleting) {
        charIndex--; // Đang xóa chữ
      } else {
        charIndex++; // Đang gõ chữ
      }

      // Điều chỉnh tốc độ (mượt mà hay không là ở nhịp điệu này)
      let speed = isDeleting ? 80 : 180; // Xóa nhanh (80ms), gõ từ từ (180ms)

      // Xử lý khi gõ xong 1 câu
      if (!isDeleting && charIndex === currentMsg.length + 1) {
        speed = 2500; // Dừng lại 2.5 giây để người ta kịp đọc câu vừa gõ xong
        isDeleting = true;
      } 
      // Xử lý khi xóa hết câu
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        msgIndex = (msgIndex + 1) % messages.length; // Chuyển sang câu tiếp theo
        speed = 500; // Nghỉ 0.5 giây trước khi gõ câu mới
      }

      timer = setTimeout(type, speed);
    };

    // Bắt đầu chạy hiệu ứng
    timer = setTimeout(type, 500);

    // Dọn dẹp khi component unmount
    return () => clearTimeout(timer);
  }, []);

  return null;
}
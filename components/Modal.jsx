"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({ children }) {
    const router = useRouter()
  const modalRef = useRef(null);
  useEffect(() => {
    console.log('modal open')
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);
  function onHide() { 
    router.back()
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-teal-700 shadow-md border border-tea-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95   bg-neutral-700 text-white"
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
}

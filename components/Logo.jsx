import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href='/videos'>
        <Image
      src="/logo.svg"
      alt="LWS Xstream Logo"
      className="h-6"
      width={200}
      height={100}
    />
    </Link>
  );
}

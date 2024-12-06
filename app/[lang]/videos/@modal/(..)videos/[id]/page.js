 
 
import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Modal from "@/components/Modal";
import VideoDetails from "@/components/VideoDetails";
import React  from "react";

export default async function Page({ params: { id, lang } }) {
    const dict = await getDictionary(lang) 
  return (
    <Modal>
      <main className="flex flex-col lg:flex-row gap-6">
      <VideoDetails id={id} dict={dict}/>
      </main>
    </Modal>
  );
}
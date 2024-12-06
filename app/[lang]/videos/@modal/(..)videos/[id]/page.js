 
 
import Modal from "@/components/Modal";
import VideoDetails from "@/components/VideoDetails";
import React  from "react";

export default function Page({ params: { id } }) {

  return (
    <Modal>
      <main className="flex flex-col lg:flex-row gap-6">
        <VideoDetails id={id} />
      </main>
    </Modal>
  );
}
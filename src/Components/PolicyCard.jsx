import { useState } from "react";
import PolicyDialog from "./PolicyDialog";

export const PolicyCard = ({ content, title, imgUrl, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="mx-3 my-4 cursor-pointer" onClick={openModal}>
      <div className="h-[72px]">
        <div className="text-text-primary text-2xl font-bold">{title}</div>
      </div>
      <div>
        <img src={imgUrl} alt="policy" />
      </div>
      <PolicyDialog
        closeModal={closeModal}
        isOpen={isOpen}
        title={title}
        content={content}
        imgUrl={imgUrl}
        id={id}
      />
    </div>
  );
};

import ReactModal from "react-modal";

import s from "./ImageModal.module.scss";

const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          overflow: "hidden",
        },
        content: {
          color: "lightsteelblue",
          overflow: "hidden",
          padding: "0",
          borderRadius: "0",
          border: "none",
        },
      }}
    >
      {image && (
        <img
          className={s.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      )}
    </ReactModal>
  );
};

export default ImageModal;

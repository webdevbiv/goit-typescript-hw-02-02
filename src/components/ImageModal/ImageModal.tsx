import ReactModal from "react-modal";
import s from "./ImageModal.module.scss";
import type { UnsplashImage } from "../../types";

interface Props {
  image: UnsplashImage | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<Props> = ({ image, isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          position: "relative",
          inset: "unset",
          padding: 0,
          border: "none",
          background: "transparent",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {image && (
        <img
          className={s.image}
          src={image.urls.regular}
          alt={image.alt_description || "Image"}
        />
      )}
    </ReactModal>
  );
};

export default ImageModal;

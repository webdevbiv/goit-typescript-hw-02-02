import s from "./ImageCard.module.scss";
import type { UnsplashImage } from "../../types";

interface Props {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<Props> = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={() => onClick(image)}>
      <img
        className={s.image}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;

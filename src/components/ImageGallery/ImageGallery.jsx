import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.scss";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

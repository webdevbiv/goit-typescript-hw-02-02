import { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./api/api";

import "./App.scss";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setError(null);

    const getImages = async () => {
      if (!query) return;

      setIsLoading(true);
      try {
        const data = await fetchImages(query, page, abortController.signal);
        console.log(data);

        if (data.total === 0) {
          setError("No images found");
          setImages([]);
          setTotalPages(0);
          setPage(1);
          return;
        }
        if (page === 1) {
          setImages(data.results);
          setTotalPages(data.total_pages);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
      } catch (error) {
        if (error.name === "CanceledError") return;

        setError("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const onSubmit = (query) => {
    setQuery(query);
    setPage(1);
  };

  const handleModalOpen = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setModalImage(null);
    setShowModal(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleModalOpen} />
      )}
      {error && <ErrorMessage message={error} />}
      <ImageModal
        isOpen={showModal}
        onClose={handleModalClose}
        image={modalImage}
      />

      <Loader loading={isLoading} />
      {page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}

export default App;

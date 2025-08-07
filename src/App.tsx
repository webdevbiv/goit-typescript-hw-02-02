import { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./api/api";
import type { UnsplashImage } from "./types";

import "./App.scss";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalImage, setModalImage] = useState<UnsplashImage | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    setError(null);

    const getImages = async () => {
      if (!query) return;

      setIsLoading(true);
      try {
        const data = await fetchImages(query, page, abortController.signal);

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
          setImages((prev) => [...prev, ...data.results]);
        }
      } catch (error: unknown) {
        if ((error as Error).name === "CanceledError") return;
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

  const onSubmit = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handleModalOpen = (image: UnsplashImage) => {
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

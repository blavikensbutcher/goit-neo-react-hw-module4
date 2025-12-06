import './App.css';
import { SearchBar } from './SearchBar/SearchBar.jsx';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { getImages } from '../js/api.js';
import { Loader } from './Loader/Loader.jsx';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn.jsx';
import { ErrorMessage } from './ErrorMessage/ErrorMessage.jsx';
import { ImageModal } from './ImageModal/ImageModal.jsx';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

function App() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  Modal.setAppElement('#root');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 3, direction: 'none', random: false, straight: false, out_mode: 'out' },
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } },
        },
        retina_detect: true,
      });
    }
  }, []);

  async function searchImages(query, page) {
    try {
      setError('');
      setLoading(true);

      if (page === 1) {
        setResponse([]);
      }

      const fetchedData = await getImages(query, page);

      setResponse(prevState => {
        return [...prevState, ...fetchedData.data.results];
      });
    } catch (e) {
      console.log(e);
      setError('SERVER IS NOT AVAILABLE 😥');
      toast.error('SERVER IS NOT AVAILABLE 😥');
    } finally {
      setLoading(false);
    }
  }

  const handleImageClick = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (query && page) {
      searchImages(query, page);
    }
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={setQuery} setPage={setPage} />

      {error && <ErrorMessage message={error} />}

      <ImageGallery data={response} onImageClick={handleImageClick} />

      {loading && <Loader />}

      {response.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}

      {modalIsOpen && selectedImage && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          imageRegular={selectedImage.urls.regular}
          likes={selectedImage.likes}
          username={selectedImage.user.username}
          name={selectedImage.user.name}
          avatar={selectedImage.user.profile_image.large}
        />
      )}

      <Toaster position={'top-right'} />
    </>
  );
}

export default App;

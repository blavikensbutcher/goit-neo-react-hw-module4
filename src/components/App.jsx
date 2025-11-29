import './App.css';
import { SearchBar } from './SearchBar/SearchBar.jsx';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { getImages } from '../js/api.js';
import { Loader } from './Loader/Loader.jsx';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn.jsx';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

function App() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  Modal.setAppElement('#root');

  async function searchImages(query, page) {
    try {
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

      toast.error('SERVER IS NOT AVAILABLE 😥');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (query && page) {
      searchImages(query, page);
    }
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={setQuery} setPage={setPage} />
      {page === 1 ? loading && <Loader /> : null}
      <ImageGallery data={response} />
      {response.length > 0 && <LoadMoreBtn setPage={setPage} page={page} query={query} />}
      <Toaster position={'top-right'} />
    </>
  );
}

export default App;

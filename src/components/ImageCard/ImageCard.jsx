import css from './ImageCard.module.css';
import { ImageModal } from '../ImageModal/ImageModal.jsx';
import { useState } from 'react';
export const ImageCard = ({
  description,
  imageSmall,
  imageRegular,
  likes,
  username,
  name,
  avatar,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <li className={css.item}>
      <img
        src={imageSmall}
        width={330}
        height={200}
        alt={description}
        onClick={openModal}
        className={css.image}
      />
      {modalIsOpen && (
        <ImageModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          imageRegular={imageRegular}
          likes={likes}
          username={username}
          name={name}
          avatar={avatar}
        />
      )}
    </li>
  );
};

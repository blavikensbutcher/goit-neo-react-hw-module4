import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { IoMdClose } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';

export const ImageModal = ({
  modalIsOpen,
  closeModal,
  imageRegular,
  likes,
  username,
  name,
  avatar,
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '999',
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={imageRegular} alt="cat" width={750} height={600} className={css.img} />
      <div className={css.statistic}>
        <div className={css.user}>
          <img src={avatar} width={100} height={100} />
        </div>
        <div className={css.user}>
          <p className={css.username}>
            <FaUserCircle className={css.user} /> {username}
          </p>
          <p className={css.likes}>
            <FcLike /> {likes}
          </p>
          <span>{name}</span>
        </div>
      </div>
      <button onClick={closeModal} className={css.btn}>
        <IoMdClose size={30} />
      </button>
    </Modal>
  );
};

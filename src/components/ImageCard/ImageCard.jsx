import css from './ImageCard.module.css';

export const ImageCard = ({
  description,
  imageSmall,
  imageRegular,
  likes,
  username,
  name,
  avatar,
  onImageClick,
}) => {
  return (
    <img
      src={imageSmall}
      width={330}
      height={200}
      alt={description}
      onClick={onImageClick}
      className={css.image}
    />
  );
};

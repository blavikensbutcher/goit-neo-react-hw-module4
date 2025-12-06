import { ImageCard } from '../ImageCard/ImageCard.jsx';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ data, onImageClick }) => {
  return (
    <ul className={css.list}>
      {data.map(item => (
        <li key={item.id}>
          <ImageCard
            description={item.alt_description}
            imageRegular={item.urls.regular}
            imageSmall={item.urls.small}
            likes={item.likes}
            username={item.user.username}
            avatar={item.user.profile_image.large}
            name={item.user.name}
            onImageClick={() => onImageClick(item)}
          />
        </li>
      ))}
    </ul>
  );
};

import { ImageCard } from '../ImageCard/ImageCard.jsx';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(item => {
        return (
          <ImageCard
            key={item.id}
            description={item.alt_description}
            imageRegular={item.urls.regular}
            imageSmall={item.urls.small}
            likes={item.likes}
            username={item.user.username}
            avatar={item.user.profile_image.large}
            name={item.user.name}
          />
        );
      })}
    </ul>
  );
};

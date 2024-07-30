import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'

const ImageGallery = ({images}) => {
  return (
    <ul className={s.imageList}>
      {images.map((image) => {
        return (
          <li key={image.id} className={s.imageItem}>
            <ImageCard image={image} />
          </li>
        )
      }
      )}
      </ul>
  )
}

export default ImageGallery
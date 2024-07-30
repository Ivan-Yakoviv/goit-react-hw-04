import s from './ImageCard.module.css'

const ImageCard = ({image}) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.description} />
    </div>
  )
}

export default ImageCard
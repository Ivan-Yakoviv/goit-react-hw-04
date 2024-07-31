import s from './LoadMore.module.css'

const LoadMore = ({onMore}) => {
  return (
    <div>
      <button onClick={onMore}>Load more</button>
    </div>
  )
}

export default LoadMore

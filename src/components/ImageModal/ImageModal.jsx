import s from './ImageModal.module.css';
import Modal from 'react-modal';



// Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onSetModal, imageData }) => {

    const {
        created_at,
        description,
        urls,
        links: { download },
        likes,
        tags,
        user: { name, location },
        alt_description,
    } = imageData;

    const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#F0F0F0",
    },
  };
    
    const onCloseModal = () => {
        onSetModal(false);
    };

     const handleBodyClassRemove = () => {
    document.body.classList.remove("ReactModal__Body--open");
  };

    return (
            <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onCloseModal}
      className={s.modal}
      contentLabel="Image Modal window"
      preventScroll={true}
      onAfterClose={handleBodyClassRemove}>
      <div className={s.content}>
        <div className={s.btnGroup}>


          <button className={s.btn} onClick={onCloseModal} type="button">
            X
          </button>
        </div>

        <img className={s.img} src={urls.regular} alt={alt_description} />

        <div className={s.infoListAndLink}>
          <ul className={s.infoWrapper}>
            <li className="imageInfo">
              <p className={s.imageInfoHeading}>Likes</p>
              <span className={s.imageInfo}>{likes}</span>
            </li>

            <li className="imageInfo">
              <p className={s.imageInfoHeading}>Featured in</p>
              <ul className={s.featuredIn}>
                {tags.map((el, i) => (
                  <li key={i}>
                    <span className={s.imageInfo}> {el.title}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          {/* <a
            href={download}
            rel="noreferrer noopener"
            target="_blank"
            download
            className={s.download}
            type="button">
            Download
          </a> */}
        </div>
        <p className={s.description}>{description}</p>
        <div className={s.userInfo}>
          <div>
            <p className={s.name}>{name}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </Modal>
    );
};

export default ImageModal

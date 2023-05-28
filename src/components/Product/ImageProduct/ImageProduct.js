import styles from './ImageProduct.module.scss';
import PropTypes from 'prop-types';

const ImageProduct = ({ name, title, currentColor }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={`${title}`}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
      />
    </div>
  );
};

export default ImageProduct;

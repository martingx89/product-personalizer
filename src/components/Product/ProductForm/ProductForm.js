import styles from '../Product.module.scss';

import Button from '../../Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';

import PropTypes from 'prop-types';

const ProductForm = ({ sizes, colors, currentSize, currentColor, setCurrentSize, setCurrentColor, addToCart }) => {
  return (
    <form>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}></OptionSize>
      <OptionColor colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor}></OptionColor>
      <Button className={styles.button}>
        <span
          className='fa fa-shopping-cart'
          onClick={(e) => {
            addToCart(e);
          }}
        />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  addToCart: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;

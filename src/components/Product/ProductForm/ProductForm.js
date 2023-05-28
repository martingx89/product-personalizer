import styles from '../Product.module.scss';

import Button from '../../Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';

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

export default ProductForm;

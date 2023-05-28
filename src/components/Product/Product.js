import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = ({ id, name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
    const foundSize = sizes.find((size) => size.name === currentSize);
    return basePrice + foundSize.additionalPrice;
  };

  const addToCart = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log('Name: ', title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={`${title}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key={shortid()}>
                  <button
                    type='button'
                    className={size.name === currentSize ? styles.active : ''}
                    onClick={() => {
                      // console.log(size.name);
                      setCurrentSize(size.name);
                    }}>
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((item) => (
                <li key={shortid()}>
                  <button
                    type='button'
                    className={clsx(prepareColorClassName(item), item === currentColor && styles.active)}
                    onClick={() => {
                      // console.log(item);
                      setCurrentColor(item);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span
              className='fa fa-shopping-cart'
              onClick={(e) => {
                addToCart(e);
              }}
            />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
};

export default Product;

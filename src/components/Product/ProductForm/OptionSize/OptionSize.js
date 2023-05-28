import styles from '../../Product.module.scss';
import shortid from 'shortid';

const OptionSize = ({ currentSize, sizes, setCurrentSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size) => (
          <li key={shortid()}>
            <button
              type='button'
              className={size.name === currentSize ? styles.active : ''}
              onClick={() => {
                setCurrentSize(size.name);
              }}>
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionSize;

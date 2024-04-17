import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.cubes}>
      <div className={`${styles.item} ${styles.loop}`}></div>
    
    </div>
  );
}
export default Loader
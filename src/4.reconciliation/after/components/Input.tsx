import styles from '../style.module.css';

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input type='text' placeholder={placeholder} className={styles.input} />
  );
}

export default Input;

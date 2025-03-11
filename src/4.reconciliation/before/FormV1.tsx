import { useState } from 'react';
import styles from './style.module.css';

function FormV1() {
  const [isText, setIsText] = useState(false);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.label}>
          <input
            type='radio'
            checked={!isText}
            onChange={() => setIsText(false)}
          />
          Email
        </label>
        <label className={styles.label}>
          <input
            type='radio'
            checked={isText}
            onChange={() => setIsText(true)}
          />
          Text
        </label>

        {isText ? (
          <input type='text' placeholder='Phone...' className={styles.input} />
        ) : (
          <textarea placeholder='Enter your text'></textarea>
        )}

        <input
          type='password'
          placeholder='Password'
          className={styles.input}
        />
      </form>
    </div>
  );
}

export default FormV1;

import { useState } from 'react';
import styles from './style.module.css';
import Input from './components/Input';

function FormV2() {
  const [isPhone, setIsPhone] = useState(false);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.label}>
          <input
            type='radio'
            checked={!isPhone}
            onChange={() => setIsPhone(false)}
          />
          Email
        </label>
        <label className={styles.label}>
          <input
            type='radio'
            checked={isPhone}
            onChange={() => setIsPhone(true)}
          />
          Phone
        </label>

        {isPhone ? (
          <Input placeholder='Phone...' />
        ) : (
          <Input placeholder='Email...' />
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

export default FormV2;

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

        {/* {isPhone ? (
          <Input placeholder='Phone...' />
        ) : (
          <Input placeholder='Email...' />
        )} */}

        {isPhone ? <Input placeholder='Phone...' /> : null}
        {!isPhone ? <Input placeholder='Email...' /> : null}

        <input
          type='password'
          placeholder='Password'
          className={styles.input}
        />
      </form>
    </div>
  );
}
// -------- BEFORE RE RENDER (INITIAL RENDER) -----------
// const formV2 = [
//   { type: 'label' },
//   { type: 'label' },
//   null, // 2
//   { type: 'input' }, //3 email
//   { type: 'input' }, // password
// ];
// -------- BEFORE RE RENDER (INITIAL RENDER) -----------
// const formV2 = [
//   { type: 'label' },
//   { type: 'label' },
//   { type: 'input' }, // 2 email
//   null, // 3
//   { type: 'input' }, // password
// ];

// const formV2 = {
//   type: 'div',
//   children: [
//     {
//       type: 'form',
//       children: [
//         { type: 'label' },
//         { type: 'label' },
//         null,
//         { type: 'input' },
//         { type: 'input' },
//       ],
//     },
//   ],
// };

export default FormV2;

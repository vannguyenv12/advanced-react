import { useRef, useState } from 'react';
import style from './Form.module.css';

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    setIsNameError(false);
    setIsEmailError(false);

    if (!name) {
      setIsNameError(true);
      // document.getElementById('name')?.focus();
      nameInputRef.current?.focus();
      return;
    }

    if (!email) {
      setIsEmailError(true);
      // document.getElementById('email')?.focus();
      emailInputRef.current?.focus();
      return;
    }

    console.log('Successfully');
  };

  return (
    <form className={style.form}>
      <label>Name</label>
      <input
        ref={nameInputRef}
        type='text'
        placeholder='Enter Your Name...'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={isNameError ? style.invalid : ''}
      />
      <br />
      <label>Email</label>
      <input
        ref={emailInputRef}
        id='email'
        type='text'
        placeholder='Enter Your Email...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={isEmailError ? style.invalid : ''}
      />

      <button type='button' onClick={submit}>
        Submit
      </button>
    </form>
  );
}

export default MyForm;

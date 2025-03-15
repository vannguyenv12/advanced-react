import { useRef, useState } from 'react';
import style from './Form.module.css';
import MyInput from './MyInput';

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
      <MyInput
        ref={nameInputRef}
        label='Name'
        value={name}
        handleChange={(e) => setName(e.target.value)}
        isError={isNameError}
      />

      <br />
      <MyInput
        myRef={emailInputRef}
        label='Email'
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
        isError={isEmailError}
      />

      <button type='button' onClick={submit}>
        Submit
      </button>
    </form>
  );
}

export default MyForm;

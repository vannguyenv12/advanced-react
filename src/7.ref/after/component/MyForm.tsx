import { useRef, useState } from 'react';
import style from './Form.module.css';
import MyInput from './MyInput';

interface IRefPower {
  focus: () => void;
  errorAnimate: () => void;
}

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);

  const nameInputRef = useRef<IRefPower>(null);
  const emailInputRef = useRef<IRefPower>(null);

  const submit = () => {
    setIsNameError(false);
    setIsEmailError(false);

    if (!name) {
      setIsNameError(true);
      nameInputRef.current?.focus();
      nameInputRef.current?.errorAnimate();
      return;
    }

    if (!email) {
      setIsEmailError(true);
      emailInputRef.current?.focus();
      emailInputRef.current?.errorAnimate();
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
        ref={emailInputRef}
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

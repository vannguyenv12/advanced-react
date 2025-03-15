import { useRef, useState } from 'react';
import style from './Form.module.css';

function MyForm() {
  const [name, setName] = useState('');
  const lengthRef = useRef(0);

  const submit = () => {
    lengthRef.current = name.length;
  };

  return (
    <form className={style.form}>
      <label>Length of Name: {lengthRef.current}</label>
      <label>Name</label>
      <input
        type='text'
        placeholder='Enter Your Name...'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Email</label>
      <input type='text' placeholder='Enter Your Email...' />

      <button type='button' onClick={submit}>
        Submit
      </button>
    </form>
  );
}

export default MyForm;

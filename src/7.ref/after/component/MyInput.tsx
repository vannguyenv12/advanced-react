import { forwardRef } from 'react';
import style from './Form.module.css';

function MyInputRef(props: any, ref: any) {
  const { label, value, handleChange, isError } = props;

  return (
    <>
      <label>{label}</label>
      <input
        ref={ref}
        type='text'
        placeholder='Enter Your Name...'
        value={value}
        onChange={handleChange}
        className={isError ? style.invalid : ''}
      />
    </>
  );
}

export default forwardRef(MyInputRef);

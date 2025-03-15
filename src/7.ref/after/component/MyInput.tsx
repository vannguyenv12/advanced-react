import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import style from './Form.module.css';

function MyInputRef(props: any, ref: any) {
  const { label, value, handleChange, isError } = props;
  const [showAnimateError, setShowAnimateError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const classAnimate = showAnimateError ? style.errorAnimate : '';

  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => {
          inputRef.current?.focus();
        },
        errorAnimate: () => {
          setShowAnimateError(true);
        },
      };
    },
    []
  );

  return (
    <>
      <label>{label}</label>
      <input
        ref={inputRef}
        type='text'
        placeholder='Enter Your Name...'
        value={value}
        onChange={handleChange}
        className={`${classAnimate} ${isError ? style.invalid : ''}`}
        onAnimationEnd={() => {
          setShowAnimateError(false);
        }}
      />
    </>
  );
}

export default forwardRef(MyInputRef);

import style from './Form.module.css';

function MyForm() {
  return (
    <form className={style.form}>
      <label>Name</label>
      <input type='text' placeholder='Enter Your Name...' />
      <br />
      <label>Email</label>
      <input type='text' placeholder='Enter Your Email...' />

      <button>Submit</button>
    </form>
  );
}

export default MyForm;

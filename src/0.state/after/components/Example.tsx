import { useState } from 'react';

function Example() {
  const [info, setInfo] = useState({
    name: 'John',
    additional: {
      gmail: 'john@gmail.com',
      hotmail: 'john@hotmail.com',
    },
  });
  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');
  const [hotmail, setHotmail] = useState('');

  const handleClick = () => {
    setInfo({
      ...info,
      additional: {
        gmail,
        hotmail,
      },
    });
  };

  return (
    <div>
      <div>{JSON.stringify(info)}</div>

      <br />
      <form>
        <label>Name</label>
        <input
          placeholder='Change your name...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Gmail</label>
        <input
          placeholder='Change your gmail...'
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
        />
        <br />
        <label>Hot Mail</label>
        <input
          placeholder='Change your hot mail...'
          value={hotmail}
          onChange={(e) => setHotmail(e.target.value)}
        />
        <br />
        <button type='button' onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Example;

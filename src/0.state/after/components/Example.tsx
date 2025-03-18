import { useState } from 'react';
import { produce } from 'immer';
import { useImmer } from 'use-immer';

function Example() {
  const [info, setInfo] = useImmer({
    name: 'John',
    additional: {
      gmail: 'john@gmail.com',
      hotmail: 'john@hotmail.com',
    },
  });
  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');

  const handleClick = () => {
    // const newInfo = {
    //   ...info,
    //   name,
    //   additional: { ...info.additional, gmail },
    // }; // shallow copy
    // setInfo(newInfo);

    setInfo((draftState) => {
      draftState.name = name;
      draftState.additional.gmail = gmail;
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
        <button type='button' onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Example;

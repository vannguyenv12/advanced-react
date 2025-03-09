import { useEffect, useState } from 'react';

function ScreenV2() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('check data', data);

  return <div></div>;
}

export default ScreenV2;

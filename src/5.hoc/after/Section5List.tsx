import { ComponentType, useEffect, useState } from 'react';

const withFetchData = (
  Component: ComponentType,
  url: string,
  keyProp: string
) => {
  return (props: any) => {
    // Write logic to fetch data
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <Component
        {...props}
        data={data}
        keyProp={keyProp}
        isLoading={isLoading}
      />
    );
  };
};

function List(props: any) {
  console.log('props', props);

  if (props.isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <ul>
      {props.data.map((item: any) => (
        <li key={item.id}>{item[props.keyProp]}</li>
      ))}
    </ul>
  );
}

const ListWithTodos = withFetchData(
  List,
  'https://jsonplaceholder.typicode.com/todos',
  'title'
);

const ListWithUsers = withFetchData(
  List,
  'https://jsonplaceholder.typicode.com/users',
  'name'
);

export default function Section5List() {
  return (
    <div>
      Section 5 List
      <ListWithUsers />
      <h1>Todos</h1>
      <ListWithTodos />
    </div>
  );
}

import { ComponentType } from 'react';

const withLog = (Component: ComponentType) => {
  return (props: any) => {
    const handleClick = () => {
      console.log('Timestamp', Date.now());
      //   //   Make sure we call handleClick form component
      props.handleClick();
    };

    return <Component {...props} handleClick={handleClick} />;
  };
};

function ComponentA(props: any) {
  return (
    <div style={{ background: 'red', width: 150, height: 150 }}>
      <button onClick={props.handleClick}>A Component</button>
    </div>
  );
}

function ComponentB(props: any) {
  return (
    <div style={{ background: 'blue', width: 150, height: 150 }}>
      <button onClick={props.handleClick}>B Component</button>
    </div>
  );
}

const ComponentALog = withLog(ComponentA);
const ComponentBLog = withLog(ComponentB);

export default function Section5Log() {
  return (
    <>
      <ComponentALog handleClick={() => console.log('This is a component A')} />
      <ComponentBLog handleClick={() => console.log('This is a component B')} />
    </>
  );
}

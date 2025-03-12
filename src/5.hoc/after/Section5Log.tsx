import { ComponentType } from 'react';

const withLog = (Component: ComponentType) => {
  return (props: any) => {
    const handleClick = () => {
      console.log('timestamp', Date.now()); // common logic
      //   Make sure you call that
      props.onClick();
    };

    return <Component {...props} handleClick={handleClick} />;
  };
};

function ComponentA(props: any) {
  return (
    <div style={{ width: '200px', height: '200px', background: 'blue' }}>
      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
}

function ComponentB(props: any) {
  return (
    <div style={{ width: '200px', height: '200px', background: 'red' }}>
      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
}

const ComponentALog = withLog(ComponentA);
const ComponentBLog = withLog(ComponentB);

export default function Section5Log() {
  return (
    <>
      <ComponentALog
        onClick={() => {
          console.log('This is a component A');
        }}
      />
      <ComponentBLog
        onClick={() => {
          console.log('This is a component B');
        }}
      />
    </>
  );
}

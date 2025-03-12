import { ComponentType } from 'react';

// function => Component
const withLog = (Component: ComponentType) => {
  return (props: any) => {
    // Write logic here

    return <Component {...props} />;
  };
};

function Button(props: any) {
  console.log('*** CHECK PROPS', props);

  return <button onClick={props.handleClick}>Submit</button>;
}

const ButtonWithLog = withLog(Button);

export default function Section5() {
  return (
    <div>
      <ButtonWithLog data={'abc'} handleClick={() => console.log('click')} />
    </div>
  );
}

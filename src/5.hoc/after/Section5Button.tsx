import { ComponentType } from 'react';

const withTheme = (Component: ComponentType) => {
  return (props: any) => {
    const theme = 'light';

    return <Component {...props} theme={theme} />;
  };
};

function Button(props: any) {
  return (
    <button
      style={{ background: `${props.theme === 'dark' ? '#000' : 'yellow'}` }}
    >
      Click me
    </button>
  );
}

const ButtonWithTheme = withTheme(Button);

export default function Section5Button() {
  return (
    <div>
      Section5Button
      <ButtonWithTheme />
    </div>
  );
}

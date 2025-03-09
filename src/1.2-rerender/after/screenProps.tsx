import Screen from './screen';
import HeavyComponent from './components/HeavyComponent';
import { Typography } from '@mui/material';

function ScreenProps() {
  const content = (
    <>
      <HeavyComponent />
      <Typography>Hello There</Typography>
    </>
  );

  return <Screen content={content} />;
}

export default ScreenProps;

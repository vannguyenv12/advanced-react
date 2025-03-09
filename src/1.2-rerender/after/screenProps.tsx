import Screen from './screen';
import HeavyComponent from './components/HeavyComponent';
import { Typography } from '@mui/material';

function ScreenProps() {
  return (
    <Screen>
      <HeavyComponent />
      <Typography>Hello There</Typography>
    </Screen>
  );
}

export default ScreenProps;

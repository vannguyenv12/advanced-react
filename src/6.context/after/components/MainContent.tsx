import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import HeavyComponent from './HeavyComponent';
import { useLayoutContext } from '../context/LayoutContext';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function MainContent() {
  console.log('Re-render MainContent');

  return (
    <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {/* Some text => We don't care here */}
      <Typography sx={{ marginBottom: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      {/* Heavy Component */}
      <HeavyComponent />

      {/* What we care */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <LeftContent />
        <RightContent />
      </Box>
    </Box>
  );
}

export default MainContent;

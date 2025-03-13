import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default function Section6() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <MainContent />
    </Box>
  );
}

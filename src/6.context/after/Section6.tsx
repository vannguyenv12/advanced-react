import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useState } from 'react';
import LayoutProvider from './context/LayoutContext';

export default function Section6() {
  return (
    <LayoutProvider>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Sidebar />
        <MainContent />
      </Box>
    </LayoutProvider>
  );
}

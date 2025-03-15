import { Box } from '@mui/material';
import LayoutProvider from './context/LayoutContext';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <LayoutProvider>
      <Box sx={{ display: 'flex' }}>{children}</Box>

      <button onClick={() => setCount(count + 1)}>Increment Me</button>
    </LayoutProvider>
  );
}

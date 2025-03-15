import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const urlUser = 'http://localhost:3000/users?delay=1000';
const urlPost = 'http://localhost:3000/posts?delay=500';

function MyPanel({ value }: { value: number }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(value === 0 ? urlUser : urlPost);
      const data = await res.json();

      setData(data);

      // if (isFetched) {
      //   setData(data); // PREV: user => 1s || Next: isFetched = false;
      // }
    })();

    // return () => {
    //   isFetched = false;
    // };
  }, [value]);

  return (
    <CustomTabPanel value={value} index={value}>
      {JSON.stringify(data)}
    </CustomTabPanel>
  );
}

export default MyPanel;

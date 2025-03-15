import { Box } from '@mui/material';

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

function MyPanel({ value }: { value: number }) {
  const what = value === 0 ? 'Fetch User' : 'Fetch Post';

  return (
    <CustomTabPanel value={value} index={value}>
      {what}
    </CustomTabPanel>
  );
}

export default MyPanel;

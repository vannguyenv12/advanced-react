import { createContext, useContext, useState } from 'react';

export const LayoutContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
});

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const value = { open, setOpen };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutProvider;

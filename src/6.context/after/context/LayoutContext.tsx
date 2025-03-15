import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export const LayoutContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
});

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const setOpenCb = useCallback(
    (open: boolean) => {
      setOpen(open);
    },
    [setOpen]
  );

  const valueMemo = useMemo(() => {
    return {
      open,
      setOpen: setOpenCb,
    };
  }, [open, setOpenCb]);

  return (
    <LayoutContext.Provider value={valueMemo}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutProvider;

import { useLayoutContext } from '../context/LayoutContext';

function LeftContent() {
  const { open } = useLayoutContext();

  return <div>Left Content {open ? 'Expand Sidebar' : 'Collapse sidebar'}</div>;
}

export default LeftContent;

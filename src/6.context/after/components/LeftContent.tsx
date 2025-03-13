interface ILeftContentProps {
  open: boolean;
}

function LeftContent({ open }: ILeftContentProps) {
  return <div>Left Content {open ? 'Expand Sidebar' : 'Collapse sidebar'}</div>;
}

export default LeftContent;

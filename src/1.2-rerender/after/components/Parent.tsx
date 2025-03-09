import { useState } from 'react';
import Children from './Children';

function Parent({ content }) {
  const [open, setOpen] = useState(false);

  return content;
}

<Parent content={<Children />} />;

export default Parent;

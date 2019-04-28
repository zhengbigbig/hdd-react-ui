import React, {useState} from 'react';
import Dialog from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const onClick = () => {
    console.log(1);
    setX(!x);
  };
  return (
    <div>
      <button onClick={onClick}>click</button>
      <Dialog
        visible={x}

        title={<span>xxx</span>}
      >
        <div>xxxxxxxxxxx</div>
      </Dialog>
    </div>
  );
}

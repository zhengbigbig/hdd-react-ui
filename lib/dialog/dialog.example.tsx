import React, {useState} from 'react';
import Dialog from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setX(!x);
  };
  const onOk = () => {
    setX(false);
  };
  const onCancel = () => {
    setX(false);
  };
  return (
    <div>
      <button onClick={onClick}>click</button>
      <Dialog
        visible={x}
        title={<span>xxx</span>}
        onOk={onOk}
        // maskClosable={false}
        onCancel={onCancel}
      >

        <div>xxxxxxxxxxx</div>
      </Dialog>
    </div>
  );
}

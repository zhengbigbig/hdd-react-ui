import React, {useState} from 'react';
import Dialog, {alert, confirm} from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setX(!x);
  };
  const onOk = () => {
    setX(false);
  };
  const onCancel = () => {
    setX(false);
  };
  const onOky = () => {
    setY(false);
  };
  const onCancely = () => {
    setY(false);
  };
  return (
    <div>
      <div style={{zIndex: 9}}>
        <button onClick={onClick}>click</button>
        <Dialog
          visible={x}
          title="xxx"
          onOk={onOk}
          // maskClosable={false}
          onCancel={onCancel}
          zIndex={999}
        >
        </Dialog>
      </div>
      <div style={{zIndex: 10}}>
        <button onClick={onClick}>click</button>
        <Dialog
          visible={y}
          title={<span>yyy</span>}
          onOk={onOky}
          // maskClosable={false}
          onCancel={onCancely}
          zIndex={888}
        >
        </Dialog>
      </div>
      <button onClick={() => {
        confirm(
          {
            title: 'xxx',
            content: <button>click</button>,
            onOk: () => {
              console.log('ok');
            },
            onCancel: () => {
              console.log('cancel');
            }
          }
        );
      }}>confirm
      </button>
      <button onClick={() => {
        alert(
          {
            title: 'xxx',
            content: <button>click</button>,
            onOk: () => {
              console.log('ok');
            },
            onCancel: () => {
              console.log('cancel');
            }
          }
        );
      }}>alert
      </button>

    </div>
  );
}

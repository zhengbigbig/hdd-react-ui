import React, {useState} from 'react';
import IconExample from './icon.example';
import PreDemo from "../../demo";
import Template from '../../DemoTemplate'

const IconDemo = () => {
  const [visible, changeVisible] = useState(false);
  const openCode:React.MouseEventHandler = (e) => {
    changeVisible(true)
  }
  const closeCode:React.MouseEventHandler = (e) => {
    changeVisible(false)
  }
  return (
    <div>
      <Template
        title={<span>按钮类型</span>}
        pre={<PreDemo code={require('!!raw-loader!./icon.example.tsx').default}/>}
        text={<div>xxx</div>}
        visible={visible}
        openCode={openCode}
        closeCode={closeCode}
      >
        <IconExample/>
      </Template>

    </div>
  );
};


export default IconDemo;

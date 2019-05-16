import React from 'react';
import IconExample from './icon.example';
import PreDemo from "../../demo";

const IconDemo = () => {
  return (
      <PreDemo code={require('!!raw-loader!./icon.example.tsx').default}>
        <IconExample />
      </PreDemo>
  )
}

export default IconDemo;

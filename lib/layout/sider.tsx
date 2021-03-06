import React from 'react';
import {scopedClassMaker} from "../helpers/classes";
import './layout.less';


const addPrefix = scopedClassMaker('hdd-layout');
const ap = addPrefix;

interface AsideProps extends React.HTMLAttributes<HTMLElement> {

}

const Sider: React.FunctionComponent<AsideProps> =
  ({
     className, children, ...restProps
   }) => {
    return (
      <aside className={ap('sider', {extra: className})} {...restProps}>
        {children}
      </aside>
    );
  };

export default Sider;

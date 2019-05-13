import React, {ReactElement} from 'react';
import './layout.less';
import Sider from "./sider";
import {scopedClassMaker} from "../helpers/classes";

const addPrefix = scopedClassMaker('hdd-layout');
const ap = addPrefix;

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<LayoutProps> =
  ({
     className, children, ...restProps
   }) => {
    const childrens = children as Array<ReactElement>
    const hasSider = 'length' in childrens &&
      childrens.reduce((result, node) => result || node.type === Sider, false);
    return (
      <div className={ap({'':true,'has-sider':hasSider},{extra: className})}
           {...restProps}>
        {children}
      </div>
    );
  };
export default Layout;

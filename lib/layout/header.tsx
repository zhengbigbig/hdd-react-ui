import React from 'react';
import {scopedClassMaker} from "../helpers/classes";
import './layout.less'


const addPrefix = scopedClassMaker('hdd-layout');
const ap = addPrefix;

interface HeaderProps extends React.HTMLAttributes<HTMLElement>{

}
const Header: React.FunctionComponent<HeaderProps> =
  ({
     className,children,...restProps
   }) => {
    return (
      <header className={ap('header',{extra:className})} {...restProps}>
        {children}
      </header>
    );
  };
export default Header;

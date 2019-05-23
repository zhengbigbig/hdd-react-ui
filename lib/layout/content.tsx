import React from 'react';
import {scopedClassMaker} from "../helpers/classes";
import './layout.less';


const addPrefix = scopedClassMaker('hdd-layout');
const ap = addPrefix;

interface ContentProps extends React.HTMLAttributes<HTMLElement> {

}

const Content: React.FunctionComponent<ContentProps> =
  ({
     className, children, ...restProps
   }) => {
    return (
      <main className={ap('content', {extra: className})} {...restProps}>
        {children}
      </main>
    );
  };

export default Content;

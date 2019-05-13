import React from 'react';
import './importIcons';
import './icon.less';
import {scopedClassMaker} from '../helpers/classes';

const addPrefix = scopedClassMaker('hdd-icon');
const ap = addPrefix;

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
  ({className, name, ...restProps}) => {
    return (
      <svg className={ap('', {extra: className})}
           {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    );
  };

export default Icon;

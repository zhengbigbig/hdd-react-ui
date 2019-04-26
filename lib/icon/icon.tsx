import React from 'react';
import './importIcons';
import './icon.less';
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> =
    ({className, name, ...restProps}) => {
        return (
            <svg className={classes('hdd-icon', className)}
                 {...restProps}
            >
                <use xlinkHref={`#${name}`}/>
            </svg>
        );
    };

export default Icon;
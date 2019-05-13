import React, {Fragment} from 'react';
import './button.less';
import {scopedClassMaker} from "../helpers/classes";
import {Icon} from '../index';
// import less from 'less';

const addPrefix = scopedClassMaker('hdd-button');
const ap = addPrefix;

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  color?: string,
  size?: string,
  disabled?: boolean,
  shape?: string,
  icon?: string,
  href?: string,
  target?: string
}

const Button: React.FunctionComponent<ButtonProps> =
  ({
    className, children, color='Blue', size, disabled, shape, icon, href, target, ...restProps
   }) => {
    // console.log(less);
    // var stylesheetFile = './lib/style/color.less';
    // var link = document.createElement('link');
    // link.rel = "stylesheet";
    // link.type = "text/less";
    // link.href = stylesheetFile;
    // less.sheets.push(link);
    //
    // less.refresh();
    // less.modifyVars({
    //   '@color': color || 'MediumAquamarine',
    //   '@height': height && height.toString() || '32',
    // });
    const btnSize =
      size === 'large' ? 'lg' :
        size === 'small' ? 'sm' :
          'dt';

    return (
      <Fragment>
        {href ?
          <a href={href} target={target}>
            <button
              className={
                ap(['',color || 'Blue',
                  disabled ? 'disabled' : '',
                  shape === 'circle' ? shape : '',
                  btnSize
                ],{extra:className})}
              {...restProps} disabled={disabled || false}>
              {icon ? <Icon name="qq"/> : null}
              {children}
            </button>
          </a>
          :
          <button
            className={
              ap(['',color || 'Blue',
                disabled ? 'disabled' : '',
                shape === 'circle' ? shape : '',
                btnSize
              ],{extra:className})}
            {...restProps} disabled={disabled || false}>
            {icon ? <Icon name={icon}/> : null}
            {children}
          </button>
        }
      </Fragment>
    );
  };
//color MediumAquamarine SlateBlue Blue Green Orange LightRed Red LightGrey Grey
// Cyan  Orchid  Violet Yellow DarkSlateGray  Gold
export default Button;

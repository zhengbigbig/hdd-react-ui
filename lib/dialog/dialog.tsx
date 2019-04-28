import React, {Fragment, ReactNode} from 'react';
import handlePrefix  from '../addPrefix'
import './dialog.less';
import {Icon} from '../index';


interface DialogProps {
  visible: boolean;
  width?: string | number;
  title: string | ReactNode

}

const addPrefix = handlePrefix('hdd-dialog');
const ap = addPrefix;

const Dialog: React.FunctionComponent<DialogProps> =
  ({width, visible, children, title, ...restProps}) => {
    const dialogWidth =
      typeof width === 'string' ? width :
        typeof width === 'number' ? `${width}px` :
          '520px';
    return (
      visible ?
        <Fragment>
          <div className={ap('mask')}>
          </div>
          <div className={ap('wrap')}>
            <div className={ap('')} style={{width: dialogWidth}} {...restProps}>
              <div className={ap('content')}>
                <button className={ap('close')}>
                  <span className={ap('close-x')}>
                    <Icon name="close"/>
                  </span>

                </button>
                <div className={ap('header')}>
                  {title}
                </div>
                <div className={ap('body')}>
                  {children}
                </div>
                <div className={ap('footer')}>

                </div>
              </div>

            </div>
          </div>
        </Fragment>
        : null
    );
  };
Dialog.defaultProps = {
  width: '520px'
};
export default Dialog;

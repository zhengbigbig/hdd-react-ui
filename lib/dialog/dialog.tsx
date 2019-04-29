import React, {Fragment, ReactNode} from 'react';
import handlePrefix from '../addPrefix';
import './dialog.less';
import {Icon} from '../index';

const addPrefix = handlePrefix('hdd-dialog');
const ap = addPrefix;

interface DialogProps {
  visible: boolean;
  width?: string | number;
  title: string | ReactNode;
  footer?: null | ReactNode;
  okText?: string | ReactNode;
  cancelText?: string | ReactNode;
  onCancel: React.MouseEventHandler;
  onOk: React.MouseEventHandler;
  maskClosable?: boolean;
}

const Dialog: React.FunctionComponent<DialogProps> =
  ({
     width, visible, children, title,
     footer, okText, cancelText, onOk, onCancel, maskClosable, ...restProps
   }) => {
    const dialogWidth =
      typeof width === 'string' ? width :
        typeof width === 'number' ? `${width}px` :
          '520px';
    const onClickOpen: React.MouseEventHandler = (e) => {
      onOk(e);
    };
    const onClickClose: React.MouseEventHandler = (e) => {
      onCancel(e);
    };
    const onClickMaskClose: React.MouseEventHandler = (e) => {
      if (maskClosable) {
        onCancel(e);
      }
    };
    console.log(maskClosable);
    return (
      visible ?
        <Fragment>
          <div className={ap('mask')}>
          </div>
          <div className={ap('wrap')}  onClick={onClickMaskClose}>
            <div className={ap('')} style={{width: dialogWidth}} {...restProps}>
              <div className={ap('content')}>
                <button className={ap('close')} onClick={onClickClose}>
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
                {footer === null ? null :
                  <div className={ap('footer')}>
                    {footer ?
                      footer :
                      <Fragment>
                        <button onClick={onClickClose}>{cancelText || '取消'}</button>
                        <button style={{marginLeft: '8px'}} onClick={onClickOpen}>{okText || '确认'}</button>
                      </Fragment>
                    }
                  </div>
                }

              </div>

            </div>
          </div>
        </Fragment>
        : null
    );
  };
Dialog.defaultProps = {
  width: '520px',
  maskClosable: true
};
export default Dialog;

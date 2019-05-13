import React, {CSSProperties, Fragment, ReactFragment, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import {scopedClassMaker} from '../helpers/classes';
import './dialog.less';
import {Icon} from '../index';
import {Button} from '../index';

const addPrefix = scopedClassMaker('hdd-dialog');
const ap = addPrefix;

interface DialogProps {
  visible: boolean;
  width?: string | number;
  title?: ReactNode | string;
  footer?: null | ReactNode;
  okText?: ReactNode;
  cancelText?: ReactNode | undefined;
  onCancel: React.MouseEventHandler;
  onOk: React.MouseEventHandler;
  maskClosable?: boolean;
  zIndex?: number;
  className?: string;
  style?: CSSProperties;

}

const Dialog: React.FunctionComponent<DialogProps> =
  ({
     className, width, visible, children, title,
     footer, okText, cancelText, onOk, onCancel, maskClosable, zIndex, ...restProps
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
    const template = visible ?
      <Fragment>
        <div className={ap('mask')} onClick={onClickMaskClose}>
        </div>
        <div className={ap('wrap')}>
          <div className={ap('', {extra: className})} style={{width: dialogWidth, zIndex}} {...restProps}>
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
                    <span>
                      {cancelText === null ? null :
                        <Button color="LightGrey" onClick={onClickClose}>{cancelText || '取消'}</Button>}
                      <Button style={{marginLeft: '8px'}} onClick={onClickOpen}>{okText || '确认'}</Button>
                    </span>
                  }
                </div>
              }


            </div>

          </div>
        </div>
      </Fragment>
      : null;
    return (
      ReactDOM.createPortal(template, document.body)
    );
  };
Dialog.defaultProps = {
  width: '520px',
  maskClosable: true,
  zIndex: 1000
};


const confirm = (
  {title, content, onOk, onCancel}: {
    title: ReactNode,
    content: ReactNode,
    onOk?: () => void,
    onCancel?: () => void,
    okText?: ReactNode,
    cancelText?: ReactNode,
  }
): void => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onOk && onOk();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onCancel && onCancel();
  };
  const component =
    <Dialog
      visible={true}
      title={title}
      onOk={onYes}
      onCancel={onNo}
      maskClosable={false}
    >
      {content}

    </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};
const alert = (
  {title, content, onOk, onCancel, okText, cancelText}: {
    title: ReactNode,
    content: ReactNode | ReactFragment,
    onOk?: () => void,
    onCancel?: () => void,
    okText?: ReactNode,
    cancelText?: ReactNode,
  }
) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onOk && onOk();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    onCancel && onCancel();
  };
  const component =
    <Dialog
      visible={true}
      title={title}
      onOk={onYes}
      onCancel={onNo}
      maskClosable={false}
      cancelText={cancelText || null}
      okText={okText || '知道了'}
    >
      {content}

    </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

export {alert, confirm};
export default Dialog;

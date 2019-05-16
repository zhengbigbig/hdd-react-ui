import React, {ReactNode} from "react";
import {Icon} from "./lib";

interface TemplateProps {
  title: ReactNode;
  pre: ReactNode;
  text: ReactNode;
  visible: boolean;
  closeCode: React.MouseEventHandler;
  openCode: React.MouseEventHandler;
}

const Template: React.FunctionComponent<TemplateProps> =
  ({
    title,pre,text,visible,children,closeCode,openCode
   }) => {
    const handleCloseCode:React.MouseEventHandler = (e) => {
      closeCode(e)
    }
    const handleOpenCode:React.MouseEventHandler = (e) => {
      openCode(e)
    }
    return (
      <div className="templateCode">
        <div className="templateDemo">
          {children}
        </div>
        <div className="templateText">
          <div className="templateTitle">{title}</div>
          {text}
        </div>
        <div className="templateIcons">
          {visible ? <Icon name="closeCode" onClick={handleCloseCode}/> : <Icon name="openCode" onClick={handleOpenCode}/>}
        </div>
        {visible ?
          <div className="templatePre">
            <div className="templatePreContent">
              {pre}
            </div>
          </div> : null
        }
      </div>
    );
  };

export default Template;

import React, {useRef} from 'react';
import Affix from './affix';
import {Button} from "../index";

const AffixExample: React.FunctionComponent = () => {
  const container = useRef<HTMLDivElement>(null);
  console.log(container)
  return (
    <div style={{border:'1px solid black',width:'300px',height:'50vh',overflow:'hidden'}}>
        <div style={{width:'100%',height:'100%',overflow:'auto'}}
             ref={container}>
          <div style={{width:'100%',height:'120vh'}}>
            <div style={{background:'red',width:'100px',height:'500px'}}></div>
            <Affix
              offsetBottom={20}
              offsetTop={20}
              target={() => container.current}
            >
              <Button size="small">Affix</Button>
            </Affix>
            <div style={{background:'red',width:'100px',height:'100px'}}></div>
          </div>
        </div>
    </div>
  );
};

export default AffixExample;

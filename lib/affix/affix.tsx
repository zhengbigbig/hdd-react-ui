import React, {useEffect, useRef, useState} from 'react';
import './affix.less';
import {scopedClassMaker} from "../helpers/classes";
import getScroll, {getOffset, getTargetRect} from './getScroll';

const addPrefix = scopedClassMaker('hdd-affix');
const ap = addPrefix;

interface AffixProps extends React.HTMLAttributes<HTMLElement> {
  offsetTop?: number;
  offsetBottom?: number;
  target?: () => Window | HTMLElement | null;
}


const Affix: React.FunctionComponent<AffixProps> =
  ({
     className, style, children, offsetTop, offsetBottom, target, ...restProps
   }) => {
    const [hasNearTop, setNearTop] = useState(false);
    const [hasNearBottom, setNearBottom] = useState(false);
    const [topOffset, setTopOffset] = useState(0);
    const [elemOffset, setElemOffset] = useState({});
    const affaixDom = useRef<HTMLDivElement>(null);
    let targetNode: Window | HTMLElement | null;
    //判断是否设置了向上固定和向下固定
    const offsetMode = {
      top: false,
      bottom: false,
    };
    // Default to `offsetTop=0`.
    if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
      offsetMode.top = true;
      offsetTop = 0;
    } else {
      offsetMode.top = typeof offsetTop === 'number';
      offsetMode.bottom = typeof offsetBottom === 'number';
    }

    const handleScroll = () => {
      console.log(elemOffset);
      // if (affaixDom.current !== null) {
      //   const scrollTop = getScroll(targetNode, true);
      //   if (scrollTop > ((elemOffset.top as number) - (offsetTop as number) && offsetMode.top)) {
      //     setNearTop(true);
      //   } else {
      //     setNearTop(false);
      //   }
      //   if ((window.innerHeight - elemOffset.top) <= (offsetBottom || 0)) {
      //     setNearBottom(true);
      //   } else {
      //     setNearBottom(false);
      //   }
      // }
    };
    useEffect(() => {
      targetNode = target ? target && target() : window;
      const targetOffset = getTargetRect(targetNode).top;
      setTopOffset(targetOffset);
      function x() {
        if (affaixDom.current) {
          const elemOffset = getOffset(affaixDom.current, targetNode);
          console.log(elemOffset);
          setElemOffset({...elemOffset});
        }
      }
      x()
    }, []);
    useEffect(() => {
      targetNode && targetNode.addEventListener('scroll', handleScroll, false);
      return () => {
        targetNode && targetNode.addEventListener('scroll', handleScroll, false);
      };
    });

    const newClassName = hasNearTop || hasNearBottom ? ap('', {extra: className}) : className;
    const topOrbottom = hasNearTop ? {top: `${ (topOffset) + (offsetTop as number)}px`} :
      hasNearBottom ? {bottom: `${offsetBottom}px`} :
        {};
    const styles = Object.assign({}, topOrbottom, style);
    return (
      <div
        className={newClassName}
        ref={affaixDom}
        style={styles}
        {...restProps}
      >

        {children}
      </div>
    );
  };

export default Affix;

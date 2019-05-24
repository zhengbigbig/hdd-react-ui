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

    const elemOffset = useRef({top: 0});
    const topOffset = useRef(0);

    const hasNearTop = useRef(false);
    const hasNearBottom = useRef(false);

    const [styles, setStyles] = useState({});
    const [classNames, setClassNames] = useState('');

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
      const targetInnerHeight =
        (targetNode as Window).innerHeight || (targetNode as HTMLElement).clientHeight;
      const targetRect = getTargetRect(targetNode);
      const targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
      if (affaixDom.current !== null) {
        const scrollTop = getScroll(targetNode, true);
        // console.log(scrollTop, elemOffset.current.top - (offsetTop as number));  //{}
        if (scrollTop > (elemOffset.current.top - (offsetTop as number))) {
          hasNearTop.current = true;
          console.log(1);
        } else {
          hasNearTop.current = false;
        }
        console.log(scrollTop,elemOffset.current.top + affaixDom.current.clientHeight +
          (offsetBottom as number) - targetInnerHeight);
        if (scrollTop <
          elemOffset.current.top + affaixDom.current.clientHeight +
          (offsetBottom as number) - targetInnerHeight) {
          hasNearBottom.current = true;
        } else {
          hasNearBottom.current = false;
        }
      }
      const newStyles = Object.assign({},
        hasNearTop.current ? {top: `${ (topOffset.current) + (offsetTop as number)}px`} :
          hasNearBottom.current  ? {bottom: `${targetBottomOffet + (offsetBottom as number)}px`} :
            {}
        , style);
      setStyles(newStyles);
      const newClassNames = hasNearTop.current || hasNearBottom.current ?
        ap('', {extra: className}) : className;
      if (newClassNames) {
        setClassNames(newClassNames);
      } else {
        setClassNames('');
      }
    };
    useEffect(() => {
      targetNode = target ? target && target() : window;
      if (affaixDom.current && targetNode) {
        elemOffset.current = getOffset(affaixDom.current, targetNode);
      }
      topOffset.current = getTargetRect(targetNode).top;
      targetNode && targetNode.addEventListener('scroll', handleScroll, false);
      return () => {
        targetNode && targetNode.addEventListener('scroll', handleScroll, false);
      };
    }, []);


    return (
      <div
        className={classNames}
        ref={affaixDom}
        style={styles}
        {...restProps}
      >
        {children}
      </div>
    );
  };

export default Affix;

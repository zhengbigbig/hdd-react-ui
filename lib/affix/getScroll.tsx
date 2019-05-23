export default function getScroll(target: HTMLElement | Window | null, top: boolean): number {
  if (typeof window === 'undefined') {
    return 0;
  }

  const prop = top ? 'pageYOffset' : 'pageXOffset';
  const method = top ? 'scrollTop' : 'scrollLeft';
  const isWindow = target === window;

  let ret = isWindow ? (target as Window)[prop] : (target as HTMLElement)[method];
  // ie6,7,8 standard mode
  if (isWindow && typeof ret !== 'number') {
    ret = (document.documentElement as HTMLElement)[method];
  }

  return ret;
}

function getTargetRect(target:any): ClientRect {
  return target !== window ?
    target.getBoundingClientRect() :
    { top: 0, left: 0, bottom: 0 };
}

function getOffset(element: HTMLElement, target: HTMLElement | Window | null) {
  const elemRect = element.getBoundingClientRect();
  const targetRect = getTargetRect(target);

  const scrollTop = getScroll(target, true);
  const scrollLeft = getScroll(target, false);

  const docElem = window.document.body;
  const clientTop = docElem.clientTop || 0;
  const clientLeft = docElem.clientLeft || 0;
  return {
    top: elemRect.top - targetRect.top +
      scrollTop - clientTop,
    left: elemRect.left - targetRect.left +
      scrollLeft - clientLeft,
    width: elemRect.width,
    height: elemRect.height,
  };
}

export {getOffset,getTargetRect};

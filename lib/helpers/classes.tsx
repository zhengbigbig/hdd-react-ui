interface ClassToggles {
  [K: string]: boolean;
}

interface Options {
  extra: string | undefined;
}

const scopedClassMaker = (prefix: string) => {
  return function (name?: string | any[] | ClassToggles, options?: Options) {
    const name2 = (typeof name === 'string' || name === undefined) ? [name] :
      name instanceof Array ? Array.from(new Set(name)) :
        Object.entries(name).filter(item => item[1] !== false).map(item => item[0]);
    const result = name2.map(item =>
      [prefix, item].filter(Boolean).join('-')
    ).join(' ');
    if (options && options.extra) {
      return [result, options.extra].filter(Boolean).join(' ');
    } else {
      return result;
    }
  };
};
const classes = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ');
};

export default classes;
export {scopedClassMaker};

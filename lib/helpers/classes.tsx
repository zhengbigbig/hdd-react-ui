interface ClassToggles {
  [K: string]: boolean;
}

interface Options {
  extra: string | undefined;
}

const scopedClassMaker = (prefix: string) => {
  return function (name?: string | any[] | ClassToggles, options?: Options) {
    let name2, result;
    if (typeof name === 'string' || name === undefined) {
      name2 = name;
      result = [prefix, name2].filter(Boolean).join('-');
    } else if (name instanceof Array) {
      name2 = name.map(item =>
        [prefix, item].filter(Boolean).join('-')
      );
      result = Array.from(new Set(name2)).join(' ')
    } else {
      name2 = Object.entries(name).filter(item => item[1]).map(item => item[0]);
      result = name2.map(item => [prefix, item].filter(Boolean).join('-')).join(' ');
    }
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

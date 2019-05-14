interface ClassToggles {
  [K: string]: boolean;
}

interface Options {
  extra: string | undefined;
}

const scopedClassMaker = (prefix: string) =>
  (name?: string | any[] | ClassToggles, options?: Options) =>
    (
      (typeof name === 'string' || name === undefined) ? [name] :
        name instanceof Array ? Array.from(new Set(name)) :
          Object.entries(name)
            .filter(item => item[1] !== false)
            .map(item => item[0])
    )
      .map(item => [prefix, item].filter(Boolean).join('-'))
      .concat(options && options.extra || [])
      .join(' ');

const classes = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ');
};

export default classes;
export {scopedClassMaker};

const handlePrefix = (prefix: string) => {
  return (name?: string) => {
    return [prefix, name].filter(Boolean).join('-');
  };
};


export default handlePrefix;

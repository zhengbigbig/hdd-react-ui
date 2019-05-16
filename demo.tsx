import React from 'react';

interface Props {
  code: string;
}

const PreDemo: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.children}
      <pre>
        {props.code}
      </pre>
    </div>
  );
};

export default PreDemo;

import React, {ReactFragment} from 'react';

export interface FormValue {
  [K: string]: any
}

interface FormProps {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
}

const Form: React.FunctionComponent<FormProps> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    console.log(name, value);
    const newFormData = {...formData, [name]: value};
    props.onChange(newFormData)
  };
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map(item =>
        <div key={item.name}>
          {item.label}
          <input type={item.input.type}
                 value={formData[item.name]}
                 onChange={(e) => onInputChange(item.name, e.target.value)}
          />
        </div>
      )}
      <div>
        {props.buttons}
      </div>
    </form>
  );
};

export default Form;

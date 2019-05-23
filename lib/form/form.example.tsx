import React, {useState, Fragment} from 'react';
import Form, {FormValue} from './form';
import Validator from "./validator";

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({username: '', password: ''});
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 5,maxLength: 8},
      {key: 'username', pattern:/^[A-Za-z0-9]+$/},
    ];
    const errors = Validator(formData, rules);
    console.log(errors);
  };
  return (
    <Form
      value={formData}
      fields={fields}
      buttons={
        <Fragment>
          <button>取消</button>
          <button type="submit">提交</button>
        </Fragment>
      }
      onChange={(newValue) => setFormData(newValue)}
      onSubmit={onSubmit}
    />
  );
};

export default FormExample;

/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import SelectDesign from './SelectDesign';
import { Form, Input, Button, Select } from 'antd';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import DatepickerAndInputNum from './DatepickerAndInputNum';

const AntdDesign = () => {
  const [loginFinish, setLoginFinish] = useState();
  const [buttonOnOff, setButtonOnOff] = useState(true);
  const [signUpOnOff, setSignUpOnOff] = useState(true);
  const { Option } = Select;
  const [form] = Form.useForm();
  console.log(`form`, form);
  console.log(`loginFinish`, loginFinish);
  const onChange = (value) => {
    console.log(`onChange ${value}`);
  };
  const onSearch = (val) => {
    console.log(' Search:>> ', val);
  };
  const onSelect = (value) => {
    console.log(`Select ${value}`);
  };
  const onFinish = (values) => {
    console.log(`Success`, values);
    setLoginFinish(values);
    setButtonOnOff(false);
  };
  return (
    <Router>
      <div className='bg-blue-900 p-20 h-full py-60'>
        <h1 className='bg-blue-900 flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='60'
            fill='currentColor'
            className='bi bi-facebook text-white  '
            viewBox='0 0 16 16'
          >
            <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
          </svg>
        </h1>
        {signUpOnOff && (
          <div className='flex justify-center mt-16'>
            <Form
              hideRequiredMark
              autoComplete='off'
              name='basic'
              form={form}
              onFinish={onFinish}
              className=' w-1/4 '
            >
              <Form.Item
                className='font-bold'
                // label="Username"
                name='firstInput'
                rules={[
                  {
                    required: true,
                    message: 'Please enter username!',
                  },
                ]}
              >
                <Input placeholder='Email or phone number' />
              </Form.Item>

              <Form.Item
                className='font-bold'
                // label="Password"
                name='secondInput'
                rules={[
                  {
                    required: true,
                    message: 'Please enter Password!',
                  },
                ]}
              >
                <Input.Password placeholder='password' />
              </Form.Item>
              {buttonOnOff && (
                <Form.Item>
                  <div className='flex justify-center'>
                    <Button type='primary' onClick={() => form?.submit()}>
                      Submit
                    </Button>
                  </div>
                </Form.Item>
              )}
            </Form>
          </div>
        )}

        {loginFinish && (
          <SelectDesign
            Button={Button}
            Form={Form}
            Select={Select}
            Option={Option}
            onChange={onChange}
            onSelect={onSelect}
            onFinish={onFinish}
            onSearch={onSearch}
            form={form}
          />
        )}

        <div className='flex justify-center text-center mt-40'>
          <nav>
            <div className=''>
              <Link
                to='/DatepickerAndInputNum'
                className='text-white'
                onClick={() => setSignUpOnOff(false)}
              >
                Sign Up for Facebook
              </Link>
              <p className='text-sm text-white'>Forgot Password </p>
            </div>
          </nav>
          <Switch>
            <Route exact path='/DatepickerAndInputNum'>
              <DatepickerAndInputNum />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AntdDesign;

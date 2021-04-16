import React, { useState } from 'react';
import { DatePicker, Space, Form, InputNumber, Input } from 'antd';
import moment from 'moment';
const DatepickerAndInputNum = () => {
  const [momentDate, setMomentDate] = useState();
  console.log('momentDate :>> ', momentDate);
  const [form] = Form.useForm();
  //   const onFinish = (value) => {
  //     console.log('valueOnFinish :>> ', value);
  //   };
  const onChange = (value) => {
    console.log('onChange :>> ', value);
    setMomentDate(value);
    // console.log('moment :>> ', moment);
  };

  return (
    <div>
      <Form
        name='parentForm'
        form={form}
        //   onFinish={onFinish}
      >
        <Form.Item name='datePickerItem'>
          <Space>
            <DatePicker onChange={onChange} />
          </Space>
        </Form.Item>
        {momentDate && (
          <Form.Item name='momentFormater'>
            {moment(momentDate?._d).format('MMMM Do YYYY, h:mm:ss a')}
          </Form.Item>
        )}
        <Form.Item
          name='Age'
          label='Age'
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </div>
  );
};

export default DatepickerAndInputNum;

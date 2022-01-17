import { Button, Checkbox, Form, Input, Modal } from "antd";
import React from "react";
import "../AccauntLogin/AccauntLogin.css";

function QuestionGet() {
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  return (
    <div className="accaunt-login">
      <div className="accaunt-container">
        <span className="accaunt-title">Xabar jo'natish</span>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Username kiriting!",
              },
            ]}
          >
            <Input placeholder="Ism familiyangizni kiriting" />
          </Form.Item>

          <TextArea
            placeholder="Xabar matnini yozing"
            showCount
            maxLength={300}
            style={{ height: 87 }}
            onChange={onChange}
          />

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Xabar jo'natish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default QuestionGet;

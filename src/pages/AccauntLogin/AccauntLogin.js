import { Button, Checkbox, Form, Input, Modal } from "antd";
import React from "react";
import "./AccauntLogin.css";

function AccauntLogin() {
  return (
    <div className="accaunt-login">
      <div className="accaunt-container">
        <span className="accaunt-title">Ro'yxatdan o'tish</span>
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

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Parol kiriting!",
              },
            ]}
          >
            <Input.Password placeholder="Parolni kiriting" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Eslab qolish</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Ro'yxatdan o'tish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AccauntLogin;

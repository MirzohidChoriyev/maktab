import { Button, Card, Modal } from "antd";
import React, { useState } from "react";
import "./Notice.css";

function Notice({ noticeShow, setNoticeShow }) {
  const noticeClose = () => {
    setNoticeShow(false);
  };
  return (
    <Modal title="Bazada test joylanmagan" visible={noticeShow} footer={false}>
      <div className="notice-icon">
        <i class="fa fa-times-circle-o" aria-hidden="true"></i>
      </div>
      <Button className="notice-close" onClick={noticeClose}>
        Yopish
      </Button>
    </Modal>
  );
}

export default Notice;

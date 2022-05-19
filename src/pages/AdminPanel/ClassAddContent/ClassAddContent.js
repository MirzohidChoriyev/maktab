import React, { useState } from "react";
import AdminData from "../AdminData/AdminData";
import ClassAdd from "../ClassAdd/ClassAdd";
import ClassAddData from "./ClassAddData";

function ClassAddContent() {
    const [data_ref, setData_ref] = useState("1");

  return (
    <div>
      <ClassAdd setData_ref={setData_ref} data_ref={data_ref} />
      <ClassAddData data_ref={data_ref} setData_ref={setData_ref} />
    </div>
  );
}
export default ClassAddContent;
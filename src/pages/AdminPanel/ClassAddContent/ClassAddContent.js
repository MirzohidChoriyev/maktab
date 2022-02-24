import React, { useState } from "react";
import AdminData from "../AdminData/AdminData";
import ClassAdd from "../ClassAdd/ClassAdd";
import ClassAddData from "./ClassAddData";

function ClassAddContent() {
  const [refId, setRefId] = useState(null);
  return (
    <div>
      <ClassAdd refId = {refId} />
      <ClassAddData setRefId = {setRefId} />
    </div>
  );
}
export default ClassAddContent;
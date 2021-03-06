import React, { useState } from 'react'
import TestAdd from './TestAdd'
import "./TestAddContainer.css"
import TestAddData from './TestAddData'
import TestSelect from './TestSelect'

function TestAddContainer() {
  const [refresh, setRefresh] = useState("save");
  return (
    <div>
        <TestAdd setRefresh = {setRefresh} refresh = {refresh} />
        <TestAddData refresh = {refresh} setRefresh = {setRefresh} />   
    </div>
  )
}

export default TestAddContainer
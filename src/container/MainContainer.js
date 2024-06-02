import React from 'react'
import { Route, Routes } from 'react-router-dom';
import RecordRun from '../component/RecordRun';
import DisplayRuns from '../component/DisplayRuns';

const mainContainer = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RecordRun/>}/>
        <Route path="/display" element={<DisplayRuns/>}/>
      </Routes>

    </div> 
  )
}

export default mainContainer

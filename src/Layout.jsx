import React from "react";
import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {QrCodeGenerator} from "./components/QrCodeGenerator/QrCodeGenerator.jsx";
import {QrCodeScanner} from "./components/QrCodeScanner/QrCodeScanner.jsx";
import './components/Navigation/Navigation.module.css'
import {GenerateHistory} from "./components/GenerateHistory/GenerateHistory.jsx";
import {ScanHistory} from "./components/ScanHistory/ScanHistory.jsx";
export const Layout = () => {
  return (
     <>
       <Navigation />
       <Routes>
         <Route path='/generator' element={<QrCodeGenerator/>}  />
         <Route path='/scanner' element={<QrCodeScanner/>}/>
           <Route path='/history-generate' element={<GenerateHistory/>}/>
           <Route path='/history-scanning' element={<ScanHistory/>}/>
       </Routes>
     </>
  )
}
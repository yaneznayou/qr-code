import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Layout} from "./Layout.jsx";
import React from 'react'
import ReactDOM from 'react-dom/client';
import {QrCodeGenerator} from "./components/QrCodeGenerator/QrCodeGenerator.jsx";
import {QrCodeScanner} from "./components/QrCodeScanner/QrCodeScanner.jsx";
 import {
    BrowserRouter
} from "react-router-dom";



createRoot(document.getElementById('root')).render(
<BrowserRouter><Layout/></BrowserRouter>
)

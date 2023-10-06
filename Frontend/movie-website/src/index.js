import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"; 
import { BookmarkProvider } from './Components/BookmarkContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <BookmarkProvider>
    <App />
    </BookmarkProvider>
  </Router>
);


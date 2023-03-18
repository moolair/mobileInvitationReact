import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseProvider } from './components/firebase';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Location from './components/location';
import Gallery from './components/gallary';
import Gift from './components/gift';
import GuestBook from './components/comments/guestbook';
// import Comments from "./components/comments/comments";
import reportWebVitals from './reportWebVitals';
import { RealtimeData } from './components/comments/realtimeData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Gallery />
    <Location />
    <Gift />
    {/* <Comments currentUserId={3} /> */}
    <GuestBook />
    <FirebaseProvider>
      <RealtimeData />
    </FirebaseProvider>
    <footer class="container text-center">
      <p>YJ♡BN Mobile Invitation | 2023.04.22</p>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

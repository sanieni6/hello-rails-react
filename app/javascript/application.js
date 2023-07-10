// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/Header";
import Greetings from "./components/Greetings";

function Home() {
    return <h1>Home</h1>;
}

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greetings" element={<Greetings />} />
    </Routes>
    </>
  );
}

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
  <App/>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root'),
);
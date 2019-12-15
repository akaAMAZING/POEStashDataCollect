
import React from 'react';
import NavBar from './navbar.jsx';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// 使用 arrow function 來設計 Functional Component 讓 UI 設計更單純（f(D) => UI），減少副作用（side effect）
const MyComponent = () => pug
`
    NavBar(login)
    p Hello pug!
`

// 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<MyComponent />, document.getElementById('app'));
console.log('app run');
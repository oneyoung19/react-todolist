import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import TodoListInit from './init/TodoList'
import TodoListAntd from './antd/TodoList'
import TodoListRedux from './redux/TodoList'
import Container from './stateUp/index'
import 'antd/dist/antd.css'

ReactDOM.render(<TodoListInit />, document.getElementById('root'));
ReactDOM.render(<TodoListAntd />, document.getElementById('foot'));
ReactDOM.render(<TodoListRedux />, document.getElementById('hoot'));
// 状态提升测试
ReactDOM.render(<Container />, document.getElementById('stateUp'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

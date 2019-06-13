import React, { Component } from 'react';
import boy from './resource/boy.jpg';
import girl from './resource/girl.jpg';
import data from './data/general.json'
import One from './control/One';
import Two from './control/Two';
import Three from './control/Three';
import Four from './control/Four';

//创建一个React.Component的ES6类，该类封装了要展示的元素
//使用ES6 class来定义一个组件
//也可以使用函数定义一个组件
function App() {
  var i = 0;
  var domList = data.map(function (item) {
    i++;
    if (item.initiator == 'boy') {
      item.first = "Sage";
      item.second = "Caren";
      item.third = "Sage";
      item.fimg = boy;
      item.simg = girl;
      item.timg = boy;
    } else {
      item.first = "Caren";
      item.second = "Sage";
      item.third = "Caren";
      item.fimg = girl;
      item.simg = boy;
      item.timg = girl;
    }
    //根据对话长度返回不同DOM节点
    if (item.lw.length == 1) {
      return (
        <One item={item} i={i} />
      );
    }

    if (item.lw.length == 2) {
      return (
        <Two item={item} i={i} />
      );
    }

    if (item.lw.length == 3) {
      return (
        <Three item={item} i={i} />
      );
    }

    if (item.lw.length == 4) {
      return (
        <Four item={item} i={i} />
      );
    }

  })

  return (
    //JSX就是Javascript和XML结合的一种格式
    /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
    //this.props
    <section class="comment-list block">
      {domList}
    </section>
  );
}

export default App;

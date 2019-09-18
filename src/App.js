import React, { Component } from 'react';
import boy from './resource/boy.jpg';
import girl from './resource/girl.jpg';
import One from './control/One';
import Two from './control/Two';
import Three from './control/Three';
import Four from './control/Four';
//import { Pagination } from 'antd';

//创建一个React.Component的ES6类，该类封装了要展示的元素
//使用ES6 class来定义一个组件
//也可以使用函数定义一个组件
class App extends React.Component {
  componentWillMount() {

  }

  onChange() {

  }
  render() {
    let i = 0
    let domList = this.props.data.map(function (item) {
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


    const a = 5;
    let fp = domList.slice(0, 5);
    let pagiantion = [];
    pagiantion.push(<li class="active"><a href="#">1</a></li>);
    for (let b = 1; b < i / 5; b++) {
      pagiantion.push(<li onClick={this.onChange}><a href="#">{b + 1}</a></li>);
    }

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
        {fp}
        <div class="text-center">
          <span>{this.props.data.length}</span>
          <ul class="pagination pagination-lg">
            <li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
            {pagiantion}
            <li><a href="#"><i class="fa fa-chevron-right"></i></a></li>
          </ul>
        </div>
      </section>
    );
  }
}

export default App;

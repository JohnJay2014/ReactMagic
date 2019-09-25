import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

//props无法修改
class App extends React.Component {
  constructor(props) {
    super(props);
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
    this.onChange = this.onChange.bind(this);
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);

    let pagination = [];
    let active = "active";
    let j = 1;
    pagination.push(<li id={j} onClick={this.onChange} className={active}><a href="#">1</a></li>);
    for (let b = 1; b < i / 5; b++) {
      pagination.push(<li id={b + 1} onClick={this.onChange}><a href="#">{b + 1}</a></li>);
    }
    this.state = {
      cp: domList.slice(0, 5),
      pagination: pagination,
      baba: domList,
      selected: j,
      max: Math.ceil(i / 5)
    };

  }
  componentWillMount() {

  }
  onChange(e) {
    //ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    let j = e.currentTarget.innerText;
    e.currentTarget.className = "active";
    document.getElementById(this.state.selected).className = "";
    this.setState({ selected: parseInt(j) });
    this.setState({ cp: this.state.baba.slice((j - 1) * 5, j * 5) });
    document.getElementById("bjax-target").scrollTo(0, 0);
  }
  onLeft(e) {
    let j = this.state.selected - 1;
    if (j != 0) {
      document.getElementById(this.state.selected).className = "";
      document.getElementById(this.state.selected - 1).className = "active";
      this.setState({ selected: j });
      this.setState({ cp: this.state.baba.slice((j - 1) * 5, j * 5) });
      document.getElementById("bjax-target").scrollTo(0, 0);
    }
  }
  onRight(e) {
    let k = this.state.selected + 1;
    if (k <= this.state.max) {

      document.getElementById(this.state.selected).className = "";
      document.getElementById(this.state.selected + 1).className = "active";
      this.setState({ selected: k });
      this.setState({ cp: this.state.baba.slice((k - 1) * 5, k * 5) });
      document.getElementById("bjax-target").scrollTo(0, 0);
    }
  }
  render() {
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
        <div id="right-content">{this.state.cp}
        </div>
        <div class="text-center">
          <ul class="pagination pagination-lg">
            <li><a onClick={this.onLeft}><i class="fa fa-chevron-left"></i></a></li>
            {this.state.pagination}
            <li><a onClick={this.onRight}><i class="fa fa-chevron-right"></i></a></li>
          </ul>
          <span class="m-b-xs h3 block">{this.props.data.length}</span>

        </div>
      </section>
    );
  }
}

export default App;

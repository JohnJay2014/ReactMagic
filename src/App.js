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

    //为事件处理函数绑定实例
    this.onChange = this.onChange.bind(this);
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);

    let i = 0
    let domList = props.data.map(item => {
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
      switch (item.lw.length) {
        case 1:
          return (
            <One item={item} i={i} />
          );
        case 2:
          return (
            <Two item={item} i={i} />
          );
        case 3:
          return (
            <Three item={item} i={i} />
          );
        case 4:
          return (
            <Four item={item} i={i} />
          );
        default:
          return (
            <span>长度不支持</span>
          );
      }
    })

    let pagination = [];
    let j = 1;
    //给每个li加id存在疑问
    pagination.push(<li id={j} onClick={this.onChange} className="active"><span>1</span></li>);
    for (let b = 1; b < i / 5; b++) {
      pagination.push(<li id={b + 1} onClick={this.onChange}><span>{b + 1}</span></li>);
    }

    //初始化内部state
    this.state = {
      baba: domList,
      cp: domList.slice(0, 5),
      pagination: pagination,
      max: Math.ceil(i / 5),
      selected: j
    };
  }

  componentWillMount() {

  }

  onChange(e) {
    e.currentTarget.className = "active";
    let j = e.currentTarget.innerText;
    this.setState({ selected: parseInt(j) });
    this.setState({ cp: this.state.baba.slice((j - 1) * 5, j * 5) });
    document.getElementById(this.state.selected).className = "";
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
      /*
        setState不总是立即更新组件，会批量推迟更新，所以避免在调用之后立即读取this.state
      */
      document.getElementById(this.state.selected + 1).className = "active";
      this.setState({ selected: k });
      this.setState({ cp: this.state.baba.slice((k - 1) * 5, k * 5) });
      document.getElementById("bjax-target").scrollTo(0, 0);
    }
  }

  render() {
    return (
      //JSX就是Javascript和XML结合的一种格式
      <div>
        <div class="m-b-lg text-center">
          <p>
            <span class="label bg-light">label</span>
            <span class="label bg-primary">夸奖</span>
            <span class="label bg-success">邀约</span>
            <span class="label bg-info">Info</span>
            <span class="label bg-dark">dark</span>
            <span class="label bg-warning">Warning</span>
            <span class="label bg-danger">Danger</span>
          </p>
          <p class="m-b-none">
            <span class="badge">15</span>
            <span class="badge bg-primary">15</span>
            <span class="badge bg-success">20</span>
            <span class="badge bg-info">21</span>
            <span class="badge bg-dark">13</span>
            <span class="badge bg-warning">35</span>
            <span class="badge bg-danger">32</span>
          </p>
        </div>
        <section class="comment-list block">
          <div id="right-content">{this.state.cp}
          </div>
          <div class="text-center">
            <ul class="pagination pagination-lg">
              <li><span onClick={this.onLeft}><i class="fa fa-chevron-left"></i></span></li>
              {this.state.pagination}
              <li><span onClick={this.onRight}><i class="fa fa-chevron-right"></i></span></li>
            </ul>
            <span class="m-b-xs h3 block">{"总计" + this.props.data.length}</span>
          </div>
        </section>
      </div>

    );
  }
}

export default App;

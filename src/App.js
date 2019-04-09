import React, { Component } from 'react';
import boy from './boy.jpg';
import girl from './girl.jpg';
import data from './general.json'
import One from './One';


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
    //根据对话长度智能返回节点
    if (item.lw.length == 3) {
      return (
        <section id={"con" + i}>
          <article class="comment-item">
            <a class="pull-left thumb-sm">
              <img src={item.fimg} class="img-circle" />
            </a>
            <section class="comment-body m-b">
              <header>
                <a href="#"><strong>{item.first}</strong></a>
                <label class="label bg-info m-l-xs">{item.tag}</label>
                <span class="text-muted text-xs block m-t-xs">
                  发起者
                </span>
              </header>
              <div class="m-t-sm">{item.lw[0]}</div>
            </section>
          </article>
          <article class="comment-item comment-reply">
            <a class="pull-left thumb-sm">
              <img src={item.simg} class="img-circle" />
            </a>
            <section class="comment-body m-b">
              <header>
                <a href="#"><strong>{item.second}</strong></a>
                <label class="label bg-dark m-l-xs"></label>
                <span class="text-muted text-xs block m-t-xs">
                </span>
              </header>
              <div class="m-t-sm">{item.lw[1]}</div>
            </section>
          </article>
          <article class="comment-item comment-reply">
            <a class="pull-left thumb-sm">
              <img src={item.timg} class="img-circle" />
            </a>
            <section class="comment-body m-b">
              <header>
                <a href="#"><strong>{item.third}</strong></a>
                <label class="label bg-dark m-l-xs"></label>
                <span class="text-muted text-xs block m-t-xs">
                </span>
              </header>
              <div class="m-t-sm">{item.lw[2]}</div>
            </section>
          </article>
        </section>
      );
    }

    if (item.lw.length == 4) {
      return (
        <section id={"con" + i}>
          <article class="comment-item">
            <a class="pull-left thumb-sm">
              <img src={item.fimg} class="img-circle" />
            </a>
            <section class="comment-body m-b">
              <header>
                <a href="#"><strong>{item.first}</strong></a>
                <label class="label bg-info m-l-xs">{item.tag}</label>
                <span class="text-muted text-xs block m-t-xs">
                  发起者
                </span>
              </header>
              <div class="m-t-sm">{item.lw[0]}</div>
            </section>
          </article>
          <article class="comment-item comment-reply">
            <a class="pull-left thumb-sm">
              <img src={item.simg} class="img-circle" />
            </a>
            <section class="comment-body m-b">
              <header>
                <a href="#"><strong>{item.second}</strong></a>
                <label class="label bg-dark m-l-xs"></label>
                <span class="text-muted text-xs block m-t-xs">
                </span>
              </header>
              <div class="m-t-sm">{item.lw[1]}</div>
            </section>
          </article>
          <article class="comment-item comment-reply">
            <a class="pull-left thumb-sm">
              <img src={item.timg} class="img-circle" />
            </a>
            <section class="comment-body m-b">
              <header>
                <a href="#"><strong>{item.third}</strong></a>
                <label class="label bg-dark m-l-xs"></label>
                <span class="text-muted text-xs block m-t-xs">
                </span>
              </header>
              <div class="m-t-sm">{item.lw[2]}</div>
            </section>
          </article>
          <article class="comment-item comment-reply">
            <a class="pull-left thumb-sm">
              <img src={item.simg} class="img-circle" />
            </a>
            <section class="comment-body m-b">
              <header>
                <a href="#"><strong>{item.second}</strong></a>
                <label class="label bg-dark m-l-xs"></label>
                <span class="text-muted text-xs block m-t-xs">
                </span>
              </header>
              <div class="m-t-sm">{item.lw[3]}</div>
            </section>
          </article>
        </section>
      );
    }
    if (item.lw.length == 1) {
      return (
        <One item={item} i={i}/>
      );
    }

    if (item.lw.length == 2) {
      return (
        <section id={"con" + i}>
          <article class="comment-item">
            <a class="pull-left thumb-sm">
              <img src={item.fimg} class="img-circle" />
            </a>
            <section class="comment-body m-b">
              <header>
                <a href="#"><strong>{item.first}</strong></a>
                <label class="label bg-info m-l-xs">{item.tag}</label>
                <span class="text-muted text-xs block m-t-xs">
                  发起者
                      </span>
              </header>
              <div class="m-t-sm">{item.lw[0]}</div>
            </section>
          </article>
          <article class="comment-item comment-reply">
            <a class="pull-left thumb-sm">
              <img src={item.simg} class="img-circle" />
            </a>
            <section class="comment-body m-b">
              <header>
                <a href="#"><strong>{item.second}</strong></a>
                <label class="label bg-dark m-l-xs"></label>
                <span class="text-muted text-xs block m-t-xs">
                </span>
              </header>
              <div class="m-t-sm">{item.lw[1]}</div>
            </section>
          </article>
        </section>
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

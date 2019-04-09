import React from 'react';
import boy from './boy.jpg';
import girl from './girl.jpg';
import data from './dhv.json'

function DHV(props) {
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
        if (item.lw.length == 2) {
            return (
                <section class="chat-list panel-body">
                    <article id={"chat-id-" + i} class="chat-item left">
                        <a href="#" class="pull-left thumb-sm avatar"><img src={item.fimg} alt="..." /></a>
                        <section class="chat-body">
                            <div class="panel b-light text-sm m-b-none">
                                <div class="panel-body">
                                    <span class="arrow left"></span>
                                    <p class="m-b-none">{item.lw[0]}</p>
                                </div>
                            </div>
                            <small class="text-muted"><i class="fa fa-ok text-success"></i>{item.jx[0]}</small>
                        </section>
                    </article>
                    <article id="chat-id-2" class="chat-item right">
                        <a href="#" class="pull-right thumb-sm avatar"><img src={item.simg} class="img-circle" alt="..." /></a>
                        <section class="chat-body">
                            <div class="panel bg-light text-sm m-b-none">
                                <div class="panel-body">
                                    <span class="arrow right"></span>
                                    <p class="m-b-none">{item.lw[1]}</p>
                                </div>
                            </div>
                            <small class="text-muted">{item.jx[1]}</small>
                        </section>
                    </article>
                </section>
            );
        } else if (item.lw.length == 3) {
            return (
                <section class="chat-list panel-body">
                    <article id={"chat-id-" + i} class="chat-item left">
                        <a href="#" class="pull-left thumb-sm avatar"><img src={item.fimg} alt="..." /></a>
                        <section class="chat-body">
                            <div class="panel b-light text-sm m-b-none">
                                <div class="panel-body">
                                    <span class="arrow left"></span>
                                    <p class="m-b-none">{item.lw[0]}</p>
                                </div>
                            </div>
                            <small class="text-muted"><i class="fa fa-ok text-success"></i>{item.jx[0]}</small>
                        </section>
                    </article>
                    <article id="chat-id-2" class="chat-item right">
                        <a href="#" class="pull-right thumb-sm avatar"><img src={item.simg} class="img-circle" alt="..." /></a>
                        <section class="chat-body">
                            <div class="panel bg-light text-sm m-b-none">
                                <div class="panel-body">
                                    <span class="arrow right"></span>
                                    <p class="m-b-none">{item.lw[1]}</p>
                                </div>
                            </div>
                            <small class="text-muted">{item.jx[1]}</small>
                        </section>
                    </article>
                    <article id={"chat-id-" + i} class="chat-item left">
                        <a href="#" class="pull-left thumb-sm avatar"><img src={item.fimg} alt="..." /></a>
                        <section class="chat-body">
                            <div class="panel b-light text-sm m-b-none">
                                <div class="panel-body">
                                    <span class="arrow left"></span>
                                    <p class="m-b-none">{item.lw[2]}</p>
                                </div>
                            </div>
                            <small class="text-muted"><i class="fa fa-ok text-success"></i>{item.jx[2]}</small>
                        </section>
                    </article>
                </section>
            );
        }

    });
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

export default DHV;

import React, { Component } from 'react';
import boy from './resource/boy.jpg';
import girl from './resource/girl.jpg';
import feiwuceshi from './data/feiwuceshi.json'

//创建一个React.Component的ES6类，该类封装了要展示的元素
//使用ES6 class来定义一个组件
//也可以使用函数定义一个组件+------------------------------------------
function Widgets(props) {
    let i = 0;
    var domList = feiwuceshi.map(function (item) {
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
                        <a href="#" class="pull-left thumb-sm avatar"><img src={girl} alt="..." /></a>
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
                        <a href="#" class="pull-right thumb-sm avatar"><img src={boy} class="img-circle" alt="..." /></a>
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
        }
    });
    return (
        //JSX就是Javascript和XML结合的一种格式
        //this.props
        <section class="panel panel-default">
            <header class="panel-heading">废物测试</header>
            {domList}
        </section>
    );
}

export default Widgets;

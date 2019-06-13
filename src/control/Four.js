import React, { Component } from 'react';

class Four extends React.Component {
    render() {
        const item = this.props.item;
        const i = i;
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
}

export default Four;

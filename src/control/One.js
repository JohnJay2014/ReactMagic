import React, { Component } from 'react';

class One extends React.Component {
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
                  <label class="label bg-dark m-l-xs">{item.tag}</label>
                  <span class="text-muted text-xs block m-t-xs">
                    发起者
                </span>
                </header>
                <blockquote class="m-t">
                  <p>{item.lw[0]}</p>
                  <small>{item.reason}</small>
                </blockquote>
                <div class="m-t-sm">{item.goal}</div>
              </section>
            </article>
          </section>
        );
    }
}

export default One;

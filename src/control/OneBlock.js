import React, { Component } from 'react';

class OneBlock extends React.Component {
    render() {
        const item = this.props.item;
        const i = this.props.i;
        return (
            <section id={"con" + i}>
                <article id="comment" class="comment-item">
                    <a class="pull-left thumb-sm avatar"><img src={item.fimg} alt="..." /></a>
                    <span class="arrow left"></span>
                    <section class="comment-body panel panel-default">
                        <header class="panel-heading">
                            <a href="#">Peter</a>
                            <label class="label bg-success m-l-xs">{item.tag}</label>
                            <span class="text-muted m-l-sm pull-right">
                                <i class="fa"></i>
                            </span>
                        </header>
                        <div class="panel-body">
                            <blockquote>
                                <p>{item.lw[0]}</p>
                            </blockquote>
                            <div>{item.goal}</div>
                            <div class="comment-action m-t-sm">

                            </div>
                        </div>
                    </section>
                </article>
            </section>
        );
    }
}

export default OneBlock;

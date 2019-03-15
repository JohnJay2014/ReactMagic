import React from 'react';
import boy from './boy.jpg';
import girl from './girl.jpg';
import data from './yuqi.json';


function Yuqi() {
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
        if (item.lw.length == 1) {
            return (
                <article id="comment-id-4" class="comment-item">
                    <a class="pull-left thumb-sm avatar"><img src={item.fimg} alt="..." /></a>
                    <span class="arrow left"></span>
                    <section class="comment-body panel panel-default">
                        <header class="panel-heading">
                            <a href="#">Peter</a>
                            <label class="label bg-primary m-l-xs">{item.tag}</label>
                            <span class="text-muted m-l-sm pull-right">
                                <i class="fa fa-clock-o"></i>
                            </span>
                        </header>
                        <div class="panel-body">
                            <blockquote>
                                <p>{item.lw[0]}</p>
                            </blockquote>
                            <div></div>
                            <div class="comment-action m-t-sm">

                            </div>
                        </div>
                    </section>
                </article>
            );
        }

    });
    return (
        <section class="comment-list block">
            {domList}
        </section>
    );
}

export default Yuqi;

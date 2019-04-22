import React from 'react';
import boy from './boy.jpg';
import girl from './girl.jpg';
import data from './yuqi.json';
import OneBlock from './OneBlock';


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
                <OneBlock item={item} i={i}/>
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

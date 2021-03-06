import React from 'react';
import boy from './resource/boy.jpg';
import girl from './resource/girl.jpg';
import OneBlock from './control/OneBlock';

class Yuqi extends React.Component {
    render() {
        let i = 0;
        let domList = this.props.data.map(item => {
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
                    <OneBlock item={item} i={i} />
                );
            }

        });
        return (
            <section class="comment-list block">
                {domList}
            </section>
        );
    }
}

export default Yuqi;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DHV from './dhv';
import Yuqi from './yuqi';
import Feiwuceshi from './feiwuceshi';
import store from './Store';
import { Provider, connect } from "react-redux"

console.log(store.getState());

class List extends React.Component {
    componentWillMount() {
        ReactDOM.render(<App data={store.getState()} />, document.getElementById('root'));
    }
    addIndex() {
        store.dispatch({ type: "" });
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        ReactDOM.render(<App data={store.getState()} />, document.getElementById('root'));
        document.getElementById("nav").classList.remove("nav-off-screen");
    }
    addFeiwuTest() {
        store.dispatch({ type: "feiwu" });
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        ReactDOM.render(<Feiwuceshi feiwuceshi={store.getState()} />, document.getElementById('root'));
        document.getElementById("nav").classList.remove("nav-off-screen");
    }
    addYuqi() {
        store.dispatch({ type: "yuqi" });
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        ReactDOM.render(<Yuqi />, document.getElementById('root'));
        document.getElementById("nav").classList.remove("nav-off-screen");
    }
    addDHV() {
        store.dispatch({ type: "dhv" });
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        ReactDOM.render(<DHV />, document.getElementById('root'));
        document.getElementById("nav").classList.remove("nav-off-screen");
    }
    render() {
        return (
            <nav class="nav-primary hidden-xs">
                <ul class="nav bg clearfix">
                    <li class="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                        分类
                        </li>
                    <li>
                        <a onClick={this.addIndex}>
                            <i class="icon-disc icon text-success"></i>
                            <span class="font-bold">首页</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={this.addFeiwuTest}>
                            <i class="icon-drawer icon text-primary-lter"></i>
                            <b class="badge bg-primary pull-right"></b>
                            <span class="font-bold">废测</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={this.addYuqi}>
                            <i class="icon-fire icon text-primary-lter"></i>
                            <b class="badge bg-primary pull-right"></b>
                            <span class="font-bold">预期</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={this.addDHV}>
                            <i class="icon-diamond icon text-primary-lter"></i>
                            <b class="badge bg-primary pull-right"></b>
                            <span class="font-bold">高价值</span>
                        </a>
                    </li>
                    <li class="m-b hidden-nav-xs"></li>
                </ul>
                <ul class="nav" data-ride="collapse">
                </ul>
            </nav >
        );
    }
}

export default List;
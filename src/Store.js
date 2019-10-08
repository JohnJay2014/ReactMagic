import { createStore } from 'redux';
import data from './data/general.json';
import feiwuceshi from './data/feiwuceshi.json'
import yuqi from './data/yuqi.json'
import dhv from './data/dhv.json'
import Jinnuo from './data/jinnuo.json';

//reducer不能有异步操作
const reducer = (state = data, action) => {
    switch (action.type) {
        case "feiwu":
            return feiwuceshi;
        case "yuqi":
            return yuqi;
        case "dhv":
            return dhv;
        case "jinnuo":
            return Jinnuo;
        default:
            return data;
    }
}

const store = createStore(reducer);

export default store;
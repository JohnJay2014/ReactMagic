import { createStore } from 'redux';
import data from './data/general.json';
import feiwuceshi from './data/feiwuceshi.json'
import yuqi from './data/yuqi.json'
import dhv from './data/dhv.json'

//reducer不能有异步操作
const reducer = (state = data, action) => {
    switch (action.type) {
        case "feiwu":
            return feiwuceshi;
        case "yuqi":
            return yuqi;
        case "dhv":
            return dhv;
        default:
            return data;
    }
}

const store = createStore(reducer);

export default store;
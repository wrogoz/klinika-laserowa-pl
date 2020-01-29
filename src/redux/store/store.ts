import { createStore } from 'redux';
import reducer from '../reducers/mainReducer';




export default ()=>{
    const mystore = createStore(reducer);
    return mystore;
}

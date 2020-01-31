import { createStore } from 'redux';
import reducer from '../reducers/mainReducer';




export default ()=>{
    const mystore = createStore(
        reducer,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      );
    return mystore;
}

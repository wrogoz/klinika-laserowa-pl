
const initialState = {
    randomData:'dziala'

 }

const reducer = (state = initialState, action: { type: string })=> {
    switch (action.type) {
      case 'INCREMENT':
        return state
      case 'DECREMENT':
        return state
      default:
        return state
    }
  }

  export default reducer;
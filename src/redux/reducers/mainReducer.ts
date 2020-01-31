
const initialState = {
    randomData:'moj store zadziałał'

 }

const reducer = (state = initialState, action: { type: string })=> {
    switch (action.type) {
      case 'CHANGEVALUE':
        return {
          ...state,
          randomData:"Value Changed to Main Page"
        }
      case 'DECREMENT':
        return state
      default:
        return state
    }
  }

  export default reducer;
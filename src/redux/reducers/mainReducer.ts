
const initialState = {
  Indications:['moj store zadziałał','2 razy'],
  ContraIndications:[
    'ciąża','świeża opalenizna',' spożywanie naparu z dziurawca i nagietka - należy je odstawić na 3 tygodnie przed zabiegiem',
 'bielactwo', 'łuszczyca','skłonność do bliznowców','nowotwory skóry',
 'otwarte rany','okolice tatuażu i permanentnego tatuażu',
 'przyjmowanie leków światłouczulających i leków psychotropowych'
  ]

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

const initialState = {
  BurgerNavVisible:false,
  SignInVisible:false,
  Indications:[
    'trądzik różowaty',
     'pajączki',
     'rumień',
     'zmiany naczyniowe w nogach',
     'naczyniaki',
     'znamiona',
     'rozproszone zmiany naczyniowe',
     'rozproszone zmiany barwnikowe, takie jak plamy posłoneczne',
     'blizny będące konsekwencją przebytych urazów lub wykonanych zabiegów chirurgicznych'
   ],
  ContraIndications:[
    'ciąża','świeża opalenizna',' spożywanie naparu z dziurawca i nagietka - należy je odstawić na 3 tygodnie przed zabiegiem',
 'bielactwo', 'łuszczyca','skłonność do bliznowców','nowotwory skóry',
 'otwarte rany','okolice tatuażu i permanentnego tatuażu',
 'przyjmowanie leków światłouczulających i leków psychotropowych'
  ]

 }

const reducer = (state = initialState, action: { type: string })=> {
    switch (action.type) {
      case 'BURGERNAVSHOWHIDE':
        return {
          ...state,
          BurgerNavVisible:!state.BurgerNavVisible
        }
      case 'SIGNINWINDOWSHOWHIDE':
        return {
          ...state,
          SignInVisible : !state.SignInVisible
        }
      default:
        return state
    }
  }

  export default reducer;
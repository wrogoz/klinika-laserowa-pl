
const initialState = {
  BurgerNavVisible:false,
  SignInVisible:false,
  WindowWidth:window.innerWidth,
  LaserTypes:[
    'Cutera Excel V',
    'Smart M EVLT',
    'Laser CO2',
    'OPTOSLT M',

  ],
  CuteraIndications:[
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
  CuteraContraIndications:[
    'ciąża','świeża opalenizna',' spożywanie naparu z dziurawca i nagietka - należy je odstawić na 3 tygodnie przed zabiegiem',
 'bielactwo', 'łuszczyca','skłonność do bliznowców','nowotwory skóry',
 'otwarte rany','okolice tatuażu i permanentnego tatuażu',
 'przyjmowanie leków światłouczulających i leków psychotropowych'
  ]

 }

const reducer = (state = initialState, action: { type: string,width:number })=> {
    switch (action.type) {
      case 'BURGERNAVSHOWHIDE':
        return {
          ...state,
          BurgerNavVisible:!state.BurgerNavVisible
        }
        case 'HIDEMENU':
        return {
          ...state,
          BurgerNavVisible:false
        }
      case 'SIGNINWINDOWSHOWHIDE':
        return {
          ...state,
          SignInVisible : !state.SignInVisible
        }
      case 'CHANGEWINDOWWIDTH':
        return{
          ...state,
          WindowWidth:action.width
        }
      default:
        return state
    }
  }

  export default reducer;
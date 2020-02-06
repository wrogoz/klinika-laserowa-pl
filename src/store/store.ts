
import { observable } from "mobx";
class Store {
  @observable BurgerNavVisible:boolean=false
  @observable Indications=[
   'trądzik różowaty',
    'pajączki',
    'rumień',
    'zmiany naczyniowe w nogach',
    'naczyniaki',
    'znamiona',
    'rozproszone zmiany naczyniowe',
    'rozproszone zmiany barwnikowe, takie jak plamy posłoneczne',
    'blizny będące konsekwencją przebytych urazów lub wykonanych zabiegów chirurgicznych'
  ]

  @observable ContraIndications=[
                                'ciąża','świeża opalenizna',' spożywanie naparu z dziurawca i nagietka - należy je odstawić na 3 tygodnie przed zabiegiem',
                                'bielactwo', 'łuszczyca','skłonność do bliznowców','nowotwory skóry',
                                'otwarte rany','okolice tatuażu i permanentnego tatuażu',
                                'przyjmowanie leków światłouczulających i leków psychotropowych'
  ]
}

const store = new Store();
export default store;

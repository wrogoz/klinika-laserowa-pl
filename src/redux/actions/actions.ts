export const BurgerShowHide = ()=>{
    return {
        type:'BURGERNAVSHOWHIDE'
    }
}
export const HideMenu = ()=>{
    return {
        type:'HIDEMENU'
    }
}
export const SignInShowHide = ()=>{
    return {
        type:'SIGNINWINDOWSHOWHIDE'
    }
}
export const ChangingWindowWidth = (width:number )=>{
    return {
        type:'CHANGEWINDOWWIDTH',
        width
    }
}
const initState = {
    themeId: 1,
}
type StateType={
    themeId: number
}
type ActionType={
    type: string
    id:number
}

export const themeReducer = (state = initState, action:ActionType):StateType  => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {themeId:action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any

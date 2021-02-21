const IS_AUTHENTICATED = 'IS_AUTHENTICATED'
export default (state, action) => {
    switch (action.type) {
        case 'IS_AUTHENTICATED':
            return {
                ...state,
                isAuth: action.payload
            }
            break
        default:
            break
    }
}
import { types } from "../types/types";
 
const initialState = {
    english: false,
    msgError: null
}

export const uiReducer = (state = initialState, action ) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
            
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }

        case types.englishLanguage:
            return {
                ...state,
                english: true
            }
        
        case types.spanishLanguage:
            return {
                ...state,
                english: false
            }
    
        default:
            return state;
    }
}
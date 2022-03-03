import { types } from "../types/types";

export const setError = (error) => {
    return {
        type: types.uiSetError,
        payload: error
    }
}

export const removeError = () => {
    return {
        type: types.uiRemoveError,
    }
}

export const englishLanguage = () => {
    return {
        type :types.englishLanguage
    }
}

export const spanishLanguage = () => {
    return {
        type :types.spanishLanguage
    }
}
import * as actionTypeCodes from '../Action/actionTypeCode';
import { updatedObject } from '../../Utility/Utility';

const initialState = {
    allMatch: [],
    singleMatch: null,
    loading: false,
    error: null
};


export const matchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypeCodes.FETCH_SINGLE_START: return updatedObject(state, { singleMatch: null, loading: true });
        case actionTypeCodes.FETCH_SINGLE_SUCCESS: return updatedObject(state, { singleMatch: action.singleMatch, loading: false });
        case actionTypeCodes.FETCH_SINGLE_FAIL: return updatedObject(state, { loading: false, error: action.error });
        case actionTypeCodes.RESET_FETCH_SINGLE: return updatedObject(state, { loading: false, error: null, singleMatch: null });

        case actionTypeCodes.FETCH_YEARWISE_START: return updatedObject(state, { allMatch: [], loading: true });
        case actionTypeCodes.FETCH_YEARWISE_SUCCESS: return updatedObject(state, { allMatch: action.allMatch, loading: false });
        case actionTypeCodes.FETCH_YEARWISE_FAIL: return updatedObject(state, { loading: false, error: action.error });
        case actionTypeCodes.RESET_FETCH_YEARWISE: return updatedObject(state, { loading: false, error: null, allMatch: [] });

        case actionTypeCodes.FETCH_ALL_START: return updatedObject(state, { allMatch: [], loading: true });
        case actionTypeCodes.FETCH_ALL_SUCCESS: return updatedObject(state, { allMatch: action.allMatch, loading: false });
        case actionTypeCodes.FETCH_ALL_FAIL: return updatedObject(state, { loading: false, error: action.error });
        case actionTypeCodes.RESET_FETCH_ALL: return updatedObject(state, { loading: false, error: null, allMatch: [] });
        default: return state;
    };
};

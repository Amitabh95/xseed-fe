import { toastr } from 'react-redux-toastr';
import * as actionTypeCodes from './actionTypeCode';
import axiosInstance from '../../Utility/axiosInstance';

const fetchSingleStart = () => {
    return {
        type: actionTypeCodes.FETCH_SINGLE_START
    };
};

const fetchSingleSuccess = (data) => {
    return {
        type: actionTypeCodes.FETCH_SINGLE_SUCCESS,
        singleMatch: data
    };
};

const fetchSingleFail = (error) => {
    return {
        type: actionTypeCodes.FETCH_SINGLE_FAIL,
        error
    };
};

export const fetchSingle = (id) => {
    return dispatch => {
        dispatch(fetchSingleStart());
        axiosInstance().get('singlematchdata/' + id)
            .then((response) => {
                if (!response.data.error) {
                    dispatch(fetchSingleSuccess(response.data.payload));
                    toastr.success('Success', 'Successfully fetched match data');
                } else {
                    toastr.error('Error', 'Failed to fetched match data');
                    dispatch(fetchSingleFail(response.data.message))
                    // toastr.error('Failed to add new book', response.data.message);
                }
            })
            .catch((error) => {
                if (error.response.data.error) {
                    toastr.error('Error', error.response.data.message);
                    dispatch(fetchSingleFail(error.response.data.error));
                } else {
                    toastr.error('Error', error);
                    dispatch(fetchSingleFail(error));
                }
            });
    }
}

export const resetFetchSingle = () => {
    return {
        type: actionTypeCodes.RESET_FETCH_SINGLE
    };
}

const fetchYearwiseStart = () => {
    return {
        type: actionTypeCodes.FETCH_YEARWISE_START
    };
};

const fetchYearwiseSuccess = (data) => {
    return {
        type: actionTypeCodes.FETCH_YEARWISE_SUCCESS,
        allMatch: data
    };
};

const fetchYearwiseFail = (error) => {
    return {
        type: actionTypeCodes.FETCH_YEARWISE_FAIL,
        error
    };
};

export const fetchYearwise = (year) => {
    return dispatch => {
        dispatch(fetchYearwiseStart());
        axiosInstance().post('matchdatabyyear', { year })
            .then((response) => {
                if (!response.data.error) {
                    dispatch(fetchYearwiseSuccess(response.data.payload));
                    toastr.success('Success', 'Successfully fetched match data');
                } else {
                    toastr.error('Error', 'Failed to fetched match data');
                    dispatch(fetchYearwiseFail(response.data.message))
                    // toastr.error('Failed to add new book', response.data.message);
                }
            })
            .catch((error) => {
                if (error.response.data.error) {
                    toastr.error('Error', error.response.data.message);
                    dispatch(fetchYearwiseFail(error.response.data.error));
                } else {
                    toastr.error('Error', error);
                    dispatch(fetchYearwiseFail(error));
                }
            });
    }
}

export const resetFetchYearwise = () => {
    return {
        type: actionTypeCodes.RESET_FETCH_YEARWISE
    };
}


const fetchAllStart = () => {
    return {
        type: actionTypeCodes.FETCH_ALL_START
    };
};

const fetchAllSuccess = (data) => {
    return {
        type: actionTypeCodes.FETCH_ALL_SUCCESS,
        allMatch: data
    };
};

const fetchAllFail = (error) => {
    return {
        type: actionTypeCodes.FETCH_ALL_FAIL,
        error
    };
};

export const fetchAll = () => {
    return dispatch => {
        dispatch(fetchAllStart());
        axiosInstance().get('allmatchdata')
            .then((response) => {
                if (!response.data.error) {
                    dispatch(fetchAllSuccess(response.data.payload));
                    toastr.success('Success', 'Successfully fetched all match data');
                } else {
                    toastr.error('Error', 'Failed to fetch all match data');
                    dispatch(fetchAllFail(response.data.message))
                    // toastr.error('Failed to add new book', response.data.message);
                }
            })
            .catch((error) => {
                if (error.response.data.error) {
                    toastr.error('Error', error.response.data.message);
                    dispatch(fetchAllFail(error.response.data.error));
                } else {
                    toastr.error('Error', error);
                    dispatch(fetchAllFail(error));
                }
            });
    }
}

export const resetFetchAll = () => {
    return {
        type: actionTypeCodes.RESET_FETCH_ALL
    };
}
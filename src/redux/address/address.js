import URL from '../../utils/commons';

// Action Types
const LOADING = 'LOADING';
const CREATE_ADDRESS = 'CREATE_ADDRESS';
const ALL_ADDRESSES = 'ALL_ADDRESSES';
const DELETE_ADDRESS = 'DELETE_ADDRESS';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';

// Initial State
const initialState = {
  loading: true,
  allAddresses: [],
  deleteAddress: [],
  updateAddress: [],
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case CREATE_ADDRESS:
      return {
        ...state,
        loading: false,
        allAddresses: [...state.allAddresses, action.payload],
      };
    case ALL_ADDRESSES:
      return { ...state, loading: false, allAddresses: action.payload };
    case DELETE_ADDRESS:
      return { ...state, loading: false, deleteAddress: action.payload };
    case UPDATE_ADDRESS:
      return { ...state, loading: false, updateAddress: action.payload };
    default:
      return state;
  }
};

// Action Creators
export const createAddress = (formData) => async (dispatch) => {
  const res = await fetch(`${URL}address`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.token)}`,
      Accept: 'application/json',
    },
    body: formData,
  });
  const payload = await res.json();

  dispatch({ type: CREATE_ADDRESS, payload });
};

export const deleteAddress = (addressId) => async (dispatch) => {
  dispatch({ type: LOADING });
  await fetch(`${URL}addresses/${addressId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.token)}`,
      Accept: 'application/json',
    },
  });
  const res = await fetch(`${URL}addresses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.token)}`,
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  dispatch({ type: ALL_ADDRESSES, payload: data });
};

export const updateAddress = (addressId, formData) => async (dispatch) => {
  dispatch({ type: LOADING });
  const res = await fetch(`${URL}address/${addressId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.token)}`,
      Accept: 'application/json',
    },
    body: formData,
  });

  const data = await res.json();
  dispatch({ type: UPDATE_ADDRESS, payload: data });
};

// Show All Addresses

export const allAddresses = () => async (dispatch) => {
  dispatch({ type: LOADING });
  const res = await fetch(`${URL}addresses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.token)}`,
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  dispatch({ type: ALL_ADDRESSES, payload: data });
};
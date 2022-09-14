const GET_MESSAGE = 'GET_MESSAGE';
const url = 'http://localhost:3000/greetings';

const initialState = {
  greeting: 'Hi',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
};

const getMessage = (message) => ({
  type: GET_MESSAGE,
  payload: message,
});

export const fetchMessage = (dispatch) => fetch(url)
  .then((response) => response.json())
  .then((json) => {
    dispatch(getMessage(json));
  })
  .catch((error) => console.log(error));

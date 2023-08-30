const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

const GET_REQUEST = "GET_REQUEST";
const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS";
const GET_REQUEST_FAILED = "GET_REQUEST_FAILED";

const initialData = {
  totos: [],
  isLoading: false,
  error: null,
};

//// create function for fetchData
const fetchData = () => {
  return (dispatch) => {
    dispatch(getRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const todos = res.data;
        const title = todos.map((todo) => todo.title);
        // console.log(title);
        dispatch(getRequestSuccess(title));
      })
      .catch((error) => {
        const errorMessage = error.message;

        dispatch(getRequestFailed(errorMessage));
      });
  };
};

// action type

const getRequest = () => {
  return {
    type: GET_REQUEST,
  };
};

const getRequestSuccess = (todos) => {
  return {
    type: GET_REQUEST_SUCCESS,
    payload: todos,
  };
};

const getRequestFailed = (error) => {
  return {
    type: GET_REQUEST_FAILED,
    payload: error,
  };
};

//reducer create

const todosReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };

    case GET_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

//create store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());

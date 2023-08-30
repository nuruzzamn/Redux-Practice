const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//initialize type
const PRODUCT_TYPE = "PRODUCT";
const ADD_PRODUCT_TYPE = "ADD_PRODUCT_TYPE"

//products state initialize
const productInitialValue = { productName: ["potato", "orange"], count: 2 };

// products
//define action type
const fGetProduct = () => {
  return {
    type: PRODUCT_TYPE,
  };
};

const fAddProduct = (newProduct) => {
  return {
    type: ADD_PRODUCT_TYPE,
    payload: newProduct,
  };
};

// product reducer
const productReducer = (state = productInitialValue, action) => {
  switch (action.type) {
    case PRODUCT_TYPE:
      return {
        ...state,
      };

    case ADD_PRODUCT_TYPE:
      return {
        addProduuct: [...state.productName, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

// create store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fGetProduct());
store.dispatch(fAddProduct("salt"));

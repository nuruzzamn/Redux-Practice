const { createStore, combineReducers } = require("redux");

//initialize type
const PRODUCT_TYPE = "PRODUCT";
const ADD_PRODUCT_TYPE = "ADD_PRODUCT";

//// Card 
const CARD_TYPE = "CARD";
const ADD_CARD_TYPE = "ADD_CARD";

//products state initialize
const productInitialValue = { productName: ["potato", "orange"], count: 2 };

//card state initialize
const cardInitialValue = { cardItem: ["potato"], count: 1  };

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

// card
//define action type
const fGetCardIItem = () => {
    return {
      type: CARD_TYPE,
    };
  };
  
  const fCardAddProduct = (newCardItem) => {
    return {
      type: ADD_CARD_TYPE,
      payload: newCardItem,
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

// card reducer
const cardReducer = (state = cardInitialValue, action) => {
    switch (action.type) {
      case CARD_TYPE:
        return {
          ...state,
        };
  
      case ADD_CARD_TYPE:
        return {
          addProduuct: [...state.cardItem, action.payload],
          count: state.count + 1,
        };
  
      default:
        return state;
    }
  };
  

// combined reducer
const combineReducer = {productR: productReducer, cardR : cardReducer}
const rootReducer = combineReducers (combineReducer)

// create store

// const store = createStore(productReducer);
const store = createStore(rootReducer);


store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(fGetProduct());
// store.dispatch(fAddProduct("salt"));

store.dispatch(fGetCardIItem());
store.dispatch(fCardAddProduct("salt"));

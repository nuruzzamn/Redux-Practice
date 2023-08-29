const Increment = "INCREMENT"
const Decrement = "DECREMENT"
const Reset = "RESET"


const {createStore} = require ("redux")

const initialCountState ={count : 0}

//action (type object) --- type,payload

const inCrementCount = () =>{
    return {
        type: Increment,
    }
}

const deCrementCount = () =>{
    return {
        type: Decrement,
    }
}

const resetCount = () =>{
    return {
        type: Reset,
    }
}
// reducer 

const reducer = (state = initialCountState, action ) =>{

    switch (action.type) {
        case Increment:
            return {
                ...state,
                count: state.count + 1
            }
    
        case Decrement:
            return {
                ...state,
                count: state.count - 1
            }

            case Reset:
                return {
                    ...state,
                    count: 0
                }
        default:
            state;
    }
}

// store - getState(), dispatch, subscribe()

//crate store 

const store = createStore (reducer)

store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch

store.dispatch(inCrementCount())
store.dispatch(inCrementCount())
store.dispatch(inCrementCount())
store.dispatch(inCrementCount())
store.dispatch(inCrementCount())

store.dispatch(deCrementCount())
store.dispatch(deCrementCount())

store.dispatch(resetCount())


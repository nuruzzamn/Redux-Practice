const Increment = "INCREMENT"
const IncrementByValue = "INCREMENT_BY_VALUE"

const AddUser = "ADD_USER"
const Decrement = "DECREMENT"
const Reset = "RESET"


const {createStore} = require ("redux")

const initialCountState ={user : ["zaman"], count : 1}

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

const incrementBYValue = (value) =>{
    return {
        type: IncrementByValue,
        payload: value
    }
}

const fAddUser = (user) =>{
    return {
        type: AddUser,
        payload: user
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
            
            case IncrementByValue:
                return {
                    ...state,
                    count: state.count + action.payload
                }   
                
            case AddUser:
                return {
                    user: [...state.user, action.payload],
                    count: state.count + 1
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

// store.dispatch(inCrementCount())
// store.dispatch(inCrementCount())
// store.dispatch(inCrementCount())
// store.dispatch(inCrementCount())
// store.dispatch(inCrementCount())

// store.dispatch(deCrementCount())
// store.dispatch(deCrementCount())

// store.dispatch(resetCount())

// store.dispatch(incrementBYValue(10))
// store.dispatch(incrementBYValue(30))

store.dispatch(fAddUser("nur"))
store.dispatch(fAddUser("moon"))
store.dispatch(fAddUser("shuvo"))





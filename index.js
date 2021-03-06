const redux = require('redux')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const applyMiddleWare = redux.applyMiddleware

console.log('From index.js')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First Redux Action'
    }
}
function buyIceCream(){
    return {
        type:BUY_ICECREAM,
        info:'First Redux Action'
    }
}

// (prevState,action)=> newState

// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams:20
// }
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreamState :20
}

const cakeReducer = (state = initialCakeState,action)=> {
    switch(action.type){
        case BUY_CAKE: 
        return {
            ...state,
            numOfCakes:state.numOfCakes -1
        }

        default:return state
    }

}
const iceCreamReducer = (state = initialIceCreamState,action)=> {
    switch(action.type){
        case BUY_ICECREAM: 
        return {
            ...state, numOfIceCreams:state.numOfIceCreams -1
        }

        default:return state
    }

}

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer,applyMiddleWare(logger))
console.log('initial State ',store.getState()) 
const unsubscribe = store.subscribe(()=> {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
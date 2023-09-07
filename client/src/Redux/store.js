import { createStore , applyMiddleware,compose } from 'redux';
import reducerDrivers from './reducer'// esto viene de mis reducer
import  thunkMiddleware from 'redux-thunk'

 

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
// esto  sirve  para usar para confugar  la configulariocon de devtols 

const store= createStore (
   reducerDrivers , 
   composeEnhancer(applyMiddleware(thunkMiddleware))

)


export default store
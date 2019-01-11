//import { updateFromServer } from '../actions';

const logger = (store) => (next) => (action) => {
    console.log(`Middleware ${action.type}`);
    //action.type = "ERROR";
    //action.type = "UPDATE_FROM_SERVER";
    //next(action);
    //store.dispatch(updateFromServer('React'));
}

//export default logger;

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.log(`Error occured ${e}`);
    }   
}

module.exports = {
    logger : logger,
    error : error
}

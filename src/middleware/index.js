const logger = (store) => (next) => (action) => {
    console.log(`Middleware ${action.type}`);
    action.type = "ERROR";
    next(action);
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

import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { logger as customLogger, error } from '../middleware';
import logger from 'redux-logger';

const initialState = {
  tech: "React"
};

const middleware = applyMiddleware(customLogger, error, logger);

const store = createStore(reducer, initialState, middleware);

export default store;
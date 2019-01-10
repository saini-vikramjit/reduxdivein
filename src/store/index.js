import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { logger, error } from '../middleware';

const initialState = {
  tech: "React"
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, initialState, middleware);

export default store;
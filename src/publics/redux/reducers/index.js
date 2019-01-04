import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';
import RootNavigations from '../../navigators/Rootnavigators';

const reducerRouter = createNavigationReducer(RootNavigations);

const reducers = combineReducers({
  router: reducerRouter
});

export default reducers;
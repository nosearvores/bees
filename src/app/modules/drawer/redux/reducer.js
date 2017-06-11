// vendor
import {Map} from 'immutable';
import {isBoolean} from 'lodash';

// local
import {
  DRAWER_REGISTER,
  DRAWER_UNREGISTER,
  DRAWER_TOGGLE,
  DRAWER_OPEN,
  DRAWER_CLOSE,
  DRAWER_DOCK,
  DRAWER_UNDOCK
} from './actions';

const initialState = Map();

const initialRegisterState = {
  opened: false,
  docked: false
};

// reducer
export const drawerReducer = (state = initialState, {type, payload}) => {
  const id = payload && payload.id ? payload.id : null;
  const openedPath = [id, 'opened'];
  const dockedPath = [id, 'docked'];

  switch (type) {
    case DRAWER_REGISTER:
      return state.set(id, Map(initialRegisterState));

    case DRAWER_UNREGISTER:
      return state.delete(id);

    case DRAWER_OPEN:
      return state.setIn(openedPath, true);

    case DRAWER_CLOSE:
      return state.setIn(openedPath, false);

    case DRAWER_TOGGLE:
      const opened = isBoolean(payload.open)
        ? payload.open
        : !state.getIn(openedPath);
      return state.setIn(openedPath, opened);

    case DRAWER_DOCK:
      return state.setIn(dockedPath, true);

    case DRAWER_UNDOCK:
      return state.setIn(dockedPath, false);

    default:
      return state;
  }
};

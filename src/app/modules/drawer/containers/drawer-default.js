// vendor
import {connect} from 'react-redux';

// local
import {Drawer} from '../components';
import {drawerSelector as selector} from '../redux';
import * as action from '../redux/actions';

const mapStateToProps = state => ({
  registered: selector.initial(state)
});

const mapDispatchToProps = dispatch => ({
  onRegister: id => dispatch(action.drawerRegister({id})),
  onUnregister: id => dispatch(action.drawerUnregister({id})),
  onToggle: (id, open) => dispatch(action.drawerToggle({id, open})),
  onOpen: id => dispatch(action.drawerOpen({id})),
  onClose: id => dispatch(action.drawerClose({id})),
  onDock: id => dispatch(action.drawerDock({id})),
  onUndock: id => dispatch(action.drawerUndock({id}))
});

export const DrawerDefault = connect(mapStateToProps, mapDispatchToProps)(
  Drawer
);

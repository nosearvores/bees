// vendor
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// local
import {Main} from '../components';
import {mainSelector as selector} from '../redux';
import * as action from '../redux/actions';
import {drawerOpen, drawerClose} from 'app/modules/drawer/redux/actions';

const mapStateToProps = state => ({
  title: selector.getTitle(state),
  menu: selector.getMenu(state)
});

const mapDispatchToProps = dispatch => ({
  openMenu: id => dispatch(drawerOpen({id})),
  closeMenu: id => dispatch(drawerClose({id})),
  setTitle: title => dispatch(action.mainSetTitle({title}))
});

export const MainDefault = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Main)
);

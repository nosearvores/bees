// vendor
import {connect} from 'react-redux';

// local
import {Dashboard} from '../components';
import {dashboardSelector as selector} from '../redux';
import * as action from '../redux/actions';

const mapStateToProps = state => ({
  dashboard: selector.initial(state)
});

const mapDispatchToProps = dispatch => ({
  onIncrement: num => dispatch(action.dashboardIncrement(num)),
  onDecrement: num => dispatch(action.dashboardDecrement(num))
});

export const DashboardInitial = connect(mapStateToProps, mapDispatchToProps)(
  Dashboard
);

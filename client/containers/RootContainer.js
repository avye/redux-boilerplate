import { connect } from 'react-redux';
import RootComponent from '../components/RootComponent.js';
import * as actions from '../actions/ActionCreator.js';

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);

import { connect } from 'react-redux';
import {receiveTeam} from '../../actions/team_actions';
import Main from './main';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    teams: state.teams,
    shifts: state.shifts
  };
};

const mapDispatchToProps = dispatch => ({
  receiveTeam: team => dispatch(receiveTeam(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
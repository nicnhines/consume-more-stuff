import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleUser } from '../../actions/usersActions';
import { loadItems, addItem } from '../../actions/itemsActions';

class User extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const userId = this.props.match.params.id;
    this.props.loadSingleUser(userId)
  }

  render() {
    return (
      <div className="user-profile-container">
      <div className="single-user-username">{this.props.singleUser.username} </div>
      <div className="single-user-email">{this.props.singleUser.email} </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    items: state.items.items,
    singleUser: state.users.singleUser
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadSingleUser: (id) => {
      dispatch(loadSingleUser(id))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
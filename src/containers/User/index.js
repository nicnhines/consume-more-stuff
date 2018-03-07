import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleUser } from '../../actions/usersActions';
import { loadItems, addItem } from '../../actions/itemsActions';
import ConnectedNewItem from '../../components/NewItem';
import UserListItem from '../../components/UserListItem';
import { Link, Redirect } from 'react-router-dom';

class User extends Component {
  constructor(props) {
    super(props);

    this.state ={
      displayAddForm: false
    };
  }

  displayAddForm(event) {
    this.setState({
      displayAddForm: true
    });
  }
  
  hideAddForm(event) {
    this.setState({
      displayAddForm: false
    });
  }
  componentWillMount() {
    const userId = this.props.match.params.id;
    this.props.loadSingleUser(userId)
  }

  render() {
    const userId = this.props.match.params.id;
    
    const items = this.props.items.filter(item => item.user_id === userId);
    const url = items.length ? items[0].image_url : undefined;
    return (
      <div className="user-profile-container">
      {this.state.displayAddForm  && <div className="form-bg">
      <ConnectedNewItem hideAddForm={this.hideAddForm.bind(this)}/></div> }
      <div className='user_list_items_container'>
          {items.map(item => 
            <UserListItem key={item.id} item={item}/>
          )}
          </div>
      <span className='all_items_button' onClick={this.displayAddForm.bind(this)}>add item</span>
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
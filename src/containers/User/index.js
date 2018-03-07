import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleUser } from '../../actions/usersActions';
import { loadItems } from '../../actions/itemsActions';
import { Link, Redirect } from 'react-router-dom';

import UserListItem from '../../components/UserListItem';
import ConnectedNewItem from '../../components/NewItem';

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
    this.props.loadItems();
  }

  render() {
    const userId = this.props.match.params.singleUser;
    const items = this.props.items.filter(item =>{
      console.log(item)
     return item.user_id === 2
    });

    const UserItem = items.map(item => {
      return <UserListItem key={ item.id } item={ item }/>
    })
    
    return (
      <div className="user-profile-container">
      <div className="single-user-username"> Welcome { this.props.singleUser.username } </div>
      
      {this.state.displayAddForm  && <div className="form-bg">
      <ConnectedNewItem hideAddForm={ this.hideAddForm.bind(this) }/></div> }
      <div className='user_list_items_container'>
      {UserItem}
      </div>
      <span className='all_items_button' onClick={ this.displayAddForm.bind(this) }>add item</span>
      
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
    },
    loadItems: () => {
      dispatch(loadItems())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
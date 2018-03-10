import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleUser } from '../../actions/usersActions';
import { loadItems } from '../../actions/itemsActions';

import UserListItem from '../../components/UserListItem';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAddForm: false,
      id: this.props.id,
      status: this.props.status,
      filter: ""
    }
  }

  displayAllItems(event) {
    this.setState({
      filter: ""
    })
  }

  displaySold(event) {
    this.setState({
      filter: "sold"
    })
  }

  displaySell(event) {
    this.setState ({
      filter: "published"
    })
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
    if(!this.props.singleUser.id) {
      return <div></div>;
    }
    let items = this.props.singleUser.items;
    
    const UserItem = items.filter(item => {
      if(this.state.filter === "published"){ 
      return item.status === "published";
      } if(this.state.filter === "sold") {
        return item.status === "sold";
      }
      if(this.state.filter === "") {
        return item;
      }
    })
    .map(item => {
      return <UserListItem key={item.id} item={item} />
    });
    
    return (
      <div className="user-profile-container">
        <div className="header">
          <div className="single-user-username"> Welcome {this.props.singleUser.username} </div>
        </div>
        <div id="sell-sold" className="sell-sold">
          <button onClick={this.displaySell.bind(this)}>all</button>
          <button onClick={this.displaySold.bind(this)}>sold</button>
          <button onClick={this.displaySell.bind(this)}>selling</button>
        </div>
        <div className="main">
          <div className="item-container">
            <div className='slider'>
              { UserItem }
            </div>           
          </div>
        </div>
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


// <span className='add_item_button' onClick={this.displayAddForm.bind(this)}>add item</span>
// {this.state.displayAddForm && <div>
//   <ConnectedAddItemForm hideAddForm={this.hideAddForm.bind(this)} /></div>}
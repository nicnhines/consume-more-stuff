import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem, loadSingleItem } from '../../actions/itemsActions'
import { Route, Redirect } from 'react-router-dom';

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDisplay: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayEditForm = this.displayEditForm.bind(this);
  }

  componentWillMount() {
    this.props.loadSingleItem(1);
  }
  displayEditForm(event) {
    this.setState({
      id: this.props.singleItem.id,
      title: this.props.singleItem.title,
      description: this.props.singleItem.description,
      price: this.props.singleItem.price,
      condition: this.props.singleItem.condition,
      category: this.props.singleItem.category,
      status: this.props.singleItem.status,
      showDisplay: true
    })
  }
  hideEditForm(event) {
    this.setState({
      showDisplay: false
    })
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.editItem({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      condition: this.state.condition,
      category: this.state.category,
      status: this.state.status
    });
    // <Redirect push to="/" /> 
    // console.log(`dfjkajlda`)
  }
  render() {
    if(this.state.showDisplay === false){
   
      return ( 
      <div className="single-item-container"> 
      <div className="item-content">
      <div className="single-item-image"> 
      <img src={`https://images.unsplash.com/photo-1504384171965-be2509a826af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88da65ead999eb46fccddb0ce411720&auto=format&fit=crop&w=1500&q=80`} /> </div>
      <div className="top-row">
      <div className="single-item-title"><h2>ITEM</h2>{ this.props.singleItem.title }</div>
      <div className="single-item-price"> <h2>PRICE</h2>{ this.props.singleItem.price }</div>
      <div className="single-item-condition"> <h2>CONDITION</h2> { this.props.singleItem.condition }</div>
      </div>
      <div className="middle-row">
      <div className="single-item-description">{ this.props.singleItem.description }</div>
      </div>
      
      <div className="edit-item">
     <input type="submit" value="EDIT" onClick={this.displayEditForm.bind(this)} />
     </div>
    </div>
    </div>
      )} else { return (
      <div className="edit-item-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <button onClick={this.hideEditForm.bind(this)}> X</button>
          </div>
          <div>
            <input
              className="addInput"
              name="title"
              onChange={this.handleChange.bind(this)}
              value={this.state.title} />
          </div>
          <div>
            <textarea
              className="addInput"
              name="description"
              onChange={this.handleChange.bind(this)}
              value={this.state.description} />
          </div>
          <div>
            <input
              className="addInput"
              name="price"
              onChange={this.handleChange.bind(this)} 
              value={this.state.price} />
          </div>
          <div>
            <select
              className="addInput"
              name="condition"
              onChange={this.handleChange.bind(this)}>
              <option value= ''>{this.props.singleItem.condition}</option>
              <option value="new">New</option>
              <option value="like new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="salvage">Salvage</option>
            </select>
          </div>
          <div>
            <select
              className="addInput"
              name="category"
              onChange={this.handleChange.bind(this)}>
              <option value= ''>{this.props.singleItem.category}</option>
              <option value="electronics">Electronics</option>
              <option value="vehicles">Vehicles</option>
              <option value="Furniture">Furniture</option>
              <option value="apparel">Apparel</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <select
              className="addInput"
              name="status"
              onChange={this.handleChange.bind(this)}>
              <option value= ''>{this.props.singleItem.status}</option>
              <option value="published">Published</option>
              <option value="sold">Sold</option>
              <option value="deactivated">Deactivated</option>
            </select>
          </div>
          <input
            type="submit"
            value="EDIT" onClick={this.hideEditForm.bind(this)}/>
        </form>
      </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editItem: (updatedItem) => {
      dispatch(editItem(updatedItem))
    },
    loadSingleItem: (id) => {
      dispatch(loadSingleItem(id))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditItem);
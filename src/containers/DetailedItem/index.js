import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editItem, loadSingleItem } from '../../actions/itemsActions'

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
    const itemId = this.props.match.params.id;
    this.props.loadSingleItem(itemId);
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
      image: this.props.singleItem.image_url,
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
    this.hideEditForm();
  }
  render() {
    const {
      title,
      price,
      condition,
      description,
      category
    } = this.props.singleItem;

    if (this.state.showDisplay === false) {
      return (
        <div className="single_item_container">
          <div className="item_content_container">
            <img className='item_image' src={this.props.singleItem.image_url} />
            <div className="top_row">
              <div className="single_item_title">
                <h4>item</h4>
                <p>{this.props.singleItem.title}</p>
              </div>
              <div className="single_item_price">
                <h4>price</h4>
                <p>{this.props.singleItem.price}</p>
              </div>
              <div className="single_item_condition">
                <h4>CONDITION</h4>
                <p>{this.props.singleItem.condition}</p>
              </div>
            </div>
            <div className="middle_row">
              <p>{this.props.singleItem.description}</p>
            </div>
            <div className='bottom_row'>
              <Link 
                to={`/category/${category}`} 
                className='back_to_category'>
                {`\u2190back to ${category}`}
              </Link>
              <p onClick={this.displayEditForm}>Edit Item</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="form-background">
          <div className="edit-item-form">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <button type="button" className="close-btn" onClick={this.hideEditForm.bind(this)}>x</button>
              <br />
              <input
                type="text"
                name="title"
                className="inputField"
                value={this.state.title}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <br />
              <input
                type="text"
                name="description"
                className="inputField"
                value={this.state.description}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <br />
              <input
                type="integer"
                name="price"
                className="inputField"
                value={this.state.price}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <br />
              <select
                name="condition"
                onChange={this.handleChange.bind(this)}>
                <option value=''>{this.props.singleItem.condition}</option>
                <option value="new">New</option>
                <option value="like new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="salvage">Salvage</option>
              </select>
              <select
                name="category"
                onChange={this.handleChange.bind(this)}>
                <option value=''>{this.props.singleItem.category}</option>
                <option value="electronics">Electronics</option>
                <option value="vehicles">Vehicles</option>
                <option value="Furniture">Furniture</option>
                <option value="apparel">Apparel</option>
                <option value="other">Other</option>
              </select>
              <br />
              <br />
              <select
                name="status"
                onChange={this.handleChange.bind(this)}>
                <option value=''>{this.props.singleItem.status}</option>
                <option value="published">Published</option>
                <option value="sold">Sold</option>
                <option value="deactivated">Deactivated</option>
              </select>
              <br />
              <br />
              <input
                type="text"
                image="image_url"
                placeholder="IMAGE URL"
                className="inputField"
                value={this.props.singleItem.image_url}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <div className="submitButton">
                <button
                  type="Submit"><strong>EDIT</strong></button>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    singleItem: state.items.singleItem
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


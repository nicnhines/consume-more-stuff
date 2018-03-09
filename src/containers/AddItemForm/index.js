import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../actions/itemsActions';

class AddItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      price: ``,
      condition: '',
      category: this.props.currentCategory,
      imageFile: ``,
      titleError: false,
      descriptionError: false,
      priceError: false,
      conditionError: false,
      categoryError: false,
      imageFileError: false
    };
  };


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [`${event.target.name}Error`]: false });
  };

  handleImageChange(event) {
    event.preventDefault();
    if (!event.target.files[0]) {
      return;
    }
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imageFile: reader.result,
      });
    }
    reader.readAsDataURL(file);
  }

  handleSubmit(event) {
    event.preventDefault();
    let isError = false;
    const inputs = [`title`, `description`, `price`, `condition`, `category`, `imageFile`];
    inputs.forEach(input => {
      if (!this.state[input]) {
        console.log(input);
        this.setState({ [`${input}Error`]: true });
        isError = true;
      }
    })

    if (isError) {
      return;
    }

    this.props.addItem(this.state, (id) => {
      this.props.redirectAfterAdd(id);
    });
  };

  render() {
    return (
      <div className="add_item_form_container">
        <form className='add_item_form' onSubmit={this.handleSubmit.bind(this)}>
          <h6>add item</h6>
          <div className='form_input_container'>
            <input
              type="text"
              name="title"
              placeholder="TITLE"
              value={this.state.title}
              onChange={this.handleChange.bind(this)} 
              className={this.state.titleError ? `input_error` : ``} />
              {this.state.titleError &&
                <p className='add_item_form_error'>required *</p>}
          </div>
          <div className='form_input_container'>
            <input
              type="text"
              name="description"
              placeholder="DESCRIPTION"
              value={this.state.description}
              onChange={this.handleChange.bind(this)}
              className={this.state.descriptionError ? `input_error` : ``} />
              {this.state.descriptionError &&
                <p className='add_item_form_error'>required *</p>}
          </div>
          <div className='condition_category_container'>
            <input
              type="number"
              min='0'
              step='1'
              name="price"
              placeholder="PRICE"
              value={this.state.price}
              onChange={this.handleChange.bind(this)}
              className={this.state.priceError ? `input_error` : ``} />
            <select
              name="condition"
              value={this.state.condition}
              onChange={this.handleChange.bind(this)}
              className={this.state.conditionError ? `input_error` : ``} >
              <option value="">CONDITION</option>
              <option value="new">New</option>
              <option value="like new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="salvage">Salvage</option>
            </select>
            <select
              name="category"
              defaultValue={this.state.category}
              onChange={this.handleChange.bind(this)}
              className={this.state.categoryError ? `input_error` : ``} >
              <option value="">CATEGORY</option>
              <option value="lighting">Lighting</option>
              <option value="art">Art</option>
              <option value="furniture">Furniture</option>
              <option value="jewelry">Jewelry</option>
              <option value="scarves">Scarves</option>
            </select>
          </div>
          <input
            type='file'
            name='file'
            accept='image/*'
            onChange={this.handleImageChange.bind(this)} />
          {this.state.imageFileError &&
              <p className='add_item_form_error_image'>required *</p>}
          <input
            type='submit'
            value='SUBMIT' />
          <div className='close_button_container' onClick={this.props.hideAddForm}>
            <div className='close_button'>
              <div className='left_x'></div>
              <div className='right_x'></div>
            </div>
          </div>
        </form>
      </div>
    )
  };
};


const mapStateToProps = (state) => ({
  categories: state.items.categories
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item, callback) => {
    dispatch(addItem(item, callback));
  } 
});

const ConnectedAddItemForm = connect(mapStateToProps, mapDispatchToProps)(AddItemForm);

export default ConnectedAddItemForm;
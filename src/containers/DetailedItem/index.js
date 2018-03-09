import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ConnectedAddEditItemForm from '../AddEditItemForm';
import { editItem, loadSingleItem } from '../../actions/itemsActions'

class DetailedItemPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayEditForm: false
    }

    this.displayEditForm = this.displayEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
  }

  componentWillMount() {
    const itemId = this.props.match.params.id;
    this.props.loadSingleItem(itemId);
  }

  displayEditForm(event) {
    this.setState({ displayEditForm: true });
  }

  hideEditForm(event) {
    setTimeout(() => {
      this.setState({
        displayEditForm: false,
      });
    }, 500);
    document.getElementById(`add_edit_item_form`).className += ` fadeout`;
  }

  render() {
    const {
      title,
      price,
      condition,
      description,
      category,
      image_url
    } = this.props.singleItem;

    return (
      <div className="single_item_container">
        {this.state.displayEditForm && <div className="form-bg" id='add_edit_item_form'>
          <ConnectedAddEditItemForm 
            isEdit={true}
            hideForm={this.hideEditForm} 
          />
        </div>}
        <div className="item_content_container">
          <img className='item_image' src={image_url} alt={description}/>
          <div className="top_row">
            <div className="single_item_title">
              <h4>item</h4>
              <p>{title}</p>
            </div>
            <div className="single_item_price">
              <h4>price</h4>
              <p>{price}</p>
            </div>
            <div className="single_item_condition">
              <h4>CONDITION</h4>
              <p>{condition}</p>
            </div>
          </div>
          <div className="middle_row">
            <p>{description}</p>
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
    );
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
)(DetailedItemPage);


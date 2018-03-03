import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import CategoryListItem from '../../components/CategoryListItem';

class CategoryList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const header = document.getElementById(`category_header`);
    const mainImage = document.getElementById(`main_image`);
    window.addEventListener(`scroll`, () => {
      mainImage.style.opacity = (window.innerHeight - window.scrollY) / window.innerHeight;

      if (window.scrollY >= window.innerHeight && !header.className.includes(`sticky`)) {
        header.className += ` sticky`;
      }

      if (window.scrollY < window.innerHeight) {
        header.className = `category_header`;
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`);
  }

  render() {
    const currentCategory = this.props.match.params.category;
    const aboutParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in consectetur leo, quis tempus sem. Nunc volutpat enim at tempor tempor. Ut augue odio, tempus sed dui et, ullamcorper consectetur sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie et tortor eu dapibus. Nullam eu posuere erat, suscipit euismod nunc. Aliquam fringilla a ante vitae viverra. In non vestibulum elit, eu molestie augue.`;
    if (!this.props.categories.includes(currentCategory)) {
      return <Redirect to='/' />;
    }
    const items = this.props.items.filter(item => item.category === currentCategory);

    return (
      <div className='category_list_container'>
        <div id='main_image' 
          className='category_main_image'
        ></div>
        <div className='category_spacer'>
          <div className='category_information_container'>
              <h2>{currentCategory}</h2>
              <p>{aboutParagraph}</p>
          </div> 
        </div>   
        <div id='category_header' className='category_header'>
          <span>all items</span>
          <span>filter</span>
        </div>
        {items.map(item => 
          <CategoryListItem key={item.id} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    categories: state.items.categories,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const ConnectedCategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

export default ConnectedCategoryList;
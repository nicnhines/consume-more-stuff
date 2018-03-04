import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import CategoryListItem from '../../components/CategoryListItem';

class CategoryList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll);
  }

  handleScroll() {
    const header = document.getElementById(`category_header`);
    const mainImage = document.getElementById(`main_image`);
    const height = window.innerHeight;
    const scrollPosition = window.scrollY;

    mainImage.style.opacity = (height - scrollPosition) / height;

    if (scrollPosition >= height && !header.className.includes(`sticky`)) {
      header.className += ` sticky`;
    }

    if (scrollPosition < height) {
      header.className = `category_header`;
    }
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
          <span className='all_items_button'>all items</span>
          <input className='search_bar' type='text' placeholder={`Search through ${currentCategory}...`} />
        </div>
        <div className='category_list_items_container'>
          {items.map(item => 
            <CategoryListItem key={item.id} item={item}/>
          )}
        </div>
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
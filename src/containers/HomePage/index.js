import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: `electronics`
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(event) {
    this.setState({ currentCategory: this.props.categories[event.target.dataset.index] });
  }

  render() {
    console.log(this.props);
    let highlightedItem = this.props.items.filter(item =>
      item.category === this.state.currentCategory
    );
    highlightedItem = highlightedItem[[Math.floor(Math.random() * highlightedItem.length)]];
    return (
      <div className='home_page_container'>
        <div 
          className='background_image'
          style={this.props.items.length ? 
          {backgroundImage: `url("${this.props.items[0].image_url}")`} : null}>
        </div>
        <div className='current_category_content_container'>
          <h2>{this.state.currentCategory}</h2>
          { highlightedItem && 
          <div className='highlight_container'>          
            <div
              className='highlighted_item'
              style={{backgroundImage: `url(${highlightedItem.image_url})`}}>
            </div>
            <Link to={`/category/${ this.state.currentCategory }`} className='discover_button'>
            <p className='discover_text'>DISCOVER</p>
            <p className='discover_text_top'>DISCOVER</p>
            </Link>
          </div>}
        </div>
        <div className='home_navigation_bar'>
          {this.props.categories.map((category, index) => 
            <span data-index={index} key={index} onClick={this.handleCategoryChange}>•</span>
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

const ConnectedHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default ConnectedHomePage;
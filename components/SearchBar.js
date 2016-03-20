import React, { Component, PropTypes } from 'react'

class SearchBar extends Component {

  render() {
    return (
      <div className="search-bar-wrapper">
        <input type="text" placeholder="Your search query here.." onChange={this.props.onQueryChange} />
      </div>
    )
  }
}

export default SearchBar

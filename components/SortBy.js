import React, { Component, PropTypes } from 'react'

class SortBy extends Component {
  render() {
    return(
      <div className="sort-select-wrap">
        Sort by: <select  onChange={this.props.sortChange}>
          <option value="date">Date uploaded</option>
          <option value="views">Number of views</option>
        </select>
      </div>
    )
  }
}

export default SortBy

import React, { Component, PropTypes } from 'react'
import SearchBar from '../components/SearchBar'
import TileHolder from '../components/TileHolder'
import Expanded from '../components/Expanded'
import BiggerLoader from '../components/BiggerLoader'
import SortBy from '../components/SortBy'
import { connect } from 'react-redux'
import { expandImage, search, drain, closeExpanded, sort } from '../actions'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar onQueryChange={this.props.searchQueryChange} />
        {(this.props.tiles.length === 0) ? '' :
          <SortBy sortChange={this.props.sortBy} />
        }
        {(this.props.pending) ?
          <BiggerLoader /> :
            <TileHolder
              tiles={this.props.tiles}
              onSingleTileClick={this.props.expandImage}
            />
        }
        <Expanded url={this.props.currentExpanded}
          closeExpanded={this.props.closeExpanded} />
      </div>
    )
  }
}

// quick solution to have a reference
// to it's value for 'load more'
let searchInput

const mapDispatchToProps = (dispatch) => {
  return {
    expandImage: (url) => {
      dispatch(expandImage(url))
    },
    searchQueryChange: (e) => {
      if(!searchInput) searchInput = e.target
      if(e.target.value.trim().length === 0) {
        return dispatch(drain())
      }
      dispatch(search(e.target.value))
    },
    closeExpanded: () => {
      dispatch(closeExpanded())
    },
    sortBy: (e) => {
      dispatch(sort(e.target.value))
    }
  }
}

const mapStatesToProps = (state) => {
  return {
    pending:         state.pending,
    tiles:           state.results,
    sortedBy:        state.sortedBy,
    page:            state.page,
    error:           state.error,
    currentExpanded: state.currentExpanded
  }
}

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(App)

import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'

class TileHolder extends Component {

  render() {
    return (
      <div className="tiles-wrap">
        {this.props.tiles.map((item, index) => {
          return (
            <Tile imageUrl={item.url_m} imageOrigUrl={item.url_l} key={index}
              onTileClick={this.props.onSingleTileClick}
            />
          )
        })}
      </div>
    )
  }
}

export default TileHolder

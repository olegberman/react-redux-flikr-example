import React, { PropTypes, Component } from 'react'

class Tile extends Component {
  render() {
    return (
      <div className="tile"
        onClick={this.props.onTileClick.bind(
        'no context', this.props.imageOrigUrl
      )}>
        <img src={this.props.imageUrl} />
      </div>
    )
  }
}

export default Tile

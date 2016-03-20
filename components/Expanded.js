import React, { PropTypes, Component } from 'react'

class Expanded extends Component {
  render() {
    let shouldShow = {
      display: this.props.url ? 'block' : 'none'
    }
    return (
      <div className="screen-lock"
        style={shouldShow}
        onClick={this.props.closeExpanded}>
        <img src={this.props.url} />
      </div>
    )
  }
}

export default Expanded

import React from 'react'

class Episode extends React.Component {
  state = {
    likesCount: 0
  }

  render() {
    return (
      <div className="card mb-3">
          <img src={this.props.image} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="title">{this.props.title}</h5>
              <p className="card-text">S0{this.props.season} E{this.props.episode}</p>
              <p className="card-text">{this.props.summary.substring(0,99)}...</p>

              <button
                onClick={() => {
                  this.setState({ likesCount: this.state.likesCount + 1 })
                }}
                className="btn btn-sm btn-danger">
                Likes {this.state.likesCount}
              </button>
          </div>
      </div>
    )
  }
}

export default Episode
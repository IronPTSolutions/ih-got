import React from 'react'

function Header(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">{props.title}</a>
      </div>
    </nav>
  )
}

export default Header

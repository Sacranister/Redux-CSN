import React, { Component } from 'react'

export default class Bar extends Component {
  render() {
    return (
      <div className="layout">
        <div className="menu">
          <div className="title">
            <img width="180" src="https://www.santander.cl/hyf_html/css/bitmaps/logo-santander.png" role="presentation" />
          </div>
          <div className="menu-items">
            <div className="menu-item">
              perfil
            </div>
            <div className="menu-item">
              productos
            </div>
          </div>
        </div>
      </div>
    )
  }
}

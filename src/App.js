import React, { Component } from 'react'
import './main.css'
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <div>

        { routes }

      </div>
    );
  }
}

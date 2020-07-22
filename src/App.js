import React from 'react'
import './App.css'
import withData from './components/withData'
import Tables from './components/Tables'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
    }
  }

  render() {
    // Load data and manipulate it for tables
    const WithDataTables = withData(Tables)

    return (
      <div id="app">
        <WithDataTables list={this.state.list} />
      </div>
    )
  }
}

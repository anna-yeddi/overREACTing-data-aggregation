import React from 'react'
import './App.css'
import MonthTable from './components/MonthTable'
import YearTable from './components/YearTable'
import SortTable from './components/SortTable'
import withUpdatedList from './components/withUpdatedList'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
      // API helpers
      isLoading: true,
      error: null,
    }
  }

  componentDidMount() {
    // Show loader
    this.setState({ isLoading: true })

    // Get data from API
    fetch(process.env.REACT_APP_DATA_URL)
      .then((response) => response.json())
      .then(
        (result) => this.setState({ list: result.list, isLoading: false }),
        // Catch error to avoid it being printed out in the app
        // and not to allow exceptions from actual bugs
        (error) => {
          this.setState({
            isLoading: false,
            error,
          })
        }
      )
  }

  render() {
    const { list, error, isLoading } = this.state
    const WithDataYearTable = withUpdatedList(YearTable, 'year')
    const WithDataMonthTable = withUpdatedList(MonthTable, 'month')
    const WithDataSortTable = withUpdatedList(SortTable, 'date')

    if (error) {
      return (
        <div role="status">
          <h2 style={{ color: 'red' }}>Error: {error.message}</h2>
        </div>
      )
    } else if (isLoading) {
      return (
        <div role="status">
          <h2>Loading...</h2>
        </div>
      )
    } else {
      return (
        <div id="app">
          <WithDataMonthTable list={list} />
          {/* <MonthTable list={list} /> */}
          <WithDataYearTable list={list} />
          {/* <YearTable list={list} /> */}
          <WithDataSortTable list={list} />
          {/* <SortTable list={list} /> */}
        </div>
      )
    }
  }
}

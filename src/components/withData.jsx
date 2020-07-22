import React from 'react'
import PropTypes from 'prop-types'

function withData(WrappedComponent) {
  return class extends React.Component {
    state = {
      list: [],
      // API helpers
      isLoading: true,
      error: null,
    }

    componentDidMount() {
      // Show loader
      this.setState({ isLoading: true })

      // Get data from API
      fetch(process.env.REACT_APP_DATA_URL)
        .then((response) => response.json())
        .then(
          (result) =>
            this.setState({
              list: result.list,
              isLoading: false,
            }),
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
        return <WrappedComponent {...this.props} list={list} />
      }
    }
  }
}

withData.propTypes = {
  props: PropTypes.objectOf({
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    list: PropTypes.arrayOf({
      item: PropTypes.shape({
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }),
    }).isRequired,
  }),
}

export default withData

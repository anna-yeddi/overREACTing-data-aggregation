import React from 'react'
// import PropTypes from 'prop-types'

function withData(WrappedComponent) {
  return class extends React.Component {
    state = {}

    render() {
      return <WrappedComponent {...this.props} list={this.state.list} />
    }
  }
}

// withData.propTypes = {}

export default withData

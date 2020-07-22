import React from 'react'
import PropTypes from 'prop-types'

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return (
      <div role="status">
        <h2>Loading...</h2>
      </div>
    )
  }
}

WithLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  props: PropTypes.object,
}

export default WithLoading

import React from 'react'
// import PropTypes from 'prop-types'

function withData(WrappedComponent, propName, props) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
      console.log('With Data: ', propName, props)

      this.updatedList = this.props.list.reduce((accumulator, item, i) => {
        // Export year and add it to the item
        const year = item.date.split('-')[0]
        Object.assign(item, { year })

        console.log('Now acc', accumulator, 'item', item, 'i', i)

        if (accumulator[year]) {
          const group = accumulator[year]
          console.log('group', group)
          group.amount = +group.amount + +item.amount
          console.log(group.amount)
        } else {
          accumulator[year] = item
        }

        console.log(typeof accumulator, accumulator)
        return accumulator
        // this.setState({ list: accumulator })

        // console.log(JSON.stringify(accumulator, null, 2))
      }, {})
    }

    componentDidMount() {
      this.setState = { ...this.updatedList }
    }

    render() {
      return <WrappedComponent {...this.props} list={this.state.list} />
    }
  }
}

// withData.propTypes = {}

export default withData

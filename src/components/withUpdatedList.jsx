import PropTypes from 'prop-types'

function withUpdatedList(WrappedComponent, propName) {
  return function (props, ...args) {
    // Aggregate table data by the requested property passed by propName
    const updatedList = [...props.list].reduce((accumulator, item) => {
      // Create temp value newProp to store new export from the date
      let newProp = ''

      // Export needed part of the date and add it to the item
      if (propName === 'year') {
        newProp = item.date.split('-')[0]
      } else if (propName === 'month') {
        newProp = item.date.split('-')[1]
      } else if (propName === 'date') {
        newProp = item.date
      }

      // Create key for newProp and accumulate amount in its value
      if (accumulator[newProp]) {
        accumulator[newProp] += item.amount
      } else {
        accumulator[newProp] = item.amount
      }

      // Return object with newProp-amount pairs
      return accumulator
    }, {})

    // Create array with results
    const updatedListArr = []
    for (const key in updatedList) {
      updatedListArr.push({
        [propName]: key,
        amount: updatedList[key],
      })
    }

    // Sort a copy of array with results
    // For date value will be compared without a dash
    const sortedListArr = [...updatedListArr].sort((a, b) => {
      return a[propName].split('-').join('') - b[propName].split('-').join('')
    })

    // console.log(props, ...args, 'obj', updatedList, 'arr', sortedListArr)
    // Render WrappedComponent with updated list props
    return WrappedComponent.apply(this, [{ list: sortedListArr }, ...args])
  }
}

withUpdatedList.propTypes = {
  props: PropTypes.objectOf({
    list: PropTypes.arrayOf({
      item: PropTypes.shape({
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }),
    }).isRequired,
  }),
}

export default withUpdatedList

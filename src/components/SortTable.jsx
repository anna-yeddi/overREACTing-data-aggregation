import React from 'react'
import PropTypes from 'prop-types'

function SortTable(props) {
  return (
    <div>
      <table>
        <caption>
          <h2>Sort Table</h2>
        </caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item, i) => (
            <tr key={i}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
SortTable.propTypes = {
  props: PropTypes.objectOf({
    list: PropTypes.arrayOf({
      item: PropTypes.shape({
        month: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }),
    }).isRequired,
  }),
}

export default SortTable

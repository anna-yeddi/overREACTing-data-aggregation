import React from 'react'
import PropTypes from 'prop-types'

function MonthTable(props) {
  return (
    <div>
      <table>
        <caption>
          <h2>Month Table</h2>
        </caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((item, i) => (
            <tr key={i}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

MonthTable.propTypes = {
  props: PropTypes.objectOf({
    list: PropTypes.arrayOf({
      item: PropTypes.shape({
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }),
    }).isRequired,
  }),
}

export default MonthTable

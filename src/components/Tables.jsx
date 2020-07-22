import React from 'react'
import PropTypes from 'prop-types'
import MonthTable from './MonthTable'
import YearTable from './YearTable'
import SortTable from './SortTable'
import withUpdatedList from './withUpdatedList'

function Tables(props) {
  const WithDataYearTable = withUpdatedList(YearTable, 'year')
  const WithDataMonthTable = withUpdatedList(MonthTable, 'month')
  const WithDataSortTable = withUpdatedList(SortTable, 'date')

  return (
    <>
      <WithDataMonthTable list={props.list} />
      {/* <MonthTable list={list} /> */}
      <WithDataYearTable list={props.list} />
      {/* <YearTable list={list} /> */}
      <WithDataSortTable list={props.list} />
      {/* <SortTable list={list} /> */}
    </>
  )
}

Tables.propTypes = {
  props: PropTypes.objectOf({
    list: PropTypes.arrayOf({
      item: PropTypes.shape({
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }),
    }).isRequired,
  }),
}

export default Tables

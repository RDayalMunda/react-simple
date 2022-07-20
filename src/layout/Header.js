import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return (
    <>
      <h1>{props.title} : {props.searchBar?"searching":"not searching"} </h1>
    </>
  )
}

//when user does not passes the data
Header.defaultProps = {
  title: "Please pass header title",
}

//this will define what types of data would this component get from its parent
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
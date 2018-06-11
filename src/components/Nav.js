import React from 'react'
import { Link } from 'react-static'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { siteUrl } from '../siteMeta'

const NavWrapper = styled.nav`
  top: 0;
  width: 100%;
  position: fixed;
  background: ${props => props.theme.primary};
  a {
    color: ${props => props.theme.fontDark};
    padding: 1rem;
    display: inline-block;
  }
`

const Nav = props => {
  return (
    <NavWrapper>
      <Link exact to="/">
        {siteUrl.substring(8)}
      </Link>
      <Link to="/about">About</Link>
    </NavWrapper>
  )
}

// Nav.propTypes = {}

export default Nav
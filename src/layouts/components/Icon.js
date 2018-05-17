import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: props.color
    }
  }

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024">
      <path style={styles.path} d={props.icon} />
    </svg>
  )
}

Icon.defaultProps = {
  size: 100,
  viewbox: '0 0 32 32'
}

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string
}

export default Icon

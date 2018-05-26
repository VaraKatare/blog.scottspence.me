import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SelectWrapper = styled.div`
  /* grid-area: t; */
  margin: 0rem 0.5rem 0rem 0.25rem;
  padding: 0rem 0.5rem 0rem 0.25rem;
`

const Select = styled.select`
  margin: 0.5rem 0.5rem;
  padding: 0rem 0.5rem;
  font-family: ${props => props.theme.fontBody};
  /* font-size: 1rem; */
  border: 1px solid ${props => props.border};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.foreground};
  border-radius: 2px;
`

export const SelectOpt = styled.option`
  font-family: ${props => props.theme.fontBody};
  /* font-size: 1rem; */
`

class ThemeSelect extends React.Component {
  render() {
    return (
      <SelectWrapper>
        <Select onChange={e => this.props.handleThemeChange(e)}>
          <SelectOpt value="theme1">Theme 1</SelectOpt>
          <SelectOpt value="theme2">Theme 2</SelectOpt>
          <SelectOpt value="theme3">Theme 3</SelectOpt>
        </Select>
      </SelectWrapper>
    )
  }
}

ThemeSelect.propTypes = {
  handleThemeChange: PropTypes.func
}

export default ThemeSelect

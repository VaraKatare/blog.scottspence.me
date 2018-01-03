import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { StyledH3, StyledP, StyledLi } from '../../theme/globalStyle'

// top right bottom left
const PostTags = StyledLi.extend`
  margin: 0.25rem;
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  display: inline-block;
  background: ${({ theme }) => theme.primary.light};
`

const TagLink = styled(Link)`
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.secondary.red};
  }
`

export const Tag = props => {
  return (
    <PostTags>
      <TagLink to={`/tags/${props.tag}`}>{props.tag}</TagLink>
    </PostTags>
  )
}

export default Tag
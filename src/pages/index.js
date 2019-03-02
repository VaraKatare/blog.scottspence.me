import { graphql, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import useSiteMetadata from '../components/SiteMetadata'

const Wrapper = styled.div``

const PostWrapper = styled.div`
  margin: 0.5rem;
  padding: 1rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: white;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.fontBody};
  color: ${({ theme }) => theme.fontLight};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const PostTitle = styled.div`
  font-family: ${({ theme }) => theme.fontHeader};
  font-weight: 700;
  font-size: 2rem;
  color: ${({ theme }) => theme.fontLight};
  margin: 0rem;
  padding: 0rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`

const PostedDate = styled.p`
  margin: 0.05rem;
  color: ${({ theme }) => theme.fontLight};
`

export default ({ data }) => {
  const { description, imageLink, title } = useSiteMetadata()
  return (
    <Layout>
      <SEO
        title={title}
        description={description || 'nothin’'}
        image={imageLink}
      />
      <Wrapper>
        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <PostWrapper key={index}>
            <StyledLink to={node.frontmatter.path}>
              <PostTitle>{node.frontmatter.title}</PostTitle>
              <PostedDate>{node.frontmatter.date}</PostedDate>
              <p>{node.excerpt}</p>
            </StyledLink>
          </PostWrapper>
        ))}
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            path
            date(formatString: "YYYY MMMM Do")
            published
          }
        }
      }
    }
  }
`

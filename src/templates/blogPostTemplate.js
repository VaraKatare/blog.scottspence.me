import { graphql, Link } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import PropTypes from 'prop-types'
import React from 'react'
import Utterances from 'react-utterances'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { HappyButton } from '../components/Shared'
// import { Dump } from '../utils/helpers'

const repo = 'spences10/blog.scottspence.me'

// add prismjs theme
// require('prismjs/themes/prism-solarizedlight.css')

// Title
// Date
// Content
// Navigation

const Title = styled.h1`
  margin: 0rem;
  padding: 0rem;
  font-family: ${({ theme }) => theme.fontHeader};
  color: ${({ theme }) => theme.secondary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`

const TitleDate = styled.p`
  margin: 0rem;
  padding: 0rem;
  font-family: ${({ theme }) => theme.fontBody};
  color: ${({ theme }) => theme.fontLight};
  border-bottom: 1px solid ${({ theme }) => theme.background};
`

const PostWrapper = styled.div`
  margin: 0.5rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.foreground};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`

const LinksWrapper = styled.div`
  display: grid;
  grid-template-areas: 'prev next';
`

const LinkWrapper = styled.div`
  display: grid;
  justify-items: ${props => props.justify};
`

const PrevNextButton = styled(HappyButton)`
  margin: 0.5rem 0rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};
`

const blogPostLayout = ({ data, pageContext }) => {
  const post = data.mdx
  const { prev, next } = pageContext
  const { imageLink } = data.site.siteMetadata
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt || 'nothin’'}
        image={imageLink}
        pathname={post.frontmatter.path}
        keywords={post.frontmatter.tags}
        article
      />
      {/* <Dump props={post.frontmatter} /> */}
      <PostWrapper>
        <Title>{post.frontmatter.title}</Title>
        <TitleDate>{post.frontmatter.date}</TitleDate>
        <MDXRenderer>{post.code.body}</MDXRenderer>
        <LinksWrapper>
          <LinkWrapper justify={'start'}>
            {prev === false ? null : (
              <div>
                {prev && (
                  <Link to={prev.frontmatter.path}>
                    <PrevNextButton area={'prev'}>
                      {prev.frontmatter.title}
                    </PrevNextButton>
                  </Link>
                )}
              </div>
            )}
          </LinkWrapper>
          <LinkWrapper justify={'end'}>
            {next === false ? null : (
              <div>
                {next && (
                  <Link to={next.frontmatter.path}>
                    <PrevNextButton area={'next'}>
                      {next.frontmatter.title}
                    </PrevNextButton>
                  </Link>
                )}
              </div>
            )}
          </LinkWrapper>
        </LinksWrapper>
        <Utterances repo={repo} type={'url'} />
      </PostWrapper>
    </Layout>
  )
}

export default blogPostLayout

blogPostLayout.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any
}

export const query = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      code {
        body
        scope
      }
      excerpt(pruneLength: 250)
      frontmatter {
        title
        path
        tags
        date(formatString: "YYYY MMMM Do")
        published
      }
    }
    site {
      siteMetadata {
        imageLink
      }
    }
  }
`

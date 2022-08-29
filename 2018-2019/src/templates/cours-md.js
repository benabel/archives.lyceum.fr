import React from 'react'
import { graphql } from 'gatsby'

import Cours from '../components/cours'

export default ({ data, location }) => {
  const course = data.markdownRemark

  return <Cours course={course} data={data} location={location} />
}

export const query = graphql`
  query MDCourseQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents(maxDepth: 3)
      frontmatter {
        tags
      }
      fields {
        classe
        chapter
        matter
        nChapter
        part
        nPart
      }
    }
  }
`

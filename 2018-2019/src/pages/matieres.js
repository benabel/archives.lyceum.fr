// Components
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import slugify from 'slugify'

const MatterPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title + ` | Matières`} />
    <div>
      <h1>Matières</h1>
      <ul>
        {group.map(matter => (
          <li key={matter.fieldValue}>
            <Link to={`/${slugify(matter.fieldValue)}/`}>
              {matter.fieldValue} ({matter.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

MatterPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default MatterPage

export const pageQuery = graphql`
  query MatterQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: fields___matter) {
        fieldValue
        totalCount
      }
    }
  }
`

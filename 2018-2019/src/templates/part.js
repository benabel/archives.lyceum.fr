import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { CardColumns, Jumbotron } from 'reactstrap'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import BreadcrumbNav from '../components/breadcrumb-nav'
import { flattenFileNode } from '../helpers'
// eslint-disable-next-line
import { fileInfosFragment } from '../fragments/fragment-file'

const Part = ({ pageContext, data, location }) => {
  const { classe, matter, nPart, part } = pageContext.part
  // aplat des objets
  let nodes = data.allFile.edges.map(flattenFileNode)
  // on filtre ici
  // TODO filtrer dans la requête graphql
  nodes = nodes.filter(
    node =>
      node.classe === classe &&
      node.matter === matter &&
      node.nPart === nPart &&
      node.part === part
  )

  const totalCount = nodes.length
  const partHeader = `${totalCount} chapitre${
    totalCount === 1 ? `` : `s`
  } dans la partie ${nPart}.${part}`

  return (
    <Layout location={location} data={data}>
      <BreadcrumbNav node={pageContext.part} />
      <Jumbotron>
        <h1> {partHeader} </h1>
      </Jumbotron>
      <CardColumns>
        {nodes.map(node => (
          <ArticlePreview key={node.id} node={node} />
        ))}
      </CardColumns>
    </Layout>
  )
}

Part.propTypes = {
  pageContext: PropTypes.shape({
    part: PropTypes.shape({ part: PropTypes.string.isRequired }),
  }),
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            modifiedTime: PropTypes.string.isRequired,
            childMarkdownRemark: PropTypes.shape({
              fields: PropTypes.shape({
                matter: PropTypes.string.isRequired,
                chapter: PropTypes.string.isRequired,
                part: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
              }),
            }),
          }),
        })
      ),
    }),
  }),
}

//
//

export default Part

export const query = graphql`
  query PartPage {
    allFile(
      filter: { sourceInstanceName: { eq: "courses" }, ext: { eq: ".md" } }
      sort: { fields: [relativePath] }
    ) {
      edges {
        node {
          ...FileInfos
        }
      }
    }
  }
`

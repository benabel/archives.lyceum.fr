import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { CardColumns, Jumbotron } from 'reactstrap'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import BreadcrumbNav from '../components/breadcrumb-nav'

import { flattenFileNode, classeNameFromClasse } from '../helpers'
// eslint-disable-next-line
import { fileInfosFragment } from '../fragments/fragment-file'

const Classe = ({ pageContext, data, location }) => {
  const { classe } = pageContext

  // aplat des objets
  let nodes = data.allFile.edges.map(flattenFileNode)
  // on filtre ici
  // TODO filtrer dans la requête graphql
  nodes = nodes.filter(node => node.classe === classe)
  const totalCount = nodes.length
  const classeHeader = `${totalCount} chapitre${
    totalCount === 1 ? `` : `s`
  } en ${classeNameFromClasse(classe)}`

  return (
    <Layout location={location} data={data}>
      <BreadcrumbNav node={pageContext} />
      <Jumbotron>
        <h1> {classeHeader} </h1>
      </Jumbotron>
      <CardColumns>
        {nodes.map(node => (
          <ArticlePreview
            key={node.id}
            node={node}
            dataShowMatter
            dataShowPart
          />
        ))}
      </CardColumns>
    </Layout>
  )
}

Classe.propTypes = {
  pageContext: PropTypes.shape({
    classe: PropTypes.string.isRequired,
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
                classe: PropTypes.string.isRequired,
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

export default Classe

export const query = graphql`
  query ClassePage {
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

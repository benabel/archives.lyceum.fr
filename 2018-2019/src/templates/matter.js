import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { CardColumns, Jumbotron } from 'reactstrap'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import PartPreview from '../components/part-preview'
import BreadcrumbNav from '../components/breadcrumb-nav'

import {
  flattenFileNode,
  matterNameFromMatter,
  classeNameFromClasse,
} from '../helpers'
// eslint-disable-next-line
import { fileInfosFragment } from '../fragments/fragment-file'

const Matter = ({ pageContext, data, location }) => {
  const { matter, classe } = pageContext

  //
  //parties
  //
  let partNodes = data.allSitePage.edges.map(flattenFileNode)

  // on filtre ici
  // TODO filtrer dans la requête graphql
  partNodes = partNodes.filter(
    node => node.matter === matter && node.classe === classe
  )

  const totalCount = partNodes.length
  const matterHeader = `${totalCount} partie${
    totalCount === 1 ? `` : `s`
  } en ${matterNameFromMatter(matter)} ${classeNameFromClasse(classe)}`

  //
  // derniers chapitres
  //
  // aplat des objets
  let chapterNodes = data.allFile.edges.map(flattenFileNode)

  // on filtre ici
  // TODO filtrer dans la requête graphql
  chapterNodes = chapterNodes.filter(
    node => node.matter === matter && node.classe === classe
  )
  chapterNodes = chapterNodes.slice(0, 3)

  return (
    <Layout location={location} data={data}>
      <BreadcrumbNav node={pageContext} />
      <Jumbotron>
        <h1> {matterHeader} </h1>
      </Jumbotron>
      <CardColumns>
        {partNodes.map(node => (
          <PartPreview key={node.id} node={node} />
        ))}
      </CardColumns>
      <h4>Derniers chapitres</h4>
      <CardColumns>
        {chapterNodes.map(node => (
          <ArticlePreview key={node.id} node={node} dataShowPart />
        ))}
      </CardColumns>
    </Layout>
  )
}

Matter.propTypes = {
  pageContext: PropTypes.shape({
    matter: PropTypes.string.isRequired,
    classe: PropTypes.string.isRequired,
  }),
  location: PropTypes.string.isRequired,

  // TODO proptype allpage au lieu de allfile
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          partNode: PropTypes.shape({
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

export default Matter

export const query = graphql`
  query MatterPage {
    allSitePage(
      filter: { componentPath: { regex: "/.*/part.js/" } }
      sort: { fields: [path] }
    ) {
      edges {
        node {
          componentPath
          path
          context {
            part {
              classe
              matter
              nPart
              part
              slug
            }
          }
        }
      }
    }
    allFile(
      filter: { sourceInstanceName: { eq: "courses" }, ext: { eq: ".md" } }
      sort: { order: DESC, fields: [modifiedTime] }
    ) {
      edges {
        node {
          ...FileInfos
        }
      }
    }
  }
`

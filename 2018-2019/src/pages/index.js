import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import { CardColumns, Jumbotron } from 'reactstrap'

import { flattenFileNode } from '../helpers'
// eslint-disable-next-line
import { fileInfosFragment } from '../fragments/fragment-file'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

export default ({ data, location }) => {
  // aplat des objets
  let nodes = data.allFile.edges.map(flattenFileNode)

  return (
    <Layout location={location} data={data}>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="KfYc3mIfangzLM7QowtUdL8oga-pfNKnjfFcqsJ6h_4"
        />
        <meta name="msvalidate.01" content="23C4486B3F6CCCF85A73AA582BA8DF9E" />
        <meta
          name="keywords"
          content="cours, lycée, physique, chimie, informatique, isn, nsi, snt"
        />
        <meta
          name="description"
          content="Un site open-source pour les lycéens."
        />
        <meta
          name="classification"
          content="lycée cours physique chimie informatique"
        />
        <meta name="author" content="Benjamin Abel" />
        <link rel="canonical" href="https://lyceum.fr" />
      </Helmet>
      <Jumbotron>
        <h1>Derniers cours</h1>
      </Jumbotron>
      <CardColumns>
        {nodes.map(node => (
          <ArticlePreview
            key={node.id}
            node={node}
            dataShowClasse
            dataShowMatter
            dataShowPart
            dataShowModifiedTime
          />
        ))}
      </CardColumns>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    allFile(
      limit: 6
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

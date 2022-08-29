import React from 'react'
import Helmet from 'react-helmet'

import { Container } from 'reactstrap'

import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

import 'prismjs/themes/prism-solarizedlight.css'

import '../scss/layout.scss'

// feuille de style pour l'impression
// TODO chargement conditionnel à la reveal ?print-pdf dans l'adresse
import '../assets/paper.css'

export default ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <>
        <Helmet defaultTitle="lyceum.fr">
          <html lang="fr" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="lyceum.fr" />
          <meta
            property="og:description"
            content="Un site open-source pour les lycéens."
          />
          <meta
            property="og:url"
            content={`https://lyceum.fr${location.pathname}`}
          />
          <link
            rel="canonical"
            href={`https://lyceum.fr${location.pathname}`}
          />
        </Helmet>
        <Header pathname={location.pathname} data={data} />
        <Container>{children}</Container>
        <Footer />
      </>
    )}
  />
)

import React from 'react'
import Helmet from 'react-helmet'

import { Jumbotron, Button, UncontrolledTooltip } from 'reactstrap'
import { FaChevronUp } from 'react-icons/fa'

import BreadcrumbNav from '../components/breadcrumb-nav'

import Layout from './layout'
import {
  flattenFileNode,
  matterNameFromMatter,
  classeNameFromClasse,
  classeWikidataURIFromClasse,
} from '../helpers'

import 'katex/dist/katex.min.css'

export default ({ course, data, location }) => {
  course = flattenFileNode(course)

  const title = `${course.classe} | ${course.matter} | ${course.part} | ${
    course.chapter
  }`

  const description = `Cours de ${classeNameFromClasse(
    course.classe
  )} en ${matterNameFromMatter(course.matter)} intitulé: «${course.chapter}»`

  let htmlToc = course.tableOfContents
  // peut-être un bug dans le plugin?
  htmlToc = htmlToc.replace(/&#x3C;/gi, `<`).replace(/(<p>|<\/p>)/gi, ``)
  // .replace(/^<ul>/i, `<ListGroup>`)
  // .replace(/<\/ul>$/i, `</ListGroup>`)
  //.replace(/<li>/gi, `<li class="display-4">`)
  // .replace(/<\/li>/gi, `</ListGroupItem>`)

  return (
    <Layout location={location} data={data}>
      <Helmet
        title={`${title}`}
        meta={[
          {
            name: `description`,
            description: `${description}`,
          },
          { name: `keywords`, content: course.tags.join(`, `) },
        ]}
      >
        <script type="application/ld+json">{`
         {"@context": "http://schema.org/",
          "@type": "Course",
          "name": "${course.part} | ${course.chapter}",
          "description": "${description}",
          "learningResourceType": [
            "lesson"    ],
          "provider": {
            "@type": "schema:EducationalOrganization",
            "name": "lyceum.fr"
          },
          "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "student"
          },
          "educationalAlignment": {
            "@type": "AlignmentObject",
            "alignmentType": "educationalLevel",
            "educationalFramework": "French Grade Levels",
            "targetName": "${classeNameFromClasse(course.classe)}",
            "@id": "${classeWikidataURIFromClasse(course.classe)}"
          },
          "url": "${location.href}"
        }
    `}</script>
      </Helmet>
      <BreadcrumbNav node={course} />
      <Jumbotron>
        <h1 className="display-1">{`Chapitre ${course.nChapter}: ${
          course.chapter
        }`}</h1>
        <hr className="my-5" />
        <div className="toc" id="toc">
          <h4>
            <strong className="display-4">Plan</strong>
          </h4>
          <div dangerouslySetInnerHTML={{ __html: htmlToc }} />
        </div>
        <a href="#toc">
          <Button id="toc-button" color="warning">
            <FaChevronUp />
          </Button>
          <UncontrolledTooltip placement="left" target="toc-button">
            Plan du cours
          </UncontrolledTooltip>
        </a>
      </Jumbotron>
      <div dangerouslySetInnerHTML={{ __html: course.html }} />
    </Layout>
  )
}

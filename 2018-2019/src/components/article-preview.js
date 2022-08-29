import React from 'react'
import { Link } from 'gatsby'

import ClasseBadge from '../components/classe-badge'
import MatterBadge from '../components/matter-badge'
import TagBadges from '../components/tag-badges'

import { partPathFromNode } from '../helpers'

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from 'reactstrap'

export default ({
  node,
  dataShowClasse,
  dataShowMatter,
  dataShowPart,
  dataShowModifiedTime,
}) => {
  const Part = () => (
    <Link to={partPathFromNode(node)}>
      Partie {node.nPart}-{node.part}
    </Link>
  )
  const MatterPart = () => {
    if (dataShowClasse || dataShowMatter || dataShowPart) {
      return (
        <CardSubtitle>
          {dataShowClasse && <ClasseBadge classe={node.classe} />}
          {dataShowMatter && <MatterBadge node={node} />}
          {dataShowPart && <Part />}
        </CardSubtitle>
      )
    } else return null
  }

  // options d'affichage des dates
  const dateOptions = {
    weekday: `short`,
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  }
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>
          <Link to={`/` + node.slug}>
            Chapitre {node.nChapter}
            :&nbsp;
            {node.chapter}
          </Link>
        </CardTitle>
        <MatterPart />
      </CardHeader>
      <CardBody>
        <TagBadges node={node} />
      </CardBody>
      {dataShowModifiedTime && (
        <CardFooter>
          <p className="text-muted text-right">
            <em>
              Mis à jour le&nbsp;
              <time dateTime={node.modifiedTime}>
                {new Date(node.modifiedTime).toLocaleDateString(
                  `fr-FR`,
                  dateOptions
                )}
              </time>
            </em>
          </p>
        </CardFooter>
      )}
    </Card>
  )
}

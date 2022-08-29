import React from 'react'
import { Link } from 'gatsby'

import ClasseBadge from './classe-badge'
import MatterBadge from './matter-badge'

import { partPathFromNode } from '../helpers'

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from 'reactstrap'

export default ({ node }) => {
  const Part = () => (
    <Link to={partPathFromNode(node)}>
      Partie {node.nPart}-{node.part}
    </Link>
  )
  const MatterPart = () => (
    <CardSubtitle>
      <ClasseBadge classe={node.classe} />
      <MatterBadge node={node} />
    </CardSubtitle>
  )

  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>
          <Link to={`/` + node.slug}>
            Partie {node.nPart}
            :&nbsp;
            {node.part}
          </Link>
        </CardTitle>
        <CardBody>
          <MatterPart />
        </CardBody>
      </CardHeader>
    </Card>
  )
}

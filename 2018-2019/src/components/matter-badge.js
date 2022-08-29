import React from 'react'

import { Link } from 'gatsby'

import { colors } from '../theme'
import { Badge } from 'reactstrap'

const MatterBadge = ({ node }) => (
  <Link to={`/` + node.classe + `/` + node.matter}>
    <Badge color={colors.matters[node.matter]} pill>
      {node.matter.toUpperCase()}
    </Badge>
    {`\u00A0`}
  </Link>
)

export default MatterBadge

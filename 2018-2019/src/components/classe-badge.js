import React from 'react'

import { Link } from 'gatsby'

import { colors } from '../theme'
import { Badge } from 'reactstrap'

const ClasseBadge = ({ classe }) => (
  <Link to={`/` + classe}>
    <Badge color={colors.classes[classe]}>{classe.toUpperCase()}</Badge>
    {`\u00A0`}
  </Link>
)

export default ClasseBadge

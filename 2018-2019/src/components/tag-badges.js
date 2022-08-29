import React from 'react'

import { colors } from '../theme'

import { Badge } from 'reactstrap'

export default ({ node }) =>
  node.tags.map(function(tag, i) {
    const bcolor =
      colors.bootstrap[Math.floor(Math.random() * colors.bootstrap.length)]
    return (
      <Badge key={i} color={bcolor}>
        {tag}
      </Badge>
    )
  })

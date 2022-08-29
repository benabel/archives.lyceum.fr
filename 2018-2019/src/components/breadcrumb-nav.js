import React from 'react'
import { Link } from 'gatsby'
import { GoHome } from 'react-icons/go'

import { partPathFromNode } from '../helpers'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default ({ node }) => {
  const isChapter = node.nChapter
  const isPart = node.nPart && !node.nChapter
  const isMatter = node.matter && !node.nPart
  const isClasse = node.classe && !node.matter

  let partString, partPath
  if (isPart || isChapter) {
    partString = `Partie ${node.nPart}: ${node.part}`
    partPath = partPathFromNode(node)
  }

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">
          <GoHome />
        </Link>
      </BreadcrumbItem>

      <BreadcrumbItem active={isClasse}>
        {isClasse ? (
          node.classe
        ) : (
          <Link to={`/` + node.classe}>{node.classe}</Link>
        )}
      </BreadcrumbItem>

      {!isClasse && (
        <BreadcrumbItem active={isMatter}>
          {isMatter ? (
            node.matter
          ) : (
            <Link to={`/` + node.classe + `/` + node.matter}>
              {node.matter}
            </Link>
          )}
        </BreadcrumbItem>
      )}

      {!isClasse && !isMatter && (
        <BreadcrumbItem active={isPart}>
          {isPart ? partString : <Link to={partPath}>{partString}</Link>}
        </BreadcrumbItem>
      )}
      {isChapter && (
        <BreadcrumbItem active>
          {`Chapitre ${node.nChapter}: ${node.chapter}`}
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  )
}

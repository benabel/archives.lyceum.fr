import { graphql } from 'gatsby'
// infos récupérées sur les noeuds de fichiers
export const fileInfosFragment = graphql`
  fragment FileInfos on File {
    id
    modifiedTime
    childMarkdownRemark {
      frontmatter {
        tags
      }
      fields {
        slug
        classe
        matter
        nPart
        part
        nChapter
        chapter
      }
    }
  }
`

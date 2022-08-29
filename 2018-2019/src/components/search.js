import React, { Component } from 'react'
import { Index } from 'elasticlunr'

import TagBadges from '../components/tag-badges'
import ClasseBadge from '../components/classe-badge'
import MatterBadge from '../components/matter-badge'

import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Input,
  InputGroup,
  InputGroupAddon,
  NavItem,
} from 'reactstrap'
import { GoSearch } from 'react-icons/go'
import { Link } from 'gatsby'

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: ``,
      results: [],
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(() => {
      return {
        query: ``,
        results: [],
      }
    })
  }

  render() {
    return (
      <NavItem>
        <InputGroup>
          <Input
            placeholder="Rechercher"
            value={this.state.query}
            onChange={this.search}
          />
          <InputGroupAddon addonType="append">
            <Button disabled>
              <GoSearch />
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <ListGroup style={{ position: `absolute` }}>
          {this.state.results.map(page => (
            <ListGroupItem className="justify-content-between">
              <ClasseBadge classe={page.classe} />
              <MatterBadge node={page} />

              <Link to={`/` + page.path} onClick={this.handleClick}>
                <ListGroupItemHeading>{page.title}</ListGroupItemHeading>
              </Link>
              <TagBadges node={page} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </NavItem>
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.data.siteSearchIndex.index)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()

    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {
          fields: {
            title: { boost: 1 },
            tags: { boost: 1 },
            matter: { boost: 2 },
          },
          expand: true, // Accept partial matches,
        })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}

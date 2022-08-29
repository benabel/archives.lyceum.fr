import React from 'react'
import { Link } from 'gatsby'

import Search from './search'
import { colors, media } from '../theme'
import logoSvg from '../assets/logo-white.svg'
import iconSvg from '../assets/icon-white.svg'
import { FiGitlab } from 'react-icons/fi'
import { FaHistory } from 'react-icons/fa'

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

const MyNavbarBrand = () => (
  <Link to="/">
    <picture css={{ margin: `3px auto`, height: `36px` }}>
      <source
        media={`(min-width: ${media.min(`small`)}px)`}
        srcSet={logoSvg}
        css={{ height: `36px` }}
      />
      <img src={iconSvg} alt="logo lyceum.fr" css={{ height: `36px` }} />
    </picture>
  </Link>
)

//TODO: gérer l'activation ici
const MyNavLink = ({ to, color = `primary`, isActive, children }) => (
  <Link to={to}>
    <Button color={color} active={isActive}>
      {children}
    </Button>
  </Link>
)

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Navbar color="primary" dark expand="md">
        <NavbarBrand tag={MyNavbarBrand} />
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href="https://gitlab.com/lyceum.fr"
                title="Code source du site sur gitlab.com"
              >
                <FiGitlab size={26} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://archives.lyceum.fr"
                title="Archives des années précédentes"
              >
                <FaHistory size={26} />
              </NavLink>
            </NavItem>
            <NavItem>
              <MyNavLink
                to="/2gt/"
                color={colors.classes[`2gt`]}
                isActive={this.props.pathname.includes(`/2gt/`) ? true : false}
              >
                2<sup>de</sup>
              </MyNavLink>
            </NavItem>
            <NavItem>
              <MyNavLink
                to="/1g/"
                color={colors.classes[`1g`]}
                isActive={this.props.pathname.includes(`/1g/`) ? true : false}
              >
                1<sup>ère</sup>
              </MyNavLink>
            </NavItem>
            <NavItem>
              <MyNavLink
                to="/ts/"
                color={colors.classes[`ts`]}
                isActive={this.props.pathname.includes(`/ts/`) ? true : false}
              >
                T<sup>le</sup>S
              </MyNavLink>
            </NavItem>
            <Search data={this.props.data} />
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

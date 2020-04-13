import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
      background: `rgb(252, 124, 2)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `300px`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <StyledLink to="/">{siteTitle}</StyledLink>
    </div>
    <div
      style={{
        display: `flex`,
        listStyleType: `none`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <StyledLink to="/">Happy Hour</StyledLink>
      <StyledLink to="/">Menu</StyledLink>
      <StyledLink to="/">Catering</StyledLink>
      <StyledLink to="/">About Us</StyledLink>
    </div>
  </header>
)

export default Header

import React from "react"
import styled from "styled-components/macro"

import { COLORS, WEIGHTS, QUERIES } from "../../constants"
import Logo from "../Logo"
import SuperHeader from "../SuperHeader"
import MobileMenu from "../MobileMenu"
import UnstyledButton from "../UnstyledButton"
import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false)

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Side>
                    <Logo />
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <MobileNav>
                    <UnstyledButton>
                        <Icon id="shopping-bag" />
                        <VisuallyHidden>Open Shopping Bag</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton>
                        <Icon id="search" />
                        <VisuallyHidden>Search</VisuallyHidden>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" />
                        <VisuallyHidden>Menu Button</VisuallyHidden>
                    </UnstyledButton>
                </MobileNav>
                <ConditionalSide />
            </MainHeader>

            <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
        </header>
    )
}

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};

    @media ${QUERIES.tabletAndSmaller} {
        border-top: 4px solid ${COLORS.gray[900]};
        padding: 18px 24px;
    }

    @media ${QUERIES.tabletAndSmaller} {
        padding: 18px 22px;
    }
`

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    margin: 0px 48px;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`

const MobileNav = styled.nav`
    display: none;

    @media ${QUERIES.tabletAndSmaller} {
        display: flex;
        gap: 37px;
        align-items: flex-end;
    }

    @media ${QUERIES.phoneAndSmaller} {
        gap: 20px;
    }
`

const Side = styled.div`
    flex: 1;
`

const ConditionalSide = styled.div`
    flex: 1;

    @media ${QUERIES.tabletAndSmaller} {
        display: none;
    }
`

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`

export default Header

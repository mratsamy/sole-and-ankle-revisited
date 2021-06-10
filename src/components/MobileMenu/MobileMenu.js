/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components/macro"
import { DialogOverlay, DialogContent } from "@reach/dialog"

import { COLORS } from "../../constants"

import UnstyledButton from "../UnstyledButton"
import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss} aria-label="stuff">
            <Content>
                <CloseButton onClick={onDismiss}>
                    <Icon id="close" />
                    <VisuallyHidden> Dismiss menu</VisuallyHidden>
                </CloseButton>
                <Nav>
                    <NavLink style={{ color: COLORS.secondary }} href="/sale">
                        Sale
                    </NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
                <Footer>
                    <FooterLink href="/terms">Terms and Conditions</FooterLink>
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                </Footer>
            </Content>
        </Overlay>
    )
}

const CloseButton = styled(UnstyledButton)`
    margin: 32px 32px 0 auto;
`

const Overlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: hsl(220deg 5% 40% / 0.8);
    height: 100%;
    width: 100%;
`

const Content = styled(DialogContent)`
    background: white;
    margin-left: auto;
    height: 100%;
    display: flex;
    width: 85%;
    flex-direction: column;
    justify-content: space-between;
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    gap: 32px;
`

const NavLink = styled.a`
    color: ${COLORS.gray[900]};
    text-decoration: none;
    size: ${18 / 16}rem;
    text-transform: uppercase;
`

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    gap: 14px;
    margin-bottom: 32px;
`

const FooterLink = styled.a`
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: ${14 / 16}rem;
`

export default MobileMenu

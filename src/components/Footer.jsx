import React from 'react';
import { FooterContainer, FooterLogo } from '../styles/styled-components';
import  logo  from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterLogo>
                <Link to='/'> <img src={ logo } alt="Logo"/> </Link>
                </FooterLogo>
            </FooterContainer>
        </>);
}

import React from 'react';
import styled from 'styled-components';
import { Container } from '../style/Container';
import ReactTypingEffect from 'react-typing-effect';
import {VscGithub} from 'react-icons/vsc';
import { Flex } from '../style/Flex';

function Footer() {
  return (
    <FooterContainer>
        <Container >
            <Flex>
                <h3>
                    <ReactTypingEffect speed={60} eraseDelay={100} text={'developed by Noppawat3939 '} />
                </h3>
                <a href="https://github.com/Noppawat3939" target='_blank'><VscGithub/></a>
            </Flex>
        </Container>
    </FooterContainer>
  )
}

export default Footer;

export const FooterContainer = styled.footer`
    border: 1px solid rgba(0,0,0,.06);

    div {
        position: relative;
    }

    h3 {
        color: #333;
        letter-spacing: 2px;
        font-size: 15px;
        font-weight: 500;
    }
    
    a {
        position: absolute;
        right: 0;
        color: #333;
        font-size: 24px;
        transition: .3s ease-in-out;
    }
`;
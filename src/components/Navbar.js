import React, {useState, useEffect} from 'react';
import SearchForm from './SearchForm';
import styled from 'styled-components';
import { Flex } from '../style/Flex';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [navChange, setNavChange] = useState(false);

    const control = () => {
        if(window.scrollY > 200) {
            setNavChange(true);
        }
        else {
            setNavChange(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', control)
        return () => {
            window.removeEventListener('scroll', control)
        }
    },[]);

  return (
    <Nav style={{backgroundColor:`${navChange ? 'orange':'#fff'}`}}>
        <Flex flexd='column' >
            <NavLink to='/'>
                <h1 style={{color:`${navChange ? '#fff' : '#000'}`}}>My food app</h1>
            </NavLink>
            <SearchForm navChange={navChange} />
        </Flex>
    </Nav>
  )
}

export default Navbar;

export const Nav = styled.div`
    padding: 10px;
    position: sticky;
    top: 0;
    width: 100%;
    transition : .3s ease-in-out;
    z-index: 999;
    box-shadow: 0 0 2px 3px rgba(0,0,0,.05);

    h1 {
        margin-bottom: 10px;
        font-weight: 500;
        letter-spacing: 2px;
    }
`;
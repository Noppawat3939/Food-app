import React,{useEffect} from 'react'
import { useGlobalContext } from '../context';
import styled from 'styled-components';
import { Flex } from '../style/Flex';
import {AiOutlineSearch} from 'react-icons/ai';

function SearchForm({navChange}) {
    const {setSearchTerm, searchValue} = useGlobalContext();

    const changeInput = () => {
        setSearchTerm(searchValue.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
  return (
    <SearchFormContainer>
        <form onSubmit={handleSubmit}>
            <Flex>
            <AiOutlineSearch style={{color:`${navChange ? '#000' : 'orange'}`}}/>
            <input
                type="text"
                placeholder='What your favorite food ?'
                ref={searchValue}
                onChange={changeInput}
                />
            </Flex>
        </form>
    </SearchFormContainer>
  )
}

export default SearchForm

export const SearchFormContainer = styled.div`

    div {
        border-radius: 50px;
        border: 1px solid lightgray;
        padding: 5px;
        width: 250px;
    }

    input {
        width: 100%;
        margin-left: 5px;
        cursor: pointer;
    }

    input::placeholder {
        color: #333;
        letter-spacing: 1px;
    }

    svg {
        font-size: 20px;
    }
`;
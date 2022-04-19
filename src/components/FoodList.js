import React, {useState} from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Food from './Food';
import { Grid } from '../style/Grid';
import {CgMenuGridO} from 'react-icons/cg';
import {AiOutlineBars} from 'react-icons/ai';
import { Flex } from '../style/Flex';
import { Container } from '../style/Container';

function FoodList() {
    const {loading, foods} = useGlobalContext();
    const [grid, setGrid] = useState(true);

    if(loading) {
        return <Loading />
    }
    if(foods.length < 1) {
        return (
            <FoodListContainer>
                <h2>Your search didn't match</h2>
            </FoodListContainer>
        )
    }

  return (
    <FoodListContainer>
        <Container pd='20px 30px'>
        <Flex jusc='space-between' marb='20px'>
            <h1>All meal <span>{foods.length}</span></h1>
            <button
                onClick={() => setGrid(!grid)}
            >
                {grid ? <CgMenuGridO/> : <AiOutlineBars />}
            </button>
        </Flex>
        {grid ?
            <Grid>
            {foods.map((item) => {
                return (
                    <Food key={item.id} {...item} />
                )
            })}
            </Grid> :
            <div>
                <Container pd='1rem 3rem' >
                {foods.map((item) => {
                return (
                    <Food key={item.id} {...item} />
                )})}
                </Container>
            </div>
        }
        </Container>
    </FoodListContainer>
  )
}

export default FoodList;

export const FoodListContainer = styled.div`

    div > button > svg {
        font-size: 35px;
        border-radius: 10px;
        padding: 5px;
        color: #000;
        border: 1px solid gray;
    }

    h2 {
        text-align: center;
        font-size: 30px;
        letter-spacing: 2px;
    }

    h1 {
        font-weight: 500;
        font-size: 22px;
    }

    h1 > span {
        color: orange;
        font-weight: 600;
    }
`;
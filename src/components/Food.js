import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Image } from '../style/Image';
import { Button } from '../style/Button';
import { Flex } from '../style/Flex';

function Food({...item}) {
    const {name, image, id, category} = item;
  return (
    <FoodContainer>
        <div>
            <Image src={image} />
        </div>
        <Flex jusc='space-between'>
            <Flex flexd='column' ali='flex-start'>
                <h2>{name}</h2>
                <h4>
                    <NavLink to={`category/${category}`}>{category}</NavLink>
                </h4>
            </Flex>
            <Button>
                <NavLink to={`food/${id}`}>more</NavLink>
            </Button>
        </Flex>
    </FoodContainer>
  )
}

export default Food;

export const FoodContainer = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0 -2px 5px 2px rgba(0,0,0,.05);

    > div:nth-child(1) {
        overflow: hidden;
        width: 100%;
        height: 300px;
        margin-bottom: 10px;
    }

    > div:nth-child(1):hover > img {
        transform: scale(1.1);
    }

    h2 {
        font-size: 17px;
        margin-bottom: 5px;
        text-align: start;
        color: #222;
    }

    h4 > a {
        color: orange;
        text-align: start;
        font-size: 12px;
        text-transform: uppercase;
        transition: .3s ease-in-out;
        font-family: Arial, Helvetica, sans-serif;
    }

    h4 > a:hover {
        color: #333;
    }
`;
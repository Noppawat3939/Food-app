import React from 'react';
import styled from 'styled-components';
import { Image } from '../style/Image';
import { NavLink, useParams } from 'react-router-dom';
import { Grid } from '../style/Grid';

function FoodCategory({...item}) {
    const {id, name, image} = item;

  return (
    <FoodCategoryContainer>
            <Image src={image} rad='5px' />
            <h3>{name}</h3>
    </FoodCategoryContainer>
  )
}

export default FoodCategory

export const FoodCategoryContainer = styled.div`
    height: max-content;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 -1px 5px 2px rgba(0,0,0,.05);
    padding: 10px 15px 15px;

    h3 {
        font-size: 15px;
        margin: 5px 0;
        color: #333333;
    }
`;
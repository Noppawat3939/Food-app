import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import {useParams, NavLink} from 'react-router-dom';
import FoodCategory from '../components/FoodCategory';
import { Grid } from '../style/Grid';
import { Button } from '../style/Button';
import { Container } from '../style/Container';
import { Flex } from '../style/Flex';

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

function Category() {
    const {category} = useParams();
    const [cateMeal ,setCateMeal] = useState([]);
    const [loading, setLoading] = useState(true);

    const CategoryMeals = async() => {
        try {
            const resp = await fetch(`${URL}${category}`);
            const data = await resp.json();
            const {meals} = data;
            if(meals) {
                const newItem = meals.map((meal) => {
                    const {idMeal, strMeal, strMealThumb} = meal;
                    return { id:strMealThumb, name:strMeal, image: strMealThumb }
                })
                setCateMeal(newItem);
            }else {
                setCateMeal([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        CategoryMeals()
    }, []);

    if(loading) {
        return <Loading />
    }

  return (
    <>
    <CategoryContainer>
        <Navbar />
        <Container pd='20px 30px'>
            <Flex jusc='space-between' marb='10px' >
            <h1>Category
                <span> #{category}</span>
            </h1>
            <h1>{cateMeal.length} list</h1>
            </Flex>
            <Grid minmax='280px' >
                {cateMeal.map((item) => {
                    return <FoodCategory {...item} key={item.id} />
                })}
            </Grid>
            <Button>
                <NavLink to='/'>back</NavLink>
            </Button>
        </Container>
    </CategoryContainer>
    </>
  )
}

export default Category

export const CategoryContainer = styled.div`

    div > h1  {
        margin-bottom: 10px;
        font-size: 18px;
        letter-spacing: 3px;
    }

    div > h1 > span {
        color: orange;
    }

    div:nth-child(1) > div > form {
        display: none;
    }

    button {
        margin-top: 20px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
`;
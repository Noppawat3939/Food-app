import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { useParams, NavLink } from 'react-router-dom';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import { Button } from '../style/Button';
import { Image } from '../style/Image';
import { Flex } from '../style/Flex';
import {AiFillYoutube} from 'react-icons/ai';
import { Grid } from '../style/Grid';
import { Container } from '../style/Container';

const URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

function FoodDetail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [food, setFood] = useState(null);
    const [readMore, setReadMore] = useState(false);

    const getFoods = async() => {
        try {
            const resp = await fetch(`${URL}${id}`);
            const data = await resp.json();
            if(data.meals) {
                const {
                    strMeal:name,
                    strArea:area,
                    strCategory:category,
                    strMealThumb:image,
                    strInstructions: info,
                    strYoutube: video,
                    strSource: source,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                    strIngredient6,
                    strIngredient7,
                    strIngredient8,
                    strIngredient9,
                    strIngredient10,
                    strIngredient11,
                    strIngredient12,
                    strIngredient13,
                    strIngredient14,
                    strIngredient15,
                    strIngredient16,
                    strIngredient17,
                    strIngredient18,
                    strIngredient19,
                    strIngredient20,
                    strMeasure1,
                    strMeasure2,
                    strMeasure3,
                    strMeasure4,
                    strMeasure5,
                    strMeasure6,
                    strMeasure7,
                    strMeasure8,
                    strMeasure9,
                    strMeasure10,
                    strMeasure11,
                    strMeasure12,
                    strMeasure13,
                    strMeasure14,
                    strMeasure15,
                    strMeasure16,
                    strMeasure17,
                    strMeasure18,
                    strMeasure19,
                    strMeasure20,
                } = data.meals[0]

                const ingredient = [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                    strIngredient6,
                    strIngredient7,
                    strIngredient8,
                    strIngredient9,
                    strIngredient10,
                    strIngredient11,
                    strIngredient12,
                    strIngredient13,
                    strIngredient14,
                    strIngredient15,
                    strIngredient16,
                    strIngredient17,
                    strIngredient18,
                    strIngredient19,
                    strIngredient20
                ]

                const measure = [
                    strMeasure1,
                    strMeasure2,
                    strMeasure3,
                    strMeasure4,
                    strMeasure5,
                    strMeasure6,
                    strMeasure7,
                    strMeasure8,
                    strMeasure9,
                    strMeasure10,
                    strMeasure11,
                    strMeasure12,
                    strMeasure13,
                    strMeasure14,
                    strMeasure15,
                    strMeasure16,
                    strMeasure17,
                    strMeasure18,
                    strMeasure19,
                    strMeasure20,
                ]

                const newFood = { name,area,category,image,video,info,source,ingredient,measure};
                setFood(newFood);
            }
            else {
                setFood([])
            }
            setLoading(false);
        }
        catch(err) {
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        getFoods();
    },[id])

    if(loading) {
        return <Loading />
    }
    if(!food) {
        return <h2>sorry no your favorite food</h2>
    }

    const {name, area, category, image, info, video, source, ingredient, measure} = food;
    
  return (
    <FoodDetailContainer>
        <Navbar />
        <Container pd='30px'>
        <FoodCard>
            <Grid minmax='350px' >
                <Image src={image} rad='5px' />
                <div>
                    <Flex marb='10px'>
                        <span>
                            <h2>{name}</h2>
                            <h3>{area}</h3>
                        </span>
                    </Flex>
                    <Flex>
                        <ul>
                            <h3>ingredient</h3>
                            {food.ingredient.map((ingre, index) => {
                                return <li key={index*2}>{ingre}</li>
                            })}
                        </ul>
                        <ul>
                            <h3>measure</h3>
                            {food.measure.map((mea, index) => {
                                return <li key={index*3}>{mea}</li>
                            })}
                        </ul>
                    </Flex>
                </div>
            </Grid>
            <FoodCardInfo>
                <Container pd='10px 30px'>
                    <p>"{readMore ? info:`${info.substring(0,250)}`}"
                        <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less':'Read more'}</button>
                    </p>
                </Container>
                <Flex>
                <Button>
                    <NavLink to='/'>back</NavLink>
                </Button>
                <Button bg='lightgray' color='#333'>
                    <a href={video} target='_blank'>video</a>
                </Button>
            </Flex>
            </FoodCardInfo>
        </FoodCard>
        </Container>
    </FoodDetailContainer>
  )
}

export default FoodDetail;

export const FoodDetailContainer = styled.div`

    button:not(:nth-child(1)){
        margin-left: 50%;
        transform: translateX(-50%);
    }

    form {
        display: none;
    }
`;

export const FoodCard =styled.div`

    div > img {
        max-height: 400px;
        max-width: 500px;
        margin-left: 50%;
        transform:translateX(-50%);
    }

    span {
        display: flex;
        column-gap: 5px;
        align-items : center;
    }

    span > h2 {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 2px;
    }

    span > h3 {
        color: orange;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 15px;
        font-weight: 500;
    }

    ul {
        margin: 0 15px;
    }

    ul > h3 {
        text-transform: uppercase;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    ul > li {
        font-size: 14px;
        margin: 8px 0 ;
        color: #333333;
    }
`;

export const FoodCardInfo = styled.div`
    margin-top: 20px;

    p {
        text-align: justify;
        color: #333;
        font-size: 15px;
        line-height: 25px;
        letter-spacing: 2px;
    }

    button {
        color: orange;
        font-weight: 600;
    }

    button:hover {
        color: #333;
    }

    div:last-child {
        width: max-content;
        margin: 0 auto;
    }
`;
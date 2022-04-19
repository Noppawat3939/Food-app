import React,{useEffect, useState} from 'react'
import styled from 'styled-components';
import { Image } from '../style/Image';
import ReactTypingEffect from 'react-typing-effect';

const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

function Hero() {
    const [heroSlider, setHeroSlider] = useState([]);

    const randomMeals = async() => {
        try {
            const resp = await fetch(URL);
            const data = await resp.json();
            const {meals} = data;

            if(meals) {
                const sliderItem = meals.map((meal) => {
                    const {strMealThumb, strMeal, idMeal} = meal;
                    return {
                        image: strMealThumb,
                        name: strMeal,
                        id: idMeal
                    }
                })
                setHeroSlider(sliderItem);
            }
            else {
                setHeroSlider([]);
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        randomMeals()
    },[])

    return (
    <HeroContainer>
        {heroSlider.map((item) => {
        return (
            <div key={item.id} >
                <Image src={item.image} />
                <h1>
                    <ReactTypingEffect 
                        text={item.name}
                        speed={120}
                        eraseDelay={200}
                    />
                </h1>
            </div>
        )})}
    </HeroContainer>
  )
}

export default Hero

export const HeroContainer = styled.div`
    div {
        max-height: 400px;
        max-width: 100%;
        overflow: hidden;
        position: relative;
    }

    div > img {
        object-fit: cover;
        background-position: 50%;
    }

    div > h1 {
        color: #fff;
        position: absolute;
        font-size: 2.5rem;
        font-weight: 500;
        letter-spacing: 2px;
        bottom: 20px;
        left: 20px;
        word-wrap: break-word;
        text-shadow: 1px 2px 5px  rgba(0,0,0,.25);
    }
`;
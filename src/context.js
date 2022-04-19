import React,{useContext, useState, useEffect, useRef} from 'react';
import axios from 'axios'

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const idURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [foods , setFoods] = useState([]);
    const searchValue = useRef('');

    const fetchFoods = async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json()
            const {meals} = data;

            if(meals) {
                const newItems = meals.map((item) => {
                    const {idMeal, strMeal, strCategory, strMealThumb} = item;
                    return {
                        id: idMeal,
                        name: strMeal,
                        category: strCategory,
                        image: strMealThumb
                    }    
                })
                setFoods(newItems);
            }else {
                setFoods([]);
            }
            setLoading(false);
        }
        catch(err) {
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFoods()
    },[searchTerm]);

    return(
        <AppContext.Provider value={{
            loading,
            foods,
            searchTerm,
            setSearchTerm,
            searchValue
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};
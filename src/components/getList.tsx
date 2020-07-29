import React, { useState, useEffect } from 'react';
import axios from "axios";

import List from "./list";
import {IMeal, IMealFromAPI} from "./interface";


// interface IState {
//     meals: IMeal[]
//     isLoading: boolean
//     error?: string
// }

// class MealList extends React.Component<{}, IState> {
//     state = {
//         meals: [],
//         isLoading: true,
//     };
//
//     async componentDidMount() {
//         const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
//         axios
//             .get(apiUrl)
//             .then(response =>
//                 response.data.meals.map((meal: IMealFromAPI):IMeal => ({
//                     id: Number(`${meal.idMeal}`),
//                     title: `${meal.strMeal}`,
//                     image: `${meal.strMealThumb}`,
//                     category: `${meal.strCategory}`
//                 }))
//             )
//             .then(meals => {
//                 this.setState({
//                     meals,
//                     isLoading: false
//                 });
//             })
//             .catch(error => this.setState({error, isLoading: false}));
//     }
//
//     render() {
//         const {isLoading, meals} = this.state;
//         return (
//             <React.Fragment>
//                 <h1>What do we have for dinner?</h1>
//                 <List mealList={meals} isLoading={isLoading}/>
//             </React.Fragment>
//         );
//     }
// }

function MealList () {
    const [meals,setMeals] = useState( [])
    const [isLoading,setIsLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [apiUrl, setApiUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    const [isError, setIsError] = useState(false)

    //create a function calling meal which type is IMeal... and return a string array when it's called
    const processIngredients = (meal: IMealFromAPI): string[] =>{
        const words = ['strIngredient', 'strMeasure' ]
        const allIngredients: object = {}
        const keyName : string = ''
        const getAllIngredients  = Object.keys(meal)
        // get all the keys from the object
        words.forEach(function(item) {
            // looping through first object
            getAllIngredients.forEach(function(keyName){
                //using index of to check if the object key name have a matched string
                if (keyName.indexOf(item) !== -1){
                    allIngredients[keyName] = meal[keyName]    ;
                    console.log(getAllIngredients[]);

                }
            })
        });

        const list: string[] = []
        // const ingredients  = Object.keys(meal)
        //  console.log(ingredients)
        return list
    }

    useEffect(() => {
        const fetchData = async() => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(apiUrl);
                setMeals(result.data.meals.map((meal: IMealFromAPI): IMeal => {
                    processIngredients(meal)
                    return ({
                            id: Number(`${meal.idMeal}`),
                            title: `${meal.strMeal}`,
                            image: `${meal.strMealThumb}`,
                            category: `${meal.strCategory}`,
                            video: `${meal.strYoutube}`,

                        })
                    })
                );
                console.log('ing', result.data.meals[0].strIngredient1)
            } catch (error) {
                setIsError(true)
            }

        };
        fetchData();
        setIsLoading(false);
    }, [apiUrl]);

    return (
        <div>
            <h1>What do we have for dinner?</h1>
            <form onSubmit={event => {
                setApiUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
                //to avoid that the browser reloads when clicking the submit button
                event.preventDefault()
            }}>
                <input type="text" value={query} onChange={event =>setQuery(event.target.value)} />
                <button type="submit">Search</button>
            </form>
            {isError && <div>Something went wrong ...</div>}
            <List mealList={meals} isLoading={isLoading}/>
        </div>
    );
}
export default MealList;
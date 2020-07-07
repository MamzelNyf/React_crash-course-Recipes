import React, {useEffect} from 'react';
import Axios from "axios";

const MealItem = () => {
    useEffect(() => {
        const fetchPost = async () => {
            const res = await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
            console.log(res.data);
        }
        fetchPost();
    },[]);
    return(<h1>Hello</h1>);
}


export default MealItem;
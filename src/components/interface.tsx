import React from 'react';


export interface IMealFromAPI {
    idMeal: number;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strYoutube: string
}

export interface IMeal {
    id: number
    title: string
    image: string
    category: string
    video: string
}



export interface IProps{
    mealList:IMeal[]
    isLoading:boolean
}

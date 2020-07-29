import React from 'react';

import {IProps} from './interface';

function List(props : IProps){
    // console.log(props.mealList)
    const meals = props.mealList.map(({id,title,image, category})=>{
        return (
            <div key={id}>
                <h2>{title}</h2>
                <div>
                    <img src={image} alt={title}/>
                </div>
                <p>{category}</p>
                <hr/>
            </div>
        );
    })
    return(
        <div>
            {props.isLoading ? (
                <p>Loading...</p>
            ) : (
                <>{meals}</>
            )}
        </div>
    )
}

export default List;
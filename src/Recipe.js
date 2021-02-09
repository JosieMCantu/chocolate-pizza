import React from 'react';
import { recipeArray } from './data.js';

const recipeItem = recipeArray.map(
    item => (<li className='ingredient'>{item.amount} {item.ingredient}</li>)
)

export default class Recipe extends React.Component {
    render() {

        return (
            <div style={{
                backgroundImage: `url('list-bg.png')`
            }} className="recipe-list" >
                <ul className='recipe-list'>{recipeItem}</ul>
            </div>

        )
    }
}
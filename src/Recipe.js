import React from 'react';
import { recipeArray } from './data.js';

const recipeItem = recipeArray.map(
    item => (<li>{item}</li>)
)

export default class Recipe extends React.Component {
    render() {

        return (
            <div style={{
                backgroundImage: `url('list-bg.png')`
            }} className="recipe-list" >
                <ul>{recipeItem}</ul>
            </div>

        )
    }
}
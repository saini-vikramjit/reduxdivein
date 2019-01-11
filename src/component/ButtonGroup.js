import React from 'react';
import store from '../store';
import { setTechnology } from '../actions';

const ButtonGroup = ({ technologies }) => (
    <div>
        {
            technologies.map( (tech, i) => (
                <button
                    key = { i }
                    data-tech = { tech }
                    className = "default-btn"
                    onClick = { onButtonClick }
                >
                    { tech }
                </ button>
            ))
        }
    </div>
);

const onButtonClick = (e) => {
    e.preventDefault();
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));

}

export default ButtonGroup;
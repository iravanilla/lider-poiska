import React from 'react';
import axios from 'axios';

export function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickButton = () => {
        axios.post('https://6212304f01ccdac07434522e.mockapi.io/basket', {title: props.title, price: props.price, imageUrl: props.imageUrl});
        setIsAdded(!isAdded);
    };

    return (
        <div className="card">
            <img width={200} height={200} src={props.imageUrl} alt="product"/>
            <p> {props.title} </p>
            <b> {props.price} &#8381; </b>
            {isAdded ? <button className='button-active' onClick={onClickButton}> В корзине </button> : <button className='button-inactive' onClick={onClickButton}> Добавить в корзину </button>}        
        </div>
    );
}


import React from 'react';

export function CardBasket(props) {
    const [isAdded, setIsAdded] = React.useState(false);


    return (
        <div className="cardBasket">
            <img width={200} height={200} src={props.imageUrl} alt="product"/>
            <p> {props.title} </p>
            <b> {props.price} &#8381; </b>
        </div>
    );
}


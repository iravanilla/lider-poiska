import React from 'react';
import '../index.scss';
import axios from 'axios';
import { CardBasket } from './CardBasket';

export function Basket () {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://6212304f01ccdac07434522e.mockapi.io/basket').then(res => {
            console.log(res.data);
            setItems(res.data);
        });
    }, []);

    return (
    <div className="content">
    <h1>
      Корзина
    </h1>

    <div>
    {
        items.map((obj) => (
          <CardBasket 
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
          />
        ))
      }
    </div>   
    
  </div> 
)
}

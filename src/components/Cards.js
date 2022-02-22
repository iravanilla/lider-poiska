import React from 'react';
import { Card } from './Card';
import '../index.scss';
import axios from 'axios'; 

export function Cards () {
    const [items, setItems] = React.useState([]);
   
    React.useEffect(() => {
        axios.get('https://6212304f01ccdac07434522e.mockapi.io/items').then(res => {
            setItems(res.data);
        });
    }, []);

    return (
    <div className="content">
    <h1>
      Каталог товаров
    </h1>
    
    <div className="cards">
      
      {
        items.map((obj) => (
          <Card 
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



// const arr = [
//     {title: 'Увлажнитель воздуха STARWIND SHC1322, 3л, белый', price: 1650, imageUrl: '/img/product/1.jpg'},
//     {title: 'Триммер PHILIPS HC3521/15 серебристый/черный', price: 2290, imageUrl: '/img/product/2.jpg' },
//     {title: 'Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95", розовый', price: 2390, imageUrl: '/img/product/3.jpg'},
//     {title: 'Мышь A4TECH Bloody V3, игровая, оптическая, проводная, USB, черный', price: 960, imageUrl: '/img/product/4.jpg'},
//     {title: 'Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95", черный', price: 2390, imageUrl: '/img/product/5.jpg'}, 
//     {title: 'Пылесос SINBO SVC 3497, 2500Вт, синий/серый', price: 5670, imageUrl: '/img/product/6.jpg'},
//     {title: 'Планшет DIGMA Optima 7 Z800 Android 10.0 серебристый', price: 9490, imageUrl: '/img/product/7.jpg'},
//     {title: 'Монитор игровой ACER Nitro RG241YPbiipx 23.8" черный', price: 16800, imageUrl: '/img/product/8.jpg'},
//     {title: 'Экшн-камера DIGMA DiCam 310 4K, WiFi, черный', price: 2290, imageUrl: '/img/product/9.jpg'},
//     {title: 'Умная колонка ЯНДЕКС c голосовым помощником Алисой, серебристый', price: 5670, imageUrl: '/img/product/10.jpg'},
//     {title: 'Квадрокоптер DJI Mini 2 MT2PD Fly More Combo с камерой, серый', price: 60990, imageUrl: '/img/product/11.jpg'},
//     {title: 'Шлем виртуальной реальности HTC Vive PRO Eye EEA, черный/синий', price: 11960, imageUrl: '/img/product/12.jpg'}, 
//     {title: 'МФУ лазерный CANON i-Sensys MF445dw, A4, лазерный, черный', price: 35310, imageUrl: '/img/product/13.jpg'},
//     {title: 'Смарт-часы AMAZFIT Bip U, 1.43", зеленый / зеленый', price: 4490, imageUrl: '/img/product/14.jpg'},
//     {title: 'Кофемашина PHILIPS EP1224/00, серый/черный', price: 29990, imageUrl: '/img/product/15.jpg'},
//     {title: 'Гироскутер MIZAR MZ10,5CN, 10.5", карбон', price: 12990, imageUrl: '/img/product/16.jpg'},
//   ]; 


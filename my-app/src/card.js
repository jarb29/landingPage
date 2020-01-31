import React from 'react'
import Cards from './Cards.js';


export default function Card() {
    let cardCounter =[
        { title: 'Alex', img: 'https://picsum.photos/200/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lacus accumsan, efficitur mauris quis, iaculis nisl. Donec.' },
        { title: '', img: 'https://picsum.photos/200/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lacus accumsan, efficitur mauris quis, iaculis nisl. Donec.' },
        { title: '', img: 'https://picsum.photos/200/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lacus accumsan, efficitur mauris quis, iaculis nisl. Donec.' },
        { title: '', img: 'https://picsum.photos/200/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lacus accumsan, efficitur mauris quis, iaculis nisl. Donec.' }
    ]


    return (
        <div className='row text-center'>
             {
                cardCounter.map((item, i) => {
                    return <Cards key = {i} data = {item} />
                })
            }
        </div>

            );

}
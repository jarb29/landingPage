import React from 'react'
import Card from './card.js'
import Jumbotrons from './Jumbotrons.js'
import Nadvar from './Nadvar.js'
import Footer from './Footer.js'
import './index.css'


export default function Main() {
    return (
        <div className='container'>
            <Nadvar />
            <Jumbotrons />
            <Card />
            <Footer />
            
        </div>
    )
}


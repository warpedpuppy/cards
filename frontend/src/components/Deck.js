import React, { Component } from 'react'
import Card from './Card';
import './Deck.css';
export default class Deck extends Component {
    
    createDeck = () => {
        let cards =[];
        for (let i = 0; i < 52; i ++) {
            cards.push(<Card key={i} />)
        }
        return cards;
    }

    render() {
        let cards = this.createDeck();
        return (
            <div className="card-container">
               { cards }
            </div>
        )
    }
}

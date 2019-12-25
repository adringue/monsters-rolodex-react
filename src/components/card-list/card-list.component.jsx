import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const  CardList=(props)=> {
    return <div className='card-list'>
        {
            //here we can write any javascripts code we want...!
            props.monsters.map(monster=>(<Card key={monster.id} monster={monster}></Card>))

        }
            </div>;
}

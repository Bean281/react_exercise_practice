import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../shared/ListOfPlayers';
import { Icon } from 'react-materialize';
import ModalCase from './ModalCase';

export default function Detail() {
    const userName = useParams();
    const player = data.find(obj => {
        return obj.id == userName.id;
    });
    let cost = player.cost.toLocaleString();
    const[isOpen, setIsOpen] = useState(false);
    
    
  return (
    
    <div className='container'>
        <div className='product-card'>
            <div className='badge'>{player.name}</div>
            <div className='product-tumb'>
                <img src={`../${player.img}`} />
                
                <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                  <Icon>ondemand_video</Icon>
                  
                </a>
                
            </div>

            <div className='product-details'>
                <h4>{player.club}</h4>
                <div className='product-price'>Market value: € {cost} </div>
                <p>{player.info}</p>
                <div className='product-bottom-details'></div>

            </div>
            {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
        </div>

    </div>
  )


}

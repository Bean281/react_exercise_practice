import React from 'react'
import { data } from '../shared/ListOfPlayers'
import { useParams } from 'react-router-dom';

export default function ModalCase({setIsOpen}) {
    const userName = useParams();
    const player = data.find(obj => {
        return obj.id == userName.id;
    });



  return (
    <div className='modal-show' onClick={() => setIsOpen(false)}>
        <div id='modal1' className='modal' style={{display: 'block', top: '35%'}}>
            <div className='modal-content'>
                <h4>Video for</h4>
                <p><iframe width="100%" height="100%" src={player.clip} title={player.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
            </div>
            <div className='modal-footer'>
            <a className='modal-close red-text'>Close</a>
            </div>

        </div>
    </div>
  )
}

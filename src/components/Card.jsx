import React from 'react'
import {useEffect, useState} from 'react'
import notDiscoveredImage from '../assets/images/not_discovered.png'

const Card = ({name, number, image, handleChoice, cardsToReset, disable}) => {
  
    const [isSelected, setIsSelected] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
  
    useEffect(() => {
        setIsDisabled(disable)
    }, [disable])
  
    useEffect(() => {
        if (cardsToReset.includes(number)) setIsSelected(false)
    }, [cardsToReset, number])
  
    const handleClick = () => {
        if (!(isDisabled || isSelected)) {
            setIsSelected(true)
            handleChoice(name, number)
        }
    }
  
    return (
        <div className='card' onClick={handleClick}>
            <img className='bottom' src={image} alt={name}/>
            <img className={isSelected ? 'top' : 'not-discovered'} src={notDiscoveredImage} alt='not-discovered'/>
        </div>
    )
  }
  
  export default Card;
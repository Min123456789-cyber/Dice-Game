import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const RoleDice = ({currentDice, rollDice}) => {

    

    return (
        <DiceContainer>
          <div className="dice" onClick={rollDice}>
            <img src={`/images/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
          </div>
          <p>Click on Dice to roll</p>
        </DiceContainer>
      );
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    p{
        font-size: 24px;
    }
    .dice{
      cursor: pointer;
    }
`;
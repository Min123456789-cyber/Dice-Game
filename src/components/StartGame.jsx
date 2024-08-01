import React from 'react'
import styled from 'styled-components'
import { Button } from './styled.css/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="https://w7.pngwing.com/pngs/56/672/png-transparent-gurps-customer-service-dice-dice-throw-game-service-dice-thumbnail.png" alt="Dice Image" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 42px;

    .content{
    h1{
      font-size: 96px;
      white-space: nowrap;
    }}
`;


import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    let GetNoun = (number, one, two, five) => {
        number = Math.abs(number);
        number %= 100;
        if (number >= 5 && number <= 20) {
            return five;
        }
        number %= 10;
        if (number === 1) {
            return one;
        }
        if (number >= 2 && number <= 4) {
            return two;
        }
        return five;
    } 

    return (
        <Header>
            <h1>Andrei Kiselev</h1>
            <h2>{allPosts} {GetNoun(allPosts, 'запись', 'записи', 'записей')}, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;
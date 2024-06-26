import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    background-color: #fff;
    z-index: 1;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const ImagemLogo = styled.img`
    width: 8rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
    position: absolute;
	left: 47%;
    top: 1%;
    
`
export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;

    button { //herança..dentro do InputSpace existe um i e um input
        position: absolute;
        top: 1;
        right: 0.2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5f5;
        color: #757575;
        border-radius: 0.3rem;
        padding: 0.5rem;
        cursor: pointer;

        &:hover {
        background-color: #acacac;
        }
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: 0.3rem;

        &:focus {
            border: 1px solid #000000;
        }
    }
` 

export const ErrorSpan = styled.span`
    background-color: #ffaeae;
    color: #9e0000;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    font-size: 0.8;
    border-radius: 7px;
`

export const UserLoggedSpace = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    gap: 1rem;

    h2{
        font-size: 1.1rem;
        color: #3A3A3A;
        transition: all 0.3s;
        cursor: pointer;

        &:hover{
        color: #191919;
        }
    }

    i{
        font-size: 1.5rem;
        color: #3A3A3A;
        cursor: pointer;

        &:hover{
        color: #191919;
        }
    }
`
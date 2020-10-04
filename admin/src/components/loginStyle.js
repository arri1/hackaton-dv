import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    display: flex;
    max-width: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`
export const Input = styled.input`
    width: 500px;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #d3ecf4;
    font-family: sans-serif;
    margin-top: 20px;
    border-radius: 10px;
`

export const Button = styled.button`
    background-color: #008cba; /* Green */
    border: none;
    color: white;
    padding: 14px 40px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    font-family: sans-serif;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 24px;
    margin-left: 15px;
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

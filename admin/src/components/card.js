import React from 'react'
import styled from 'styled-components'
import {Title,Lable} from './textStyled'

const Container = styled.div`
    display: flex;
    width:220px;
    height:150px;
    margin-left:60px;
    margin-top:30px;
    margin-right:60px;
    background-color:white;
    border-radius: 14px;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.25);
    flex-direction: column;
`
const CustomTitle = styled(Title)`

`
const Card = (props) => {
    const {title,count}=props
    return (
        <Container>
            <Title style={{marginTop:23,marginLeft:25}}>{title}</Title>
            <Title style={{marginTop:23,marginLeft:25,fontSize:36,}}>{count}</Title>
        </Container>
    )
}
export default Card

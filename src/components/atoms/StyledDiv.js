import styled from "styled-components";

const StyledDiv = styled.div`
    display : flex;
    flex-direction : column;
    margin : 10px;
    width : 250px;
    ${props => props.addMargin && "margin-top : 100px"}
`

export default StyledDiv;
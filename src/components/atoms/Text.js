import styled from "styled-components";

const Text = styled.p`
    font-size: 20px;
    font-weight : ${props => props.bold
        ? "bold"
        : "normal"
    };
    margin-top : 10px;
    margin-bottom : 0px
`

export default Text;
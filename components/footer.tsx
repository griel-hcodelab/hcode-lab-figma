import styled from "styled-components";

const FooterComponents = styled.footer`
    height: 95px;
    width: 100vw;
    background-color: #181818;
    display: flex;
    justify-contents: center;
    align-items: center; 
    h2 {
        color: #FFF;
        margin: 0;
    }
`;

//export default Footer;


export default function Footer() {
    return (
        <FooterComponents>
        <h2>Olá</h2>
        </FooterComponents>
    );
}
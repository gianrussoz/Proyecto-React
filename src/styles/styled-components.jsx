import styled from "styled-components";

const NavbarLink = styled.div`
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    display: block;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #f6f6f6;
        z-index: 1;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease-in-out;
    }
    &:hover {
        transition-timing-function: cubic-bezier(0.2, 1, 0.82, 0.94);
    }
    &:hover::before {
        transform-origin: center;
        transform: scaleX(1);
        }
`;

const ImgContainer = styled.div`
    overflow: hidden;
    height: auto;
    `;

const Img = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    transition: all 0.5s ease;
    &:hover{
    transform: scale(1.10);
    }`;

const Button = styled.button`
    background: rgb(99,133,240);
    background: linear-gradient(225deg, rgb(99, 133, 240) 30%, rgba(0,9,255,1) 70%);
    border-radius: 20px;
    border: none;
    margin: 5px;
    padding: 10px 20px;
    color: #f6f6f6;
    &:hover {
        filter: drop-shadow(0 0 1.5em rgba(0,9,255,1));
        background-position: right center;
        background-size: 200% auto;
        transition: all 0.5s ease-in-out;
        transition-timing-function: 1s cubic-bezier(.17,.67,.83,.67);
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProductsContainer = styled.div`
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const StockAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StockAmount = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin: 20px;
`;

const Price = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0;
`;

const ItemTitle = styled.h5`
    font-size: 2em;
    font-weight: 400;
`;

const ItemStock = styled.div`
    font-size: 1em;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductAmount = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin: 5px;
`;

const PriceDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const Resume = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 20px;
    padding: 20px;
    width: 30%;
    height: auto;
    margin-right: 20px;
`;

const ResumeTitle = styled.h1`
    font-weight: 200;
`;

const ResumeItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 1.5em;
`;

const ResumeItemPrice = styled(ResumeItem)`
    font-size: 2em;
    font-weight: bold;
`;

const ContentCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const CartItems = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const TopContainerBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const H2 = styled.h2`
    font-size: 5em;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`;
const CardContainer = styled.div`
    margin: 5px;
`;

const ProductDetails = styled.div`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProductDetailInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductTitle = styled.h3`
    font-size: 3em;
`;

const FooterContainer = styled.footer`
    background: rgb(9,2,140);
    background: linear-gradient(190deg, rgba(9,2,140,1) 0%, rgba(28,28,212,1) 50%, rgba(0,169,203,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 0;
    width: 100%;
`;

const FooterLogo = styled.div`
    width: 200px;
    height: auto;
    margin: 10px;
`;

export { FooterLogo, ProductDetailInfo, FooterContainer, ProductTitle, CardContainer, ProductDetails, TopContainerBottom, TopContainer, H2, ImgContainer, Img, Button, Container, NavbarLink, ProductsContainer, StockAmountContainer, StockAmount, ProductAmountContainer, ProductAmount, PriceDetail, Price, Resume, ResumeTitle, ResumeItem, ContentCart, Bottom, Details, ProductDetail, ItemContainer, ResumeItemPrice, CartItems, ItemTitle, ItemStock };
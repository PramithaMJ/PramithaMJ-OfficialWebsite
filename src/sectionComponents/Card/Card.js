import styled from "styled-components";

const CARD = styled.div`
  height: calc(12rem + 32vw);
  width: calc(20rem + 24vw);
  background-color: #06011a;
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 20%;
  height: 20%;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translate(-50%);
  border-radius: 50%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px -3px 3px var(--nav2));
   @media (max-width: 768px) {
    bottom: 90%;
    width: 20%;
    height: 20%;

`;

const TEXT = styled.p`
  color: var(--white);
  padding: 0 calc(1rem + 2vw);

  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled.h3`
  color: var(--pink);
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`;

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`);

  return (
    
    <CARD>
      <Image img={Avatar} width="400" height="400" />
      <TEXT>{text}</TEXT>
      <NAME>{name}</NAME>
    </CARD>
  );
};

export default Card;

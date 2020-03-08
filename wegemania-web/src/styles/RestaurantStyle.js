import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderRestaurantContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;
export const HeaderRestaurantText = styled.li`
  font-size: 24px;
  color: #00a835;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.6);
`;
export const FirstRestaurantRow = styled.div`
  display: block;
  text-align: center;
`;
export const FirstRestaurantItem = styled.li`
  margin: 10px;
  text-align: center;
  padding: 0;
`;
export const RestaurantImageComponent = styled.img`
  margin: 20px auto 0 auto;
  display: block;
  padding: 0;
  width: 400px;
`;
export const RestaurantOpenItem = styled.li`
  margin: 20px 0 0 0;
  padding: 0;
  width: 250px;
  color: white;
  text-align: justify;
  text-justify: inter-word;
  border: 1px solid black;
  cursor: pointer;
  background: #00a835;
  padding: 1%;
`;
export const MenuList = styled.ul`
  list-style-type: none;
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 350px;
`;
export const MenuItem = styled.li`
  width: 40%;
  margin: 15px 10px 2px 10px;
  padding: 0;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  border-radius: 25px;
  background: #00a835;
  padding: 1%;
`;
export const HeaderColumn = styled.li`
  text-align: center;
`;
export const RateContainer = styled.ul`
  list-style-type: none;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  margin: 5% auto 0 auto;
`;
export const RateHeader = styled.li`
  font-size: 20px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;
export const RateStars = styled.li`
  position: relative;
  left: 42.5%;
`;
export const LocationContainer = styled.div`
  margin: 25px 0 0 0;
`;
export const BorderHeader = styled.p`
  text-align: center;
  font-weight: bold;
`;
export const SearchContainer = styled.div`
  display: flex;
`;
export const SearchInput = styled.input`
  padding: 1%;
  font-size: 14px;
  width: 220px;
  height: 60px;
`;
export const SearchButton = styled.button`
  color: white;
  font-size: 14px;
  border: none;
  background: #27ae60;
  opacity: none;
  width: 150px;
  height: 60px;
  padding: 2%;
  :hover {
    color: white;
    text-decoration: none;
    background: #2ecc71;
    text-shadow: 0 0 1px white, 0 0 1px white;
  }
`;
export const RadiusContainer = styled.div`
  display: flex;
`;
export const AddRestaurantLink = styled(Link)`
  color: white;
  text-decoration: none;
  background: #27ae60;
  padding: 2%;
  font-size: 14px;
  display: block;
  min-width: 100px;
  height: 60px;
  text-align: center;
  width: 200px;
  :hover {
    color: white;
    text-decoration: none;
    background: #2ecc71;
    text-shadow: 0 0 1px white, 0 0 1px white;
  }
`;
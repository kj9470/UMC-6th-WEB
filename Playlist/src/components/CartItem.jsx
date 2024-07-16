import React from "react";
import { useDispatch } from "react-redux";
import { increase, decrease } from "../cartSlice";
import styled from "styled-components";
import { ChevronUp, ChevronDown } from "../data/icons";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <ItemInfo>
        <ItemImage src={img} alt={title} />
        <ItemDetails>
          <ItemTitle>{title}</ItemTitle>
          <ItemPrice>₩ {price}</ItemPrice>
        </ItemDetails>
      </ItemInfo>
      <QuantityControl>
        <QuantityButton onClick={() => dispatch(increase(id))}>
          <ChevronUpIcon />
        </QuantityButton>
        <Amount>{amount}</Amount>
        <QuantityButton onClick={() => dispatch(decrease(id))}>
          <ChevronDownIcon />
        </QuantityButton>
      </QuantityControl>
    </Item>
  );
};

export default CartItem;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

const ItemDetails = styled.div`
  text-align: left;
`;

const ItemTitle = styled.h4`
  margin: 0;
  font-size: 16px;
`;

const ItemPrice = styled.p`
  margin: 0;
  color: #888;
`;

const QuantityControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
`;

const Amount = styled.p`
  margin: 0;
`;

const ChevronUpIcon = styled(ChevronUp)`

`;

const ChevronDownIcon = styled(ChevronDown)`

`;

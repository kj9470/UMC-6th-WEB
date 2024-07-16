import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';
import { clearCart, calculateTotals } from '../cartSlice';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalContainer = styled.div`
  margin-top: 20px;
`;

const Total = styled.p`
  font-size: 18px;
`;

const ClearButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const CartContainer = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalCount = useSelector(state => state.cart.totalCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  const handleClearCart = () => {
    if (window.confirm("담아두신 모든 음반을 삭제하시겠습니까?")) {
      dispatch(clearCart());
    }
  };

  return (
    <Container>
      <Header>당신이 선택한 음반</Header>
      <ItemList>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
      </ItemList>
      <TotalContainer>
        <Total>총 가격: ₩ {totalAmount}</Total>
        <Total>총 수량: {totalCount}개</Total>
        <ClearButton onClick={handleClearCart}>장바구니 초기화</ClearButton>
      </TotalContainer>
    </Container>
  );
};

export default CartContainer;
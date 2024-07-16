import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';
import { clearCart, calculateTotals, fetchCartItems } from '../cartSlice';
import LoadingSpinner from './LoadingSpinner';

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
  gap: 15px;
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Total = styled.p`
  margin: 5px 0;
  font-size: 18px;
  text-align: right;
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
  const { items, totalAmount, totalCount, status, error } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items, dispatch]);

  const handleClearCart = () => {
    if (window.confirm("담아두신 모든 음반을 삭제하시겠습니까?")) {
      dispatch(clearCart());
    }
  };

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Header>당신이 선택한 음반</Header>
      <ItemList>
        {items.map(item => (
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
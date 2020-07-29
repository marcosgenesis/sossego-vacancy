import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  min-height: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 3px 10px 111px -45px rgba(0, 0, 0, 0.31);
  margin: 10px;
  padding: 20px;
  cursor: pointer;
  transition: transform ease 0.3s;
  h2 {
    color: #333;
  }
  p {
    color: #b7bfd6;
  }
  &:hover {
    transform: scale(1.01);
  }
`;

import styled from 'styled-components';

const alignment = () => ` 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  ${alignment}
  height:100%;
  margin-top: 100px;
`;
export const Content = styled.div`
  width: 60%;
  ${alignment}
`;
export const Title = styled.div`
  height: 60px;
  p {
    color: #333;
    font-size: 30px;
  }
`;
export const Body = styled.div`
  height: 60px;
  margin-bottom: 30px;
  p {
    color: #b7bfd6;
    font-size: 20px;
  }
`;
export const User = styled.ul`
  width: 200px;
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  align-self: flex-start;
  margin-bottom: 30px;
  #userHeader {
    margin-bottom: 10px;
    p {
      color: #b7bfd6;
    }
  }
  p {
    color: #999;
  }
`;
export const Comments = styled.div`
  #numberComments {
    display: flex;
    width: 150px;
    height: 30px;
    border-radius: 5px;
    background: rgba(220, 226, 242, 0.3);
    ${alignment}
    margin-bottom:30px;
  }
`;
export const Comment = styled.div`
  background: #fff;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
  ${alignment}
  align-items:flex-start;
  h2 {
    margin-bottom: 10px;
  }
`;

import { useState } from 'react';
import styled, { css } from 'styled-components';
import { isLoggedInVar } from '../apollo';

// 이것들은 각각 하나의 component이기 때문에 props도 받을 수 있음.
// css의 field는 그대로 가져가고 내용물만 바꿀 수도 있고, 한편으로는 {css} 를 사용하여 상태에 따라서 완전히 다른 css field를 적용할 수도 있음
const Title = styled.h1`
  color: ${(props) => (props.potato ? 'palevioletred' : 'beige')};
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ${(props) =>
    props.potato
      ? css`
          font-size: 49px;
        `
      : css`
          text-decoration: underline;
        `}
`;

const Container = styled.div`
  background-color: tomato;
`;

const TogglePotato = styled.button`
  color: red;
`;

function Login() {
  const [potato, setPotato] = useState(false);
  const TogglePotato = () => setPotato((current) => !current);
  return (
    <Container>
      <Title potato={potato}>Login</Title>;
      <TogglePotato onClick={TogglePotato}>Toggle Potato</TogglePotato>
    </Container>
  );
}

export default Login;

// 이 파일은 reactive variables를 가지고 있을 곳
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const TOKEN = 'TOKEN';
const DARK_MODE = 'DARK_MODE';

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  window.location.reload(); // 이전에 있던 모든 state들이 사라짐
};

export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE)));

export const enableDarkMode = () => {
  localStorage.setItem.apply(DARK_MODE, 'enabled');
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
};

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // 너의 GraphQL application이 어딨는지 알려주는 것
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(), // Cache는 Apollo가 한번 가져온 정보를 기억하게 해서 매번 같은 정보를 가져오지 않도록 하는 것
});

// link는 Apollo 클라이언트가 데이터 소스와 소통하는 방식이야
// 그러기 위해서는 authLink를 만들어야 됨. 만드는 건 쉬움. 그냥 LocalStorage에서 token을 가져와서 그 token을 authorization의 헤더나 넣어주고 싶은 다른 헤더에 넣어주면 됨
// setContext는 클라이언트의 모든 request에 몇 가지 항목을 추가하는 gkatndla
// concat : 두 개의 링크를 묶음

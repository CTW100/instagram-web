// 이 파일은 reactive variables를 가지고 있을 곳
import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false); // () 안은 react variable이 가지고 있는 default 값
export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // 너의 GraphQL application이 어딨는지 알려주는 것
  cache: new InMemoryCache(), // Cache는 Apollo가 한번 가져온 정보를 기억하게 해서 매번 같은 정보를 가져오지 않도록 하는 것
});

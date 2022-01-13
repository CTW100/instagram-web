import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../apollo';

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data, error } = useQuery(ME_QUERY, {
    // 사용자가 LocalStorage의 토큰을 통해 로그인하지 않은 경우에는(Local Storage에 토큰을 가지고 있지 않은 경우) 이 쿼리를 실행하지 않음(skip해버림.)
    skip: !isLoggedIn,
  });
  console.log(data, error);
  return;
}

export default useUser;

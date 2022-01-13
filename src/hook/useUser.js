import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { isLoggedInVar, logUserOut } from '../apollo';

const ME_QUERY = gql`
  query me {
    me {
      id
      username
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(ME_QUERY, {
    // 사용자가 LocalStorage의 토큰을 통해 로그인하지 않은 경우에는(Local Storage에 토큰을 가지고 있지 않은 경우) 이 쿼리를 실행하지 않음(skip해버림.)
    skip: !hasToken,
  });
  console.log(data);
  useEffect(() => {
    // useEffect는 hook이 마운트되면 한 번 실행되고 데이터가 변경될 때 마다 실행됨
    if (data?.me === null) {
      logUserOut(); // token 조작하면 로그아웃시킴
    }
  }, [data]);
  return { data };
}

export default useUser;

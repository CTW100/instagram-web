# Instaclone Web

- [x] Router
- [x] Authentication
- [x] Atch.
- [x] Styles
- [ ] Log In / Sign Up
- [ ] Feed
- [ ] Profile
- [ ] See Hashtag

# 8.0

1. 폴더 이동
2. npx create-react-app app이름(instaclone-web)
3. instaclone-web폴더로 이동
4. git remote add origin https://github.com/CTW100/instagram-web.git
5. code .

# 8.1

npm i @apollo/client @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome graphql react-helmet-async react-hook-form react-router-dom@5.3.0 styled-components

# 8.3

router : 측정 URL로 가게 되면 components를 보여줌

Switch : 한 번에 딱 하나의 route만 render 시켜줌

# 8.5

react.js 에서 만약 어떤 것의 상태의 변화가 있다면, 그건 component를 다시 render하도록 만듦

# 8.6

#8.5에서 사용한 것은 매우 bad. 로그인/로그아웃을 굉장히 많은 곳에서 실행할 수 있어야 되는데 그럴때마다 props를 전달하는 것은 매우 나쁨. reactive variables로 그 문제를 해결할 것임.
reactive variable : 기본적으로 반응하고 변하는 variable

# 8.8

theme provider는 기본적으로 테마를 제공해 줌

# 8.9

npm i styled-reset

# 10.1

1. 스타일 컴포넌트에서 상속(extend)하는 법
2. 스타일 컴포넌트 안의 HTML 태그를 타게팅하는 법

# 9.6

여러분의 앱이 커짐에 따라 타입 검사를 활용하면 많은 버그를(bug) 잡을 수 있습니다. 특정 애플리케이션에서는 전체 애플리케이션의 타입 검사를 위해 Flow 또는 TypeScript와 같은 JavaScript 도구(Extensions)를 사용할 수 있습니다. 이러한 것들을 사용하지 않더라도 React는 내장된 타입 검사 기능들을 가지고 있습니다. 컴포넌트의 props에 타입 검사를 하려면 다음과 같이 특별한 프로퍼티인 propTypes를 선언할 수 있습니다.

예시)
import PropTypes from 'prop-types';

class Greeting extends React.Component {
render() {
return (

<h1>Hello, {this.props.name}</h1>
);
}
}

Greeting.propTypes = {
name: PropTypes.string
};

PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기(Validator)를 내보냅니다. 아래 예시에서는 PropTypes.string을 사용하게 될 것입니다. prop에 유효하지 않은 값이 전달 되었을 때, 경고문이 JavaScript 콘솔을 통해 보일 것입니다. propTypes는 성능상의 이유로 개발 모드(Development mode) 에서만 확인될 것입니다.

# 10.7

npm install react-hook-form@6.15.1

내용많음. 그냥 강의 한 번 더 보는 게 나음.

# 10.9

Apollo client를 통해 backend와 frontend를 연결함

# 10.10

https://www.apollographql.com/docs/react/data/mutations/

모르겠으면 GraphQL로 영화 웹 앱 만들기 #1 APOLLO GRAPHQL 파트에 #1.2 GET MOVIE QUERY(09:15) 8분 경 보기

# 10.11

# 10.12

onSubmitValid에서 받는 data는 register된 input들의 name들의 value 집합들임.
form이 valid하면 data로 이것들을 다 보내주기로 되어 있는 것임.

data에 대한 console.log 결과 : 11:05분 (graphql에서 설정했던 mutation의 이름 : { 설정했던 리턴값 } 형식임)

# 11.1

backend 쪽에서도 수정사항 있음.

token을 user가 마음대로 수정해도 우리의 apollo는 아직 token이 있는지의 여부만 확인하고 그 내용물을 믿어버리기 때문에 검사하는 코드가 필요함.

지금 강의까지의 코드 상으로는 token의 존재유물로 로그인된 여부를 판단할 수는 있지만 그 토큰의 내용물이 검증이 되지 않아 백엔드에 요청을 보내도 console.log 창을 보면

me: null

이렇게 반환되어 토큰쪽이 뭔가 이상한 것을 알 수 있다. 이에 대한 조치를 취해야 함

# 11.2

자동로그아웃되는 이유 : LocalStorage에 token을 가지고 있지만 실제로는 token을 사용하고 있지 않은 것

# 11.6

Backend 쪽에 수정사항 있음. isLiked

# 11.9

다시볼것..!

좋아요를 누르면 하트의 색과 like의 수가 업데이트가 되어야 함. 11.8처럼 refetch를 하면 모든 피드들에 대해서 업데이트가 되기 때문에 너무 비효율적임. 원하는 피드만 딱 핀포인트해서 그것만 업데이트시키는 것을 할 것임.

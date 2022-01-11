# Instaclone Web

- [x] Router
- [x] Authentication
- [x] Atch.
- [x] Styles
- [ ] Log In / Sign Up

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

import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import { darkModeVar, isLoggedInVar } from './apollo';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import SignUp from './screens/Signup';
import routes from './routes';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar); // 여기서 포인트는 이제 isLoggedInVar를 우리가 원하는 어디에서든지 바꿀 수 있다는 것. 그럼 isLoggedInVar가 바뀐다는 건 render를 다시 하도록 하는 시발점이 된다는 것
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          {!isLoggedIn ? (
            <Route path={routes.signup}>
              <SignUp />
            </Route>
          ) : null}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
// style 컴포넌트가 이 GlobalStyles를 발견하고 이걸 전체 body에 적용시킬 것
// <GlobalStyles />가 <ThemeProvider /> 안에 들어있기 때문에 GlobalStyles에서 theme에 접근할 수 있음.
export default App;

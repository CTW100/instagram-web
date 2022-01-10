import { useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import { darkModeVar, isLoggedInVar } from './apollo';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  fontColor: '#2c2c2c',
  bgColor: 'lightgray',
};

const darkTheme = {
  fontColor: 'lightgray',
  bgColor: '#2c2c2c',
};

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar); // 여기서 포인트는 이제 isLoggedInVar를 우리가 원하는 어디에서든지 바꿀 수 있다는 것. 그럼 isLoggedInVar가 바뀐다는 건 render를 다시 하도록 하는 시발점이 된다는 것
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Switch>
          <Route path='/' exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

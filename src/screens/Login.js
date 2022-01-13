import { gql, useMutation } from '@apollo/client';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { logUserIn } from '../apollo';
import AuthLayout from '../components/auth/AuthLayout';
import BottomBox from '../components/auth/BottomBox';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import FormError from '../components/auth/FormError';
import Input from '../components/auth/Input';
import Separator from '../components/auth/Separator';
import PageTitle from '../components/PageTitle';
import routes from '../routes';

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Notification = styled.div`
  color: #2ecc71;
`;

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

function Login() {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setError,
    clearErrors, // clearErrors 는 모든 error들을 사라지게 만들거나 내가 선택한 error들을 없애줌
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: location?.state?.username || '',
      password: location?.state?.password || '',
    },
  });

  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;

    if (!ok) {
      return setError('result', {
        message: error,
      });
    }
    if (token) {
      logUserIn(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    // loading : mutation이 잘 전송됐는지 확인, data는 mutation 종료 이후에 Data가 있는지, called: mutation이 호출된 건지 여부 확인
    onCompleted,
  });

  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }

    const { username, password } = getValues(); // getValues는 내가 form에 작성한 값들을 불러와 줌. input의 name 기준으로 추출

    login({
      variables: { username, password },
    });
  };

  const clearLoginError = () => {
    clearErrors('result'); // "result"는 위에서 설정했던 error의 이름
  };

  return (
    <AuthLayout>
      <PageTitle title='Login' />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size='3x' />
        </div>
        <Notification>{location?.state?.message}</Notification>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            ref={register({
              required: 'Username is required',
              minLength: {
                value: 5,
                message: 'Username should be longer than 5 chars.',
              },
            })}
            onChange={clearLoginError}
            name='username'
            type='text'
            placeholder='Username'
            hasError={Boolean(errors?.username?.message)}
          />
          <FormError message={errors?.username?.message} />
          <Input
            ref={register({
              required: 'Password is required.',
            })}
            onChange={clearLoginError}
            name='password'
            type='password'
            placeholder='Password'
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors?.password?.message} />
          <Button
            type='submit'
            value={loading ? 'Loading...' : 'Log in'}
            disabled={!formState.isValid || loading}
          />
          <FormError message={errors?.result?.message} />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText='Sign up'
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;

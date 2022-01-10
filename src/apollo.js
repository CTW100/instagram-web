// 이 파일은 reactive variables를 가지고 있을 곳
import { makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false); // () 안은 react variable이 가지고 있는 default 값
export const darkModeVar = makeVar(false);

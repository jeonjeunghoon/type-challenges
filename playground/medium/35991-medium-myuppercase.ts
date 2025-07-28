/*
  35991 - MyUppercase
  -------
  by NaNix (@fusheng33) #보통

  ### 질문

  Implement `Uppercase<T>`, convert all letter to uppercase

  > GitHub에서 보기: https://tsch.js.org/35991/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type MyUppercase<T extends string> = any

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyUppercase<'a'>, 'A'>>,
  Expect<Equal<MyUppercase<'Z'>, 'Z'>>,
  Expect<Equal<MyUppercase<'A z h yy 😃cda\n\t  a   '>, 'A Z H YY 😃CDA\n\t  A   '>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/35991/answer/ko
  > 정답 보기: https://tsch.js.org/35991/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/

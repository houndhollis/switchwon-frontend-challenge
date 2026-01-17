import type { ValueOf } from '@/shared/types';

// ------------------- Response Code -----------------------
export const RESPONSE_CODE = {
  OK: 'OK',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  WALLET_INSUFFICIENT_BALANCE: 'WALLET_INSUFFICIENT_BALANCE',
  UNAUTHORIZED: 'UNAUTHORIZED',
} as const;

// 실패 코드만 모아둔 배열, OK는 제외
export const FAILURE_CODES = {
  VALIDATION_ERROR: RESPONSE_CODE.VALIDATION_ERROR,
  WALLET_INSUFFICIENT_BALANCE: RESPONSE_CODE.WALLET_INSUFFICIENT_BALANCE,
  UNAUTHORIZED: RESPONSE_CODE.UNAUTHORIZED,
} as const;

export type ResponseCodeType = ValueOf<typeof RESPONSE_CODE>;

// ------------------- 기본 API 응답 스팩 -----------------------
export interface BaseResponseType<T> {
  code: ResponseCodeType;
  data: T;
  message: string;
}

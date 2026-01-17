## 시작하기

### 1. Environment Variables

`.env.template` 파일을 기반으로 `.env` 파일 생성

```bash
.env 파일 생성 후 VITE_API_BASE_URL에 실행 가능한 백엔드 서버 주소를 넣어주세요.
```
#### ✅ 추가 설명

- Vite dev 서버에서 `/api` 요청은 `.env`에 있는 `VITE_API_BASE_URL`로 프록시됨  
- 클론 후 바로 실행하면 **프록시 에러** 발생 → 반드시 `.env` 수정 필요  

### 2. Install Dependencies

```bash
pnpm install
```

필요한 패키지 설치

### 3. Run the Project

```bash
pnpm dev
```

개발 서버 실행 노드 버전은 21.9 이상으로 맞춰주세요.

##

## 요구 기능 사항

### ✅ 사용자 인증

- ✅ 로그인
  - 첫 화면에 이메일 주소를 입력하는 UI를 구현합니다.
  - 이메일 입력 후 '시작하기' 버튼을 누르면 POST /auth/login API를 호출합니다.
  - 서버는 해당 이메일로 사용자를 생성하거나 조회한 후 JWT(Access Token) 를 발급합니다.

- ✅ 토큰 관리
  - 발급받은 JWT를 클라이언트에 안전하게 저장해야 합니다. (쿠키 또는 로컬 스토리지)
  - 이후 모든 API 요청의 Authorization 헤더에 Bearer ${token} 형식으로 JWT를 포함하여 전송해야 합니다.

- ✅ 로그아웃
  - 로그아웃 버튼을 클릭하면 클라이언트에서 토큰을 삭제하고, 로그인 화면으로 리다이렉트합니다.

- ✅ 라우트 보호
  - 로그인하지 않은 사용자가 환전 페이지나 내역 페이지에 URL로 직접 접근하려고 하면, 로그인 페이지로 리다이렉트 시켜야 합니다.

---

### ✅ 환전 및 내역 조회

- ✅ 지갑/환율 조회
  - 로그인 후 메인 페이지에서 사용자의 현재 지갑 잔액과 실시간 환율을 API로 조회하여 화면에 표시합니다.
  - 주기적(1분)으로 최신 환율을 조회하여 화면에 표시합니다.

- ✅ 환전 견적 조회
  - 사용자가 환전할 금액과 통화를 선택하면 POST /orders/quote API를 호출하여 환전 견적을 조회합니다.
  - 서버에서 받은 금액(원화)을 화면에 표시합니다.

- ✅ 환전 실행
  - 사용자가 환전 금액을 입력하고 '환전하기' 버튼을 누르면 서버에 환전 요청 API를 보냅니다.
  - 환전 요청이 성공하면, 화면에 표시된 지갑 잔액 데이터가 자동으로 최신화되어야 합니다.

- ✅ 환전 내역 조회
  - '내역 보기' 페이지에서 사용자의 모든 환전 내역을 API로 조회하여 목록 형태로 보여줍니다.

##

## 프로젝트 구조 (예시 auth 도메인)

```text
src/
├── features/                 # 기능(도메인) 단위 모듈
│   ├── auth/                 # 인증 도메인
│   │   ├── hooks/            # 인증 관련 커스텀 훅 (useLogin, useAuth 등)
│   │   ├── pages/            # 로그인, 인증 페이지
│   │   ├── constants/        # 인증 관련 상수
│   │   ├── types/            # 인증 도메인 타입 정의
│   │   ├── utils/            # 인증 관련 유틸 함수
│   │   ├── components/       # 인증 UI 컴포넌트
│   │   └── depthDomain/      # 하위 도메인 분리 구조 (/auth/info...)
│   │       ├── components/
│   │       ├── hooks/
│   │       └── pages/
│
├── shared/                   # 공통 모듈
│   ├── components/           # 공용 UI 컴포넌트
│   ├── hooks/                # 공용 훅
│   └── utils/                # 공용 유틸 함수
│
├── remote/                   # 서버 통신 레이어
│   ├── auth/
│   │   ├── api/              # 인증 API 요청 함수
│   │   └── types/            # API 응답 타입 정의
│   └── http/                 # 앱 전용 API 클라이언트(Ky) 설정
└── main.tsx                  # 앱 진입점
```

## 🔨 구조 설계 의도

- **Feature 기반 구조**  
  → 도메인 단위로 책임을 분리하여 유지보수성과 확장성 강화

- **UI / 로직 / 타입 / 유틸 분리**  
  → 변경에 강한 구조

- **shared 분리**  
  → 재사용 가능한 코드 중앙 관리

- **remote 레이어 분리**  
  → API 변경 시 영향 최소화


## 시연 영상

| 로그인 | 환전 하기 |
|------------|------------|
|![Jan-18-2026 03-45-16](https://github.com/user-attachments/assets/03cf6437-3bcd-4a8f-a4a2-96f307aa847f)|![Jan-18-2026 03-49-40](https://github.com/user-attachments/assets/c5cda522-75cf-4e0c-b7c8-02190334a2a0)||
| 반응형 | 환전 내역 |
|![Jan-18-2026 03-50-37](https://github.com/user-attachments/assets/dae2a5a3-147a-4fdf-9a6d-a1bebc42cd52)|![Jan-18-2026 03-51-38](https://github.com/user-attachments/assets/52b048f6-ebc0-4bc6-8ca7-1d6531601e77)|
| 라우트 보호 | 404 페이지 |
| ![Jan-18-2026 03-52-20](https://github.com/user-attachments/assets/555823c0-b581-48cd-83fd-0f31f7afbc9a) |![Jan-18-2026 04-09-41](https://github.com/user-attachments/assets/331a68ed-9924-4ab0-ac60-0242f32d9645) |







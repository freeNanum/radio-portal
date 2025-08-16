# 한국 라디오 포털

## 프로젝트 개요

이 프로젝트는 다양한 한국 라디오 방송을 청취할 수 있는 웹 애플리케이션입니다. React와 TypeScript를 사용하여 개발되었으며, 사용자에게 편리한 라디오 청취 경험을 제공하는 것을 목표로 합니다.

## 주요 기능

- **다양한 라디오 채널 제공:** KBS, MBC, SBS, CBS 등 주요 라디오 방송 채널 목록을 제공합니다.
- **간편한 채널 이동:** 각 방송사 로고를 클릭하면 해당 방송사의 실시간 라디오 페이지로 이동하여 청취할 수 있습니다.
- **직관적인 사용자 인터페이스:** 배경 이미지와 함께 각 방송사별 고유 색상으로 구분된 깔끔한 UI를 제공합니다.

## 기술 스택

- **Frontend:** React, TypeScript, CSS
- **Development Tools:** Create React App

## 프로젝트 구조

```
/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.tsx
│   ├── stations.ts
│   ├── App.css
│   └── ...
├── package.json
└── README.md
```

- **`public/index.html`**: 애플리케이션의 기본 HTML 파일입니다.
- **`src/App.tsx`**: 메인 애플리케이션 컴포넌트로, 라디오 채널 목록을 화면에 렌더링합니다.
- **`src/stations.ts`**: 라디오 방송사 정보를 담고 있는 데이터 파일입니다.
- **`src/App.css`**: 애플리케이션의 전반적인 스타일을 정의합니다.

## 설치 및 실행

1.  **저장소 복제:**
    ```bash
    git clone https://github.com/your-username/korean-radio-portal.git
    cd korean-radio-portal
    ```

2.  **의존성 설치:**
    ```bash
    npm install
    ```

3.  **개발 서버 실행:**
    ```bash
    npm start
    ```
    브라우저에서 `http://localhost:3000` 주소로 접속하여 확인할 수 있습니다.

## 사용 가능한 스크립트

- **`npm start`**: 개발 모드로 앱을 실행합니다.
- **`npm test`**: 테스트를 실행합니다.
- **`npm run build`**: 프로덕션용으로 앱을 빌드합니다.
- **`npm run eject`**: Create React App의 설정을 커스터마이징하기 위해 사용합니다.

## 라이선스

이 프로젝트는 [GPL-3.0-or-later](LICENSE)를 따릅니다.
# jinjja.com — 명수용 프로젝트 브리핑 + Windows 세팅 가이드

## 클로드에게: 이 문서를 읽고 프로젝트 맥락을 파악해주세요

명수는 수빈의 남편입니다. 수빈이 기획한 jinjja.com 프로젝트의 기술 세팅을 도와주고 있습니다.
수빈은 Mac에서 별도로 작업 중이고, 명수는 Windows에서 같은 프로젝트를 진행합니다.
명수는 기술적인 작업(터미널, 코딩, 배포 등)에 익숙합니다.

---

## 프로젝트 요약

**jinjja.com (진짜)**
- 한국 여행/맛집/놀거리를 상황별로 큐레이션하는 웹사이트
- 컨셉: 장소 나열이 아닌 상황별 큐레이션 (비오는날, 데이트, 혼자, 부모님과 등)
- 톤: 솔직+재치 (별로면 별로라고 말함, 관광 가이드체 금지)
- 슬로건: 진짜만 알려줌
- 타깃: 한국인 메인 + 외국인 확장 (영어/일본어/중국어는 추후)
- 수익화: AdSense → Mediavine 전환 → 애필리에이트 추가
- 목표: 월 300만원 광고 수익

**기술 스택**
- Next.js 14+ (App Router, TypeScript)
- Tailwind CSS
- Vercel 배포
- Supabase (데이터베이스, 추후)
- Claude API (콘텐츠 자동 생성)
- SSG (정적 사이트 생성) 기반

**사이트 구조**
```
jinjja.com/
├── /                     ← 홈 (한국어)
├── /상황별/
│   ├── /데이트/
│   ├── /혼자갈때/
│   ├── /비오는날/
│   ├── /부모님과/
│   ├── /가성비/
│   ├── /야간/
│   └── ...
├── /지역/
│   ├── /서울/성수동/
│   ├── /서울/홍대/
│   └── ...
├── /먹을곳/
├── /할것/
├── /솔직리뷰/
│   ├── /과대평가-주의보/
│   ├── /숨은보석/
│   └── /재방문각/
├── /en/                  ← 영어 (추후 확장)
└── /about/
```

**콘텐츠 자동화 구조**
- Tier 1 (80%): pSEO 자동 생성 — API 데이터 + AI 가공, 수빈 투입 0
- Tier 2 (15%): AI 큐레이션 리스트 — AI 초안 + 수빈 감수
- Tier 3 (5%): 수빈 직접 작성 솔직리뷰 — 월 2~4편

**핵심 차별화**
- 상황 × 지역 매트릭스로 pSEO 페이지 대량 생성 (500~1,000페이지)
- 솔직한 한줄평 + 꿀팁 + 추천/비추 대상 명시
- 데이터 소스: Google Places API, 네이버 플레이스, 카카오맵, 한국관광공사 TourAPI, 기상청 API

---

## Windows 세팅 가이드

### 오늘의 목표
✅ 사이트 뼈대 만들어서 브라우저에서 확인하기
✅ GitHub에 올리기
✅ Vercel로 인터넷에 배포하기

---

### STEP 0: 사전 확인 (3분)

PowerShell 열기: 시작 메뉴 → "PowerShell" 검색 → 엔터

```powershell
node --version
git --version
```

둘 다 버전 나오면 OK → STEP 1로.

**Node.js 없으면**: https://nodejs.org → LTS 다운로드 → 설치 (전부 Next) → PowerShell 재시작
**Git 없으면**: https://git-scm.com → 다운로드 → 설치 (기본값 Next) → PowerShell 재시작

### GitHub 계정 없으면
1. https://github.com → Sign up
2. 이메일, 비밀번호, 유저네임 → 인증

### Git 이름 설정 (처음이면)
```powershell
git config --global user.name "본인이름영어"
git config --global user.email "이메일@gmail.com"
```

---

### STEP 1: 프로젝트 폴더 만들기 (1분)

```powershell
cd $HOME
mkdir jinjja
cd jinjja
```

---

### STEP 2: 클로드코드로 사이트 만들기 (15분)

클로드코드 설치 안 했으면:
```powershell
npm install -g @anthropic-ai/claude-code
```

실행:
```powershell
claude
```

클로드코드 열리면 아래 프롬프트 **그대로 복붙**:

```
jinjja.com이라는 한국 여행/맛집/놀거리 큐레이션 웹사이트를 만들어줘.

## 핵심 컨셉
- 상황별 큐레이션 사이트 (비오는날, 데이트, 혼자, 부모님과 등)
- 톤: 솔직+재치 (별로면 별로, 관광 가이드체 금지)
- 한국어 메인 + 영어 확장
- 슬로건: 진짜만 알려줌

## 기술 스택
- Next.js 14+ (App Router, TypeScript)
- Tailwind CSS
- 정적 사이트 생성 (SSG)

## 지금 만들어야 할 것

### 1. Next.js 프로젝트 초기화
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-eslint

### 2. 사이트 레이아웃과 페이지 구조 만들기

폴더 구조:
src/app/
├── layout.tsx          ← 전체 레이아웃 (헤더, 푸터)
├── page.tsx            ← 홈페이지
├── 상황별/
│   ├── page.tsx        ← 상황별 카테고리 목록
│   ├── 데이트/
│   │   └── page.tsx    ← 데이트 추천 메인
│   ├── 혼자갈때/
│   │   └── page.tsx
│   └── 비오는날/
│       └── page.tsx
├── 지역/
│   ├── page.tsx        ← 지역 목록
│   └── 서울/
│       ├── page.tsx    ← 서울 메인
│       └── 성수동/
│           └── page.tsx
├── 솔직리뷰/
│   └── page.tsx
└── about/
    └── page.tsx

### 3. 홈페이지 디자인

깔끔하고 모던한 디자인. 미니멀하면서 위트있는 느낌.

홈페이지 구성:
- 히어로 섹션: 진짜만 알려줌 + 서브카피: 관광 가이드가 안 알려주는 진짜 한국
- 상황별 큐레이션 카드 (비오는날, 데이트, 혼자갈때, 부모님과, 가성비, 야간 등)
  각 카드에 이모지 + 상황명 + 한줄 설명
- 인기 지역 섹션 (성수동, 홍대, 을지로, 한남동, 부산, 제주 등)
- 솔직리뷰 미리보기 섹션
- 푸터: jinjja.com, 소개, 연락처

색상:
- 메인: 검정 + 흰색 베이스
- 포인트: 선명한 오렌지 (#FF6B35)
- 깔끔하고 여백 넉넉하게

폰트:
- Pretendard (CDN으로 불러오기)

### 4. 상황별 페이지 (데이트 예시)

/상황별/데이트/ 페이지:
- 제목: 데이트 갈 만한 곳
- 서브: 첫 데이트부터 100일까지, 상황별로 골라놨음
- 더미 장소 카드 5~7개 (나중에 실제 데이터로 교체)
  각 카드: 장소명, 지역, 카테고리, 한줄평, 평점, 가격대
- 한줄평 예시:
  - 여기 분위기로 먹고 사는 곳. 음식은 그냥 그럼.
  - 웨이팅 30분인데 비 오는 날 가면 바로 들어감. 꿀팁임.
  - 사진 찍기 좋은데 실물은 좀 다름. 그래도 데이트로는 합격.

### 5. 반응형 (모바일 퍼스트)

### 6. SEO 기본 세팅
- 메타 태그, 시맨틱 HTML, lang="ko"

모든 코드를 만들고 npm run dev로 로컬에서 확인 가능하게 해줘.
```

중간에 Yes/No 물으면 Yes 선택.

---

### STEP 3: 로컬에서 확인 (1분)

```powershell
npm run dev
```

브라우저에서 http://localhost:3000 접속 → 사이트 보이면 성공!

---

### STEP 4: GitHub에 올리기 (5분)

1. https://github.com/new → Repository name: `jinjja` → Public → Create

2. PowerShell에서:
```powershell
git init
git add .
git commit -m "jinjja.com 첫 번째 버전"
git branch -M main
git remote add origin https://github.com/유저명/jinjja.git
git push -u origin main
```

⚠️ `유저명`을 본인 GitHub 유저네임으로 바꾸기!

GitHub 로그인 팝업 뜨면 → Sign in with your browser → 브라우저에서 승인

---

### STEP 5: Vercel 배포 (5분)

1. https://vercel.com → Start Deploying → Continue with GitHub
2. Add New Project → jinjja 저장소 선택 → Import
3. 설정 안 건드리고 Deploy
4. 2~3분 후 URL 생성됨 → 접속해서 확인!

---

### STEP 6: 도메인 연결 (나중에 OK)

1. https://namecheap.com → jinjja.com 구매 ($9~12/년)
2. Vercel → Settings → Domains → jinjja.com 추가
3. Namecheap → Advanced DNS:
   - A Record: @ → 76.76.21.21
   - CNAME: www → cname.vercel-dns.com
4. 10~30분 후 접속 가능

---

### 막힐 때

| 증상 | 해결 |
|------|------|
| command not found | Node.js 또는 Git 설치 → PowerShell 재시작 |
| 포트 3000 사용 중 | `npm run dev -- -p 3001` |
| push 안 됨 | GitHub 로그인 다시 |
| 뭔지 모를 에러 | 에러 메시지 복사해서 클로드한테 보내기 |

# jinjja.com — 이어서 작업하는 방법

## 같은 컴퓨터에서 이어서 할 때

```powershell
cd $HOME/jinjja
git pull
npm run dev
```

브라우저에서 http://localhost:3000 접속

---

## 다른 컴퓨터에서 처음 받을 때

```powershell
cd $HOME
git clone https://github.com/myungsoojin/jinjja.git
cd jinjja
npm install
npm run dev
```

---

## 작업 끝나면 GitHub에 저장

```powershell
git add .
git commit -m "변경 내용 설명"
git push
```

---

## 수빈이 Mac에서 변경한 내용 가져올 때

```powershell
git pull
```

충돌 나면 → 에러 메시지 복사해서 클로드한테 보내기

---

## 다음 할 일

- [ ] STEP 5: Vercel 배포 (vercel.com에서 GitHub 연결 → Deploy)
- [ ] STEP 6: 도메인 연결 (jinjja.com 구매 후 Vercel에 연결)

---

## 유용한 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 로컬 서버 실행 |
| `npm run build` | 배포용 빌드 |
| `git status` | 변경된 파일 확인 |
| `git log --oneline` | 커밋 히스토리 확인 |
| `claude` | 클로드코드 실행 (코드 수정할 때) |

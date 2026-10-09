# rc-dashboard-app — 체험단 대시보드 PWA (배포용 셸)

**정본**: 개발 정본은 여기가 **아니다** → `russian-cake\reviewers\shared_dashboard\app\`
**재개 지점**: 이 폴더 `README.md` 「📍현황」

## 이 폴더가 하는 일
로한 사장님용 설치형 웹앱을 GitHub Pages 로 내보내는 **앱 셸**. 데이터는 GAS 에서 JSONP 로 실시간 로드하므로 이 저장소엔 데이터가 없다.
개발은 `russian-cake` 쪽에서 하고, 여기는 배포본을 받아 오는 자리다.

## 절대 하지 말 것
- ⛔ **이 저장소는 Public 이다.** 연락처·이메일·매출 등 개인정보나 내부 데이터를 어떤 형태로도 넣지 말 것(주석·테스트 더미 포함).
- ⛔ **여기서 기능을 고치지 말 것.** 정본은 `russian-cake\reviewers\shared_dashboard\app\` — 여기서 고치면 다음 배포 때 덮여 사라진다.
- ⛔ 셸 파일을 고치고 `sw.js` 의 `CACHE` 문자열(현재 `rc-dashboard-v4`)을 그대로 두지 말 것. 이름이 같으면 옛 캐시가 유지돼 폰에 반영되지 않는다.

## 자주 쓰는 것
```
git pull        # 배포 전 최신화 (origin 보다 뒤처져 있는 경우가 있었다)
```

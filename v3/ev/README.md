## Base

### get /

기본 설정 정보

**Response**

* **`string` version:** 서버 버전
* **`number` lp_idle_time:** long-polling 요청 대기 시간 (이전 요청에 이벤트 없었을 경우 sleep) [단위: 초]
* **`number` lp_wait_timeout:** long-polling 응답 대기 시간 (receive timeout 5초 정도 더 길게 설정) [단위: 초]

### * /*

HTTP Status Code

**Response**

* **`` 200:** OK (성공, 컨텐츠 있음)
* **`` 204:** No Content (성공, 컨텐츠 없음)

**Error**

* **400:** Bad Request (요청 데이터, 파라미터 오류)
* **401:** Unauthorized (oauth2 토큰 오류)
* **403:** Forbidden (금지된 요청, 권한 오류)
* **404:** Not Found (데이터 없음, 권한 오류)
* **406:** Not Acceptable (JSON 데이터 오류)
* **409:** Conflict (데이터 중복 오류)
* **413:** Payload Too Large (과다 요청, 초대 사용자 수 제한 등)

## event

### get /v3/events

이벤트 대기

**Response**

* **`object[]` events:** 이벤트 리스트
* **`string` events.type:** 이벤트 종류
* **`object` events.chat:** 채팅 이벤트 정보
* **`number` events.chat.team:** 팀 번호 (type: chat.*)
* **`number` events.chat.room:** 방 번호 (type: chat.*)
* **`number` events.chat.user:** 유저 번호 (type: chat.message|detach)
* **`number` events.chat.msg:** 메시지 번호 (type: chat.message)
* **`number` events.chat.alert:** 알림 (0:사용안함, 1:사용, type: chat.room)
* **`string` events.chat.name:** 방 이름 (type: chat.room)
* **`object` events.feed:** 피드 이벤트 정보
* **`number` events.feed.team:** 팀 번호 (type: feed.*)
* **`number` events.feed.feedgroup:** 피드 그룹 번호 (type: feed.*)
* **`number` events.feed.feed:** 피드 번호 (0:그룹 전체, type: feed.*)
* **`number` events.feed.user:** 유저 번호 (type: feed.feed|reply|like|tagfeed|tagreply|removelike)
* **`number` events.feed.watch:** 지켜보기 (0:안함, 1:사용, type: feed.feed|tagfeed|reply|tagreply|watch)
* **`number` events.feed.push:** 강제 알림 (0:안함, 1:사용, type: feed.feed|tagfeed)
* **`number` events.feed.reply:** 댓글 번호 (type: feed.reply|tagreply|removereply|changereply)
* **`number` events.feed.inform:** 알림탭 갱신 여부 (0:미참여, 1:최근 참여, 2:이전 참여, type: feed.reply|tagreply|like)
* **`object` events.feedgroup:** 피드 그룹 이벤트 정보
* **`number` events.feedgroup.team:** 팀 번호 (type: feedgroup.*)
* **`number` events.feedgroup.feedgroup:** 피드 그룹 번호 (type: feedgroup.*)
* **`object` events.inform:** 알림 이벤트 정보
* **`number` events.inform.feedgroup:** 피드 그룹 번호 (0:알림 전체, type: inform.*)
* **`number` events.inform.feed:** 피드 번호 (0:그룹 전체, type: inform.*)
* **`number` events.inform.noti:** 알림 번호 (0:전체, type: inform.*)
* **`number` events.inform.read:** 읽음 상태 (0:전체, 1:읽은 알림만, type: inform.removefeed)
* **`number` events.inform.watch:** 지켜보기 (0:일반, 1:지켜보기, type: inform.removefeed)
* **`object` events.user:** 유저 이벤트 정보
* **`number` events.user.user:** 유저 번호 (type: user.password|drop)
* **`number` events.user.team:** 팀 번호 (type: user.approval|exit|block)
* **`number[]` events.user.users:** 유저 번호 리스트 (type: user.approval|exit|block)

### get /v1/events

이벤트 대기

**Response**

* **`object[]` events:** 이벤트 리스트
* **`string` events.type:** 이벤트 종류
* **`object` events.chat:** 채팅 이벤트 정보
* **`number` events.chat.team:** 팀 번호 (type: chat.*)
* **`number` events.chat.room:** 방 번호 (type: chat.*)
* **`number` events.chat.user:** 유저 번호 (type: chat.message|detach)
* **`number` events.chat.msg:** 메시지 번호 (type: chat.message)
* **`number` events.chat.alert:** 알림 (0:사용안함, 1:사용, type: chat.room)
* **`string` events.chat.name:** 방 이름 (type: chat.room)
* **`object` events.feed:** 피드 이벤트 정보
* **`number` events.feed.team:** 팀 번호 (type: feed.*)
* **`number` events.feed.feedgroup:** 피드 그룹 번호 (type: feed.*)
* **`number` events.feed.feed:** 피드 번호 (0:그룹 전체, type: feed.*)
* **`number` events.feed.user:** 유저 번호 (type: feed.feed|reply|like|tagfeed|tagreply|removelike)
* **`number` events.feed.watch:** 지켜보기 (0:안함, 1:사용, type: feed.feed|tagfeed|reply|tagreply|watch)
* **`number` events.feed.push:** 강제 알림 (0:안함, 1:사용, type: feed.feed|tagfeed)
* **`number` events.feed.reply:** 댓글 번호 (type: feed.reply|tagreply|removereply|changereply)
* **`number` events.feed.inform:** 알림탭 갱신 여부 (0:미참여, 1:최근 참여, 2:이전 참여, type: feed.reply|tagreply|like)
* **`object` events.feedgroup:** 피드 그룹 이벤트 정보
* **`number` events.feedgroup.team:** 팀 번호 (type: feedgroup.*)
* **`number` events.feedgroup.feedgroup:** 피드 그룹 번호 (type: feedgroup.*)
* **`object` events.inform:** 알림 이벤트 정보
* **`number` events.inform.feedgroup:** 피드 그룹 번호 (0:알림 전체, type: inform.*)
* **`number` events.inform.feed:** 피드 번호 (0:그룹 전체, type: inform.*)
* **`number` events.inform.noti:** 알림 번호 (0:전체, type: inform.*)
* **`number` events.inform.read:** 읽음 상태 (0:전체, 1:읽은 알림만, type: inform.removefeed)
* **`number` events.inform.watch:** 지켜보기 (0:일반, 1:지켜보기, type: inform.removefeed)
* **`object` events.user:** 유저 이벤트 정보
* **`number` events.user.user:** 유저 번호 (type: user.password|drop)
* **`number` events.user.team:** 팀 번호 (type: user.approval|exit|block)
* **`number[]` events.user.users:** 유저 번호 리스트 (type: user.approval|exit|block)


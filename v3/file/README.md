## Base

### * /*

HTTP Status Code

**Response**

* **`` 200:** OK (성공, 컨텐츠 있음)
* **`` 201:** Created (성공, 컨텐츠 없음)
* **`` 204:** No Content (성공, 컨텐츠 없음)

**Error**

* **400:** Bad Request (요청 데이터, 파라미터 오류)
* **401:** Unauthorized (oauth2 토큰 오류)
* **403:** Forbidden (금지된 요청, 권한 오류)
* **404:** Not Found (데이터 없음, 권한 오류)
* **406:** Not Acceptable (JSON 데이터 오류)
* **409:** Conflict (데이터 중복 오류)
* **413:** Payload Too Large (과다 요청, 초대 사용자 수 제한 등)

## download

### get /v3/file/:team/:id

파일 다운로드

**Parameters**

* **`number` team:** 팀 번호
* **`string` id:** 파일 아이디

**Response**

* **`binary` Content:** 파일 스트림 (application/octet-stream 등)

## upload

### post /v3/files/:team

파일 업로드

**Parameters**

* **`number` team:** 팀 번호

**Response**

* **`object[]` files:** 파일 정보 리스트
* **`string` files.name:** 파일 이름
* **`number` files.size:** 파일 크기
* **`string` files.id:** 파일 아이디
* **`string` files.type:** 파일 종류 (normal,image,video)

**Error**

* **403:** Forbidden (금지된 요청, 권한 오류)
* **413:** Payload Too Large (과다 요청, 초대 사용자 수 제한 등)

### post /v1/files/:team

파일 업로드

**Parameters**

* **`number` team:** 팀 번호

**Response**

* **`object[]` files:** 파일 정보 리스트
* **`string` files.name:** 파일 이름
* **`number` files.size:** 파일 크기
* **`number` files.file:** 파일 번호

**Error**

* **403:** Forbidden (금지된 요청, 권한 오류)
* **413:** Payload Too Large (과다 요청, 초대 사용자 수 제한 등)


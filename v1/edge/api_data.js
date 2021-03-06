define({ "api": [
  {
    "type": "*",
    "url": "/*",
    "title": "Authorization",
    "version": "2.0.0",
    "name": "Authorization",
    "group": "Base",
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/_apidoc.js",
    "groupTitle": "Base",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>OAuth2 token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Example",
          "content": "Authorization: bearer a0b1c2d3e4f6g7h8i9j0a0b1c2d3e4f6g7h8i9j0",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/config",
    "title": "기본 설정 정보",
    "name": "GetConfig",
    "group": "Base",
    "version": "2.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "event",
            "description": "<p>이벤트</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "event.lp_url",
            "description": "<p>long-polling url (GET <a href=\"#api-Event-GetEvents\">/v1/events</a>)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.lp_idle_time",
            "description": "<p>long-polling 요청 대기 시간 (이전 요청에 이벤트 없었을 경우 sleep) [단위: 초]</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "event.lp_wait_timeout",
            "description": "<p>long-polling 응답 대기 시간 (receive timeout 5초 정도 더 길게 설정) [단위: 초]</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "chat",
            "description": "<p>채팅</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "chat.room_max_usercount",
            "description": "<p>대화방 최대 인원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "chat.room_name_usercount",
            "description": "<p>대화방 이름 인원 수 (대화방 이름이 비어 있을 경우 유저 이름 오름차순 ,로 구분. 초과 시 ... 추가)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"event\":{\n\"lp_url\":\"https:\\/\\/ev.tmup.com\\/v1\\/events\",\n\"lp_idle_time\":1,\n\"lp_wait_timeout\":30\n},\n\"chat\":{\n\"room_max_usercount\":100,\n\"room_name_usercount\":10\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Base"
  },
  {
    "type": "*",
    "url": "/*",
    "title": "HTTP Status Code",
    "version": "2.0.0",
    "name": "StatusCode",
    "group": "Base",
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/_apidoc.js",
    "groupTitle": "Base",
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "200",
            "description": "<p>OK (성공, 컨텐츠 있음)</p>"
          },
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "201",
            "description": "<p>Created (성공, 컨텐츠 없음)</p>"
          },
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "204",
            "description": "<p>No Content (성공, 컨텐츠 없음)</p>"
          }
        ],
        "Success 3xx": [
          {
            "group": "Success 3xx",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified (성공, 변경 없음)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request (요청 데이터, 파라미터 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Unauthorized (OAuth2 토큰 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden (금지된 요청, 권한 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found (데이터 없음, 권한 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "406",
            "description": "<p>Not Acceptable (JSON 데이터 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict (데이터 중복 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "413",
            "description": "<p>Payload Too Large (과다 요청, 초대 사용자 수 제한 등)</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error (내부 오류)</p>"
          },
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "501",
            "description": "<p>Not Implemented (URL, method 오류)</p>"
          },
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "502",
            "description": "<p>Bad Gateway (서버 내부 통신 오류)</p>"
          },
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "520",
            "description": "<p>Unknown Error (알 수 없는 오류)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/room/:room",
    "title": "대화방 정보",
    "name": "GetRoom",
    "group": "Chat",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "roomtype",
            "description": "<p>방 종류 (1:개인, 2:단체)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "state",
            "description": "<p>상태 (0:퇴장, 1:참여)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "alert",
            "description": "<p>방 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>방 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "msgtype",
            "description": "<p>메시지 종류 (1:일반, 2:파일)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "newcount",
            "description": "<p>안 읽은 메시지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "newmsg",
            "description": "<p>안 읽은 메시지 번호 시작</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "created",
            "description": "<p>메시지 생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "number[]",
            "optional": true,
            "field": "users",
            "description": "<p>다른 유저 번호 리스트 (state:1 - 참여 대화방인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": true,
            "field": "fileinfo",
            "description": "<p>파일 정보 (msgtype:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "fileinfo.file",
            "description": "<p>파일 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "fileinfo.type",
            "description": "<p>파일 종류 (1:일반, 2:이미지, 3:동영상)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "fileinfo.name",
            "description": "<p>파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "fileinfo.w",
            "description": "<p>가로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "fileinfo.h",
            "description": "<p>세로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "fileinfo.size",
            "description": "<p>파일 크기</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"team\":1,\n\"roomtype\":2,\n\"state\":1,\n\"alert\":1,\n\"name\":\"\",\n\"msg\":1,\n\"user\":5,\n\"msgtype\":1,\n\"content\":\"메시지\",\n\"newcount\":0,\n\"newmsg\":null,\n\"users\":[2,3,4,5,6,7,8,9,11,12,13,14,15],\n\"created\":1392289132\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/rooms/:team",
    "title": "대화방 목록",
    "name": "GetRooms",
    "group": "Chat",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "rooms",
            "description": "<p>대화방 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.roomtype",
            "description": "<p>방 종류 (1:개인, 2:단체)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.state",
            "description": "<p>상태 (0:퇴장, 1:참여)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.alert",
            "description": "<p>방 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "rooms.name",
            "description": "<p>방 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.msgtype",
            "description": "<p>메시지 종류 (1:일반, 2:파일)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "rooms.content",
            "description": "<p>메시지 내용</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.newcount",
            "description": "<p>안 읽은 메시지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.newmsg",
            "description": "<p>안 읽은 메시지 번호 시작</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rooms.created",
            "description": "<p>메시지 생성시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"rooms\":[\n{\n\"team\":1,\n\"room\":1,\n\"roomtype\":2,\n\"state\":1,\n\"alert\":1,\n\"name\":\"\",\n\"msg\":1,\n\"user\":5,\n\"msgtype\":1,\n\"len\":4,\n\"content\":\"대화내용\",\n\"newcount\":0,\n\"newmsg\":null,\n\"users\":[2,3,4,5,6,7,8,9,11,12,13,14,15],\n\"created\":1392289132\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "https://edge.tmup.com/v1/room/:team",
    "title": "대화방 생성",
    "name": "PostRoom",
    "group": "Chat",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "number[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 번호 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"users\":[1,2,3,4]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "413",
            "description": "<p>Payload Too Large (과다 요청, 초대 사용자 수 제한 등)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://edge.tmup.com/v1/room/join/:room",
    "title": "대화방 초대",
    "name": "PostRoomJoin",
    "group": "Chat",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "number[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 번호 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"users\":[1,2,3,4]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호 (단체방으로 전환된 경우 새 방 번호)</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "413",
            "description": "<p>Payload Too Large (과다 요청, 초대 사용자 수 제한 등)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/v1/room/:room",
    "title": "대화방 설정",
    "name": "PutRoom",
    "group": "Chat",
    "version": "2.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>이름 (빈문자열이면 기본 이름 사용, ascii 특수문자까지만 허용)</p>"
          },
          {
            "group": "JSON",
            "type": "number",
            "size": "0-1",
            "optional": true,
            "field": "alert",
            "description": "<p>알림 (0:사용안함, 1:사용)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"name\":\"방이름\"}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat",
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "204",
            "description": "<p>No Content (성공, 컨텐츠 없음)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/message/:room/:msg",
    "title": "메시지 내용 (장문)",
    "name": "GetMessage",
    "group": "Chat_Message",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "text/plain",
            "optional": false,
            "field": "Content",
            "description": "<p>내용</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat_Message"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/message/summary/:room/:msg",
    "title": "메시지 요약 정보",
    "name": "GetMessageSummary",
    "group": "Chat_Message",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "type",
            "description": "<p>종류 (1:일반, 2:파일, 3:초대, 4:퇴장)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": true,
            "field": "fileinfo",
            "description": "<p>파일 목록 (type:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "fileinfo.file",
            "description": "<p>파일 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "fileinfo.type",
            "description": "<p>파일 종류 (1:일반, 2:이미지, 3:동영상)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "fileinfo.name",
            "description": "<p>파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "fileinfo.w",
            "description": "<p>가로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "fileinfo.h",
            "description": "<p>세로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "fileinfo.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number[]",
            "optional": true,
            "field": "users",
            "description": "<p>유저 번호 리스트 (type:3 - 초대인 경우)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"user\":5,\"type\":1,\"len\":3,\"content\":\"메시지\",\"created\":1392319358}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat_Message"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/messages/:room/:count(/:way(/:start))",
    "title": "메시지 목록",
    "name": "GetMessages",
    "group": "Chat_Message",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-20",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 메시지 수</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0-2",
            "optional": true,
            "field": "way",
            "defaultValue": "0",
            "description": "<p>방향 (0:최신, 1:이전, 2:이후)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>메시지 번호 시작</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "msgs",
            "description": "<p>메시지 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "msgs.msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "msgs.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "msgs.type",
            "description": "<p>종류 (1:일반, 2:파일, 3:초대, 4:퇴장)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "msgs.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msgs.content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msgs.tagfeeds",
            "description": "<p>태그 피드번호 (|로 구분, 비어있으면 태그 없음)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "msgs.created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "msgs.fileinfo",
            "description": "<p>파일 정보 (type:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "msgs.fileinfo.file",
            "description": "<p>파일 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "msgs.fileinfo.type",
            "description": "<p>파일 종류 (1:일반, 2:이미지, 3:동영상)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "msgs.fileinfo.name",
            "description": "<p>파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "msgs.fileinfo.w",
            "description": "<p>가로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "msgs.fileinfo.h",
            "description": "<p>세로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "msgs.fileinfo.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number[]",
            "optional": true,
            "field": "msgs.users",
            "description": "<p>유저 번호 리스트 (type:3 - 초대인 경우)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"msgs\":[\n{\"msg\":1,\"user\":1,\"type\":1,\"len\":3,\"content\":\"메시지\",\"tagfeeds\":null,\"created\":1392319357},\n{\"msg\":2,\"user\":1,\"type\":3,\"len\":0,\"content\":\"\",\"tagfeeds\":null,\"created\":1392319358,\"users\":[3]},\n{\"msg\":3,\"user\":1,\"type\":2,\"len\":0,\"content\":\"\",\"tagfeeds\":null,\"created\":1392319359,\"fileinfo\":{\"file\":1,\"type\":1,\"name\":\"1.txt\",\"size\":1,\"w\":0,\"h\":0}}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat_Message"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/messages/status/:room",
    "title": "메시지 읽음 상태",
    "name": "GetMessagesStatus",
    "group": "Chat_Message",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ]
      }
    },
    "description": "<p>msgstart ~ msgend 범위 내 메시지들의 카운트</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "counts",
            "description": "<p>카운트 정보 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "counts.cnt",
            "description": "<p>안 읽은 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "counts.msgstart",
            "description": "<p>메시지 번호 시작</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "counts.msgend",
            "description": "<p>메시지 번호 끝</p>"
          }
        ],
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "204",
            "description": "<p>No Content (성공, 컨텐츠 없음)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"counts\":[\n{\"cnt\":2,\"msgstart\":46498,\"msgend\":46872},\n{\"cnt\":1,\"msgstart\":46140,\"msgend\":46342}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat_Message"
  },
  {
    "type": "post",
    "url": "https://edge.tmup.com/v1/message/:room(/:type)",
    "title": "메시지 등록",
    "name": "PostMessage",
    "group": "Chat_Message",
    "version": "2.0.0",
    "description": "<ul> <li>피드 태그</li> </ul> <p>GET <a href=\"#api-Tag-GetTagFeed\">/v1/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 없는 것으로 처리)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-2",
            "optional": true,
            "field": "type",
            "defaultValue": "1",
            "description": "<p>종류 (1:일반, 2:파일)</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>내용 (type 2일 경우 파일 번호)</p>"
          },
          {
            "group": "JSON",
            "type": "number[]",
            "optional": true,
            "field": "tagfeeds",
            "description": "<p>태그 피드 번호 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"content\":\"test #{1123}\",\"tagfeeds\":[1123]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Chat_Message"
  },
  {
    "type": "get",
    "url": "https://ev.tmup.com/v1/events",
    "title": "이벤트 대기",
    "name": "GetEvents",
    "group": "Event",
    "version": "2.0.0",
    "description": "<ul> <li> <p>이벤트 종류 prefix (chat.<em>: 채팅, feed.</em>: 피드, feedgroup.<em>: 피드 그룹, inform.</em>: 알림, etc.*: 기타)</p> </li> <li> <p>이벤트 종류 prefix 로 정보 데이터 반환 (ex: {&quot;type&quot;:&quot;chat.message&quot;,&quot;chat&quot;:{object}})</p> </li> <li> <p>채팅 type: chat.(message:메시지, read:읽음, detach:퇴장, join:초대, room:대화방 설정 변경)</p> </li> <li> <p>피드 type: feed.(feed:새글, reply:댓글, like:좋아요, tagfeed:태그 글, tagreply:태그 댓글, removefeed:글 삭제, removereply:댓글 삭제, removelike:좋아요 삭제, changefeed:글 수정, changereply:댓글 수정, watch:지켜보기)</p> </li> <li> <p>피드 그룹 type: feedgroup. (join:생성/초대/새 멤버, detach:탈퇴, admin:관리자 변경, config:설정)</p> </li> <li> <p>알림 type: inform. (removefeed:피드 알림 삭제, readfeed:읽음 상태 변경)</p> </li> <li> <p>유저 type: user. (password:패스워드, approval:팀 가입, exit:팀 탈퇴, block:팀 중지, drop: 계정 삭제)</p> </li> </ul>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "events",
            "description": "<p>이벤트 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "events.type",
            "description": "<p>이벤트 종류</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "events.chat",
            "description": "<p>채팅 이벤트 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.chat.team",
            "description": "<p>팀 번호 (type: chat.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.chat.room",
            "description": "<p>방 번호 (type: chat.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.chat.user",
            "description": "<p>유저 번호 (type: chat.message|detach)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.chat.msg",
            "description": "<p>메시지 번호 (type: chat.message)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.chat.alert",
            "description": "<p>알림 (0:사용안함, 1:사용, type: chat.room)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "events.chat.name",
            "description": "<p>방 이름 (type: chat.room)</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "events.feed",
            "description": "<p>피드 이벤트 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feed.team",
            "description": "<p>팀 번호 (type: feed.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feed.feedgroup",
            "description": "<p>피드 그룹 번호 (type: feed.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feed.feed",
            "description": "<p>피드 번호 (0:그룹 전체, type: feed.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feed.user",
            "description": "<p>유저 번호 (type: feed.feed|reply|like|tagfeed|tagreply|removelike)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feed.watch",
            "description": "<p>지켜보기 (0:안함, 1:사용, type: feed.feed|tagfeed|reply|tagreply|watch)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feed.push",
            "description": "<p>강제 알림 (0:안함, 1:사용, type: feed.feed|tagfeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feed.reply",
            "description": "<p>댓글 번호 (type: feed.reply|tagreply|removereply|changereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feed.inform",
            "description": "<p>알림탭 갱신 여부 (0:미참여, 1:최근 참여, 2:이전 참여, type: feed.reply|tagreply|like)</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "events.feedgroup",
            "description": "<p>피드 그룹 이벤트 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feedgroup.team",
            "description": "<p>팀 번호 (type: feedgroup.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.feedgroup.feedgroup",
            "description": "<p>피드 그룹 번호 (type: feedgroup.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "events.inform",
            "description": "<p>알림 이벤트 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.inform.feedgroup",
            "description": "<p>피드 그룹 번호 (0:알림 전체, type: inform.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.inform.feed",
            "description": "<p>피드 번호 (0:그룹 전체, type: inform.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.inform.noti",
            "description": "<p>알림 번호 (0:전체, type: inform.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.inform.read",
            "description": "<p>읽음 상태 (0:전체, 1:읽은 알림만, type: inform.removefeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.inform.watch",
            "description": "<p>지켜보기 (0:일반, 1:지켜보기, type: inform.removefeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "events.user",
            "description": "<p>유저 이벤트 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.user.user",
            "description": "<p>유저 번호 (type: user.password|drop)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": true,
            "field": "events.user.team",
            "description": "<p>팀 번호 (type: user.approval|exit|block)</p>"
          },
          {
            "group": "Success 200",
            "type": "number[]",
            "optional": true,
            "field": "events.user.users",
            "description": "<p>유저 번호 리스트 (type: user.approval|exit|block)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"events\":[\n{\"type\":\"chat.message\",\"chat\":{\"team\":1,\"room\":1,\"msg\":9576}},\n{\"type\":\"chat.read\",\"chat\":{\"team\":1,\"room\":1}},\n{\"type\":\"chat.detach\",\"chat\":{\"team\":1,\"room\":1,\"user\":1}},\n{\"type\":\"chat.join\",\"chat\":{\"team\":1,\"room\":1}},\n{\"type\":\"feed.feed\",\"feed\":{\"team\":1,\"feed\":123,\"feedgroup\":1}},\n{\"type\":\"feed.reply\",\"feed\":{\"team\":1,\"reply\":34,\"feed\":124,\"feedgroup\":1}},\n{\"type\":\"feed.removefeed\",\"feed\":{\"team\":1,\"feed\":123,\"feedgroup\":1}},\n{\"type\":\"feedgroup.join\",\"feedgroup\":{\"team\":1,\"feedgroup\":1}},\n{\"type\":\"inform.removefeed\",\"inform\":{\"noti\":0,\"read\":1,\"watch\":1]}}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Event"
  },
  {
    "type": "delete",
    "url": "https://edge.tmup.com/v1/feed/:feed",
    "title": "피드 삭제",
    "name": "DeleteFeed",
    "group": "Feed",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed",
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "204",
            "description": "<p>No Content (성공, 컨텐츠 없음)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feed/:feed",
    "title": "피드 상세 정보",
    "name": "GetFeed",
    "group": "Feed",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groupname",
            "description": "<p>피드 그룹 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "type",
            "description": "<p>종류 (1:일반, 2:마크업)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "push",
            "description": "<p>강제 알림 (0:안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "watch",
            "description": "<p>지켜보기 (0:안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>내용 (마크업:null)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "removable",
            "description": "<p>삭제 가능 여부 (0:불가, 1:가능)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "liked",
            "description": "<p>자신의 좋아요 여부 (0:안함, 1:함)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tagfeeds",
            "description": "<p>태그 피드번호 (|로 구분, 비어있으면 태그 없음)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "tagusers",
            "description": "<p>태그 유저번호 (|로 구분, 그룹 멤버만)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "readcount",
            "description": "<p>읽음 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "replycount",
            "description": "<p>댓글 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "likecount",
            "description": "<p>좋아요 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "filecount",
            "description": "<p>전체 파일 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "mediacount",
            "description": "<p>미디어 파일 수</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created",
            "description": "<p>생성시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"team\":1,\n\"feedgroup\":1,\n\"groupname\":\"그룹1\",\n\"user\":4,\n\"type\":1,\n\"push\":0,\n\"len\":1,\n\"content\":\"글\",\n\"removable\":0,\n\"watch\":0,\n\"liked\":0,\n\"tagfeeds\":null,\n\"tagusers\":null,\n\"readcount\":1,\n\"replycount\":0,\n\"likecount\":0,\n\"filecount\":1,\n\"mediacount\":0,\n\"created\":1398221119\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feed/files/:feed/:count(/:type(/:start))",
    "title": "피드 파일 목록",
    "name": "GetFeedFiles",
    "group": "Feed",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-20",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 수</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0-2",
            "optional": true,
            "field": "type",
            "defaultValue": "0",
            "description": "<p>파일 종류 (0:전체, 1:일반, 2:이미지/동영상)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>시작 수</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "files",
            "description": "<p>파일 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "files.file",
            "description": "<p>파일 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "files.type",
            "description": "<p>파일 종류 (1:일반, 2:이미지, 3:동영상)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "files.name",
            "description": "<p>파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "files.size",
            "description": "<p>파일 크기 성시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"files\":[\n{\"file\":2,\"type\":1,\"name\":\"a.txt\",\"size\":29},\n{\"file\":3,\"type\":2,\"name\":\"b.png\",\"size\":1932741}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feed/markup/:feed",
    "title": "피드 마크업",
    "name": "GetFeedMarkup",
    "group": "Feed",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "text/html",
            "optional": false,
            "field": "Content",
            "description": "<p>내용</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "<p>내용</p>",
          "type": "html"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feed/summary/:feed",
    "title": "피드 요약 정보",
    "name": "GetFeedSummary",
    "group": "Feed",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groupname",
            "description": "<p>피드 그룹 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "type",
            "description": "<p>종류 (1:일반, 2:마크업)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "push",
            "description": "<p>강제 알림 (0:안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "watch",
            "description": "<p>지켜보기 (0:안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "created",
            "description": "<p>생성시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"user\":4,\"type\":1,\"push\":0,\"len\":4,\"content\":\"글\",\"watch\":0,\"feedgroup\":1,\"groupname\":\"그룹1\",\"team\":1,\"created\":1398221119}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feeds/:count(/:way(/:start))",
    "title": "피드 목록",
    "name": "GetFeeds",
    "group": "Feed",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-20",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 피드 수</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0-2",
            "optional": true,
            "field": "way",
            "defaultValue": "0",
            "description": "<p>방향 (0:최신, 1:이전, 2:이후)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>피드 번호 시작</p>"
          }
        ],
        "Query String": [
          {
            "group": "Query String",
            "type": "number",
            "optional": true,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Query String",
            "type": "number",
            "optional": true,
            "field": "group",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Query String",
            "type": "number",
            "optional": true,
            "field": "user",
            "description": "<p>유저 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example: 뉴스피드",
          "content": "GET /v1/feeds/10 HTTP/1.1",
          "type": "json"
        },
        {
          "title": "Request Example: 팀 페이지",
          "content": "GET /v1/feeds/10?team=1 HTTP/1.1",
          "type": "json"
        },
        {
          "title": "Request Example: 피드 그룹 페이지",
          "content": "GET /v1/feeds/10?group=1 HTTP/1.1",
          "type": "json"
        },
        {
          "title": "Request Example: 유저 페이지",
          "content": "GET /v1/feeds/10?user=1 HTTP/1.1",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "feeds",
            "description": "<p>피드 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feeds.groupname",
            "description": "<p>피드 그룹 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.feed",
            "description": "<p>피드 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.type",
            "description": "<p>종류 (1:일반, 2:마크업)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.push",
            "description": "<p>강제 알림 (0:안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feeds.content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.removable",
            "description": "<p>삭제 가능 여부 (0:불가, 1:가능)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.watch",
            "description": "<p>지켜보기 (0:안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.liked",
            "description": "<p>자신의 좋아요 여부 (0:안함, 1:함)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feeds.tagfeeds",
            "description": "<p>태그 피드번호 (|로 구분, 비어있으면 태그 없음)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feeds.tagusers",
            "description": "<p>태그 유저번호 (|로 구분, 그룹 멤버만)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.replycount",
            "description": "<p>댓글 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.likecount",
            "description": "<p>좋아요 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.filecount",
            "description": "<p>전체 파일 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.mediacount",
            "description": "<p>미디어 파일 수</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.created",
            "description": "<p>생성시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"feeds\":[\n{\n\"team\":1,\n\"feedgroup\":1,\n\"groupname\":\"그룹1\",\n\"feed\":1,\n\"type\":1,\n\"user\":4,\n\"push\":0,\n\"len\":1,\n\"content\":\"글\",\n\"removable\":0,\n\"watch\":0,\n\"liked\":0,\n\"tagfeeds\":null,\n\"tagusers\":null,\n\"replycount\":0,\n\"likecount\":0,\n\"filecount\":1,\n\"mediacount\":0,\n\"created\":1398221119\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed"
  },
  {
    "type": "post",
    "url": "https://edge.tmup.com/v1/feed/:feedgroup",
    "title": "피드 등록",
    "name": "PostFeed",
    "group": "Feed",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "JSON",
            "type": "number[]",
            "optional": true,
            "field": "tagusers",
            "description": "<p>태그 유저 번호 리스트</p>"
          },
          {
            "group": "JSON",
            "type": "number[]",
            "optional": true,
            "field": "tagfeeds",
            "description": "<p>태그 피드 번호 리스트</p>"
          },
          {
            "group": "JSON",
            "type": "number[]",
            "optional": true,
            "field": "files",
            "description": "<p>파일 번호 리스트</p>"
          },
          {
            "group": "JSON",
            "type": "number",
            "size": "0-1",
            "optional": true,
            "field": "push",
            "description": "<p>강제 알림 (0:사용안함, 1:사용)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"feed\":1,\"content\":\"test @{4,유저4} #{1123}\",\"tagusers\":[4],\"tagfeeds\":[1123]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed",
    "description": "<ul> <li>사용자 태그</li> </ul> <p>GET <a href=\"#api-Tag-GetTagUser\">/v1/tag/users</a> 로 태그 가능 사용자 검색 후</p> <p>content 내용 중 태그 영역에 @{사용자번호,사용자이름}</p> <p>tagusers 에 사용자 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p> <ul> <li>피드 태그</li> </ul> <p>GET <a href=\"#api-Tag-GetTagFeed\">/v1/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p>"
  },
  {
    "type": "delete",
    "url": "https://edge.tmup.com/v1/feedgroup/user/:feedgroup/:targetuser",
    "title": "그룹 탈퇴",
    "name": "DeleteFeedGroupUser",
    "group": "Feed_Group",
    "version": "2.0.0",
    "permission": [
      {
        "name": "feedgroup admin (피드 그룹 관리)"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "targetuser",
            "description": "<p>탈퇴 유저 번호</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Group",
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "204",
            "description": "<p>No Content (성공, 컨텐츠 없음)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feedgroup/:feedgroup",
    "title": "그룹 정보",
    "name": "GetFeedGroup",
    "group": "Feed_Group",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groupname",
            "description": "<p>피드 그룹 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "groupfile",
            "description": "<p>피드 그룹 이미지 파일 번호 (0이면 설정되어 있지 않음)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "membertype",
            "description": "<p>세션 유저의 종류 (1:일반, 2:관리자)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "watchfeed",
            "description": "<p>지켜보기 (0:안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "write",
            "description": "<p>쓰기 권한 여부 (0:없음, 1:가능)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "remove",
            "description": "<p>삭제 권한 여부 (0:없음, 1:가능)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "replywrite",
            "description": "<p>댓글 쓰기 권한 여부 (0:없음, 1:가능)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "replyremove",
            "description": "<p>댓글 삭제 권한 여부 (0:없음, 1:가능)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "alerttype",
            "description": "<p>알림 설정 종류 (1:멤버허용, 2:관리자만)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "alertfeed",
            "description": "<p>새글 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "alertreply",
            "description": "<p>댓글 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "usercount",
            "description": "<p>피드 그룹 유저 수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"team\":1,\n\"groupname\":\"그룹1\",\n\"groupfile\":0,\n\"membertype\":1,\n\"write\":1,\n\"remove\":1,\n\"replywrite\":1,\n\"replyremove\":1,\n\"alerttype\":1,\n\"alertfeed\":0,\n\"alertreply\":0,\n\"usercount\":3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/archive.php",
    "groupTitle": "Feed_Group"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feedgroup/users/:feedgroup",
    "title": "그룹 유저 목록",
    "name": "GetFeedGroupUsers",
    "group": "Feed_Group",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "users.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "users.membertype",
            "description": "<p>멤버 종류 (1:일반, 2:관리자)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"users\":[\n{\"user\":1,\"membertype\":2},\n{\"user\":2,\"membertype\":1}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Group"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feedgroups/:team",
    "title": "그룹 목록",
    "name": "GetFeedGroups",
    "group": "Feed_Group",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "feedgroups",
            "description": "<p>피드 그룹 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroups.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroups.feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feedgroups.groupname",
            "description": "<p>피드 그룹 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroups.groupfile",
            "description": "<p>피드 그룹 이미지 파일 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroups.watchfeed",
            "description": "<p>지켜보기 (0:안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroups.writable",
            "description": "<p>쓰기 권한 여부 (0:없음, 1:가능)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroups.alerttype",
            "description": "<p>알림 설정 종류 (1:멤버허용, 2:관리자만)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroups.alertfeed",
            "description": "<p>새글 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroups.alertreply",
            "description": "<p>댓글 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroups.newcount",
            "description": "<p>새 알림 수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"feedgroups\":[\n{\"team\":1,\"feedgroup\":1,\"groupname\":\"그룹1\",\"groupfile\":0,\"writable\":1,\"alerttype\":1,\"alertfeed\":0,\"alertreply\":1,\"newcount\":0},\n{\"team\":1,\"feedgroup\":2,\"groupname\":\"그룹2\",\"groupfile\":0,\"writable\":0,\"alerttype\":1,\"alertfeed\":0,\"alertreply\":1,\"newcount\":1}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/archive.php",
    "groupTitle": "Feed_Group"
  },
  {
    "type": "post",
    "url": "https://edge.tmup.com/v1/feedgroup/:team",
    "title": "그룹 생성",
    "name": "PostFeedGroup",
    "group": "Feed_Group",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>피드 그룹 이름</p>"
          },
          {
            "group": "JSON",
            "type": "number",
            "optional": true,
            "field": "file",
            "description": "<p>이미지 파일 번호</p>"
          },
          {
            "group": "JSON",
            "type": "number[]",
            "optional": true,
            "field": "users",
            "description": "<p>유저 번호 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"name\":\"그룹이름\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Group",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Conflict (데이터 중복 오류)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "https://edge.tmup.com/v1/feedgroup/join/:feedgroup",
    "title": "그룹 초대",
    "name": "PostFeedGroupJoin",
    "group": "Feed_Group",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "number[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 번호 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"users\":[1,2,3,4]}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Group",
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "201",
            "description": "<p>Created (성공, 컨텐츠 없음)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "413",
            "description": "<p>Payload Too Large (과다 요청, 초대 사용자 수 제한 등)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feed/likes/:feed/:count(/:start)",
    "title": "좋아요 목록",
    "name": "GetFeedLikes",
    "group": "Feed_Like",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-20",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 수</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>시작 수</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "users.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "users.created",
            "description": "<p>생성시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"users\":[\n{\"user\":1,\"created\":1398238682},\n{\"user\":2,\"created\":1398238681}\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Like"
  },
  {
    "type": "post",
    "url": "https://edge.tmup.com/v1/feed/like/:feed",
    "title": "좋아요 등록",
    "name": "PostFeedLike",
    "group": "Feed_Like",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Like",
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "201",
            "description": "<p>Created (성공, 컨텐츠 없음)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "https://edge.tmup.com/v1/feed/reply/:reply",
    "title": "댓글 삭제",
    "name": "DeleteFeedReply",
    "group": "Feed_Reply",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "reply",
            "description": "<p>댓글 번호</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Reply",
    "success": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "optional": false,
            "field": "204",
            "description": "<p>No Content (성공, 컨텐츠 없음)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feed/replies/:feed/:count(/:way(/:start))",
    "title": "댓글 목록",
    "name": "GetFeedReplies",
    "group": "Feed_Reply",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-20",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 댓글 수</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0-2",
            "optional": true,
            "field": "way",
            "defaultValue": "0",
            "description": "<p>방향 (0:최신, 1:이전, 2:이후)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>댓글 번호 시작</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "replies",
            "description": "<p>댓글 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "replies.reply",
            "description": "<p>댓글 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "replies.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "replies.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "replies.content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "replies.removable",
            "description": "<p>삭제 가능 여부 (0:불가, 1:가능)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "replies.tagfeeds",
            "description": "<p>태그 피드번호 (|로 구분, 비어있으면 태그 없음)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "replies.tagusers",
            "description": "<p>태그 유저번호 (|로 구분, 그룹 멤버만)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "replies.created",
            "description": "<p>생성시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"replies\":[\n{\"reply\":1,\"user\":1,\"len\":2,\"content\":\"댓글\",\"removable\":0,\"tagfeeds\":null,\"tagusers\":null,\"created\":1398238682}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Reply"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/feed/reply/summary/:feed/:reply",
    "title": "댓글 요약 정보",
    "name": "GetFeedReplySummary",
    "group": "Feed_Reply",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "reply",
            "description": "<p>댓글 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groupname",
            "description": "<p>피드 그룹 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "joined",
            "description": "<p>참여 여부 (0:참여안함, 1:참여)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeduser",
            "description": "<p>피드 유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "created",
            "description": "<p>생성시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"user\":1,\"len\":2,\"content\":\"댓글\",\"joined\":0,\"feeduser\":2,\"feedgroup\":1,\"groupname\":\"그룹1\",\"team\":1,\"created\":1398238682}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Reply"
  },
  {
    "type": "post",
    "url": "https://edge.tmup.com/v1/feed/reply/:feed",
    "title": "댓글 등록",
    "name": "PostFeedReply",
    "group": "Feed_Reply",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>피드 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"feed\":1,\"content\":\"test @{4,유저4} #{1123}\",\"tagusers\":[4],\"tagfeeds\":[1123]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "reply",
            "description": "<p>댓글 번호</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Feed_Reply",
    "description": "<ul> <li>사용자 태그</li> </ul> <p>GET <a href=\"#api-Tag-GetTagUser\">/v1/tag/users</a> 로 태그 가능 사용자 검색 후</p> <p>content 내용 중 태그 영역에 @{사용자번호,사용자이름}</p> <p>tagusers 에 사용자 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p> <ul> <li>피드 태그</li> </ul> <p>GET <a href=\"#api-Tag-GetTagFeed\">/v1/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p>"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/tag/feeds/:team/:count/:start/:feed",
    "title": "#태그 (피드)",
    "name": "GetTagFeed",
    "group": "Tag",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-20",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 수</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "start",
            "description": "<p>시작 수</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feed",
            "description": "<p>검색 피드 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "feeds",
            "description": "<p>피드 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feeds.groupname",
            "description": "<p>피드 그룹 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.feed",
            "description": "<p>피드 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feeds.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feeds.content",
            "description": "<p>내용</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"feeds\":[\n{\"feedgroup\":1,\"groupname\":\"그룹1\",\"feed\":1123,\"user\":4,\"len\":1,\"content\":\"글\"}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Tag"
  },
  {
    "type": "get",
    "url": "https://edge.tmup.com/v1/tag/users/:feedgroup/:count/:start/:search",
    "title": "@태그 (유저)",
    "name": "GetTagUser",
    "group": "Tag",
    "version": "2.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "feedgroup",
            "description": "<p>그룹 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-20",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 수</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "start",
            "description": "<p>시작 수</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "search",
            "description": "<p>검색 (이름)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "users.joined",
            "description": "<p>멤버 여부 (0:멤버아님, 1:멤버)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "users.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "users.name",
            "description": "<p>유저 이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"users\":[\n{\"joined\":1,\"user\":1,\"name\":\"이름\"}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/vicious/workspace/teamup-logic/edge/doc/index.php",
    "groupTitle": "Tag"
  }
] });

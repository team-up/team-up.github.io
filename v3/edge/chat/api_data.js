define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "기본 설정 정보",
    "version": "3.0.0",
    "name": "get",
    "group": "base",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>서버 버전</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "room_max_usercount",
            "description": "<p>대화방 최대 인원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "room_name_usercount",
            "description": "<p>대화방 이름 인원 수 (대화방 이름이 비어 있을 경우 유저 이름 오름차순 ,로 구분. 초과 시 ... 추가)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"version\":\"3.0.0\",\n\"room_max_usercount\":100,\n\"room_name_usercount\":10\n}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Get.php",
    "groupTitle": "base"
  },
  {
    "type": "*",
    "url": "/*",
    "title": "HTTP Status Code",
    "version": "2.1.0",
    "name": "statusCode",
    "group": "base",
    "filename": "edge/api/chat/_apidoc.js",
    "groupTitle": "base",
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
            "description": "<p>Unauthorized (oauth2 토큰 오류)</p>"
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
    "url": "/v3/message/:room/:msg",
    "title": "장문 메시지",
    "version": "3.0.0",
    "name": "getMessage",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "LongNumber",
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
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "메시지 내용 ...",
          "type": "text"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Get.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/message/:room/:msg",
    "title": "장문 메시지",
    "version": "2.1.0",
    "name": "getMessage",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "LongNumber",
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
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "메시지 내용 ...",
          "type": "text"
        }
      ]
    },
    "filename": "edge/api/chat/v1/Get.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/message/summary/:room/:msg(/:confirm)",
    "title": "메시지 요약 정보",
    "version": "3.6.0",
    "name": "getMessageSummary",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "confirm",
            "defaultValue": "0",
            "description": "<p>읽음 처리(0:안함, 1:읽음)</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "all",
            "defaultValue": "0",
            "description": "<p>전체 내용 여부(0:요약, 1:전체)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>종류 (1:일반, 2:파일, 3:초대, 4:퇴장)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "users",
            "description": "<p>유저 번호 리스트 (type:3 - 초대인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "file",
            "description": "<p>파일 정보 (type:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "file.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.id",
            "description": "<p>파일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "file.owner",
            "description": "<p>파일 소유자 번호 (null:삭제)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.type",
            "description": "<p>파일 종류 (normal,image,video)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "file.thumbnail",
            "description": "<p>썸네일 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.thumbnail.host",
            "description": "<p>썸네일 서버</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.thumbnail.path",
            "description": "<p>썸네일 경로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "file.thumbnail.width",
            "description": "<p>썸네일 가로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "file.thumbnail.height",
            "description": "<p>썸네일 세로</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "extras",
            "description": "<p>추가 정보 리스트</p>"
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
    "filename": "edge/api/chat/v3/Get.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/message/summary/:room/:msg(/:confirm)",
    "title": "메시지 요약 정보",
    "version": "3.0.0",
    "name": "getMessageSummary",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "confirm",
            "defaultValue": "0",
            "description": "<p>읽음 처리(0:안함, 1:읽음)</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "all",
            "defaultValue": "0",
            "description": "<p>전체 내용 여부(0:요약, 1:전체)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>종류 (1:일반, 2:파일, 3:초대, 4:퇴장)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "users",
            "description": "<p>유저 번호 리스트 (type:3 - 초대인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "file",
            "description": "<p>파일 정보 (type:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "file.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.id",
            "description": "<p>파일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "file.owner",
            "description": "<p>파일 소유자 번호 (null:삭제)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.type",
            "description": "<p>파일 종류 (normal,image,video)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "file.thumbnail",
            "description": "<p>썸네일 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.thumbnail.host",
            "description": "<p>썸네일 서버</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.thumbnail.path",
            "description": "<p>썸네일 경로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "file.thumbnail.width",
            "description": "<p>썸네일 가로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "file.thumbnail.height",
            "description": "<p>썸네일 세로</p>"
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
    "filename": "edge/api/chat/v3/Get.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/message/summary/:room/:msg",
    "title": "메시지 요약 정보",
    "version": "2.1.0",
    "name": "getMessageSummary",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "LongNumber",
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
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>종류 (1:일반, 2:파일, 3:초대, 4:퇴장)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "users",
            "description": "<p>유저 번호 리스트 (type:3 - 초대인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "fileinfo",
            "description": "<p>파일 정보 (type:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "fileinfo.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "fileinfo.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "fileinfo.file",
            "description": "<p>파일 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "fileinfo.type",
            "description": "<p>파일 종류 (1:일반, 2:이미지, 3:동영상)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "fileinfo.w",
            "description": "<p>가로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "fileinfo.h",
            "description": "<p>세로 크기</p>"
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
    "filename": "edge/api/chat/v1/Get.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/messages/:room/:count(/:way(/:start))",
    "title": "메시지 목록",
    "version": "3.6.0",
    "name": "getMessages",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-100",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 메시지 수</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-2",
            "optional": true,
            "field": "way",
            "defaultValue": "0",
            "description": "<p>방향 (0:최신, 1:이전, 2:이후)</p>"
          },
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": true,
            "field": "start",
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
            "type": "Object[]",
            "optional": false,
            "field": "msgs",
            "description": "<p>메시지 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "msgs.msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.type",
            "description": "<p>종류 (1:일반, 2:파일, 3:초대, 4:퇴장)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msgs.content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.tagfeeds",
            "description": "<p>태그 피드번호 (|로 구분, 비어있으면 태그 없음)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "msgs.users",
            "description": "<p>유저 번호 리스트 (type:3 - 초대인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "msgs.file",
            "description": "<p>파일 정보 (type:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "msgs.file.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.id",
            "description": "<p>파일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "msgs.file.owner",
            "description": "<p>파일 소유자 번호 (null:삭제)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.type",
            "description": "<p>파일 종류 (normal,image,video)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "msgs.file.thumbnail",
            "description": "<p>썸네일 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.thumbnail.host",
            "description": "<p>썸네일 서버</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.thumbnail.path",
            "description": "<p>썸네일 경로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "msgs.file.thumbnail.width",
            "description": "<p>썸네일 가로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "msgs.file.thumbnail.height",
            "description": "<p>썸네일 세로</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "msgs.extras",
            "description": "<p>추가 정보 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"msgs\":[\n{\"msg\":1,\"user\":1,\"type\":1,\"len\":3,\"content\":\"메시지\",\"tagfeeds\":null,\"created\":1392319357},\n{\"msg\":2,\"user\":1,\"type\":3,\"len\":0,\"content\":\"\",\"tagfeeds\":null,\"created\":1392319358,\"users\":[3]},\n{\"msg\":3,\"user\":1,\"type\":2,\"len\":0,\"content\":\"\",\"tagfeeds\":null,\"created\":1392319359,\"file\":{\"name\":\"1.txt\",\"size\":1,\"id\":\"TASlYTQxM2YxYjhkN2E2Zg\",\"owner\":null,\"type\":\"normal\"}}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Get.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/messages/:room/:count(/:way(/:start))",
    "title": "메시지 목록",
    "version": "3.0.0",
    "name": "getMessages",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-100",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 메시지 수</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-2",
            "optional": true,
            "field": "way",
            "defaultValue": "0",
            "description": "<p>방향 (0:최신, 1:이전, 2:이후)</p>"
          },
          {
            "group": "Parameter",
            "type": "LongNumber",
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
            "type": "Object[]",
            "optional": false,
            "field": "msgs",
            "description": "<p>메시지 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "msgs.msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.type",
            "description": "<p>종류 (1:일반, 2:파일, 3:초대, 4:퇴장)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msgs.content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.tagfeeds",
            "description": "<p>태그 피드번호 (|로 구분, 비어있으면 태그 없음)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "msgs.users",
            "description": "<p>유저 번호 리스트 (type:3 - 초대인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "msgs.file",
            "description": "<p>파일 정보 (type:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "msgs.file.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.id",
            "description": "<p>파일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "msgs.file.owner",
            "description": "<p>파일 소유자 번호 (null:삭제)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.type",
            "description": "<p>파일 종류 (normal,image,video)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "msgs.file.thumbnail",
            "description": "<p>썸네일 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.thumbnail.host",
            "description": "<p>썸네일 서버</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.file.thumbnail.path",
            "description": "<p>썸네일 경로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "msgs.file.thumbnail.width",
            "description": "<p>썸네일 가로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "msgs.file.thumbnail.height",
            "description": "<p>썸네일 세로</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"msgs\":[\n{\"msg\":1,\"user\":1,\"type\":1,\"len\":3,\"content\":\"메시지\",\"tagfeeds\":null,\"created\":1392319357},\n{\"msg\":2,\"user\":1,\"type\":3,\"len\":0,\"content\":\"\",\"tagfeeds\":null,\"created\":1392319358,\"users\":[3]},\n{\"msg\":3,\"user\":1,\"type\":2,\"len\":0,\"content\":\"\",\"tagfeeds\":null,\"created\":1392319359,\"file\":{\"name\":\"1.txt\",\"size\":1,\"id\":\"TASlYTQxM2YxYjhkN2E2Zg\",\"owner\":null,\"type\":\"normal\"}}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Get.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/messages/:room/:count(/:way(/:start))",
    "title": "메시지 목록",
    "version": "2.1.0",
    "name": "getMessages",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1-100",
            "optional": false,
            "field": "count",
            "description": "<p>가져올 메시지 수</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-2",
            "optional": true,
            "field": "way",
            "defaultValue": "0",
            "description": "<p>방향 (0:최신, 1:이전, 2:이후)</p>"
          },
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": true,
            "field": "start",
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
            "type": "Object[]",
            "optional": false,
            "field": "msgs",
            "description": "<p>메시지 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "msgs.msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.type",
            "description": "<p>종류 (1:일반, 2:파일, 3:초대, 4:퇴장)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msgs.content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgs.created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.tagfeeds",
            "description": "<p>태그 피드번호 (|로 구분, 비어있으면 태그 없음)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "msgs.users",
            "description": "<p>유저 번호 리스트 (type:3 - 초대인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "msgs.fileinfo",
            "description": "<p>파일 정보 (type:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msgs.fileinfo.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "msgs.fileinfo.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "msgs.fileinfo.file",
            "description": "<p>파일 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "msgs.fileinfo.type",
            "description": "<p>파일 종류 (1:일반, 2:이미지, 3:동영상)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "msgs.fileinfo.w",
            "description": "<p>가로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "msgs.fileinfo.h",
            "description": "<p>세로 크기</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"msgs\":[\n{\"msg\":1,\"user\":1,\"type\":1,\"len\":3,\"content\":\"메시지\",\"tagfeeds\":null,\"created\":1392319357},\n{\"msg\":2,\"user\":1,\"type\":3,\"len\":0,\"content\":\"\",\"tagfeeds\":null,\"created\":1392319358,\"users\":[3]},\n{\"msg\":3,\"user\":1,\"type\":2,\"len\":0,\"content\":\"\",\"tagfeeds\":null,\"created\":1392319359,\"fileinfo\":{\"name\":\"1.txt\",\"size\":1,\"file\":1,\"type\":1,\"w\":0,\"h\":0}}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v1/Get.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/message/:room(/:type)",
    "title": "메시지 생성",
    "version": "3.6.0",
    "name": "postMessage",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
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
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용 (type:2 파일 아이디)</p>"
          },
          {
            "group": "JSON",
            "type": "LongNumber[]",
            "optional": true,
            "field": "tagfeeds",
            "description": "<p>태그 피드 번호 리스트</p>"
          },
          {
            "group": "JSON",
            "type": "Object[]",
            "optional": true,
            "field": "extras",
            "description": "<p>추가 정보 리스트 (type:1, tagfeeds:null)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"content\":\"test\"}",
          "type": "json"
        },
        {
          "title": "Tag Example",
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
            "type": "LongNumber",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"msg\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Post.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
          }
        ]
      }
    },
    "description": "<ul> <li>피드 태그</li> </ul> <p>GET <a href=\"../feed/index.html#api-tag-GetTagFeed\">/v3/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden (금지된 요청, 권한 오류)</p>"
          },
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
    "url": "/v3/message/:room(/:type)",
    "title": "메시지 생성",
    "version": "3.0.0",
    "name": "postMessage",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
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
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용 (type:2 파일 아이디)</p>"
          },
          {
            "group": "JSON",
            "type": "LongNumber[]",
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
            "type": "LongNumber",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"msg\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Post.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
          }
        ]
      }
    },
    "description": "<ul> <li>피드 태그</li> </ul> <p>GET <a href=\"../feed/index.html#api-tag-GetTagFeed\">/v3/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden (금지된 요청, 권한 오류)</p>"
          },
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
    "url": "/v1/message/:room(/:type)",
    "title": "메시지 생성",
    "version": "2.1.0",
    "name": "postMessage",
    "group": "message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
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
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용 (type:2 파일 번호)</p>"
          },
          {
            "group": "JSON",
            "type": "LongNumber[]",
            "optional": true,
            "field": "tagfeeds",
            "description": "<p>태그 피드 번호 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"content\":\"test\"}",
          "type": "json"
        },
        {
          "title": "Tag Example",
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
            "type": "LongNumber",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"msg\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v1/Post.php",
    "groupTitle": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
          }
        ]
      }
    },
    "description": "<ul> <li>피드 태그</li> </ul> <p>GET <a href=\"../feed/index.html#api-tag-GetTagFeed\">/v3/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden (금지된 요청, 권한 오류)</p>"
          },
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
    "type": "delete",
    "url": "/v3/room/:room/:name",
    "title": "대화방 퇴장",
    "version": "3.0.0",
    "name": "deleteRoom",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>방 이름 (퇴장 이후 대화방 이름 지정)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "DELETE /v3/room/1/%EC%9C%A0%EC%A0%801%2C%EC%9C%A0%EC%A0%802 HTTP/1.1",
          "type": "uri"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Delete.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    },
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
    "type": "delete",
    "url": "/v1/room/:room/:name",
    "title": "대화방 퇴장",
    "version": "2.1.0",
    "name": "deleteRoom",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>방 이름 (퇴장 이후 대화방 이름 지정)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "DELETE /v1/room/1/%EC%9C%A0%EC%A0%801%2C%EC%9C%A0%EC%A0%802 HTTP/1.1",
          "type": "uri"
        }
      ]
    },
    "filename": "edge/api/chat/v1/Delete.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    },
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
    "url": "/v3/room/:room",
    "title": "대화방 정보",
    "version": "3.0.0",
    "name": "getRoom",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
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
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "roomtype",
            "description": "<p>방 종류 (1:개인, 2:단체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>상태 (0:퇴장, 1:참여)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "alert",
            "description": "<p>방 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>방 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgtype",
            "description": "<p>메시지 종류 (1:일반, 2:파일)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "newcount",
            "description": "<p>안 읽은 메시지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "newmsg",
            "description": "<p>안 읽은 메시지 번호 시작</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "created",
            "description": "<p>메시지 생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "users",
            "description": "<p>다른 유저 번호 리스트 (state:1 - 참여 대화방인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "file",
            "description": "<p>파일 정보 (msgtype:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "file.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.id",
            "description": "<p>파일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "file.owner",
            "description": "<p>파일 소유자 번호 (null:삭제)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.type",
            "description": "<p>파일 종류 (normal,image,video)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "file.thumbnail",
            "description": "<p>썸네일 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.thumbnail.host",
            "description": "<p>썸네일 서버</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "file.thumbnail.path",
            "description": "<p>썸네일 경로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "file.thumbnail.width",
            "description": "<p>썸네일 가로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "file.thumbnail.height",
            "description": "<p>썸네일 세로</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"team\":1,\"roomtype\":2,\"state\":1,\"alert\":1,\"name\":null,\"msg\":1,\"user\":4,\"msgtype\":1,\"content\":\"메시지\",\"newcount\":0,\"newmsg\":null,\"users\":[2,3,4],\"created\":1392289132}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Get.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/room/:room",
    "title": "대화방 정보",
    "version": "2.1.0",
    "name": "getRoom",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
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
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "roomtype",
            "description": "<p>방 종류 (1:개인, 2:단체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>상태 (0:퇴장, 1:참여)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "alert",
            "description": "<p>방 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>방 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msgtype",
            "description": "<p>메시지 종류 (1:일반, 2:파일)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "newcount",
            "description": "<p>안 읽은 메시지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "newmsg",
            "description": "<p>안 읽은 메시지 번호 시작</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "created",
            "description": "<p>메시지 생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "users",
            "description": "<p>다른 유저 번호 리스트 (state:1 - 참여 대화방인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "fileinfo",
            "description": "<p>파일 정보 (msgtype:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "fileinfo.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "fileinfo.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "fileinfo.file",
            "description": "<p>파일 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "fileinfo.type",
            "description": "<p>파일 종류 (1:일반, 2:이미지, 3:동영상)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "fileinfo.w",
            "description": "<p>가로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "fileinfo.h",
            "description": "<p>세로 크기</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"team\":1,\"roomtype\":2,\"state\":1,\"alert\":1,\"name\":null,\"msg\":1,\"user\":4,\"msgtype\":1,\"content\":\"메시지\",\"newcount\":0,\"newmsg\":null,\"users\":[2,3,4],\"created\":1392289132}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v1/Get.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/rooms(/:team)",
    "title": "대화방 목록",
    "version": "3.0.0",
    "name": "getRooms",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "team",
            "description": "<p>팀 번호</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "active",
              "inactive",
              "all"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "active",
            "description": "<p>종류 (active:활성, inactive:퇴장, all:전체)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rooms",
            "description": "<p>대화방 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "rooms.room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.roomtype",
            "description": "<p>방 종류 (1:개인, 2:단체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.state",
            "description": "<p>상태 (0:퇴장, 1:참여)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.alert",
            "description": "<p>방 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.name",
            "description": "<p>방 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "rooms.msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.content",
            "description": "<p>메시지 내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.created",
            "description": "<p>메시지 생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.msgtype",
            "description": "<p>메시지 종류 (1:일반, 2:파일)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.newcount",
            "description": "<p>안 읽은 메시지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "rooms.newmsg",
            "description": "<p>안 읽은 메시지 번호 시작</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "rooms.users",
            "description": "<p>다른 유저 번호 리스트 (state:1 - 참여 대화방인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "rooms.file",
            "description": "<p>파일 정보 (msgtype:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "rooms.file.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "rooms.file.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "rooms.file.id",
            "description": "<p>파일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "rooms.file.owner",
            "description": "<p>파일 소유자 번호 (null:삭제)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "rooms.file.type",
            "description": "<p>파일 종류 (normal,image,video)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "rooms.file.thumbnail",
            "description": "<p>썸네일 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "rooms.file.thumbnail.host",
            "description": "<p>썸네일 서버</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "rooms.file.thumbnail.path",
            "description": "<p>썸네일 경로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "rooms.file.thumbnail.width",
            "description": "<p>썸네일 가로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "rooms.file.thumbnail.height",
            "description": "<p>썸네일 세로</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"rooms\":[\n{\"team\":1,\"room\":1,\"roomtype\":2,\"state\":1,\"alert\":1,\"name\":null,\"msg\":1,\"user\":4,\"msgtype\":1,\"len\":4,\"content\":\"대화내용\",\"newcount\":0,\"newmsg\":null,\"users\":[2,3,4],\"created\":1392289132}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Get.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/rooms(/:team)",
    "title": "대화방 목록",
    "version": "2.1.0",
    "name": "getRooms",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "team",
            "description": "<p>팀 번호</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "active",
              "inactive",
              "all"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "active",
            "description": "<p>종류 (active:활성, inactive:퇴장, all:전체)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rooms",
            "description": "<p>대화방 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "rooms.room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.roomtype",
            "description": "<p>방 종류 (1:개인, 2:단체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.state",
            "description": "<p>상태 (0:퇴장, 1:참여)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.alert",
            "description": "<p>방 알림 (0:사용안함, 1:사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.name",
            "description": "<p>방 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "rooms.msg",
            "description": "<p>메시지 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.len",
            "description": "<p>내용 길이 (장문 여부 판단 - content 글자 수와 다르면 장문, utf8mb4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rooms.content",
            "description": "<p>메시지 내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.created",
            "description": "<p>메시지 생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.msgtype",
            "description": "<p>메시지 종류 (1:일반, 2:파일)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "rooms.newcount",
            "description": "<p>안 읽은 메시지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "rooms.newmsg",
            "description": "<p>안 읽은 메시지 번호 시작</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "rooms.users",
            "description": "<p>다른 유저 번호 리스트 (state:1 - 참여 대화방인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "rooms.fileinfo",
            "description": "<p>파일 정보 (msgtype:2 - 파일인 경우)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "rooms.fileinfo.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "rooms.fileinfo.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "rooms.fileinfo.file",
            "description": "<p>파일 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "rooms.fileinfo.type",
            "description": "<p>파일 종류 (1:일반, 2:이미지, 3:동영상)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "rooms.fileinfo.w",
            "description": "<p>가로 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "rooms.fileinfo.h",
            "description": "<p>세로 크기</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"rooms\":[\n{\"team\":1,\"room\":1,\"roomtype\":2,\"state\":1,\"alert\":1,\"name\":null,\"msg\":1,\"user\":4,\"msgtype\":1,\"len\":4,\"content\":\"대화내용\",\"newcount\":0,\"newmsg\":null,\"users\":[2,3,4],\"created\":1392289132}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v1/Get.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/room/:team",
    "title": "대화방 생성",
    "version": "3.6.0",
    "name": "postRoom",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "Number[]",
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
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"room\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "초대 불가 유저 포함",
          "content": "HTTP/1.1 403 Forbidden\n{\"error\":\"invalid_users\",\"invalid_users\":[1]}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden (금지된 요청, 권한 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "413",
            "description": "<p>Payload Too Large (과다 요청, 초대 사용자 수 제한 등)</p>"
          }
        ]
      }
    },
    "filename": "edge/api/chat/v3/Post.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/room/:team",
    "title": "대화방 생성",
    "version": "3.0.0",
    "name": "postRoom",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "Number[]",
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
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"room\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Post.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
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
    "type": "post",
    "url": "/v1/room/:team",
    "title": "대화방 생성",
    "version": "2.1.0",
    "name": "postRoom",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "Number[]",
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
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"room\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v1/Post.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
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
    "type": "post",
    "url": "/v3/room/join/:room",
    "title": "대화방 초대",
    "version": "3.6.0",
    "name": "postRoomJoin",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "Number[]",
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
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호 (단체방으로 전환된 경우 새 방 번호)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"room\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "초대 불가 유저 포함",
          "content": "HTTP/1.1 403 Forbidden\n{\"error\":\"invalid_users\",\"invalid_users\":[1]}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden (금지된 요청, 권한 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "413",
            "description": "<p>Payload Too Large (과다 요청, 초대 사용자 수 제한 등)</p>"
          }
        ]
      }
    },
    "filename": "edge/api/chat/v3/Post.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/room/join/:room",
    "title": "대화방 초대",
    "version": "3.0.0",
    "name": "postRoomJoin",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "Number[]",
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
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호 (단체방으로 전환된 경우 새 방 번호)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"room\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v3/Post.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
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
    "type": "post",
    "url": "/v1/room/join/:room",
    "title": "대화방 초대",
    "version": "2.1.0",
    "name": "postRoomJoin",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "Number[]",
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
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호 (단체방으로 전환된 경우 새 방 번호)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"room\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "edge/api/chat/v1/Post.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
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
    "type": "put",
    "url": "/v3/room/:room",
    "title": "대화방 설정",
    "version": "3.0.0",
    "name": "putRoom",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>이름 (빈문자열: 기본 이름 사용)</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
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
    "filename": "edge/api/chat/v3/Put.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
          }
        ]
      }
    },
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
    "type": "put",
    "url": "/v1/room/:room",
    "title": "대화방 설정",
    "version": "2.1.0",
    "name": "putRoom",
    "group": "room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "LongNumber",
            "optional": false,
            "field": "room",
            "description": "<p>방 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>이름 (빈문자열: 기본 이름 사용)</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
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
    "filename": "edge/api/chat/v1/Put.php",
    "groupTitle": "room",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>:token_type :access_token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json; charset=utf-8</p>"
          }
        ]
      }
    },
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
  }
] });

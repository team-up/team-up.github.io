define({ "api": [
  {
    "type": "*",
    "url": "/*",
    "title": "HTTP Status Code",
    "version": "2.1.0",
    "name": "StatusCode",
    "group": "Base",
    "filename": "../teamup-logic/edge/api/feed/_apidoc.js",
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
    "type": "delete",
    "url": "/v3/feed/:feed",
    "title": "피드 삭제",
    "version": "3.0.0",
    "name": "DeleteFeed",
    "group": "feed",
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
    "filename": "../teamup-logic/edge/api/feed/v3/Delete.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
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
    "url": "/v1/feed/:feed",
    "title": "피드 삭제",
    "version": "2.1.0",
    "name": "DeleteFeed",
    "group": "feed",
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
    "filename": "../teamup-logic/edge/api/feed/v1/Delete.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
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
    "url": "/v3/feed/:feed",
    "title": "피드 정보",
    "version": "3.0.0",
    "name": "GetFeed",
    "group": "feed",
    "description": "<p>호출 시 해당 피드(+댓글/좋아요)만 읽음(status 2)으로 변경됨</p>",
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
          "content": "{\"team\":1,\"feedgroup\":1,\"groupname\":\"그룹1\",\"user\":4,\"type\":1,\"push\":0,\"len\":1,\"content\":\"글\",\"removable\":0,\"watch\":0,\"liked\":0,\"tagfeeds\":null,\"tagusers\":null,\"readcount\":1,\"replycount\":0,\"likecount\":0,\"filecount\":1,\"mediacount\":0,\"created\":1398221119}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/feed/:feed",
    "title": "피드 정보",
    "version": "2.1.0",
    "name": "GetFeed",
    "group": "feed",
    "description": "<p>호출 시 해당 피드(+댓글/좋아요)만 읽음(status 2)으로 변경됨</p>",
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
          "content": "{\"team\":1,\"feedgroup\":1,\"groupname\":\"그룹1\",\"user\":4,\"type\":1,\"push\":0,\"len\":1,\"content\":\"글\",\"removable\":0,\"watch\":0,\"liked\":0,\"tagfeeds\":null,\"tagusers\":null,\"readcount\":1,\"replycount\":0,\"likecount\":0,\"filecount\":1,\"mediacount\":0,\"created\":1398221119}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/feed/files/:feed/:count(/:start)",
    "title": "피드 파일 목록",
    "version": "3.0.0",
    "name": "GetFeedFiles",
    "group": "feed",
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
            "size": "1-100",
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
        ],
        "Query String": [
          {
            "group": "Query String",
            "type": "string",
            "allowedValues": [
              "normal",
              "media"
            ],
            "optional": true,
            "field": "type",
            "description": "<p>파일 종류</p>"
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
            "type": "string",
            "optional": false,
            "field": "files.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "files.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "files.created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "files.id",
            "description": "<p>파일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "files.owner",
            "description": "<p>파일 소유자 번호 (null:삭제)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "files.type",
            "description": "<p>파일 종류 (normal,image,video)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"files\":[\n{\"name\":\"1.txt\",\"size\":1,\"created\":1398238682,\"id\":\"TASlYTQxM2YxYjhkN2E2Zg\",\"owner\":null,\"type\":\"normal\"}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/feed/files/:feed/:count(/:type(/:start))",
    "title": "피드 파일 목록",
    "version": "2.1.0",
    "name": "GetFeedFiles",
    "group": "feed",
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
            "size": "1-100",
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
            "description": "<p>파일 조회 종류 (0:전체, 1:일반, 2:이미지/동영상)</p>"
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
            "type": "string",
            "optional": false,
            "field": "files.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "files.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "files.created",
            "description": "<p>생성시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "files.file",
            "description": "<p>파일 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"files\":[\n{\"name\":\"1.txt\",\"size\":1,\"created\":1398238682,\"file\":1}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/feed/markup/:feed",
    "title": "피드 마크업",
    "version": "3.0.0",
    "name": "GetFeedMarkup",
    "group": "feed",
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
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/feed/markup/:feed",
    "title": "피드 마크업",
    "version": "2.1.0",
    "name": "GetFeedMarkup",
    "group": "feed",
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
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/feeds/:count(/:way(/:start))",
    "title": "피드 목록",
    "version": "3.0.0",
    "name": "GetFeeds",
    "group": "feed",
    "description": "<p>way=0 &amp; group 지정 시 해당 그룹의 모든 알림이 읽음(status 2)으로 변경됨 (댓글/좋아요 제외)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-100",
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
            "field": "feeds.created",
            "description": "<p>생성시간(unix)</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"feeds\":[\n{\"team\":1,\"feedgroup\":1,\"groupname\":\"그룹1\",\"feed\":1,\"type\":1,\"user\":4,\"push\":0,\"len\":1,\"content\":\"글\",\"removable\":0,\"watch\":0,\"liked\":0,\"tagfeeds\":null,\"tagusers\":null,\"replycount\":0,\"likecount\":0,\"filecount\":1,\"mediacount\":0,\"created\":1398221119}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/feeds/:count(/:way(/:start))",
    "title": "피드 목록",
    "version": "2.1.0",
    "name": "GetFeeds",
    "group": "feed",
    "description": "<p>way=0 &amp; group 지정 시 해당 그룹의 모든 알림이 읽음(status 2)으로 변경됨 (댓글/좋아요 제외)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-100",
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
            "field": "feeds.created",
            "description": "<p>생성시간(unix)</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"feeds\":[\n{\"team\":1,\"feedgroup\":1,\"groupname\":\"그룹1\",\"feed\":1,\"type\":1,\"user\":4,\"push\":0,\"len\":1,\"content\":\"글\",\"removable\":0,\"watch\":0,\"liked\":0,\"tagfeeds\":null,\"tagusers\":null,\"replycount\":0,\"likecount\":0,\"filecount\":1,\"mediacount\":0,\"created\":1398221119}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/feed/:feedgroup(/:type)",
    "title": "피드 생성",
    "version": "3.0.0",
    "name": "PostFeed",
    "group": "feed",
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
            "size": "1-2",
            "optional": true,
            "field": "type",
            "defaultValue": "1",
            "description": "<p>종류 (1:일반, 2:마크업)</p>"
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
            "type": "number",
            "size": "0-1",
            "optional": true,
            "field": "push",
            "description": "<p>강제 알림 (0:사용안함, 1:사용)</p>"
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
            "type": "string[]",
            "optional": true,
            "field": "ids",
            "description": "<p>파일 아이디 리스트</p>"
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
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"feed\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v3/Post.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    },
    "description": "<ul> <li>사용자 태그</li> </ul> <p>GET <a href=\"#api-tag-GetTagUser\">/v3/tag/users</a> 로 태그 가능 사용자 검색 후</p> <p>content 내용 중 태그 영역에 @{사용자번호,사용자이름}</p> <p>tagusers 에 사용자 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p> <ul> <li>피드 태그</li> </ul> <p>GET <a href=\"#api-tag-GetTagFeed\">/v3/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p>",
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
    "url": "/v1/feed/:feedgroup(/:type)",
    "title": "피드 생성",
    "version": "2.1.0",
    "name": "PostFeed",
    "group": "feed",
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
            "size": "1-2",
            "optional": true,
            "field": "type",
            "defaultValue": "1",
            "description": "<p>종류 (1:일반, 2:마크업)</p>"
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
            "type": "number",
            "size": "0-1",
            "optional": true,
            "field": "push",
            "description": "<p>강제 알림 (0:사용안함, 1:사용)</p>"
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
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"feed\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v1/Post.php",
    "groupTitle": "feed",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    },
    "description": "<ul> <li>사용자 태그</li> </ul> <p>GET <a href=\"#api-tag-GetTagUser\">/v3/tag/users</a> 로 태그 가능 사용자 검색 후</p> <p>content 내용 중 태그 영역에 @{사용자번호,사용자이름}</p> <p>tagusers 에 사용자 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p> <ul> <li>피드 태그</li> </ul> <p>GET <a href=\"#api-tag-GetTagFeed\">/v3/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p>",
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
    "type": "get",
    "url": "/v3/feedgroup/:feedgroup",
    "title": "그룹 정보",
    "version": "3.0.0",
    "name": "GetFeedGroup",
    "group": "group",
    "description": "<p>해당 그룹의 모든 그룹 알림이 읽음(status 2)으로 변경됨 (피드/댓글/좋아요 제외)</p>",
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
            "field": "star",
            "description": "<p>즐겨찾기 (0:사용안함, 1:사용)</p>"
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
          "content": "{\"team\":1,\"groupname\":\"그룹1\",\"membertype\":1,\"write\":1,\"remove\":1,\"replywrite\":1,\"replyremove\":1,\"alerttype\":1,\"alertfeed\":0,\"alertreply\":0,\"star\":0,\"usercount\":3}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/feedgroup/:feedgroup",
    "title": "그룹 정보",
    "version": "2.1.0",
    "name": "GetFeedGroup",
    "group": "group",
    "description": "<p>해당 그룹의 모든 그룹 알림이 읽음(status 2)으로 변경됨 (피드/댓글/좋아요 제외)</p>",
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
            "field": "star",
            "description": "<p>즐겨찾기 (0:사용안함, 1:사용)</p>"
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
          "content": "{\"team\":1,\"groupname\":\"그룹1\",\"membertype\":1,\"write\":1,\"remove\":1,\"replywrite\":1,\"replyremove\":1,\"alerttype\":1,\"alertfeed\":0,\"alertreply\":0,\"star\":0,\"usercount\":3}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/feedgroup/users/:feedgroup(/:type)",
    "title": "그룹 유저 목록",
    "version": "3.0.0",
    "name": "GetFeedGroupUsers",
    "group": "group",
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
            "size": "0-2",
            "optional": true,
            "field": "type",
            "defaultValue": "0",
            "description": "<p>멤버 종류 (0:전체, 1:일반, 2:관리자)</p>"
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
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/feedgroup/users/:feedgroup(/:type)",
    "title": "그룹 유저 목록",
    "version": "2.1.0",
    "name": "GetFeedGroupUsers",
    "group": "group",
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
            "size": "0-2",
            "optional": true,
            "field": "type",
            "defaultValue": "0",
            "description": "<p>멤버 종류 (0:전체, 1:일반, 2:관리자)</p>"
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
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/feedgroups(/:team)",
    "title": "그룹 목록",
    "version": "3.0.0",
    "name": "GetFeedGroups",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
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
            "field": "feedgroups.star",
            "description": "<p>즐겨찾기 (0:사용안함, 1:사용)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"feedgroups\":[\n{\"team\":1,\"feedgroup\":1,\"groupname\":\"그룹1\",\"writable\":1,\"alerttype\":1,\"alertfeed\":0,\"alertreply\":1,\"star\":0},\n{\"team\":1,\"feedgroup\":2,\"groupname\":\"그룹2\",\"writable\":0,\"alerttype\":1,\"alertfeed\":0,\"alertreply\":1,\"star\":0}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/feedgroups(/:team)",
    "title": "그룹 목록",
    "version": "2.1.0",
    "name": "GetFeedGroups",
    "group": "group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
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
            "field": "feedgroups.star",
            "description": "<p>즐겨찾기 (0:사용안함, 1:사용)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"feedgroups\":[\n{\"team\":1,\"feedgroup\":1,\"groupname\":\"그룹1\",\"writable\":1,\"alerttype\":1,\"alertfeed\":0,\"alertreply\":1,\"star\":0},\n{\"team\":1,\"feedgroup\":2,\"groupname\":\"그룹2\",\"writable\":0,\"alerttype\":1,\"alertfeed\":0,\"alertreply\":1,\"star\":0}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/feedgroup/:team",
    "title": "그룹 생성",
    "version": "3.0.0",
    "name": "PostFeedGroup",
    "group": "group",
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
            "description": "<p>이름</p>"
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
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"feedgroup\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v3/Post.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v1/feedgroup/:team",
    "title": "그룹 생성",
    "version": "2.1.0",
    "name": "PostFeedGroup",
    "group": "group",
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
            "description": "<p>이름</p>"
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
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"feedgroup\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v1/Post.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
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
            "field": "409",
            "description": "<p>Conflict (데이터 중복 오류)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/feedgroup/join/:feedgroup",
    "title": "그룹 초대",
    "version": "3.0.0",
    "name": "PostFeedGroupJoin",
    "group": "group",
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
    "filename": "../teamup-logic/edge/api/feed/v3/Post.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
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
    "type": "post",
    "url": "/v1/feedgroup/join/:feedgroup",
    "title": "그룹 초대",
    "version": "2.1.0",
    "name": "PostFeedGroupJoin",
    "group": "group",
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
    "filename": "../teamup-logic/edge/api/feed/v1/Post.php",
    "groupTitle": "group",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
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
    "url": "/v3/feed/likes/:feed/:count(/:start)",
    "title": "좋아요 목록",
    "version": "3.0.0",
    "name": "GetFeedLikes",
    "group": "like",
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
            "size": "1-100",
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
            "type": "number",
            "optional": false,
            "field": "cnt",
            "description": "<p>전체 좋아요 갯수</p>"
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
          "content": "{\n\"cnt\":2,\n\"liked\":0,\n\"users\":[\n{\"user\":1,\"created\":1398238682},\n{\"user\":2,\"created\":1398238681}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "like",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/feed/likes/:feed/:count(/:start)",
    "title": "좋아요 목록",
    "version": "2.1.0",
    "name": "GetFeedLikes",
    "group": "like",
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
            "size": "1-100",
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
          "content": "{\n\"users\":[\n{\"user\":1,\"created\":1398238682},\n{\"user\":2,\"created\":1398238681}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "like",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/feed/like/:feed",
    "title": "좋아요 생성",
    "version": "3.0.0",
    "name": "PostFeedLike",
    "group": "like",
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
    "filename": "../teamup-logic/edge/api/feed/v3/Post.php",
    "groupTitle": "like",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
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
            "field": "201",
            "description": "<p>Created (성공, 컨텐츠 없음)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v1/feed/like/:feed",
    "title": "좋아요 생성",
    "version": "2.1.0",
    "name": "PostFeedLike",
    "group": "like",
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
    "filename": "../teamup-logic/edge/api/feed/v1/Post.php",
    "groupTitle": "like",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
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
            "field": "201",
            "description": "<p>Created (성공, 컨텐츠 없음)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/v3/feed/reply/:reply",
    "title": "댓글 삭제",
    "version": "3.0.0",
    "name": "DeleteFeedReply",
    "group": "reply",
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
    "filename": "../teamup-logic/edge/api/feed/v3/Delete.php",
    "groupTitle": "reply",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
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
    "url": "/v1/feed/reply/:reply",
    "title": "댓글 삭제",
    "version": "2.1.0",
    "name": "DeleteFeedReply",
    "group": "reply",
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
    "filename": "../teamup-logic/edge/api/feed/v1/Delete.php",
    "groupTitle": "reply",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
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
    "url": "/v3/feed/replies/:feed/:count(/:way(/:start))",
    "title": "댓글 목록",
    "version": "3.0.0",
    "name": "GetFeedReplies",
    "group": "reply",
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
            "size": "1-100",
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
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "reply",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/feed/replies/:feed/:count(/:way(/:start))",
    "title": "댓글 목록",
    "version": "2.1.0",
    "name": "GetFeedReplies",
    "group": "reply",
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
            "size": "1-100",
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
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "reply",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/v3/feed/reply/:feed",
    "title": "댓글 생성",
    "version": "3.0.0",
    "name": "PostFeedReply",
    "group": "reply",
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
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"reply\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v3/Post.php",
    "groupTitle": "reply",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    },
    "description": "<ul> <li>사용자 태그</li> </ul> <p>GET <a href=\"#api-tag-GetTagUser\">/v3/tag/users</a> 로 태그 가능 사용자 검색 후</p> <p>content 내용 중 태그 영역에 @{사용자번호,사용자이름}</p> <p>tagusers 에 사용자 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p> <ul> <li>피드 태그</li> </ul> <p>GET <a href=\"#api-tag-GetTagFeed\">/v3/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p>"
  },
  {
    "type": "post",
    "url": "/v1/feed/reply/:feed",
    "title": "댓글 생성",
    "version": "2.1.0",
    "name": "PostFeedReply",
    "group": "reply",
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
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"reply\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/feed/v1/Post.php",
    "groupTitle": "reply",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    },
    "description": "<ul> <li>사용자 태그</li> </ul> <p>GET <a href=\"#api-tag-GetTagUser\">/v3/tag/users</a> 로 태그 가능 사용자 검색 후</p> <p>content 내용 중 태그 영역에 @{사용자번호,사용자이름}</p> <p>tagusers 에 사용자 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p> <ul> <li>피드 태그</li> </ul> <p>GET <a href=\"#api-tag-GetTagFeed\">/v3/tag/feeds</a> 로 태그 가능 피드 번호 검색 후</p> <p>content 내용 중 태그 영역에 #{피드번호}</p> <p>tagfeeds 에 피드 번호 리스트 추가 (비어있을 경우 태그 처리 안됨)</p>"
  },
  {
    "type": "get",
    "url": "/v3/tag/feeds/:team/:count/:start/:feed",
    "title": "#태그 (피드)",
    "version": "3.0.0",
    "name": "GetTagFeed",
    "group": "tag",
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
            "size": "1-100",
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
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "tag",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/tag/feeds/:team/:count/:start/:feed",
    "title": "#태그 (피드)",
    "version": "2.1.0",
    "name": "GetTagFeed",
    "group": "tag",
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
            "size": "1-100",
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
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "tag",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v3/tag/users/:feedgroup/:count/:start/:query",
    "title": "@태그 (유저)",
    "version": "3.0.0",
    "name": "GetTagUser",
    "group": "tag",
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
            "size": "1-100",
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
            "field": "query",
            "description": "<p>검색 이름 (URL encode)</p>"
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
    "filename": "../teamup-logic/edge/api/feed/v3/Get.php",
    "groupTitle": "tag",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/v1/tag/users/:feedgroup/:count/:start/:query",
    "title": "@태그 (유저)",
    "version": "2.1.0",
    "name": "GetTagUser",
    "group": "tag",
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
            "size": "1-100",
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
            "field": "query",
            "description": "<p>검색 이름 (URL encode)</p>"
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
    "filename": "../teamup-logic/edge/api/feed/v1/Get.php",
    "groupTitle": "tag",
    "header": {
      "fields": {
        "": [
          {
            "group": "Authorization",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>oauth2 token</p>"
          }
        ]
      }
    }
  }
] });
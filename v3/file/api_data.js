define({ "api": [
  {
    "type": "*",
    "url": "/*",
    "title": "HTTP Status Code",
    "version": "3.0.0",
    "name": "statusCode",
    "group": "base",
    "filename": "file/api/_apidoc.js",
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
    "url": "/v3/file/:team/:id",
    "title": "파일 다운로드",
    "version": "3.7.0",
    "name": "getFile",
    "group": "download",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>파일 아이디</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "type": "LongNumber",
            "optional": true,
            "field": "msg",
            "description": "<p>메시지 번호 (대화방 파일인 경우)</p>"
          },
          {
            "group": "Query",
            "type": "LongNumber",
            "optional": true,
            "field": "feed",
            "description": "<p>피드 번호 (그룹 피드 파일인 경우)</p>"
          },
          {
            "group": "Query",
            "type": "LongNumber",
            "optional": true,
            "field": "reply",
            "description": "<p>댓글 번호 (그룹 댓글 파일인 경우)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "Content",
            "description": "<p>파일 스트림 (application/octet-stream 등)</p>"
          }
        ]
      }
    },
    "filename": "file/api/v3/Get.php",
    "groupTitle": "download",
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
    "url": "/v3/file/:team/:id",
    "title": "파일 다운로드",
    "version": "3.0.0",
    "name": "getFile",
    "group": "download",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>파일 아이디</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "type": "LongNumber",
            "optional": true,
            "field": "msg",
            "description": "<p>메시지 번호 (대화방 파일인 경우)</p>"
          },
          {
            "group": "Query",
            "type": "LongNumber",
            "optional": true,
            "field": "feed",
            "description": "<p>피드 번호 (그룹 파일인 경우)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "binary",
            "optional": false,
            "field": "Content",
            "description": "<p>파일 스트림 (application/octet-stream 등)</p>"
          }
        ]
      }
    },
    "filename": "file/api/v3/Get.php",
    "groupTitle": "download",
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
    "url": "/v3/files/:team(/:id)",
    "title": "파일 업로드",
    "version": "3.0.0",
    "name": "postFiles",
    "group": "upload",
    "description": "<p>반환 데이터 thumbnail 설명</p> <ul> <li>width, height : 최대 1280</li> </ul> <p>resize : https://[host]/r[width]x[height][path]</p> <p>crop : https://[host]/c[width]x[height][path]</p> <ul> <li>width 또는 height 에 - 로 요청 시 다른 크기에 맞춰서 변환.</li> </ul> <p>example : https://images.tmup.com/r-x-/MAc/BH8/Adc/HR0/Ifg/EBu36Cco0IsSI_UdB1--tQ.jpg (최대 크기)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          },
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>대상 폴더 아이디</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "size": "0-1",
            "optional": true,
            "field": "stash",
            "defaultValue": "0",
            "description": "<p>피드/채팅 첨부 여부 (지정 시 id 무시됨)</p>"
          }
        ],
        "Content-Disposition": [
          {
            "group": "Content-Disposition",
            "type": "String",
            "allowedValues": [
              "files[]"
            ],
            "optional": false,
            "field": "name",
            "description": "<p>폼 이름</p>"
          },
          {
            "group": "Content-Disposition",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>파일 이름 (URL encode)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "POST /v3/files/1 HTTP/1.1\nAuthorization: bearer a0b1c2d3e4f6g7h8i9j0a0b1c2d3e4f6g7h8i9j0\nContent-Type: multipart/form-data; boundary=---------------------------173911477930303\n\n-----------------------------173911477930303\nContent-Disposition: form-data; name=\"files[]\"; filename=\"b%2B1.png\"\nContent-Type: image/png\n\n{이미지 데이터}\n-----------------------------173911477930303--",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "files",
            "description": "<p>파일 정보 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.name",
            "description": "<p>파일 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": false,
            "field": "files.size",
            "description": "<p>파일 크기</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.id",
            "description": "<p>파일 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.type",
            "description": "<p>파일 종류 (normal,image,video)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "files.thumbnail",
            "description": "<p>썸네일 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "files.thumbnail.host",
            "description": "<p>썸네일 서버</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "files.thumbnail.path",
            "description": "<p>썸네일 경로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "files.thumbnail.width",
            "description": "<p>썸네일 가로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "files.thumbnail.height",
            "description": "<p>썸네일 세로</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"files\":[\n{\"name\":\"b+1.png\",\"size\":1932741,\"id\":\"LTBlYTQxM2YxYjhkN2E2Zg\",\"type\":\"image\",\"thumbnail\":{\"host\":\"images.tmup.com\",\"path\":\"\\/aDeG\\/GdED.jpg\",\"width\":200,\"height\":100}}\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "용량 초과",
          "content": "HTTP/1.1 403 Forbidden\n{\"error\":\"size_limit_exceeded\"}",
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
    "filename": "file/api/v3/Post.php",
    "groupTitle": "upload"
  }
] });

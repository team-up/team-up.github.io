define({ "api": [
  {
    "type": "*",
    "url": "/*",
    "title": "HTTP Status Code",
    "version": "3.0.0",
    "name": "StatusCode",
    "group": "Base",
    "filename": "../teamup-logic/edge/api/storage/_apidoc.js",
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
    "type": "get",
    "url": "/v3/storage/:team",
    "title": "스토리지 정보",
    "version": "3.0.0",
    "name": "GetStorage",
    "group": "storage",
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
            "type": "number",
            "optional": false,
            "field": "usesize",
            "description": "<p>전체 사용량</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "stashsize",
            "description": "<p>보관함 용량</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "trashsize",
            "description": "<p>휴지통 용량</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "chatsize",
            "description": "<p>채팅 용량</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "feedsize",
            "description": "<p>피드 용량</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "imagesize",
            "description": "<p>이미지 용량</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "videosize",
            "description": "<p>비디오 용량</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\"usesize\":0,\"trashsize\":0,\"chatsize\":0,\"feedsize\":0,\"imagesize\":0,\"videosize\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "../teamup-logic/edge/api/storage/v3/Get.php",
    "groupTitle": "storage",
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

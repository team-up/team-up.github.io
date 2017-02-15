define({ "api": [
  {
    "type": "get",
    "url": "/v1",
    "title": "token 확인",
    "version": "1.0.0",
    "name": "getToken",
    "group": "base",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userIdx",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expires_in",
            "description": "<p>만료 시간 (초)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "bearer"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Token Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "scope",
            "description": "<p>권한 scope</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"userIdx\": 100,\n\"expires_in\": 86399,\n\"type\": \"bearer\",\n\"scope\": [\"\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/AuthController.java",
    "groupTitle": "base",
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
    "type": "*",
    "url": "/v1/*",
    "title": "HTTP Status Code",
    "version": "1.0.0",
    "name": "statusCode",
    "group": "base",
    "error": {
      "fields": {
        "Success 2xx": [
          {
            "group": "Success 2xx",
            "type": "Status",
            "optional": false,
            "field": "200",
            "description": "<p>OK (성공, 컨텐츠 있음)</p>"
          },
          {
            "group": "Success 2xx",
            "type": "Status",
            "optional": false,
            "field": "204",
            "description": "<p>No Content (성공, 컨텐츠 없음)</p>"
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Status",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request (요청 데이터, 파라미터 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Status",
            "optional": false,
            "field": "403",
            "description": "<p>Forbidden (금지된 요청, 권한 오류)</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Status",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found (데이터 없음, URL, method 오류)</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "type": "Status",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error (내부 오류)</p>"
          },
          {
            "group": "Error 5xx",
            "type": "Status",
            "optional": false,
            "field": "502",
            "description": "<p>Bad Gateway (서버 내부 통신 오류)</p>"
          }
        ],
        "Error 200 OAuth2Exception": [
          {
            "group": "Error 200 OAuth2Exception",
            "type": "String",
            "allowedValues": [
              "OAuth2Exception"
            ],
            "optional": false,
            "field": "exception",
            "description": "<p>예외 정보</p>"
          },
          {
            "group": "Error 200 OAuth2Exception",
            "type": "String",
            "allowedValues": [
              "error",
              "invalid_request",
              "invalid_client",
              "invalid_grant",
              "invalid_token"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>에러 정보</p>"
          },
          {
            "group": "Error 200 OAuth2Exception",
            "type": "Object",
            "optional": true,
            "field": "error_description",
            "description": "<p>에러 내용</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/AuthController.java",
    "groupTitle": "base"
  },
  {
    "type": "delete",
    "url": "/v1/user/team/:team",
    "title": "내 팀 정보 삭제",
    "description": "<p>기본 프로필로 변경</p>",
    "version": "1.0.0",
    "name": "deleteUserTeam",
    "group": "my",
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
            "field": "return",
            "description": "<p>유저 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "10",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserController.java",
    "groupTitle": "my",
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
    "url": "/v1/user",
    "title": "내 정보",
    "version": "1.0.0",
    "name": "getUser",
    "group": "my",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>유저 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>직통전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>생년월일</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_lunar",
            "description": "<p>생년월일 음력 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_sms",
            "description": "<p>SMS 수신 동의</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_email",
            "description": "<p>이메일 수신 동의</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "teams",
            "description": "<p>팀 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "teams.index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "approval",
              "exit",
              "block"
            ],
            "optional": false,
            "field": "teams.status",
            "description": "<p>팀 유저 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "user",
              "admin",
              "super_admin"
            ],
            "optional": false,
            "field": "teams.role",
            "description": "<p>팀 권한</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "teams.is_profile",
            "description": "<p>팀 프로필 여부 (false: 기본 프로필)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.position",
            "description": "<p>직급 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teams.job_title",
            "description": "<p>직책 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "teams.department",
            "description": "<p>소속 부서 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "teams.department.index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "teams.department.name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "teams.department.parent",
            "description": "<p>상위 부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 99,\n\"email\": \"hong@tmup.com\",\n\"name\": \"홍길동\",\n\"birthday\": \"1999-09-09\",\n\"is_lunar\": false,\n\"is_sms\": false,\n\"is_Email\": false,\n\"profile_image\": null,\n\"message\": \"메시지\",\n\"mobile\": \"010-9999-9999\",\n\"phone\": \"02-9999-9999\",\n\"teams\": [\n{\n\"index\": 1,\n\"name\": \"팀이름\",\n\"status\": \"approval\",\n\"role\": [\n\"user\",\n\"admin\"\n],\n\"is_profile\": false,\n\"profile_image\": null,\n\"message\": \"\",\n\"mobile\": \"\",\n\"phone\": \"\",\n\"position\": null,\n\"job_title\": null,\n\"department\": {\n\"team_index\": 1,\n\"team_name\": \"팀이름\",\n\"index\": 2,\n\"name\": \"부서\",\n\"parent\": 1\n}\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserController.java",
    "groupTitle": "my",
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
    "url": "/v1/user/team/:team",
    "title": "내 팀 정보",
    "version": "1.0.0",
    "name": "getUserTeam",
    "group": "my",
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
            "field": "index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "approval",
              "exit",
              "block"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>팀 유저 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "user",
              "admin",
              "super_admin"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>팀 권한</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_profile",
            "description": "<p>팀 프로필 여부 (false: 기본 프로필)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>직급 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "job_title",
            "description": "<p>직책 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "department",
            "description": "<p>소속 부서 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "department.name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.parent",
            "description": "<p>상위 부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 1,\n\"name\": \"팀이름\",\n\"status\": \"approval\",\n\"role\": [\n\"user\",\n\"admin\"\n],\n\"is_profile\": false,\n\"profile_image\": null,\n\"message\": \"\",\n\"mobile\": \"\",\n\"phone\": \"\",\n\"position\": null,\n\"job_title\": null,\n\"department\": {\n\"team_index\": 1,\n\"team_name\": \"팀이름\",\n\"index\": 2,\n\"name\": \"부서\",\n\"parent\": 1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserController.java",
    "groupTitle": "my",
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
    "url": "/v1/user/teams",
    "title": "내 팀 정보 목록",
    "version": "1.0.0",
    "name": "getUserTeams",
    "group": "my",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>팀 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "approval",
              "exit",
              "block"
            ],
            "optional": false,
            "field": ".status",
            "description": "<p>팀 유저 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "user",
              "admin",
              "super_admin"
            ],
            "optional": false,
            "field": ".role",
            "description": "<p>팀 권한</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": ".is_profile",
            "description": "<p>팀 프로필 여부 (false: 기본 프로필)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".position",
            "description": "<p>직급 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".job_title",
            "description": "<p>직책 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": ".department",
            "description": "<p>소속 부서 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": ".department.index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": ".department.name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": ".department.parent",
            "description": "<p>상위 부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "[\n{\n\"index\": 1,\n\"name\": \"팀이름\",\n\"status\": \"approval\",\n\"role\": [\n\"user\",\n\"admin\"\n],\n\"is_profile\": false,\n\"profile_image\": null,\n\"message\": \"\",\n\"mobile\": \"\",\n\"phone\": \"\",\n\"position\": null,\n\"job_title\": null,\n\"department\": {\n\"team_index\": 1,\n\"team_name\": \"팀이름\",\n\"index\": 2,\n\"name\": \"부서\",\n\"parent\": 1\n}\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserController.java",
    "groupTitle": "my",
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
    "type": "put",
    "url": "/v1/user",
    "title": "내 정보 수정",
    "version": "1.0.0",
    "name": "putUser",
    "group": "my",
    "parameter": {
      "fields": {
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "profile_image_base64",
            "description": "<p>이미지 base64 (빈문자열: 이미지 삭제)</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "profile_image_name",
            "description": "<p>이미지 파일 이름</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "birthday",
            "description": "<p>생년월일</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "is_lunar",
            "description": "<p>생년월일 음력 여부</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>직통전화</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "is_sms",
            "description": "<p>SMS 수신 동의</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "is_email",
            "description": "<p>이메일 수신 동의</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"profile_image_base64\": \"4WB44WH44WB44S044WH44WB44S044WH44WB44S044WH44S044WB44WH44S044WB44WH\",\n\"profile_image_name\": \"1.jpg\",\n\"birthday\": \"1999-01-01\",\n\"is_lunar\": false,\n\"message\": \"상태\",\n\"mobile\": \"010-1111-1111\",\n\"phone\" : \"02-0000-0000\",\n\"is_sms\": false,\n\"is_email\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>직통전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>생년월일</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_lunar",
            "description": "<p>생년월일 음력 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_sms",
            "description": "<p>SMS 수신 동의</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_email",
            "description": "<p>이메일 수신 동의</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\"profile_image\": \"https://images.tmup.com/6fe/c6/be/f11c6fe4a9be0.jpg\",\n\"birthday\": \"1999-01-01\",\n\"is_lunar\": false,\n\"message\": \"상태\",\n\"mobile\": \"010-1111-1111\",\n\"phone\": \"02-0000-0000\",\n\"is_sms\": false,\n\"is_email\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserController.java",
    "groupTitle": "my",
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
    "type": "put",
    "url": "/v1/user/team/:team",
    "title": "내 팀 정보 수정",
    "version": "1.0.0",
    "name": "putUserTeam",
    "group": "my",
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
            "type": "String",
            "optional": true,
            "field": "profile_image_base64",
            "description": "<p>이미지 base64 (빈문자열: 이미지 삭제)</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "profile_image_name",
            "description": "<p>이미지 파일 이름</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>직통전화</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>휴대전화</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"profile_image_base64\": \"4WH44WB44S044WH44WB44S044WH44WB44S044WH44S044WB44WH44S044WB44WH\",\n\"profile_image_name\": \"1.jpg\",\n\"message\": \"메시지\",\n\"mobile\": \"010-1111-2111\",\n\"phone\": \"02-0000-2000\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>직통전화</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"profile_image\": \"https://images.tmup.com/6fe/c6/be/f11c6fe4a9be0.jpg\",\n\"message\": \"메시지\",\n\"mobile\": \"010-1111-2111\",\n\"phone\": \"02-0000-2000\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserController.java",
    "groupTitle": "my",
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
    "type": "delete",
    "url": "/v1/team/:team/department/:department",
    "title": "부서 삭제",
    "version": "1.0.0",
    "name": "deleteTeamDepartment",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
    "description": "<p>하위 부서와 유저는 최상위로 이동됨</p>",
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
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>부서 번호</p>"
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
            "field": "return",
            "description": "<p>부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "100",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/DepartmentController.java",
    "groupTitle": "team_admin",
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
    "type": "delete",
    "url": "/v1/team/:team/department/user",
    "title": "유저 부서 삭제",
    "version": "1.0.0",
    "name": "deleteTeamDepartmentUser",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
    "description": "<p>부서 없는 상태로 변경</p>",
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
          "content": "{\"users\": [1,2,3,4]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/DepartmentController.java",
    "groupTitle": "team_admin",
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
    "type": "delete",
    "url": "/v1/team/:team/jobtitle/:index",
    "title": "직책 삭제",
    "version": "1.0.0",
    "name": "deleteTeamJobtitle",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
    "description": "<p>해당 직책의 유저는 직책 없는 상태로 변경됨.</p>",
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
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>직책 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team_admin",
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
    "type": "delete",
    "url": "/v1/team/:team/position/:index",
    "title": "직급 삭제",
    "version": "1.0.0",
    "name": "deleteTeamPosition",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
    "description": "<p>해당 직급의 유저는 직급 없는 상태로 변경됨.</p>",
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
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>직급 번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team_admin",
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
    "type": "delete",
    "url": "/v1/team/:team/user/role/admin",
    "title": "팀 관리자 삭제",
    "version": "1.0.0",
    "name": "deleteTeamUserRoleAdmin",
    "group": "team_admin",
    "permission": [
      {
        "name": "team super admin"
      }
    ],
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
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"users\":[1,2,3,4,5]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>변경 갯수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "5",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminUserController.java",
    "groupTitle": "team_admin",
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
    "type": "get",
    "url": "/v1/team/:team/user/:user/role/super/url",
    "title": "슈퍼관리자 변경 메일",
    "version": "1.0.0",
    "name": "getTeamUserRoleSuperURL",
    "group": "team_admin",
    "permission": [
      {
        "name": "team super admin"
      }
    ],
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
            "type": "Number",
            "optional": false,
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
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminUserController.java",
    "groupTitle": "team_admin",
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
    "url": "/v1/team/:team/department",
    "title": "부서 생성",
    "version": "1.0.0",
    "name": "postTeamDepartment",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "parent",
            "defaultValue": "0",
            "description": "<p>상위 부서 번호</p>"
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
            "field": "return",
            "description": "<p>부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "100",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/DepartmentController.java",
    "groupTitle": "team_admin",
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
    "url": "/v1/team/:team/jobtitle",
    "title": "직책 생성",
    "version": "1.0.0",
    "name": "postTeamJobtitle",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>직책 이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"name\": \"팀장\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>직책 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "30",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team_admin",
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
    "url": "/v1/team/:team/position",
    "title": "직급 생성",
    "version": "1.0.0",
    "name": "postTeamPosition",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>직급 이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"name\": \"과장\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>직급 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "20",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team_admin",
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
    "type": "put",
    "url": "/v1/team/:team/department/:department",
    "title": "부서 수정",
    "version": "1.0.0",
    "name": "putTeamDepartment",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>부서 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "parent",
            "description": "<p>상위 부서 번호</p>"
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
            "field": "return",
            "description": "<p>부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "100",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/DepartmentController.java",
    "groupTitle": "team_admin",
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
    "type": "put",
    "url": "/v1/team/:team/department/:department/child",
    "title": "부서, 유저 추가",
    "version": "1.0.0",
    "name": "putTeamDepartment",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>부서 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "Number[]",
            "optional": true,
            "field": "users",
            "description": "<p>유저 번호 리스트</p>"
          },
          {
            "group": "JSON",
            "type": "Number[]",
            "optional": true,
            "field": "department",
            "description": "<p>부서 번호 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"users\": [1,2,3,4],\n\"department\": [1,2,3,4]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/DepartmentController.java",
    "groupTitle": "team_admin",
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
    "type": "put",
    "url": "/v1/team/:team/jobtitle/:index",
    "title": "직책 수정",
    "version": "1.0.0",
    "name": "putTeamJobtitle",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>직책 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>직책 이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"name\": \"팀장\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>직책 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "30",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team_admin",
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
    "type": "put",
    "url": "/v1/team/:team/jobtitle/seq",
    "title": "직책 순서 변경",
    "version": "1.0.0",
    "name": "putTeamJobtitleSeq",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "field": "index_list",
            "description": "<p>직책 번호 리스트 (순서대로)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"index_list\":[1,3,2,4]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team_admin",
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
    "type": "put",
    "url": "/v1/team/:team/position/:index",
    "title": "직급 수정",
    "version": "1.0.0",
    "name": "putTeamPosition",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>직급 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>직급 이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"name\": \"과장\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>직급 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "20",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team_admin",
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
    "type": "put",
    "url": "/v1/team/:team/position/seq",
    "title": "직급 순서 변경",
    "version": "1.0.0",
    "name": "putTeamPositionSeq",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "field": "index_list",
            "description": "<p>직급 번호 리스트 (순서대로)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"index_list\":[1,3,2,4]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team_admin",
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
    "type": "put",
    "url": "/v1/team/:team/user/:user",
    "title": "유저 정보 수정",
    "version": "1.0.0",
    "name": "putTeamUser",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>직통전화</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "position_index",
            "description": "<p>직급 번호 (0 이하 직급 없음)</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "job_title_index",
            "description": "<p>직책 번호 (0 이하 직책 없음)</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "department_index",
            "description": "<p>부서 번호 (0 이하 부서 없음)</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "approval",
              "block",
              "exit"
            ],
            "optional": true,
            "field": "status",
            "description": "<p>유저 상태</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"mobile\": \"010-1111-2111\",\n\"phone\": \"02-0000-2000\",\n\"position_index\": 1,\n\"job_title_index\": 1,\n\"department_index\": 1,\n\"status\": \"approval\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>유저 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "100",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminUserController.java",
    "groupTitle": "team_admin",
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
    "type": "put",
    "url": "/v1/team/:team/user/role/admin",
    "title": "팀 관리자 추가",
    "version": "1.0.0",
    "name": "putTeamUserRoleAdmin",
    "group": "team_admin",
    "permission": [
      {
        "name": "team super admin"
      }
    ],
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
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"users\":[1,2,3,4,5]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>변경 갯수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "5",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminUserController.java",
    "groupTitle": "team_admin",
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
    "type": "put",
    "url": "/v1/team/user/role/super",
    "title": "슈퍼관리자 변경",
    "version": "1.0.0",
    "name": "putTeamUserRoleSuper",
    "group": "team_admin",
    "description": "<p>기존 슈퍼관리자는 일반관리자로 변경.</p>",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "p",
            "description": "<p>이메일 링크</p>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "send",
            "defaultValue": "true",
            "description": "<p>기존 슈퍼관리자에게 알림 메일 발송 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET /v1/team/user/role/super?p=:p",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p>팀 이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "팀이름",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminUserController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "put",
    "url": "/v1/team/:team/user/status/:status",
    "title": "유저 상태 변경",
    "version": "1.0.0",
    "name": "putTeamUserStatus",
    "group": "team_admin",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "allowedValues": [
              "approval",
              "block",
              "exit"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>유저 상태</p>"
          }
        ],
        "JSON": [
          {
            "group": "JSON",
            "type": "Number[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 번호 리스트</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "send",
            "defaultValue": "true",
            "description": "<p>유저 메일 발송 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"users\":[1,2,3,4,5]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>변경 갯수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "5",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminUserController.java",
    "groupTitle": "team_admin",
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
    "type": "get",
    "url": "/v1/team/invite/check",
    "title": "초대 링크 검사",
    "version": "2.1.0",
    "name": "getTeamInviteCheck",
    "group": "team_join",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "p",
            "description": "<p>초대 링크</p>"
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
            "field": "user_index",
            "description": "<p>유저 번호 (null 이면 회원 가입)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_email",
            "description": "<p>유저 이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>유저 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "invite_user_index",
            "description": "<p>초대 유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_user_email",
            "description": "<p>초대 유저 이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_user_name",
            "description": "<p>초대 유저 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "invite_team_index",
            "description": "<p>초대 팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_team_name",
            "description": "<p>초대 팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "invite_data",
            "description": "<p>초대 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "invite_data.department_index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_data.department_name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "invite_data.position_index",
            "description": "<p>직급 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_data.position_name",
            "description": "<p>직급 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "invite_data.job_title_index",
            "description": "<p>직책 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_data.job_title_name",
            "description": "<p>직책 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_data.phone",
            "description": "<p>직통전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_data.mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_data.birthday",
            "description": "<p>생년월일</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "invite_data.is_lunar",
            "description": "<p>생년월일 음력 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"user_index\": null,\n\"user_email\": \"test1@tmup.com\",\n\"user_name\": \"테스트\",\n\"invite_user_index\": 999,\n\"invite_user_email\": \"hong@tmup.com\",\n\"invite_user_name\": \"홍길동\",\n\"invite_team_index\": 1,\n\"invite_team_name\": \"팀이름\",\n\"invite_data\": {\n\"department_index\": 1,\n\"department_name\": \"부서\",\n\"position_index\": 1,\n\"position_name\": \"팀장\",\n\"job_title_index\": 1,\n\"job_title_name\": \"과장\",\n\"phone\": \"010-1234-1234\",\n\"mobile\": \"02-1234-1234\",\n\"birthday\": \"1999-01-01\",\n\"is_lunar\": false\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error Example",
          "content": "HTTP/1.1 403 Forbidden\n{\n\"exception\": \"UserInviteException\",\n\"error\": \"user_limit\",\n\"error_description\": {\n\"team_idx\": 100,\n\"team_name\": \"팀이름\",\n\"super_name\": \"홍길동\",\n\"super_email\": \"hong@tmup.com\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamInviteController.java",
    "groupTitle": "team_join"
  },
  {
    "type": "post",
    "url": "/v1/team/:team/invite",
    "title": "팀 초대 메일 발송",
    "version": "1.0.0",
    "name": "postTeamInvite",
    "group": "team_join",
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
            "type": "String[]",
            "optional": false,
            "field": "email",
            "description": "<p>이메일 리스트</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "ko",
              "en"
            ],
            "optional": true,
            "field": "locale",
            "defaultValue": "ko",
            "description": "<p>메일 발송 언어</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"email\": [\"test1@tmup.com\",\"test2@tmup.com\",\"test\"],\n\"locale\": \"ko\"\n}",
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
            "field": ".",
            "description": "<p>결과 리스트 (key: 이메일)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": ".result",
            "description": "<p>성공 실패 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "email_pattern",
              "domain",
              "join_user"
            ],
            "optional": false,
            "field": ".data",
            "description": "<p>에러 내용 (email_pattern: email 형식, domain: 허용되지 않은 domain, join_user 이미 가입)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"test2@tmup.com\": {\n\"result\": false,\n\"data\": \"join user\"\n},\n\"test\": {\n\"result\": false,\n\"data\": \"email pattern\"\n},\n\"test1@tmup.com\": {\n\"result\": true,\n\"data\": \"\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamInviteController.java",
    "groupTitle": "team_join",
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
    "url": "/v1/team/:team/invite/admin",
    "title": "팀 초대 (관리자)",
    "version": "1.0.0",
    "name": "postTeamInviteAdmin",
    "group": "team_join",
    "permission": [
      {
        "name": "team admin"
      }
    ],
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "department_index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "position_index",
            "description": "<p>직급 번호</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "job_title_index",
            "description": "<p>직책 번호</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>직통전화</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "birthday",
            "description": "<p>생년월일</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "is_lunar",
            "defaultValue": "false",
            "description": "<p>생년월일 음력 여부</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "ko",
              "en"
            ],
            "optional": true,
            "field": "locale",
            "defaultValue": "ko",
            "description": "<p>메일 발송 언어</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"name\": \"홍길동\",\n\"email\": \"test1@tmup.com\",\n\"department_index\": 1,\n\"position_index\": 1,\n\"job_title_index\": 1,\n\"phone\": \"010-1234-1234\",\n\"mobile\": \"02-1234-1234\",\n\"birthday\": \"1999-01-01\",\n\"is_lunar\": false,\n\"locale\": \"ko\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>성공 실패 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "email_pattern",
              "domain",
              "join_user"
            ],
            "optional": false,
            "field": "data",
            "description": "<p>에러 내용 (email_pattern: email 형식, domain: 허용되지 않은 domain, join_user 이미 가입)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"result\": true,\n\"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamInviteController.java",
    "groupTitle": "team_join",
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
    "url": "/v1/team/invite/join",
    "title": "초대 팀 가입",
    "version": "1.0.0",
    "name": "postTeamInviteJoin",
    "group": "team_join",
    "parameter": {
      "fields": {
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "p",
            "description": "<p>초대 링크</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "ko",
              "en"
            ],
            "optional": true,
            "field": "locale",
            "defaultValue": "ko",
            "description": "<p>메일 발송 언어</p>"
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
            "field": "return",
            "description": "<p>팀 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "100",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamInviteController.java",
    "groupTitle": "team_join"
  },
  {
    "type": "get",
    "url": "/v1/search/:team",
    "title": "조직도 검색",
    "version": "1.0.0",
    "name": "getSearch",
    "group": "team",
    "description": "<p>이름(초성가능), 부서, 이메일 검색</p>",
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
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "size": "2..",
            "optional": false,
            "field": "query",
            "description": "<p>검색</p>"
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
            "field": "index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>서버 시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "department",
            "description": "<p>부서 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "department.name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.parent",
            "description": "<p>상위 부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "users.index",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.name",
            "description": "<p>유저 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "users.department",
            "description": "<p>소속 부서 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "users.department.index",
            "description": "<p>소속 부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.department.name",
            "description": "<p>소속 부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "users.department.parent",
            "description": "<p>소속 상위 부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 1,\n\"name\": \"팀이름\",\n\"department\": [\n{\n\"index\": 39,\n\"name\": \"테스트부서\",\n\"parent\": 5\n}\n],\n\"users\": [\n{\n\"index\": 999,\n\"name\": \"테스트\",\n\"email\": \"test@tmup.com\",\n\"profile_image\": null,\n\"department\": {\n\"index\": 100,\n\"name\": \"부서\",\n\"parent\": 0\n}\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/SearchController.java",
    "groupTitle": "team",
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
    "url": "/v1/team/:team",
    "title": "조직도 최상위 정보",
    "version": "1.0.0",
    "name": "getTeam",
    "group": "team",
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
        "Query": [
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "user",
            "defaultValue": "true",
            "description": "<p>유저 포함 여부</p>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "department",
            "defaultValue": "true",
            "description": "<p>부서 포함 여부</p>"
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
            "field": "index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>서버 시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "users.index",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.name",
            "description": "<p>유저 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "approval",
              "exit",
              "block"
            ],
            "optional": true,
            "field": "users.status",
            "description": "<p>유저 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "off_line",
              "on_line"
            ],
            "optional": true,
            "field": "users.pc_status",
            "description": "<p>유저 PC 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "department",
            "description": "<p>부서 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "department.name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.parent",
            "description": "<p>상위 부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 1,\n\"name\": \"팀이름\",\n\"time\": 1487068962635,\n\"users\": [\n{\n\"index\": 100,\n\"name\": \"사용자\",\n\"email\": \"test@tmup.com\",\n\"profile_image\": null,\n\"message\": null,\n\"status\": \"approval\",\n\"pc_status\": \"off_line\",\n\"mobile\": null\n}\n],\n\"department\": [\n{\n\"index\": 2,\n\"name\": \"부서\",\n\"parent\": 0\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/OrganogramController.java",
    "groupTitle": "team",
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
    "url": "/v1/team/:team/all",
    "title": "조직도 전체 정보",
    "version": "1.0.0",
    "name": "getTeamAll",
    "group": "team",
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
        "Query": [
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "user",
            "defaultValue": "true",
            "description": "<p>유저 포함 여부</p>"
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
            "field": "index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>서버 시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "users.index",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.name",
            "description": "<p>유저 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "approval",
              "exit",
              "block"
            ],
            "optional": true,
            "field": "users.status",
            "description": "<p>유저 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "off_line",
              "on_line"
            ],
            "optional": true,
            "field": "users.pc_status",
            "description": "<p>유저 PC 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "department",
            "description": "<p>부서 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "department.name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.parent",
            "description": "<p>상위 부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "department.users",
            "description": "<p>하위 유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "department.department",
            "description": "<p>하위 부서 리스트</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 1,\n\"name\": \"팀이름\",\n\"time\": 1487068962635,\n\"users\": [\n{\n\"index\": 100,\n\"name\": \"사용자\",\n\"email\": \"test@tmup.com\",\n\"profile_image\": null,\n\"message\": null,\n\"status\": \"approval\",\n\"pc_status\": \"off_line\",\n\"mobile\": null\n}\n],\n\"department\": [\n{\n\"index\": 2,\n\"name\": \"부서\",\n\"parent\": 0,\n\"users\": null,\n\"department\": null\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/OrganogramController.java",
    "groupTitle": "team",
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
    "url": "/v1/team/:team/change",
    "title": "조직도 변경 정보",
    "version": "1.0.0",
    "name": "getTeamChange",
    "group": "team",
    "description": "<p>time 이후 변경 정보</p>",
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
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>기준 timestamp</p>"
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
            "field": "index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>서버 시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "parents",
            "description": "<p>변경 상위 부서 번호 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "department",
            "description": "<p>부서 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "department.name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.parent",
            "description": "<p>상위 부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "users.index",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.name",
            "description": "<p>유저 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "approval",
              "exit",
              "block"
            ],
            "optional": true,
            "field": "users.status",
            "description": "<p>유저 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "users.department",
            "description": "<p>소속 부서 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "users.department.index",
            "description": "<p>소속 부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.department.name",
            "description": "<p>소속 부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "users.department.parent",
            "description": "<p>소속 상위 부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 1,\n\"name\": \"팀이름\",\n\"time\": 1487068962635,\n\"parents\": [7,8,9],\n\"department\": [\n{\n\"index\": 2,\n\"name\": \"부서\",\n\"parent\": 0\n}\n],\n\"users\": [\n{\n\"index\": 100,\n\"name\": \"사용자\",\n\"email\": \"test@tmup.com\",\n\"profile_image\": null,\n\"message\": null,\n\"status\": \"approval\",\n\"department\": {\"index\": 2, \"name\":\"부서\", \"parent\": 0}\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/OrganogramController.java",
    "groupTitle": "team",
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
    "url": "/v1/team/:team/:parent",
    "title": "조직도 하위 정보",
    "version": "1.0.0",
    "name": "getTeamChild",
    "group": "team",
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
        "Query": [
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "user",
            "defaultValue": "true",
            "description": "<p>유저 포함 여부</p>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "department",
            "defaultValue": "true",
            "description": "<p>부서 포함 여부</p>"
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
            "field": "index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>서버 시간(unix)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "department",
            "description": "<p>부서 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "department.name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.parent",
            "description": "<p>상위 부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "users.index",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.name",
            "description": "<p>유저 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "approval",
              "exit",
              "block"
            ],
            "optional": true,
            "field": "users.status",
            "description": "<p>유저 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "off_line",
              "on_line"
            ],
            "optional": true,
            "field": "users.pc_status",
            "description": "<p>유저 PC 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.mobile",
            "description": "<p>휴대전화</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 1,\n\"name\": \"팀이름\",\n\"time\": 1487068962635,\n\"users\": [\n{\n\"index\": 100,\n\"name\": \"사용자\",\n\"email\": \"test@tmup.com\",\n\"profile_image\": null,\n\"message\": null,\n\"status\": \"approval\",\n\"pc_status\": \"off_line\",\n\"mobile\": null\n}\n],\n\"department\": [\n{\n\"index\": 2,\n\"name\": \"부서\",\n\"parent\": 0\n}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/OrganogramController.java",
    "groupTitle": "team",
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
    "url": "/v1/team/:team/department/:department",
    "title": "부서 정보",
    "version": "1.0.0",
    "name": "getTeamDepartment",
    "group": "team",
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
            "type": "Number",
            "optional": false,
            "field": "department",
            "description": "<p>부서 번호</p>"
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
            "field": "index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "parent",
            "description": "<p>상위 부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>부서 이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 3,\n\"name\": \"테스트팀\",\n\"parent\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/DepartmentController.java",
    "groupTitle": "team",
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
    "url": "/v1/team/:team/goodbye",
    "title": "팀 탈퇴",
    "version": "1.0.0",
    "name": "getTeamGoodbye",
    "group": "team",
    "description": "<p>슈퍼관리자는 마지막 팀원 탈퇴</p>",
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
        "Query": [
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "force",
            "defaultValue": "false",
            "description": "<p>마지막 팀원 탈퇴 여부 (super_admin, count = 1 일 때 true)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result",
            "description": "<p>성공 실패 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "roles",
            "description": "<p>권한 (super_admin 탈퇴 불가)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>팀원 수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"result\": false,\n\"roles\": [\"super_admin\",\"user\"],\n\"count\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamController.java",
    "groupTitle": "team",
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
    "url": "/v1/team/:team/jobtitle",
    "title": "직책 목록",
    "version": "1.0.0",
    "name": "getTeamJobtitle",
    "group": "team",
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
            "field": ".",
            "description": "<p>직책 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".index",
            "description": "<p>직책 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".name",
            "description": "<p>직책 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".seq",
            "description": "<p>직책 순서</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "[\n{\n\"index\": 4,\n\"name\": \"팀장\",\n\"seq\": 1\n},\n{\n\"index\": 5,\n\"name\": \"실장\",\n\"seq\": 2\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team",
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
    "url": "/v1/team/:team/position",
    "title": "직급 목록",
    "version": "1.0.0",
    "name": "getTeamPosition",
    "group": "team",
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
            "field": ".",
            "description": "<p>직급 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".index",
            "description": "<p>직급 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".name",
            "description": "<p>직급 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".seq",
            "description": "<p>직급 순서</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "[\n{\n\"index\": 4,\n\"name\": \"대리\",\n\"seq\": 1\n},\n{\n\"index\": 5,\n\"name\": \"과장\",\n\"seq\": 2\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamAdminDataController.java",
    "groupTitle": "team",
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
    "url": "/v1/teams",
    "title": "팀 목록",
    "version": "2.1.0",
    "name": "getTeams",
    "group": "team",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>팀 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "all"
            ],
            "optional": false,
            "field": ".invite_user",
            "description": "<p>초대 가능</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": ".is_invite_domain",
            "description": "<p>초대 도메인 초대 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": ".invite_domain",
            "description": "<p>초대 가능 도메인 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": ".is_department",
            "description": "<p>부서 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": ".is_position",
            "description": "<p>직책 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": ".is_job_title",
            "description": "<p>직급 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": ".is_phone",
            "description": "<p>직통전화 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": ".is_mobile",
            "description": "<p>휴대전화 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": ".is_birthday",
            "description": "<p>생년월일 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".direct_url",
            "description": "<p>바로가기 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".direct_width",
            "description": "<p>바로가기 URL 가로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".direct_height",
            "description": "<p>바로가기 URL 세로</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "user",
              "admin",
              "super_admin"
            ],
            "optional": false,
            "field": ".user_role",
            "description": "<p>팀 권한</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "[\n{\n\"index\": 1,\n\"name\": \"팀이름\",\n\"status\": \"approval\",\n\"invite_user\": \"admin\",\n\"is_invite_domain\": true,\n\"invite_domain\": [\"tmup.com\"],\n\"is_department\": true,\n\"is_position\": true,\n\"is_job_title\": true,\n\"is_phone\": true,\n\"is_mobile\": true,\n\"is_birthday\": true,\n\"direct_url\": null,\n\"direct_width\": null,\n\"direct_height\": null,\n\"user_role\": [\"super_admin\",\"user\"]\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/team/TeamController.java",
    "groupTitle": "team",
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
    "url": "/v1/user/:user/team/:team",
    "title": "팀 유저 정보",
    "version": "1.0.0",
    "name": "getUserTeam",
    "group": "team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
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
            "type": "Boolean",
            "optional": false,
            "field": "is_profile",
            "description": "<p>팀 프로필 여부 (false: 기본 프로필)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>유저 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile_image",
            "description": "<p>이미지 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>상태 메시지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "approval",
              "exit",
              "block"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>유저 상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>직통전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>생년월일</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_lunar",
            "description": "<p>생년월일 음력 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>직급 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "job_title",
            "description": "<p>직책 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "department",
            "description": "<p>소속 부서 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.index",
            "description": "<p>부서 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "department.name",
            "description": "<p>부서 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "department.parent",
            "description": "<p>상위 부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 1,\n\"email\": \"test@tmup.com\",\n\"name\": \"홍길동\",\n\"birthday\": \"1999-10-12\",\n\"is_lunar\": false,\n\"status\":\"approval\",\n\"is_profile\": false,\n\"profile_image\": null,\n\"message\": \"^^\",\n\"mobile\": null,\n\"phone\": null,\n\"position\": null,\n\"job_title\": \"사원\",\n\"department\": {\n\"index\": 3,\n\"name\": \"테스트팀\",\n\"parent\": 2\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/OtherUserController.java",
    "groupTitle": "team",
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
    "url": "/v1/user/pcstatus/team/:team/change",
    "title": "PC 상태 변경 정보",
    "version": "1.0.0",
    "name": "getUserChangePC",
    "group": "user_pc",
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
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>기준 timestamp</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "off_line",
              "on_line"
            ],
            "optional": true,
            "field": "pc",
            "description": "<p>PC 상태</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET /v1/user/pcstatus/team/1/change?time=1447814373561",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "team_index",
            "description": "<p>팀번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "off_line",
              "on_line"
            ],
            "optional": false,
            "field": "users.",
            "description": "<p>PC 상태 (key: 유저 번호)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>서버 시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"team_index\": 1,\n\"users\": {\n\"1\": \"on_line\",\n\"2\": \"on_line\",\n\"3\": \"on_line\"\n},\n\"time\": 1447826097268\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserPcStatusController.java",
    "groupTitle": "user_pc"
  },
  {
    "type": "get",
    "url": "/v1/user/pcstatus/team/:team",
    "title": "PC 상태 정보",
    "version": "1.0.0",
    "name": "getUserPC",
    "group": "user_pc",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>유저 번호 리스트 (,로 구분)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET /v1/user/pcstatus/team/1?users=1%2C2%2C3",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "team_index",
            "description": "<p>팀번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>유저 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "off_line",
              "on_line"
            ],
            "optional": false,
            "field": "users.",
            "description": "<p>PC 상태 (key: 유저 번호)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>서버 시간(unix)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"team_index\": 1,\n\"users\": {\n\"1\": \"on_line\",\n\"2\": \"on_line\",\n\"3\": \"on_line\"\n},\n\"time\": 1447826097268\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserPcStatusController.java",
    "groupTitle": "user_pc"
  },
  {
    "type": "put",
    "url": "/v1/user/pcstatus",
    "title": "PC 상태 변경",
    "version": "1.0.0",
    "name": "putUserPC",
    "group": "user_pc",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "off_line",
              "on_line"
            ],
            "optional": true,
            "field": "pc",
            "defaultValue": "on_line",
            "description": "<p>PC 상태</p>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "team",
            "description": "<p>팀 번호 (미지정 시 전체 팀)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "PUT /v1/user/pcstatus?pc=off_line",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserPcStatusController.java",
    "groupTitle": "user_pc"
  },
  {
    "type": "delete",
    "url": "/v1/user",
    "title": "탈퇴",
    "version": "1.0.0",
    "name": "deleteUser",
    "group": "user",
    "parameter": {
      "fields": {
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"password\":\":password\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "return",
            "description": "<p>메시지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "see you again",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserController.java",
    "groupTitle": "user",
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
    "type": "get",
    "url": "/v1/join/email/url",
    "title": "가입 메일 발송",
    "version": "1.0.0",
    "name": "getJoinEmail",
    "group": "user",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "ko",
              "en"
            ],
            "optional": true,
            "field": "locale",
            "defaultValue": "ko",
            "description": "<p>메일 발송 언어</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RequestExample",
          "content": "GET /v1/join/email?test%40tmup.com",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserJoinController.java",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/v1/join/email/url/check",
    "title": "가입 링크 검사",
    "version": "1.0.0",
    "name": "getJoinEmailCheck",
    "group": "user",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "p",
            "description": "<p>가입 링크</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET /v1/join/email/check?p=:p",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserJoinController.java",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/v1/user/password/url/check",
    "title": "패스워드 링크 검사",
    "version": "1.0.0",
    "name": "getUserPasswordCheck",
    "group": "user",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "p",
            "description": "<p>패스워드 재발급 링크</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>링크 만료 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "false",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserPasswordController.java",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/v1/join/email",
    "title": "가입",
    "version": "1.0.0",
    "name": "postJoinEmail",
    "group": "user",
    "parameter": {
      "fields": {
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>패스워드</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "p",
            "description": "<p>가입 링크</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "is_sms",
            "defaultValue": "false",
            "description": "<p>SMS 수신 동의</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "is_email",
            "defaultValue": "false",
            "description": "<p>이메일 수신 동의</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"name\": \"이름\",\n\"password\": \"password\",\n\"p\": \":p\",\n\"is_sms\": false,\n\"is_email\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>유저 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "999",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserJoinController.java",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/v1/join/invite",
    "title": "초대 가입",
    "version": "1.0.0",
    "name": "postJoinInvite",
    "group": "user",
    "parameter": {
      "fields": {
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>패스워드</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "p",
            "description": "<p>초대 링크</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "is_sms",
            "defaultValue": "false",
            "description": "<p>SMS 수신 동의</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "is_email",
            "defaultValue": "false",
            "description": "<p>이메일 수신 동의</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "ko",
              "en"
            ],
            "optional": true,
            "field": "locale",
            "defaultValue": "ko",
            "description": "<p>메일 발송 언어</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"name\": \"이름\",\n\"password\": \"password\",\n\"p\": \":p\",\n\"is_sms\": false,\n\"is_email\": false,\n\"locale\": \"ko\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "return",
            "description": "<p>유저 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "999",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserJoinController.java",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "/v1/user/password/url",
    "title": "패스워드 메일 전송",
    "version": "1.0.0",
    "name": "postUserPassword",
    "group": "user",
    "parameter": {
      "fields": {
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\"name\":\"이름\",\"email\":\"test@tmup.com\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserPasswordController.java",
    "groupTitle": "user"
  },
  {
    "type": "put",
    "url": "/v1/user/password",
    "title": "패스워드 재발급",
    "version": "1.0.0",
    "name": "putUserPassword",
    "group": "user",
    "parameter": {
      "fields": {
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>패스워드</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "p",
            "description": "<p>패스워드 재발급 링크</p>"
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
            "field": "return",
            "description": "<p>유저 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "999",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v1/api/user/UserPasswordController.java",
    "groupTitle": "user"
  }
] });

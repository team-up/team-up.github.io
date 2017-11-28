define({ "api": [
  {
    "type": "*",
    "url": "/v3/*",
    "title": "HTTP Status Code",
    "version": "3.0.0",
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
    "filename": "src/main/java/com/tmup/auth/api/v3/api/AuthApi.java",
    "groupTitle": "base"
  },
  {
    "type": "get",
    "url": "/v3/license",
    "title": "팀 라이선스 정보",
    "version": "3.0.0",
    "name": "getLicense",
    "group": "license",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
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
          "content": "GET /v3/license?team=:team",
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
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_count",
            "description": "<p>사용 가능 인원</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_idx",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_disk_size",
            "description": "<p>사용 가능 디스크 크기 (MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "upload_limit",
            "description": "<p>업로드 제한 크기 (MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "standard",
              "premium"
            ],
            "optional": false,
            "field": "license_type",
            "description": "<p>라이선스 종류</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>시작일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>종료일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"team_index\": 1,\n\"user_count\": 250,\n\"user_idx\": 100,\n\"user_disk_size\": 5020,\n\"upload_limit\": 2048,\n\"license_type\": \"premium\",\n\"start_date\": \"2016-05-25\",\n\"end_date\": \"2017-05-25\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/LicenseApi.java",
    "groupTitle": "license",
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
    "url": "/v3/licenses",
    "title": "팀 라이선스 목록",
    "version": "3.0.0",
    "name": "getLicenses",
    "group": "license",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>팀 라이선스 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".team_index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".user_count",
            "description": "<p>사용 가능 인원</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".user_idx",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".user_disk_size",
            "description": "<p>사용 가능 디스크 크기 (MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": ".upload_limit",
            "description": "<p>업로드 제한 크기 (MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "standard",
              "premium"
            ],
            "optional": false,
            "field": ".license_type",
            "description": "<p>라이선스 종류</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".start_date",
            "description": "<p>시작일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".end_date",
            "description": "<p>종료일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "[\n{\n\"team_index\": 1,\n\"user_count\": 250,\n\"user_idx\": 100,\n\"user_disk_size\": 5020,\n\"upload_limit\": 2048,\n\"license_type\": \"premium\",\n\"start_date\": \"2016-05-25\",\n\"end_date\": \"2017-05-25\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/LicenseApi.java",
    "groupTitle": "license",
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
    "url": "/v3/team/:team",
    "title": "팀 정보",
    "version": "3.0.0",
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
              "name",
              "job_title",
              "position"
            ],
            "optional": false,
            "field": "sort_type",
            "description": "<p>유저 정렬 타입</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "all"
            ],
            "optional": false,
            "field": "invite_user",
            "description": "<p>초대 가능</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_invite_domain",
            "description": "<p>초대 도메인 필터 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "invite_domain",
            "description": "<p>초대 가능 도메인 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_department",
            "description": "<p>부서 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_position",
            "description": "<p>직책 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_job_title",
            "description": "<p>직급 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_phone",
            "description": "<p>직통전화 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_mobile",
            "description": "<p>휴대전화 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "is_birthday",
            "description": "<p>생년월일 필수 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direct_url",
            "description": "<p>바로가기 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "direct_width",
            "description": "<p>바로가기 URL 가로</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "direct_height",
            "description": "<p>바로가기 URL 세로</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>팀 규모</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>팀 업종</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"index\": 100,\n\"name\": \"테스트\",\n\"invite_user\": \"admin\",\n\"sort_type\": \"name\",\n\"is_invite_domain\": true,\n\"invite_domain\": [\"tmup.com\"],\n\"is_department\": true,\n\"is_position\": true,\n\"is_job_title\": true,\n\"is_phone\": true,\n\"is_mobile\": true,\n\"is_birthday\": true,\n\"direct_url\": \"https://direct.tmup.com/index.html\",\n\"direct_width\": 500,\n\"direct_height\": 500,\n\"size\": \"\",\n\"category\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/TeamApi.java",
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
    "type": "post",
    "url": "/v3/team",
    "title": "팀 생성",
    "version": "3.0.0",
    "name": "postTeam",
    "group": "team",
    "parameter": {
      "fields": {
        "JSON": [
          {
            "group": "JSON",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "name",
              "job_title",
              "position"
            ],
            "optional": true,
            "field": "sort_type",
            "defaultValue": "name",
            "description": "<p>유저 정렬 타입</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "admin",
              "all"
            ],
            "optional": true,
            "field": "invite",
            "defaultValue": "all",
            "description": "<p>초대 가능</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "domain",
              "any"
            ],
            "optional": true,
            "field": "domain",
            "defaultValue": "any",
            "description": "<p>초대 도메인 필터 여부</p>"
          },
          {
            "group": "JSON",
            "type": "String[]",
            "optional": true,
            "field": "domainList",
            "description": "<p>초대 가능 도메인 리스트</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "department",
            "defaultValue": "false",
            "description": "<p>부서 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "position",
            "defaultValue": "false",
            "description": "<p>직책 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "jobTitle",
            "defaultValue": "false",
            "description": "<p>직급 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "phone",
            "defaultValue": "false",
            "description": "<p>직통전화 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "mobile",
            "defaultValue": "false",
            "description": "<p>휴대전화 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "birthday",
            "defaultValue": "false",
            "description": "<p>생년월일 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "direct_url",
            "description": "<p>바로가기 URL</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "direct_width",
            "description": "<p>바로가기 URL 가로</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "direct_height",
            "description": "<p>바로가기 URL 세로</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "size",
            "description": "<p>팀 규모</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>팀 업종</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"name\": \"테스트\",\n\"sort_type\": \"name\",\n\"invite\": \"all\",\n\"domain\": \"domain\",\n\"domainList\": [\"tmup.com\",\"team-up.co.kr\"],\n\"department\": true,\n\"position\": true,\n\"jobTitle\": true,\n\"phone\": true,\n\"mobile\": true,\n\"birthday\": true,\n\"direct_url\": \"https://direct.tmup.com/index.html\",\n\"direct_width\": 500,\n\"direct_height\": 500,\n\"size\": \"100~200명\",\n\"category\" : \"IT\"\n}",
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
    "filename": "src/main/java/com/tmup/auth/api/v3/api/TeamApi.java",
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
    "url": "/v3/department/:team/seq",
    "title": "부서 순서 변경",
    "version": "3.6.0",
    "name": "putDepartmentSeq",
    "group": "team",
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
            "description": "<p>조직도 번호 리스트 (순서대로)</p>"
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
    "filename": "src/main/java/com/tmup/auth/api/v3/api/DepartmentApi.java",
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
    "url": "/v3/team",
    "title": "팀 수정",
    "version": "3.0.0",
    "name": "putTeam",
    "group": "team",
    "permission": [
      {
        "name": "team admin"
      }
    ],
    "parameter": {
      "fields": {
        "JSON": [
          {
            "group": "JSON",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>이름 (슈퍼관리자만 변경 가능)</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "name",
              "job_title",
              "position"
            ],
            "optional": true,
            "field": "sort_type",
            "description": "<p>유저 정렬 타입</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "admin",
              "all"
            ],
            "optional": true,
            "field": "invite",
            "description": "<p>초대 가능</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "allowedValues": [
              "domain",
              "any"
            ],
            "optional": true,
            "field": "domain",
            "description": "<p>초대 도메인 필터 여부</p>"
          },
          {
            "group": "JSON",
            "type": "String[]",
            "optional": true,
            "field": "domainList",
            "description": "<p>초대 가능 도메인 리스트</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "department",
            "description": "<p>부서 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "position",
            "description": "<p>직책 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "jobTitle",
            "description": "<p>직급 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "phone",
            "description": "<p>직통전화 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "mobile",
            "description": "<p>휴대전화 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "Boolean",
            "optional": true,
            "field": "birthday",
            "description": "<p>생년월일 필수 여부</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "direct_url",
            "description": "<p>바로가기 URL</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "direct_width",
            "description": "<p>바로가기 URL 가로</p>"
          },
          {
            "group": "JSON",
            "type": "Number",
            "optional": true,
            "field": "direct_height",
            "description": "<p>바로가기 URL 세로</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "size",
            "description": "<p>팀 규모</p>"
          },
          {
            "group": "JSON",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>팀 업종</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n\"index\": 100,\n\"name\": \"테스트\",\n\"sort_type\": \"name\",\n\"invite\": \"all\",\n\"domain\": \"domain\",\n\"domainList\": [\"tmup.com\",\"team-up.co.kr\"],\n\"department\": true,\n\"position\": true,\n\"jobTitle\": true,\n\"phone\": true,\n\"mobile\": true,\n\"birthday\": true,\n\"direct_url\": \"https://direct.tmup.com/index.html\",\n\"direct_width\": 500,\n\"direct_height\": 500,\n\"size\": \"100~200명\",\n\"category\": \"IT\"\n}",
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
    "filename": "src/main/java/com/tmup/auth/api/v3/api/TeamApi.java",
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
  }
] });

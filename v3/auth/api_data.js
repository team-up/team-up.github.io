define({ "api": [
  {
    "type": "get",
    "url": "v3/department",
    "title": "팀 부서 조회",
    "version": "3.0.0",
    "name": "getDepartment",
    "group": "Team_Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "team",
            "description": "<p>팀번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "index",
            "description": "<p>부서번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>부서이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "parent",
            "description": "<p>상위부서 번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\"index\": 66,\n\"name\": \"팀업개발팀\",\n\"parent\": 65\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/DepartmentApi.java",
    "groupTitle": "Team_Department"
  },
  {
    "type": "get",
    "url": "v3/jobtitle",
    "title": "팀 직급 조회",
    "version": "3.0.0",
    "name": "getJobTitle",
    "group": "Team_JobTitle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "team",
            "description": "<p>팀번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "index",
            "description": "<p>직급번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>직급이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sequence",
            "description": "<p>정렬순서</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n{\n\"index\": 11,\n\"name\": \"사원\",\n\"sequence\": 1\n},\n{\n\"index\": 12,\n\"name\": \"과장\",\n\"sequence\": 2\n},\n{\n\"index\": 13,\n\"name\": \"부장\",\n\"sequence\": 3\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/JobTitleApi.java",
    "groupTitle": "Team_JobTitle"
  },
  {
    "type": "get",
    "url": "v3/license",
    "title": "팀 라이선스 조회",
    "version": "3.0.0",
    "name": "getLicense",
    "group": "Team_License",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "team",
            "description": "<p>팀번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "team_index",
            "description": "<p>팀번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_count",
            "description": "<p>사용 가능 인원</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_idx",
            "description": "<p>회원번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_disk_size",
            "description": "<p>사용 가능 디스크 크기(MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "upload_limit",
            "description": "<p>업로드 제한(MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
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
          "title": "Success-Response:",
          "content": "{\n\"team_index\": 1,\n\"user_count\": 250,\n\"user_idx\": 100,\n\"user_disk_size\": 5020,\n\"upload_limit\": 2048,\n\"license_type\": \"premium\",\n\"start_date\": \"2016-05-25\",\n\"end_date\": \"2116-02-17\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/licenseApi.java",
    "groupTitle": "Team_License"
  },
  {
    "type": "get",
    "url": "v3/licenses",
    "title": "모든팀 라이선스 조회",
    "version": "3.0.0",
    "name": "getLicenses",
    "group": "Team_Licenses",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "team_index",
            "description": "<p>팀번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_count",
            "description": "<p>사용 가능 인원</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_idx",
            "description": "<p>회원번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_disk_size",
            "description": "<p>사용 가능 디스크 크기(MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "upload_limit",
            "description": "<p>업로드 제한(MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
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
          "title": "Success-Response:",
          "content": "[\n{\n\"team_index\": 1,\n\"user_count\": 250,\n\"user_idx\": 100,\n\"user_disk_size\": 5020,\n\"upload_limit\": 2048,\n\"license_type\": \"premium\",\n\"start_date\": \"2016-05-25\",\n\"end_date\": \"2116-02-17\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/licenseApi.java",
    "groupTitle": "Team_Licenses"
  },
  {
    "type": "get",
    "url": "v3/position",
    "title": "팀 직책 조회",
    "version": "3.0.0",
    "name": "getPosition",
    "group": "Team_Position",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "team",
            "description": "<p>팀번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "index",
            "description": "<p>직책번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>직책이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sequence",
            "description": "<p>정렬순서</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n[\n{\n\"index\": 11,\n\"name\": \"팀장\",\n\"sequence\": 1\n},\n{\n\"index\": 12,\n\"name\": \"센터장\",\n\"sequence\": 2\n},\n{\n\"index\": 13,\n\"name\": \"본부장\",\n\"sequence\": 3\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/PositionApi.java",
    "groupTitle": "Team_Position"
  },
  {
    "type": "get",
    "url": "v3/status/usercount",
    "title": "팀 사용자 수",
    "version": "3.0.0",
    "name": "getUserCount",
    "group": "Team_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "team",
            "description": "<p>팀번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "team_index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "approval",
            "description": "<p>승인된 사용자 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "block",
            "description": "<p>중지된 사용자 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "wait",
            "description": "<p>대기중 사용자 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "exit",
            "description": "<p>탈퇴한 상용자 수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\nteam_index: 1,\napproval: 999,\nblock: 1,\nwait: 10,\nexit: 10\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/StatusApi.java",
    "groupTitle": "Team_Status"
  },
  {
    "type": "post",
    "url": "v3/team",
    "title": "팀 만들기",
    "version": "3.0.0",
    "name": "createTeam",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "invite",
            "defaultValue": "all",
            "description": "<p>all or admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "domain",
            "defaultValue": "any",
            "description": "<p>domain or any</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "domainList",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "department",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "position",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "jobTitle",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "phone",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "mobile",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "birthday",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "direct_url",
            "description": "<p>바로가기 url</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "direct_width",
            "description": "<p>바로가기 width</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "direct_heigth",
            "description": "<p>바로가기 height</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "size",
            "description": "<p>팀 규모</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>업종</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\": \"팀업개발팀\",\n\t\t\"invite\": \"all\",\n\t\t\"domain\": \"domain\",\n\t\t\"domainList\": [ \"@estsoft.com\", \"@zuminternet.com\" ],\n\t\t\"department\": true,\n\t\t\"position\": true,\n\t\t\"jobTitle\": true,\n\t\t\"phone\": true,\n\t\t\"mobile\": true,\n\t\t\"birthday\": true,\n\t\t\"direct_url\": \"https://direct.tmup.com/index.html\",\n\t\t\"direct_width\": 500,\n\t\t\"direct_height\": 500,\n\t    \"size\": \"100~200명\",\n\t    \"category\" : \"IT\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "index",
            "description": "<p>Team index</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "8977",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/TeamApi.java",
    "groupTitle": "Team"
  },
  {
    "type": "get",
    "url": "v3/team",
    "title": "팀 조회",
    "version": "3.0.0",
    "name": "getTeam",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "team",
            "description": "<p>팀번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "index",
            "description": "<p>팀번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>팀이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invite_user",
            "description": "<p>초대가능 admin, any</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "is_invite_domain",
            "description": "<p>초대 도메인 필터 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "invite_domain",
            "description": "<p>초대가능 domain</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "is_department",
            "description": "<p>부서 필수 입력 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "is_position",
            "description": "<p>직책 필수 입력 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "is_job_title",
            "description": "<p>직급 필수 입력 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "is_phone",
            "description": "<p>전화번호 필수 입력 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "is_mobile",
            "description": "<p>휴대폰 필수 입력 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "is_birthday",
            "description": "<p>생일 필수 입력 여부</p>"
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
            "type": "Integer",
            "optional": false,
            "field": "direct_width",
            "description": "<p>바로가기 URL width</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "direct_height",
            "description": "<p>바로가기 URL height</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>팀규모</p>"
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
          "title": "Success-Response:",
          "content": "\n{\n\"index\": 1,\n\"name\": \"팀업\",\n\"invite_user\": \"admin\",\n\"is_invite_domain\": true,\n\"invite_domain\": [\n\"tmup.com\"\n],\n\"is_department\": true,\n\"is_position\": true,\n\"is_job_title\": true,\n\"is_phone\": true,\n\"is_mobile\": true,\n\"is_birthday\": true,\n\"direct_url\": \"http://direct.tmup.com\",\n\"direct_width\": 500,\n\"direct_height\": 500,\n\"size\": \"\",\n\"category\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/TeamApi.java",
    "groupTitle": "Team"
  },
  {
    "type": "put",
    "url": "v3/team",
    "title": "팀 수정",
    "version": "3.0.0",
    "name": "updateTeam",
    "group": "Team",
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
            "type": "Integer",
            "optional": false,
            "field": "index",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>이름은 슈퍼관리자만 변경 가능</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "invite",
            "description": "<p>all or admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "domain",
            "description": "<p>domain or any</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "domainList",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "department",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "position",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "jobTitle",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "birthday",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "direct_url",
            "description": "<p>바로가기 url</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "direct_width",
            "description": "<p>바로가기 width</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "direct_heigth",
            "description": "<p>바로가기 height</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "size",
            "description": "<p>팀 규모</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>업종</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"index\": 100\n\t\t\"name\": \"팀업개발팀\",\n\t\t\"invite\": \"all\",\n\t\t\"domain\": \"domain\",\n\t\t\"domainList\": [ \"@estsoft.com\", \"@zuminternet.com\" ],\n\t\t\"department\": true,\n\t\t\"position\": true,\n\t\t\"jobTitle\": true,\n\t\t\"phone\": true,\n\t\t\"mobile\": true,\n\t\t\"birthday\": true,\n\t\t\"direct_url\": \"https://direct.tmup.com/index.html\",\n\t\t\"direct_width\": 500,\n\t\t\"direct_height\": 500,\n\t    \"size\": \"100~200명\",\n\t    \"category\" : \"IT\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/v3/api/TeamApi.java",
    "groupTitle": "Team"
  }
] });

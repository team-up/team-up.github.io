define({ "api": [
  {
    "type": "get",
    "url": "v1",
    "title": "token 조회",
    "version": "1.0.0",
    "name": "token",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/AuthController.java",
    "groupTitle": "Auth"
  },
  {
    "type": "put",
    "url": "v1/team/:teamindex/department/:departmentindex/child",
    "title": "부서 & 부서원 추가",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.0.0",
    "name": "addChild",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer[]</p> ",
            "optional": true,
            "field": "users",
            "description": "<p>회원 번호 set</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer[]</p> ",
            "optional": true,
            "field": "department",
            "description": "<p>부서 번호 set</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"users\": [1,2,3,4],\n\t\t\"department\": [1,2,3,4]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "v1/team/:teamindex/department",
    "title": "부서 만들기",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.0.0",
    "name": "create",
    "group": "Department",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>부서번호</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "parent",
            "defaultValue": "0",
            "description": "<p>상위 부서 번호</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "delete",
    "url": "v1/team/:teamindex/department/:departmentindex",
    "title": "부서 삭제",
    "description": "<p>하위 부서와 유저는 최상위로 이동됨</p> ",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.0.0",
    "name": "delete",
    "group": "Department",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>부서번호</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "delete",
    "url": "v1/team/:teamindex/department/user",
    "title": "부서원 초기화",
    "description": "<p>부서 없는 상태로 초기화</p> ",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.0.0",
    "name": "deleteChildUser",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "users",
            "description": "<p>회원 번호 set</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"users\": [1,2,3,4]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>성공 실패 여부</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "v1/team/:teamindex/department/:departmentindex",
    "title": "부서 조회",
    "version": "1.0.0",
    "name": "get",
    "group": "Department",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"index\": 3,\n\t\t\"name\": \"솔루션개발팀\",\n\t\t\"parent\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "put",
    "url": "v1/team/:teamindex/department/:departmentindex",
    "title": "부서 수정",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "1.0.0",
    "name": "update",
    "group": "Department",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>부서번호</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>부서이름</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "parent",
            "description": "<p>상위 부서 번호</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/DepartmentController.java",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "v1/team/:index/change",
    "title": "조직도 변경 조회",
    "version": "1.0.0",
    "name": "getChange",
    "group": "Organogram",
    "description": "<p>time 이후 변경된 내역 조회</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Long</p> ",
            "optional": false,
            "field": "time",
            "description": "<p>timestamp</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>팀 index</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Long</p> ",
            "optional": false,
            "field": "time",
            "description": "<p>서버 시간 (unix timestamp)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>List</p> ",
            "optional": false,
            "field": "department",
            "description": "<p>부서 정보</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>List</p> ",
            "optional": false,
            "field": "users",
            "description": "<p>회원 정보</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Set</p> ",
            "optional": false,
            "field": "parents",
            "description": "<p>변경된 조직도 상위 index</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/tree/OrganogramController.java",
    "groupTitle": "Organogram"
  },
  {
    "type": "get",
    "url": "v1/team/:index",
    "title": "조직도 Root 조회",
    "version": "1.0.0",
    "name": "teamIndex",
    "group": "Organogram",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "user",
            "defaultValue": "true",
            "description": "<p>회원 조회 여부</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "department",
            "defaultValue": "true",
            "description": "<p>부서 조회 여부</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/tree/OrganogramController.java",
    "groupTitle": "Organogram"
  },
  {
    "type": "get",
    "url": "v1/team/:index/all",
    "title": "조직도 All 조회",
    "version": "1.0.0",
    "name": "teamIndexAll",
    "group": "Organogram",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "user",
            "defaultValue": "true",
            "description": "<p>회원 조회 여부</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/tree/OrganogramController.java",
    "groupTitle": "Organogram"
  },
  {
    "type": "get",
    "url": "v1/team/:index/:parent",
    "title": "조직도 하위 조회",
    "version": "1.0.0",
    "name": "teamIndexParent",
    "group": "Organogram",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "user",
            "defaultValue": "true",
            "description": "<p>회원 조회 여부</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "department",
            "defaultValue": "true",
            "description": "<p>부서 조회 여부</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/tree/OrganogramController.java",
    "groupTitle": "Organogram"
  },
  {
    "type": "get",
    "url": "v1/search",
    "title": "검색",
    "version": "1.0.0",
    "name": "search",
    "group": "search",
    "description": "<p>이름(초성가능), 팀이름, email 검색</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "size": "2..",
            "optional": false,
            "field": "query",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/search/SearchController.java",
    "groupTitle": "search"
  },
  {
    "type": "get",
    "url": "v1/search/:teamindex",
    "title": "팀내 검색",
    "version": "1.0.0",
    "name": "searchTeam",
    "group": "search",
    "description": "<p>이름(초성가능), 팀이름, email 검색</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "size": "2..",
            "optional": false,
            "field": "query",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/search/SearchController.java",
    "groupTitle": "search"
  },
  {
    "type": "post",
    "url": "v1/team/:index/jobtitle/:index",
    "title": "직책 생성",
    "version": "1.0.0",
    "name": "createJobtitle",
    "group": "team_admin",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n\t\t\"name\": \"팀장\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>직책 번호</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminDataController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "post",
    "url": "v1/team/:index/position",
    "title": "직급 생성",
    "version": "1.0.0",
    "name": "createPosition",
    "group": "team_admin",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n\t\t\"name\": \"과장\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>직급 번호</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminDataController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "put",
    "url": "v1/team/:index/position/:index",
    "title": "직급 수정",
    "version": "1.0.0",
    "name": "createPosition",
    "group": "team_admin",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n\t\t\"name\": \"과장\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>직급 번호</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminDataController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "delete",
    "url": "v1/team/:index/position/:index",
    "title": "직급 삭제",
    "version": "1.0.0",
    "name": "createPosition",
    "group": "team_admin",
    "description": "<p>직급을 사용중인 회원은 없는 직급으로 변경 됩니다</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>성공</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminDataController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "delete",
    "url": "v1/team/:index/user/role/admin",
    "title": "관리자 권한 삭제",
    "version": "1.0.0",
    "name": "deleteAdmin",
    "group": "team_admin",
    "description": "<p>팀 관리자 권한을 삭제</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "Team",
            "description": "<p>index</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"users\" : [1,2,3,4,5]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>업데이트된 숫자</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminUserController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "delete",
    "url": "v1/team/:index/jobtitle/:index",
    "title": "직책 삭제",
    "version": "1.0.0",
    "name": "deleteJobtiele",
    "group": "team_admin",
    "description": "<p>직책을 사용중인 회원은 없는 직책으로 변경 됩니다</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>성공</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminDataController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "get",
    "url": "v1/team/:index/jobtitle",
    "title": "직책 조회",
    "version": "1.0.0",
    "name": "getJobtitle",
    "group": "team_admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \t\"1\": \"팀장\",\n \t\"4\": \"부팀장\",\n \t\"5\": \"실장\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminDataController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "get",
    "url": "v1/team/:index/position",
    "title": "직급 조회",
    "version": "1.0.0",
    "name": "getPosition",
    "group": "team_admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \t\"1\": \"대리\",\n \t\"4\": \"과장\",\n \t\"5\": \"부장\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminDataController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "put",
    "url": "v1/team/:index/user/role/super",
    "title": "슈퍼 관리자 전환",
    "version": "1.0.0",
    "name": "moveSuper",
    "group": "team_admin",
    "description": "<p>슈퍼 관리자 전환 (슈퍼 관리자는 팀에 1명만 가능, 기존 슈퍼 관리자는 admin으로 변경됨)</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "Team",
            "description": "<p>index</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"user\" : 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>성공여부</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminUserController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "put",
    "url": "v1/team/:index/user/role/admin",
    "title": "관리자 권한 추가",
    "version": "1.0.0",
    "name": "updateAdmin",
    "group": "team_admin",
    "description": "<p>사용자에게 팀 관리자 권한을 준다</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "Team",
            "description": "<p>index</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"users\" : [1,2,3,4,5]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>업데이트된 숫자</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminUserController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "put",
    "url": "v1/team/:index/jobtitle/:index",
    "title": "직책 수정",
    "version": "1.0.0",
    "name": "updateJobtitle",
    "group": "team_admin",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n\t\t\"name\": \"팀장\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>직책 번호</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminDataController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "put",
    "url": "v1/team/:index/user/status/:status",
    "title": "사용자 상태 변경",
    "version": "1.0.0",
    "name": "updateStatus",
    "group": "team_admin",
    "description": "<p>사용자별 상태 변경</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "Team",
            "description": "<p>index</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>approval,block,exit(탈퇴)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"users\" : [1,2,3,4,5]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>업데이트된 숫자</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminUserController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "put",
    "url": "v1/team/:index/user/:index",
    "title": "사용자 정보 수정",
    "version": "1.0.0",
    "name": "updateUser",
    "group": "team_admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "mobile",
            "description": "<p>휴대폰번호</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "phone",
            "description": "<p>직통전화</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "position_index",
            "description": "<p>직급 index, 0이하면 직급 없음으로 설정</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "job_title_index",
            "description": "<p>직책 index, 0이하면 직책 없음으로 설정</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "department_index",
            "description": "<p>부서 index, 0이하로 주면 부서 없는 사용자로 설정</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "status",
            "description": "<p>사용자 상태, approval,block,exit(탈퇴)</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"mobile\": \"010-1111-2111\",\n\t\t\"phone\": \"02-0000-2000\",\n\t\t\"position_index\" : 1,\n\t\t\"job_title_index\" : 1,\n\t\t\"department_index\" : 1 ,\n\t\t\"status\" : \"approval\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>회원 번호</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamAdminUserController.java",
    "groupTitle": "team_admin"
  },
  {
    "type": "post",
    "url": "v1/team/:index/invite",
    "title": "초대 url 발급",
    "version": "1.0.0",
    "name": "invite",
    "group": "team_invite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>team index</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Set</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email set</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "send",
            "description": "<p>email로 발송여부, default=false</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"email\" : [ \"test1-1@estsoft.com\",\"test2@estsoft.com\",\"test\"],\n\t\t\"send\" : false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"test2@estsoft.com\": {\n\t\t\"result\": false,\n\t\t\"data\": \"join user\"\n\t\t},\n\t\"test\": {\n\t\t\"result\": false,\n\t\t\"data\": \"email pattern\"\n\t\t},\n\t\"test1-1@estsoft.com\": {\n\t\t\"result\": true,\n\t\t\"data\": \"https://tmup.com/team/invite?p=0dc3cae0a4282eeaff23...\"\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamInviteController.java",
    "groupTitle": "team_invite"
  },
  {
    "type": "post",
    "url": "v1/team/:index/invite/admin",
    "title": "관리자 초대",
    "version": "1.0.0",
    "name": "inviteAdmin",
    "group": "team_invite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>team index</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "department_index",
            "description": "<p>부서번호</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "position_index",
            "description": "<p>직급번호</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "job_title_index",
            "description": "<p>직책번호</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "phone",
            "description": "<p>직책번호</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "send",
            "description": "<p>email로 발송여부, default=false</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\" : \"홍길동\",\n\t\t\"email\" : \"test1-1@estsoft.com\",\n\t\t\"department_index\" : 1,\n\t\t\"position_index\" : 1,\n\t\t\"job_title_index\" : 1,\n\t\t\"phone\" : \"010-1234-1234\",\n\t\t\"mobile\" : \"02-123401234\",\n\t\t\"birthday\" : \"1999-01-01\",\n\t\t\"is_lunar\" : true,\n\t\t\"send\" : false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"result\": true,\n\t\t\"data\": \"https://tmup.com/team/invite?p=0dc3cae0a4282eeaff23...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamInviteController.java",
    "groupTitle": "team_invite"
  },
  {
    "type": "get",
    "url": "v1/team/invite/check",
    "title": "초대 url 검사",
    "version": "1.0.0",
    "name": "inviteCheck",
    "group": "team_invite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "p",
            "description": "<p>초대 url p 파라미터</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "user_index",
            "description": "<p>email로 가입되어 있는 회원번호 , null 이면 가입되어 있지 않음</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"user_index\": null,\n\t\"user_email\": \"test1-1@estsoft.com\",\n\t\"invite_user_index\": 999,\n\t\"invite_user_email\": \"hong@estsoft.com\",\n\t\"invite_user_name\": \"홍길동\",\n\t\"invite_team_index\": 1,\n\t\"invite_team_name\": \"ESTsoft\",\n\t\"invite_data\": {\n\t\t\"department_index\": 1,\n\t\t\"department_name\": \"ESTsoft\",\n\t\t\"position_index\": 1,\n\t\t\"position_name\": \"부서장\",\n\t\t\"job_title_index\": 1,\n\t\t\"job_title_name\": \"사원\",\n\t\t\"phone\": \"010-1234-1234\",\n\t\t\"mobile\": \"02-123401234\",\n\t\t\"birthday\": \"1999-01-01\",\n\t\t\"is_lunar\": true\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamInviteController.java",
    "groupTitle": "team_invite"
  },
  {
    "type": "post",
    "url": "v1/team/invite/join",
    "title": "초대 팀 가입",
    "version": "1.0.0",
    "name": "inviteJoin",
    "group": "team_invite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "p",
            "description": "<p>초대 url p 파라미터</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "team",
            "description": "<p>index</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamInviteController.java",
    "groupTitle": "team_invite"
  },
  {
    "type": "post",
    "url": "v1/team",
    "title": "팀 만들기",
    "version": "1.0.0",
    "name": "createTeam",
    "group": "team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "invite",
            "defaultValue": "all",
            "description": "<p>all or admin</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "domain",
            "defaultValue": "any",
            "description": "<p>domain or any</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "domainList",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "department",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "position",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "jobTitle",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "phone",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "mobile",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "birthday",
            "defaultValue": "false",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "direct_url",
            "description": "<p>바로가기 url</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "direct_width",
            "description": "<p>바로가기 width</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "direct_heigth",
            "description": "<p>바로가기 height</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\": \"팀업개발팀\",\n\t\t\"invite\": \"all\",\n\t\t\"domain\": \"domain\",\n\t\t\"domainList\": [ \"@estsoft.com\", \"@zuminternet.com\" ],\n\t\t\"department\": true,\n\t\t\"position\": true,\n\t\t\"jobTitle\": true,\n\t\t\"phone\": true,\n\t\t\"mobile\": true,\n\t\t\"birthday\": true,\n\t\t\"direct_url\": \"https://direct.tmup.com/index.html\",\n\t\t\"direct_width\": 500,\n\t\t\"direct_height\": 500\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>Team index</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "100",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamController.java",
    "groupTitle": "team"
  },
  {
    "type": "get",
    "url": "v1/team/:index/goodbye",
    "title": "팀 탈퇴",
    "version": "1.0.0",
    "name": "goodbyeTeam",
    "group": "team",
    "description": "<p>super admin은 강제 탈퇴 해야 됨</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "Team",
            "description": "<p>index</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "force",
            "description": "<p>마지막 팀원 탈퇴 사용, super admin, count = 1 일때 true로 주면 탈퇴됨</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "result",
            "description": "<p>성공 실패 여부</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "roles",
            "description": "<p>권한, super_admin 일때는 탈퇴 안됨</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "count",
            "description": "<p>팀원 숫자</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"result\": false,\n\t\"roles\": [\n \t\"super_admin\",\n \t\"user\"\n\t],\n\t\"count\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamController.java",
    "groupTitle": "team"
  },
  {
    "type": "get",
    "url": "v1/teams",
    "title": "내 팀 정보",
    "version": "1.0.0",
    "name": "teams",
    "group": "team",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>팀 번호</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>팀 이름</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "invite_user",
            "description": "<p>초대 가능 (all, admin)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "is_invite_domain",
            "description": "<p>도메인 초대 여부</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Set</p> ",
            "optional": false,
            "field": "invite_domain",
            "description": "<p>초대 가능 도메인 set</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "is_department",
            "description": "<p>부서명 필수입력 여부</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "is_position",
            "description": "<p>직책 필수입력 여부</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "is_job_title",
            "description": "<p>직급 필수입력 여부</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "is_phone",
            "description": "<p>직통전화 필수입력 여부</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "is_mobile",
            "description": "<p>휴대폰 필수입력 여부</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "is_birthday",
            "description": "<p>생일 필수입력 여부</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "direct_url",
            "description": "<p>바로가기 url</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "direct_width",
            "description": "<p>바로가기 url width</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "direct_height",
            "description": "<p>바로가기 url height</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n\t{\n\t\t\"index\": 1,\n\t\t\"name\": \"ESTsoft\",\n\t\t\"invite_user\": \"admin\",\n\t\t\"is_invite_domain\": true,\n\t\t\"invite_domain\": [\n\t\t\t\"a.com\",\n\t\t\t\"estsoft.com\"\n\t\t\t],\n\t\t\"is_department\": true,\n\t\t\"is_position\": true,\n\t\t\"is_job_title\": true,\n\t\t\"is_phone\": true,\n\t\t\"is_mobile\": true,\n\t\t\"is_birthday\": true,\n\t\t\"direct_url\": null,\n\t\t\"direct_width\": null,\n\t\t\"direct_height\": null\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamController.java",
    "groupTitle": "team"
  },
  {
    "type": "put",
    "url": "v1/team/:index",
    "title": "팀 수정",
    "version": "1.0.0",
    "name": "updateTeam",
    "group": "team",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "invite",
            "description": "<p>all or admin</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "domain",
            "description": "<p>domain or any</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "domainList",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "department",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "position",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "jobTitle",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "birthday",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "direct_url",
            "description": "<p>바로가기 url</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "direct_width",
            "description": "<p>바로가기 width</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "direct_heigth",
            "description": "<p>바로가기 height</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\": \"팀업개발팀\",\n\t\t\"invite\": \"all\",\n\t\t\"domain\": \"domain\",\n\t\t\"domainList\": [ \"@estsoft.com\", \"@zuminternet.com\" ],\n\t\t\"department\": true,\n\t\t\"position\": true,\n\t\t\"jobTitle\": true,\n\t\t\"phone\": true,\n\t\t\"mobile\": true,\n\t\t\"birthday\": true,\n\t\t\"direct_url\": \"https://direct.tmup.com/index.html\",\n\t\t\"direct_width\": 500,\n\t\t\"direct_height\": 500\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>Team index</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "100",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/team/TeamController.java",
    "groupTitle": "team"
  },
  {
    "type": "put",
    "url": "v1/join/password",
    "title": "비밀번호 재설정",
    "version": "1.0.0",
    "group": "userPassword",
    "description": "<p>비밀번호 재발급</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "psswprd",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "p",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>admin 권한이 있는 token</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserPasswordController.java",
    "groupTitle": "userPassword",
    "name": "PutV1JoinPassword"
  },
  {
    "type": "post",
    "url": "v1/join/password/url",
    "title": "비밀번호 재설정 url 발급",
    "version": "1.0.0",
    "name": "password",
    "group": "userPassword",
    "description": "<p>비밀번호 재발급 url 생성</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "send",
            "description": "<p>email 발송 여부 default = false</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>admin 권한이 있는 token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\": \"홍길동\",\n \"email\": \"test@estsoft.com\",\n \"isSend\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserPasswordController.java",
    "groupTitle": "userPassword"
  },
  {
    "type": "get",
    "url": "v1/join/password/url/check",
    "title": "비밀번호 재설정 url 검사",
    "version": "1.0.0",
    "name": "passwordCheck",
    "group": "userPassword",
    "description": "<p>비밀번호 재발급 url 체크</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "p",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>admin 권한이 있는 token</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserPasswordController.java",
    "groupTitle": "userPassword"
  },
  {
    "type": "get",
    "url": "v1/join/email/url/check",
    "title": "email 가입 url 검사",
    "version": "1.0.0",
    "name": "check",
    "group": "user_join",
    "description": "<p>생성된 url이 올바른지 체크</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "p",
            "description": "<p>생성된 url에서 p</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>admin 권한이 있는 token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "https://auth.tmup.com/v1/join/email/check?p=dsad3hdshsdsad",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>회원 가입 email</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "test@estsoft.com",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserJoinController.java",
    "groupTitle": "user_join"
  },
  {
    "type": "post",
    "url": "v1/join/invite",
    "title": "초대 가입",
    "version": "1.0.0",
    "name": "invite",
    "group": "user_join",
    "description": "<p>초대 링크로 회원 가입</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "p",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>admin 권한이 있는 token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "sms",
            "description": "<p>SMS 수신 동의</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>Email 수신 동의</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\" : \"홍길동\",\n\t\t\"password\" : \"rlfehddk)6(!!Ahd\",\n\t\t\"p\" : \"dsad3hdshsdsad\",\n\t\t\"is_sms\" : false,\n\t\t\"is_email\" : false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>회원 가입후 회원 index</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "999",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserJoinController.java",
    "groupTitle": "user_join"
  },
  {
    "type": "post",
    "url": "v1/join/email",
    "title": "email 가입",
    "version": "1.0.0",
    "name": "join",
    "group": "user_join",
    "description": "<p>생성된 url이 올바른지 체크</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "p",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>admin 권한이 있는 token</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "sms",
            "description": "<p>SMS 수신 동의</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>Email 수신 동의</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\" : \"홍길동\",\n\t\t\"password\" : \"rlfehddk)(!!Ahd\",\n\t\t\"p\" : \"dsad3hdshsdsad\",\n\t\t\"is_sms\" : false,\n\t\t\"is_email\" : false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>회원 가입후 회원 index</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "999",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserJoinController.java",
    "groupTitle": "user_join"
  },
  {
    "type": "get",
    "url": "v1/join/email/url",
    "title": "email 가입 url 발급",
    "version": "1.0.0",
    "name": "joinEmail",
    "group": "user_join",
    "description": "<p>회원 가입을 위하여 회원 가입 url 생성</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "send",
            "description": "<p>email 발송 여부, default = false</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>admin 권한이 있는 token</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "https://auth.tmup.com/v1/join/email?test@estsoft.com",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": "<p>회원가입 url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "https://tmup.com/signup/account?p=b029215e290b0e0512956ff480f55942f1e815b939c715492453b1b4c6570587cf171c89f8bce9be199600199d88d5a9",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserJoinController.java",
    "groupTitle": "user_join"
  },
  {
    "type": "delete",
    "url": "v1/user/team/:index",
    "title": "내 팀별 정보 삭제",
    "description": "<p>기본 프로필로 보여지게 됩니다.</p> ",
    "version": "1.0.0",
    "name": "deleteUserTeam",
    "group": "user",
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserController.java",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "v1/user/teams",
    "title": "내 팀 정보 조회",
    "version": "1.0.0",
    "name": "getTeams",
    "group": "user",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n\t{\n\t\t\"index\": 1,\n\t\t\"name\": \"ESTsoft\",\n\t\t\"department\": null,\n\t\t\"users\": null\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserController.java",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "v1/user",
    "title": "내 정보 조회",
    "version": "1.0.0",
    "name": "getUser",
    "group": "user",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"index\": 99,\n\t\"email\": \"hong@estsoft.com\",\n\t\"name\": \"홍길동\",\n\t\"birthday\": \"1982-02-08\",\n\t\"is_lunar\": false,\n\t\"is_sms\": false,\n\t\"is_Email\": false,\n\t\"profile_image\": \"https://profile.tmup.com/1153/2015/09/11/11/a6023f1af416484ea0ce930549b681fd.png\",\n\t\"message\": \"홍익인간\",\n\t\"mobile\": \"010-9999-9999\",\n\t\"phone\": \"02-9999-9999\",\n\t\"teams\": [\n\t\t{\n\t\t\t\"index\": 1,\n\t\t\t\"name\": \"ESTsoft\",\n\t\t\t\"status\": \"approval\",\n\t\t\t\"role\": [\n\t\t\t\t\"user\",\n\t\t\t\t\"admin\"\n\t\t\t],\n\t\t\t\"is_profile\": false,\n\t\t\t\"profile_image\": null,\n\t\t\t\"message\": \"\",\n\t\t\t\"mobile\": \"\",\n\t\t\t\"phone\": \"\",\n\t\t\t\"position\": null,\n\t\t\t\"job_title\": null,\n\t\t\t\"department\": {\n\t\t\t\t\"team_index\": 1,\n\t\t\t\t\"team_name\": \"ESTsoft\",\n\t\t\t\t\"index\": 2,\n\t\t\t\t\"name\": \"신사업개발실\",\n\t\t\t\"parent\": 1\n\t\t\t}\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserController.java",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "v1/user/team/:index",
    "title": "내 팀별 정보 조회",
    "version": "1.0.0",
    "name": "getUserTeam",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>팀번호</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserController.java",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "v1/user/:index/team/:teamindex",
    "title": "회원 팀별 정보 조회",
    "version": "1.0.0",
    "name": "getUserTeam_index",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>회원 번호</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "teamindex",
            "description": "<p>팀번호</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "is_profile",
            "description": "<p>true 이면 팀에 세팅한 프로필로, false이면 기본 프로필 정보 입니다.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"index\": 1,\n\t\t\"email\": \"test@estsoft.com\",\n\t\t\"name\": \"홍길동\",\n\t\t\"birthday\": \"1999-10-12\",\n\t\t\"is_lunar\": false,\n\t\t\"status\":\"approval\",\n\t\t\"is_profile\": false,\n\t\t\"profile_image\": \"https://profile.tmup.com/1153/2015/09/11/11/a6023f1af416484ea0ce930549b681fd.png\",\n\t\t\"message\": \"^^\",\n\t\t\"mobile\": null,\n\t\t\"phone\": null,\n\t\t\"position\": null,\n\t\t\"job_title\": \"사원\",\n\t\t\"department\": {\n\t\t\t\"index\": 3,\n\t\t\t\"name\": \"팀업개발팀\",\n\t\t\t\"parent\": 2,\n\t\t\t\"is_delete\": false\n\t\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/OtherUserController.java",
    "groupTitle": "user"
  },
  {
    "type": "delete",
    "url": "v1/user",
    "title": "탈퇴",
    "description": "<p>팀업 회원에서 탈퇴하게 됩니다</p> ",
    "version": "1.0.0",
    "name": "goodbye",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserController.java",
    "groupTitle": "user"
  },
  {
    "type": "delete",
    "url": "v1/user/profile",
    "title": "내 프로필 이미지 삭제",
    "version": "1.0.0",
    "name": "profileDelete",
    "group": "user",
    "description": "<p>profile image 삭제</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>index</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserProfileController.java",
    "groupTitle": "user"
  },
  {
    "type": "delete",
    "url": "v1/user/profile/team/:index",
    "title": "내 팀별 프로필 이미지 삭제",
    "version": "1.0.0",
    "name": "profileDeleteTeam",
    "group": "user",
    "description": "<p>profile image 삭제</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "team",
            "description": "<p>index</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserProfileController.java",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "v1/user/profile",
    "title": "내 프로필 이미지 업로드",
    "version": "1.0.0",
    "name": "profileUpload",
    "group": "user",
    "description": "<p>file MultipartFile로 업로드 <br/>url /test/upload</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "MultipartFile",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "off\t *"
      }
    ],
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserProfileController.java",
    "groupTitle": "user"
  },
  {
    "type": "post",
    "url": "v1/user/profile/team/:index",
    "title": "내 팀별 프로필 이미지 업로드",
    "version": "1.0.0",
    "name": "profileUpload_team",
    "group": "user",
    "description": "<p>profile image upload, file MultipartFile로 업로드 <br/>url: /test/upload</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>File</p> ",
            "optional": false,
            "field": "file",
            "description": "<p>MultipartFile</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserProfileController.java",
    "groupTitle": "user"
  },
  {
    "type": "put",
    "url": "v1/user",
    "title": "내 정보 수정",
    "version": "1.0.0",
    "name": "putUser",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "profile_image_base64",
            "description": "<p>base64 image , 공백으로 넣으면 프로필이미지 삭제됨</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "profile_image_name",
            "description": "<p>파일명 업로드할 파일이 있을경우 같이 넣어줌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "birthday",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "is_lunar",
            "description": "<p>음력</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "message",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "is_sms",
            "description": "<p>sms 수신 동의</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "is_email",
            "description": "<p>email 수신 동의</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"profile_image_base64\": \"44S044WH44S044WB44WH44WH44S044WB44WH44S044WB44WH44WB44S044WH44WB44S044WH44WB44S044WH44S044WB44WH44S044WB44WH\",\n\t\"profile_image_name\": \"1.jpg\"\n\t\"birthday\": \"1999-01-01\",\n\t\"is_lunar\": false,\n\t\"message\": \"불금~\",\n\t\"mobile\": \"010-1111-1111\",\n\t\"phone\" : \"02-0000-0000\",\n\t\"is_sms\": false,\n\t\"is_email\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"profile_image\": \"https://profile.tmup.com/1153/2015/10/06/17/f11c6fe4a9be0.jpg\",\n\t\t\"birthday\": \"1999-01-01\",\n\t\t\"is_lunar\": false,\n\t\t\"message\": \"불금~\",\n\t\t\"mobile\": \"010-1111-1111\",\n\t\t\"phone\": \"02-0000-0000\",\n\t\t\"is_sms\": false,\n\t\t\"is_email\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserController.java",
    "groupTitle": "user"
  },
  {
    "type": "put",
    "url": "v1/user/team/:index",
    "title": "내 팀별 정보 수정",
    "version": "1.0.0",
    "name": "updateUserTeam",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "profile_image_base64",
            "description": "<p>base64 image, 공백으로 넣으면 프로필이미지 삭제됨</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "profile_image_name",
            "description": "<p>파일명 업로드할 파일이 있을경우 같이 넣어줌</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "message",
            "description": "<p>팀번호</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "mobile",
            "description": "<p>팀번호</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "phone",
            "description": "<p>팀번호</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"profile_image_base64\": \"44S044WH44S044WB44WH44WH44S044WB44WH44S044WB44WH44WB44S044WH44WB44S044WH44WB44S044WH44S044WB44WH44S044WB44WH\",\n\t\"profile_image_name\": \"1.jpg\"\n\t\"message\": \"ㅎㅎㅎㅎㅎㅎ\",\n\t\"mobile\": \"010-1111-2111\",\n\t\"phone\": \"02-0000-2000\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"profile_image\": \"https://profile.tmup.com/1153/2015/10/06/17/0c7e2195e0174b8d246782b76b.jpg\",\n\t\t\"message\": \"ㅎㅎㅎㅎㅎㅎ\",\n\t\t\"mobile\": \"010-1111-2111\",\n\t\t\"phone\": \"02-0000-2000\"\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserController.java",
    "groupTitle": "user"
  }
] });
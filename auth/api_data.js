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
    "type": "get",
    "url": "oauth2/authorize",
    "title": "Implicit Grant",
    "version": "1.0.0",
    "name": "oauth_authorize_implicit",
    "group": "Oauth2",
    "description": "<p>code 발급</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "response_type",
            "description": "<p>token  고정</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "redirect_uri",
            "description": "<p>call back url</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "scope",
            "description": "<p>권한 관리용 scope , 로 구분 ex) read,post</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "state",
            "description": "<p>csrf 방지용</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "https://auth.tmup.com/oauth2/authorize? response_type=token&client_id=:id&redirect_uri=:url",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/Oauth2Controller.java",
    "groupTitle": "Oauth2"
  },
  {
    "type": "get",
    "url": "oauth2/authorize",
    "title": "Authorization Code#1",
    "version": "1.0.0",
    "name": "oauth_token_code1",
    "group": "Oauth2",
    "description": "<p>code 발급</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "response_type",
            "description": "<p>code  고정</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "redirect_uri",
            "description": "<p>call back url</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "scope",
            "description": "<p>권한 관리용 scope , 로 구분 ex) read,post</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "state",
            "description": "<p>csrf 방지용</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/Oauth2Controller.java",
    "groupTitle": "Oauth2"
  },
  {
    "type": "get, post",
    "url": "oauth2/token",
    "title": "Authorization Code#2",
    "version": "1.0.0",
    "name": "oauth_token_code2",
    "group": "Oauth2",
    "description": "<p>발급 받은 code를 이용해 token을 발급 받습니다.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "grant_type",
            "description": "<p>authorization_code  고정</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "client_secret",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>발급 받은 code</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "redirect_uri",
            "description": "<p>call back url</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/Oauth2Controller.java",
    "groupTitle": "Oauth2"
  },
  {
    "type": "post",
    "url": "oauth2/token",
    "title": "Password Credentials",
    "version": "1.0.0",
    "name": "oauth_token_password",
    "group": "Oauth2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "grant_type",
            "description": "<p>password 고정</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "client_secret",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
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
            "optional": true,
            "field": "scope",
            "description": "<p>scope , 로구분 ex) read,post</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"access_token\": \"47af604f7c6b642e3cd1020776539bcae0c83dd95e9796715dacb0ae3b87b53d\",\n\t\t\"expires_in\": 86399,\n\t\t\"token_type\": \"bearer\",\n\t\t\"refresh_token\": \"9a5cedc1e59909d43fc314dc96b163846df174a1712d342189cf8e444631caa3\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/Oauth2Controller.java",
    "groupTitle": "Oauth2"
  },
  {
    "type": "get, post",
    "url": "oauth2/token",
    "title": "refresh token",
    "version": "1.0.0",
    "name": "oauth_token_refresh",
    "group": "Oauth2",
    "description": "<p>token 재발급</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "grant_type",
            "description": "<p>refresh_token  고정</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "refresh_token",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/Oauth2Controller.java",
    "groupTitle": "Oauth2"
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/OrganogramController.java",
    "groupTitle": "Organogram"
  },
  {
    "type": "get",
    "url": "v1/team/:index",
    "title": "조직도 Root 조회",
    "version": "1.0.0",
    "name": "teamIndex",
    "group": "Organogram",
    "filename": "src/main/java/com/tmup/auth/controller/v1/OrganogramController.java",
    "groupTitle": "Organogram"
  },
  {
    "type": "get",
    "url": "v1/team/:index/all",
    "title": "조직도 All 조회",
    "version": "1.0.0",
    "name": "teamIndexAll",
    "group": "Organogram",
    "filename": "src/main/java/com/tmup/auth/controller/v1/OrganogramController.java",
    "groupTitle": "Organogram"
  },
  {
    "type": "get",
    "url": "v1/team/:index/:parent",
    "title": "조직도 하위 조회",
    "version": "1.0.0",
    "name": "teamIndexParent",
    "group": "Organogram",
    "filename": "src/main/java/com/tmup/auth/controller/v1/OrganogramController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/SearchController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/SearchController.java",
    "groupTitle": "search"
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "all",
            "description": "<p>email 주소와 관계 없이 가입가능한 url , 링크만료는 30일, 가입시 email 입력</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"all\": {\n\t\t\"result\": true,\n\t\t\"data\": \"https://tmup.com/team/invite?p=1a871633247c4b3762d98...\"\n\t\t},\n\t\"test2@estsoft.com\": {\n\t\t\"result\": false,\n\t\t\"data\": \"join user\"\n\t\t},\n\t\"test\": {\n\t\t\"result\": false,\n\t\t\"data\": \"email pattern\"\n\t\t},\n\t\"test1-1@estsoft.com\": {\n\t\t\"result\": true,\n\t\t\"data\": \"https://tmup.com/team/invite?p=0dc3cae0a4282eeaff23...\"\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/TeamInviteController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/TeamInviteController.java",
    "groupTitle": "team_invite"
  },
  {
    "type": "post",
    "url": "v1/team/:index/invite/join",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/TeamInviteController.java",
    "groupTitle": "team_invite"
  },
  {
    "type": "post",
    "url": "v1/team",
    "title": "팀 만들기",
    "version": "1.0.0",
    "name": "newTeam",
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
            "optional": false,
            "field": "invite",
            "description": "<p>all, admin</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "domain",
            "description": "<p>domain, any</p> "
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
            "optional": false,
            "field": "department",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "position",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "jobTitle",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "mobile",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "birthday",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\": \"팀업개발팀\",\n\t\t\"invite\": \"all\",\n\t\t\"domain\": \"domain\",\n\t\t\"domainList\": [ \"@estsoft.com\", \"@zuminternet.com\" ],\n\t\t\"department\": true,\n\t\t\"position\": true,\n\t\t\"jobTitle\": true,\n\t\t\"phone\": true,\n\t\t\"mobile\": true,\n\t\t\"birthday\": true\n}",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/TeamController.java",
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n\t{\n\t\t\"index\": 1,\n\t\t\"name\": \"ESTsoft\",\n\t\t\"department\": null,\n\t\t\"users\": null\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/TeamController.java",
    "groupTitle": "team"
  },
  {
    "type": "put",
    "url": "v1/join/password",
    "title": "비밀번호 재설정",
    "version": "1.0.0",
    "group": "userPassword",
    "description": "<p>비밀번호 재발급</p> ",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserPasswordController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserPasswordController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserPasswordController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserJoinController.java",
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
          "content": "{\n\t\t\"name\" : \"홍길동\",\n\t\t\"password\" : \"rlfehddk)6(!!Ahd\",\n\t\t\"p\" : \"dsad3hdshsdsad\",\n\t\t\"sms\" : false,\n\t\t\"email\" : false\n}",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserJoinController.java",
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
          "content": "{\n\t\t\"name\" : \"홍길동\",\n\t\t\"password\" : \"rlfehddk)(!!Ahd\",\n\t\t\"p\" : \"dsad3hdshsdsad\",\n\t\t\"sms\" : false,\n\t\t\"email\" : false\n}",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserJoinController.java",
    "groupTitle": "user_join"
  },
  {
    "type": "get",
    "url": "v1/join/email",
    "title": "email 가입 url 발급",
    "version": "1.0.0",
    "name": "joinEmail",
    "group": "user_join",
    "description": "<p>회원 가입을 위하여 회원 가입 url 생성</p> ",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserJoinController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserTeamController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserTeamController.java",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "v1/user",
    "title": "내 정보 조회",
    "version": "1.0.0",
    "name": "getUser",
    "group": "user",
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserController.java",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "v1/user/:index",
    "title": "회원 정보 조회",
    "version": "1.0.0",
    "name": "getUserIndex",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "index",
            "description": "<p>회원</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\"index\": 99,\n\t\"email\": \"hong@estsoft.com\",\n\t\"name\": \"홍길동\",\n\t\"birthday\": \"1982-02-08\",\n\t\"is_lunar\": false,\n\t\"is_sms\": false,\n\t\"is_Email\": false,\n\t\"profile_image\": \"https://profile.tmup.com/1153/2015/09/11/11/a6023f1af416484ea0ce930549b681fd.png\",\n\t\"message\": \"홍익인간\",\n\t\"mobile\": \"010-9999-9999\",\n\t\"teams\": [\n\t\t{\n\t\t\t\"index\": 1,\n\t\t\t\"name\": \"ESTsoft\",\n\t\t\t\"status\": \"approval\",\n\t\t\t\"role\": [\n\t\t\t\t\"user\",\n\t\t\t\t\"admin\"\n\t\t\t],\n\t\t\t\"is_profile\": false,\n\t\t\t\"profile_image\": null,\n\t\t\t\"message\": \"\",\n\t\t\t\"mobile\": \"\",\n\t\t\t\"phone\": \"\",\n\t\t\t\"position\": null,\n\t\t\t\"job_title\": null,\n\t\t\t\"department\": {\n\t\t\t\t\"team_index\": 1,\n\t\t\t\t\"team_name\": \"ESTsoft\",\n\t\t\t\t\"index\": 2,\n\t\t\t\t\"name\": \"신사업개발실\",\n\t\t\t\"parent\": 1\n\t\t\t}\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserTeamController.java",
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
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t\"index\": 1,\n\t\t\"name\": \"ESTsoft\",\n\t\t\"status\": \"approval\",\n\t\t\"role\": [\n\t\t\t\"user\",\n\t\t\t\"admin\"\n\t\t],\n\t\t\"profile_image\": null,\n\t\t\"message\": \"안녕하세요#ㅎ 안녕하세요#ㅎgd\",\n\t\t\"mobile\": null,\n\t\t\"phone\": null,\n\t\t\"position\": null,\n\t\t\"job_title\": \"사원\",\n\t\t\"department\": {\n\t\t\t\"index\": 3,\n\t\t\t\"name\": \"솔루션개발팀\",\n\t\t\t\"parent\": 2,\n\t\t\t\"is_delete\": false\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserTeamController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/ProfileController.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/v1/ProfileController.java",
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
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "update",
            "defaultValue": "true",
            "description": "<p>사용자 profile에 update 여부</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/ProfileController.java",
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
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "update",
            "description": "<p>사용자 profile에 update 여부, default=true</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/ProfileController.java",
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
            "description": "<p>base64 image</p> "
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
          "content": "{\n\t\"profile_image_base64\": \"44S044WH44S044WB44WH44WH44S044WB44WH44S044WB44WH44WB44S044WH44WB44S044WH44WB44S044WH44S044WB44WH44S044WB44WH\",\n\t\"profile_image_name\": \"1.jpg\"\n\t\"birthday\": \"1999-01-01\",\n\t\"is_lunar\": false,\n\t\"message\": \"불금~\",\n\t\"mobile\": \"010-1111-1111\",\n\t\"is_sms\": false,\n\t\"is_email\": false\n}",
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
            "description": "<p>회원 index</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserController.java",
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
            "description": "<p>base64 image</p> "
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
          "content": "{\n\t\"profile_image_base64\": \"44S044WH44S044WB44WH44WH44S044WB44WH44S044WB44WH44WB44S044WH44WB44S044WH44WB44S044WH44S044WB44WH44S044WB44WH\",\n\t\"profile_image_name\": \"1.jpg\"\n\t\"message\": \"선진국형개발자\",\n\t\"mobile\": \"010-0000-0000\",\n\t\"phone\": \"02-0000-0000\"\n}",
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
            "description": "<p>팀 index</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/UserTeamController.java",
    "groupTitle": "user"
  }
] });
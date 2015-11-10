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
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/AuthController.java",
    "groupTitle": "Auth"
  },
  {
    "type": "put",
    "url": "v1/user/password",
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
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "p",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserPasswordController.java",
    "groupTitle": "userPassword",
    "name": "PutV1UserPassword"
  },
  {
    "type": "post",
    "url": "v1/user/password/url",
    "title": "비밀번호 재설정 url 발송",
    "version": "1.0.0",
    "name": "password",
    "group": "userPassword",
    "description": "<p>비밀번호 재발급 url 발송</p> ",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\": \"홍길동\",\n \"email\": \"test@estsoft.com\"\n}",
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
            "field": "result",
            "description": "<p>발송 성공 여부</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/user/UserPasswordController.java",
    "groupTitle": "userPassword"
  },
  {
    "type": "get",
    "url": "v1/user/password/url/check",
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
            "field": "isExpire",
            "description": "<p>만료 여부</p> "
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
            "description": "<p>초대회원 email</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "false",
          "type": "String"
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
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "sms",
            "defaultValue": "false",
            "description": "<p>SMS 수신 동의</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "email",
            "defaultValue": "false",
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
    "description": "<p>가입</p> ",
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
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "sms",
            "defaultValue": "false",
            "description": "<p>SMS 수신 동의</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "email",
            "defaultValue": "false",
            "description": "<p>Email 수신 동의</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\" : \"홍길동\",\n\t\t\"password\" : \"....\",\n\t\t\"p\" : \"dsad3hdshsdsad\",\n\t\t\"is_sms\" : false,\n\t\t\"is_email\" : false\n}",
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
    "title": "email 가입 url 발송",
    "version": "1.0.0",
    "name": "joinEmail",
    "group": "user_join",
    "description": "<p>회원 가입을 위하여 회원 가입 url 발송</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
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
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "return",
            "description": "<p>true/false</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
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
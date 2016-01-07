define({ "api": [
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
    "filename": "src/main/java/com/tmup/auth/controller/oauth2/Oauth2Controller.java",
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
    "filename": "src/main/java/com/tmup/auth/controller/oauth2/Oauth2Controller.java",
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
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "expires_in",
            "description": "<p>access_token 만료 시간</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token_type",
            "description": "<p>bearer 고정</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>180일 사용 가능</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/oauth2/Oauth2Controller.java",
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
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "expires_in",
            "description": "<p>access_token 만료 시간</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token_type",
            "description": "<p>bearer 고정</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>180일 사용 가능</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/oauth2/Oauth2Controller.java",
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "expires_in",
            "description": "<p>access_token 만료 시간</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token_type",
            "description": "<p>bearer 고정</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>180일 사용 가능</p> "
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/oauth2/Oauth2Controller.java",
    "groupTitle": "Oauth2"
  }
] });
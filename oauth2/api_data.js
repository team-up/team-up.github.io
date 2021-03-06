define({ "api": [
  {
    "type": "*",
    "url": "/oauth2/*",
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
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Status",
            "optional": false,
            "field": "404",
            "description": "<p>Not Found (URL, method 오류)</p>"
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
    "filename": "src/main/java/com/tmup/auth/api/oauth2/Oauth2api.java",
    "groupTitle": "base"
  },
  {
    "type": "get",
    "url": "/oauth2/authorize",
    "title": "Authorization Code #1",
    "version": "1.0.0",
    "name": "getOauth2AuthorizeCode1",
    "group": "oauth2",
    "description": "<p>code 발급</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "code"
            ],
            "optional": false,
            "field": "response_type",
            "description": "<p>Grant Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "redirect_uri",
            "description": "<p>callback uri</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>권한 scope (, 로 구분)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>csrf 방지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET /oauth2/authorize?response_type=code&client_id=:client_id&redirect_uri=:redirect_uri",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/oauth2/Oauth2api.java",
    "groupTitle": "oauth2"
  },
  {
    "type": "get",
    "url": "/oauth2/authorize",
    "title": "Implicit Grant",
    "version": "1.0.0",
    "name": "getOauth2AuthorizeImplicit",
    "group": "oauth2",
    "description": "<p>code 발급</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "token"
            ],
            "optional": false,
            "field": "response_type",
            "description": "<p>Grant Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "redirect_uri",
            "description": "<p>callback uri</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>권한 scope (, 로 구분)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>csrf 방지</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "GET /oauth2/authorize?response_type=token&client_id=:client_id&redirect_uri=:redirect_uri",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/oauth2/Oauth2api.java",
    "groupTitle": "oauth2"
  },
  {
    "type": "post",
    "url": "/oauth2/token",
    "title": "Password Credentials",
    "version": "3.7.1",
    "name": "getOauth2TokenPassword",
    "group": "oauth2",
    "description": "<p>휴면 계정인 경우 200 error 출력</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "password"
            ],
            "optional": false,
            "field": "grant_type",
            "description": "<p>Grant Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>Client Secret</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>권한 scope (, 로 구분)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "POST /oauth2/token\nContent-Type: application/x-www-form-urlencoded; charset=utf-8\n\ngrant_type=password&client_id=:client_id&client_secret=:client_secret&username=:username&password=:password",
          "type": "x-www-form-urlencoded"
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
            "field": "access_token",
            "description": "<p>Access Token</p>"
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
            "field": "token_type",
            "description": "<p>Token Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Refresh Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"access_token\": \":access_token\",\n\"expires_in\": 86399,\n\"token_type\": \"bearer\",\n\"refresh_token\": \":refresh_token\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 200 LoginException": [
          {
            "group": "Error 200 LoginException",
            "type": "String",
            "allowedValues": [
              "LoginException"
            ],
            "optional": false,
            "field": "exception",
            "description": "<p>예외 정보</p>"
          },
          {
            "group": "Error 200 LoginException",
            "type": "String",
            "allowedValues": [
              "id_pw_not_match",
              "inactive_account"
            ],
            "optional": false,
            "field": "error",
            "description": "<p>에러 정보</p>"
          },
          {
            "group": "Error 200 LoginException",
            "type": "Object",
            "optional": true,
            "field": "error_description",
            "description": "<p>에러 내용</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/api/oauth2/Oauth2api.java",
    "groupTitle": "oauth2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded; charset=utf-8</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post, get",
    "url": "/oauth2/token",
    "title": "Authorization Code #2",
    "version": "1.0.0",
    "name": "postOauth2TokenCode2",
    "group": "oauth2",
    "description": "<p>발급 받은 code 로 token 발급</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "authorization_code"
            ],
            "optional": false,
            "field": "grant_type",
            "description": "<p>Grant Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>Client Secret</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>발급 받은 code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "POST /oauth2/token\nContent-Type: application/x-www-form-urlencoded; charset=utf-8\n\ngrant_type=authorization_code&client_id=:client_id&client_secret=:client_secret&code=:code",
          "type": "x-www-form-urlencoded"
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
            "field": "access_token",
            "description": "<p>Access Token</p>"
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
            "field": "token_type",
            "description": "<p>Token Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Refresh Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"access_token\": \":access_token\",\n\"expires_in\": 86399,\n\"token_type\": \"bearer\",\n\"refresh_token\": \":refresh_token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/oauth2/Oauth2api.java",
    "groupTitle": "oauth2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded; charset=utf-8</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/oauth2/token",
    "title": "Refresh Token",
    "version": "1.0.0",
    "name": "postOauth2TokenRefresh",
    "group": "oauth2",
    "description": "<p>token 재발급</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "refresh_token"
            ],
            "optional": false,
            "field": "grant_type",
            "description": "<p>Grant Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Refresh Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "POST /oauth2/token\nContent-Type: application/x-www-form-urlencoded; charset=utf-8\n\ngrant_type=refresh_token&refresh_token=:refresh_token",
          "type": "x-www-form-urlencoded"
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
            "field": "access_token",
            "description": "<p>Access Token</p>"
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
            "field": "token_type",
            "description": "<p>Token Type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Refresh Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"access_token\": \":access_token\",\n\"expires_in\": 86399,\n\"token_type\": \"bearer\",\n\"refresh_token\": \":refresh_token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/api/oauth2/Oauth2api.java",
    "groupTitle": "oauth2",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded; charset=utf-8</p>"
          }
        ]
      }
    }
  }
] });

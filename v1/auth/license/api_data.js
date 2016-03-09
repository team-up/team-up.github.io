define({ "api": [
  {
    "type": "get",
    "url": "v1/license/team/:index",
    "title": "팀별 라이선스",
    "version": "2.1.0",
    "name": "getLicenseTeam",
    "group": "License",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Team",
            "description": "<p>index</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"team_index\": 1,\n\"team_name\": \"ESTsoft\",\n\"user_count\": 500,\n\"disk_size\": 100,\n\"update_date\": \"2016-03-02 18:17:35\",\n\"license\": {\n    \"user_count\": 5000,\n    \"disk_size\": -1,\n    \"upload_limit\": 100,\n    \"license_type\": \"premium\",\n    \"start_date\": \"2016-02-17\",\n    \"end_date\": \"2116-02-17\"\n    }\n}",
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
            "field": "team_index",
            "description": "<p>팀번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "team_name",
            "description": "<p>팀이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_count",
            "description": "<p>회원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "disk_size",
            "description": "<p>사용 disk (MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "update_date",
            "description": "<p>업데이트 시간</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "license",
            "description": "<p>라이선스</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "license.user_count",
            "description": "<p>사용가능한 회원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "license.disk_size",
            "description": "<p>사용가능한 disk ( -1=무제한, MB )</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "license.upload_limit",
            "description": "<p>업로드 제한 (MB)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "license.license_type",
            "description": "<p>standard, premium</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "license.start_date",
            "description": "<p>시작</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "license.end_date",
            "description": "<p>종료</p>"
          }
        ]
      }
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/license/BuyController.java",
    "groupTitle": "License"
  },
  {
    "type": "get",
    "url": "v1/license/teams",
    "title": "팀 라이선스 조회",
    "version": "2.1.0",
    "name": "getLicenseTeams",
    "group": "License",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[\n    {\n    \"team_index\": 1,\n    \"team_name\": \"ESTsoft\",\n    \"user_count\": 1000,\n    \"disk_size\": 200,\n    \"update_date\": \"2016-03-02 18:17:35\",\n    \"license\": {\n        \"user_count\": 50,\n        \"disk_size\": 100,\n        \"upload_limit\": 100,\n        \"license_type\": \"standard\",\n        \"start_date\": \"2016-02-17\",\n        \"end_date\": \"2116-02-17\"\n        }\n    },\n    {\n    \"team_index\": 7459,\n    \"team_name\": \"TeamUP\",\n    \"user_count\": 100,\n    \"disk_size\": 100,\n    \"update_date\": \"2016-03-04 16:13:17\",\n        \"license\": {\n        \"user_count\": 500,\n        \"disk_size\": -1,\n        \"upload_limit\": 2048,\n        \"license_type\": \"premium\",\n        \"start_date\": \"2015-11-11\",\n        \"end_date\": \"2115-11-11\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/tmup/auth/controller/v1/license/BuyController.java",
    "groupTitle": "License"
  }
] });
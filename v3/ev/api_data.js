define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "기본 설정 정보",
    "version": "3.0.0",
    "name": "get",
    "group": "base",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>서버 버전</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lp_idle_time",
            "description": "<p>long-polling 요청 대기 시간 (이전 요청에 이벤트 없었을 경우 sleep) [단위: 초]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lp_wait_timeout",
            "description": "<p>long-polling 응답 대기 시간 (receive timeout 5초 정도 더 길게 설정) [단위: 초]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"version\":\"3.7.0\",\n\"lp_idle_time\":1,\n\"lp_wait_timeout\":30\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler.go",
    "groupTitle": "base"
  },
  {
    "type": "*",
    "url": "/*",
    "title": "HTTP Status Code",
    "version": "3.0.0",
    "name": "statusCode",
    "group": "base",
    "filename": "./_apidoc.js",
    "groupTitle": "base",
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
    "url": "/v3/events",
    "title": "이벤트 대기",
    "version": "3.8.1",
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
    },
    "name": "getEvents",
    "group": "event",
    "description": "<ul> <li> <p>이벤트 종류 prefix (chat.:채팅, feed.:피드, feedgroup.:피드 그룹, inform.:알림, user.:유저, etc.:기타)</p> </li> <li> <p>이벤트 종류 prefix 로 정보 데이터 반환 (ex: {&quot;type&quot;:&quot;chat.message&quot;,&quot;chat&quot;:{Object}})</p> </li> <li> <p>채팅 type: chat.(message:메시지, read:읽음, detach:퇴장, join:초대, room:대화방 설정 변경, initbot:봇 초기화 메세지)</p> </li> <li> <p>피드 type: feed.(feed:새글, reply:댓글, like:좋아요, likereply:댓글 좋아요, tagfeed:태그 글, tagreply:태그 댓글, removefeed:글 삭제, removereply:댓글 삭제, removelike:좋아요 삭제, removelikereply:댓글 좋아요 삭제, changefeed:글 수정, changereply:댓글 수정, watch:지켜보기)</p> </li> <li> <p>피드 그룹 type: feedgroup. (join:생성/초대/새 멤버, detach:탈퇴, admin:관리자 변경, config:설정)</p> </li> <li> <p>알림 type: inform. (removefeed:피드 알림 삭제, readfeed:피드 읽음 상태 변경)</p> </li> <li> <p>유저 type: user. (password:패스워드, approval:팀 가입, exit:팀 탈퇴, block:팀 중지, drop: 계정 삭제)</p> </li> <li> <p>기타 type: etc. (transfer:p2p 전송)</p> </li> </ul>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ip",
            "description": "<p>내부 ip (pc 버전 p2p 가능 시 set)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "prefix",
            "description": "<p>prefix 필터 (|로 구분, user. 는 무조건 포함)</p>"
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
            "field": "events",
            "description": "<p>이벤트 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.type",
            "description": "<p>이벤트 종류</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.chat",
            "description": "<p>채팅 이벤트 정보 (type: chat.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.chat.room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.user",
            "description": "<p>유저 번호 (type: chat.message,detach,initbot)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.chat.msg",
            "description": "<p>메시지 번호 (type: chat.message)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.alert",
            "description": "<p>알림 (0:사용안함, 1:사용, type: chat.room)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "events.chat.name",
            "description": "<p>방 이름 (type: chat.room)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.roomtype",
            "description": "<p>방 종류 (1:개인, 2:단체, type: chat.initbot)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.feed",
            "description": "<p>피드 이벤트 정보 (type: feed.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.feed",
            "description": "<p>피드 번호 (0:그룹 전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.user",
            "description": "<p>유저 번호 (type: feed.feed,reply,like,tagfeed,tagreply,removelike,likereply,removelikereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.watch",
            "description": "<p>지켜보기 (0:안함, 1:사용, type: feed.feed,tagfeed,reply,tagreply,watch)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.push",
            "description": "<p>강제 알림 (0:안함, 1:사용, type: feed.feed,tagfeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.reply",
            "description": "<p>댓글 번호 (type: feed.reply,tagreply,removereply,changereply,likereply,removelikereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.parent",
            "description": "<p>상위 댓글 번호 (type: feed.reply,tagreply,removereply,changereply,likereply,removelikereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.inform",
            "description": "<p>알림탭 갱신 여부 (0:미참여, 1:최근 참여, 2:이전 참여, type: feed.reply,tagreply,like,likereply,removelikereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.feedgroup",
            "description": "<p>피드 그룹 이벤트 정보 (type: feedgroup.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feedgroup.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feedgroup.feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.inform",
            "description": "<p>알림 이벤트 정보 (type: inform.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.inform.feedgroup",
            "description": "<p>피드 그룹 번호 (0:알림 전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.inform.feed",
            "description": "<p>피드 번호 (0:그룹 전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.inform.noti",
            "description": "<p>알림 번호 (0:전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.inform.read",
            "description": "<p>읽음 상태 (0:전체, 1:읽은 알림만, type: inform.removefeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.inform.watch",
            "description": "<p>지켜보기 (0:일반, 1:지켜보기, type: inform.removefeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.user",
            "description": "<p>유저 이벤트 정보 (type: user.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.user.user",
            "description": "<p>유저 번호 (type: user.password,drop)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.user.team",
            "description": "<p>팀 번호 (type: user.approval,exit,block)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "events.user.users",
            "description": "<p>유저 번호 리스트 (type: user.approval,exit,block)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.etc",
            "description": "<p>기타 이벤트 정보 (type: etc.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "events.etc.relaykey",
            "description": "<p>p2p 릴레이 키 (type: etc.transfer)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"events\":[\n{\"type\":\"chat.message\",\"chat\":{\"team\":1,\"room\":1,\"msg\":9576}},\n{\"type\":\"chat.read\",\"chat\":{\"team\":1,\"room\":1}},\n{\"type\":\"chat.detach\",\"chat\":{\"team\":1,\"room\":1,\"user\":1}},\n{\"type\":\"chat.join\",\"chat\":{\"team\":1,\"room\":1}},\n{\"type\":\"chat.initbot\",\"chat\":{\"team\":1,\"room\":1,\"user\":1,\"roomtype\":1}},\n{\"type\":\"feed.feed\",\"feed\":{\"team\":1,\"feed\":123,\"feedgroup\":1}},\n{\"type\":\"feed.reply\",\"feed\":{\"team\":1,\"reply\":34,\"parent\":34,\"feed\":124,\"feedgroup\":1}},\n{\"type\":\"feed.removefeed\",\"feed\":{\"team\":1,\"feed\":123,\"feedgroup\":1}},\n{\"type\":\"feedgroup.join\",\"feedgroup\":{\"team\":1,\"feedgroup\":1}},\n{\"type\":\"inform.removefeed\",\"inform\":{\"noti\":0,\"read\":1,\"watch\":1}}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler.go",
    "groupTitle": "event"
  },
  {
    "type": "get",
    "url": "/v3/events",
    "title": "이벤트 대기",
    "version": "3.7.0",
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
    },
    "name": "getEvents",
    "group": "event",
    "description": "<ul> <li> <p>이벤트 종류 prefix (chat.:채팅, feed.:피드, feedgroup.:피드 그룹, inform.:알림, user.:유저, etc.:기타)</p> </li> <li> <p>이벤트 종류 prefix 로 정보 데이터 반환 (ex: {&quot;type&quot;:&quot;chat.message&quot;,&quot;chat&quot;:{Object}})</p> </li> <li> <p>채팅 type: chat.(message:메시지, read:읽음, detach:퇴장, join:초대, room:대화방 설정 변경)</p> </li> <li> <p>피드 type: feed.(feed:새글, reply:댓글, like:좋아요, likereply:댓글 좋아요, tagfeed:태그 글, tagreply:태그 댓글, removefeed:글 삭제, removereply:댓글 삭제, removelike:좋아요 삭제, removelikereply:댓글 좋아요 삭제, changefeed:글 수정, changereply:댓글 수정, watch:지켜보기)</p> </li> <li> <p>피드 그룹 type: feedgroup. (join:생성/초대/새 멤버, detach:탈퇴, admin:관리자 변경, config:설정)</p> </li> <li> <p>알림 type: inform. (removefeed:피드 알림 삭제, readfeed:피드 읽음 상태 변경)</p> </li> <li> <p>유저 type: user. (password:패스워드, approval:팀 가입, exit:팀 탈퇴, block:팀 중지, drop: 계정 삭제)</p> </li> <li> <p>기타 type: etc. (transfer:p2p 전송)</p> </li> </ul>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ip",
            "description": "<p>내부 ip (pc 버전 p2p 가능 시 set)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "prefix",
            "description": "<p>prefix 필터 (|로 구분, user. 는 무조건 포함)</p>"
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
            "field": "events",
            "description": "<p>이벤트 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.type",
            "description": "<p>이벤트 종류</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.chat",
            "description": "<p>채팅 이벤트 정보 (type: chat.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.chat.room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.user",
            "description": "<p>유저 번호 (type: chat.message,detach)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.chat.msg",
            "description": "<p>메시지 번호 (type: chat.message)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.alert",
            "description": "<p>알림 (0:사용안함, 1:사용, type: chat.room)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "events.chat.name",
            "description": "<p>방 이름 (type: chat.room)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.feed",
            "description": "<p>피드 이벤트 정보 (type: feed.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.feed",
            "description": "<p>피드 번호 (0:그룹 전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.user",
            "description": "<p>유저 번호 (type: feed.feed,reply,like,tagfeed,tagreply,removelike,likereply,removelikereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.watch",
            "description": "<p>지켜보기 (0:안함, 1:사용, type: feed.feed,tagfeed,reply,tagreply,watch)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.push",
            "description": "<p>강제 알림 (0:안함, 1:사용, type: feed.feed,tagfeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.reply",
            "description": "<p>댓글 번호 (type: feed.reply,tagreply,removereply,changereply,likereply,removelikereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.parent",
            "description": "<p>상위 댓글 번호 (type: feed.reply,tagreply,removereply,changereply,likereply,removelikereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.inform",
            "description": "<p>알림탭 갱신 여부 (0:미참여, 1:최근 참여, 2:이전 참여, type: feed.reply,tagreply,like,likereply,removelikereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.feedgroup",
            "description": "<p>피드 그룹 이벤트 정보 (type: feedgroup.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feedgroup.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feedgroup.feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.inform",
            "description": "<p>알림 이벤트 정보 (type: inform.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.inform.feedgroup",
            "description": "<p>피드 그룹 번호 (0:알림 전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.inform.feed",
            "description": "<p>피드 번호 (0:그룹 전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.inform.noti",
            "description": "<p>알림 번호 (0:전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.inform.read",
            "description": "<p>읽음 상태 (0:전체, 1:읽은 알림만, type: inform.removefeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.inform.watch",
            "description": "<p>지켜보기 (0:일반, 1:지켜보기, type: inform.removefeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.user",
            "description": "<p>유저 이벤트 정보 (type: user.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.user.user",
            "description": "<p>유저 번호 (type: user.password,drop)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.user.team",
            "description": "<p>팀 번호 (type: user.approval,exit,block)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "events.user.users",
            "description": "<p>유저 번호 리스트 (type: user.approval,exit,block)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.etc",
            "description": "<p>기타 이벤트 정보 (type: etc.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "events.etc.relaykey",
            "description": "<p>p2p 릴레이 키 (type: etc.transfer)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"events\":[\n{\"type\":\"chat.message\",\"chat\":{\"team\":1,\"room\":1,\"msg\":9576}},\n{\"type\":\"chat.read\",\"chat\":{\"team\":1,\"room\":1}},\n{\"type\":\"chat.detach\",\"chat\":{\"team\":1,\"room\":1,\"user\":1}},\n{\"type\":\"chat.join\",\"chat\":{\"team\":1,\"room\":1}},\n{\"type\":\"feed.feed\",\"feed\":{\"team\":1,\"feed\":123,\"feedgroup\":1}},\n{\"type\":\"feed.reply\",\"feed\":{\"team\":1,\"reply\":34,\"parent\":34,\"feed\":124,\"feedgroup\":1}},\n{\"type\":\"feed.removefeed\",\"feed\":{\"team\":1,\"feed\":123,\"feedgroup\":1}},\n{\"type\":\"feedgroup.join\",\"feedgroup\":{\"team\":1,\"feedgroup\":1}},\n{\"type\":\"inform.removefeed\",\"inform\":{\"noti\":0,\"read\":1,\"watch\":1}}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler.go",
    "groupTitle": "event"
  },
  {
    "type": "get",
    "url": "/v3/events",
    "title": "이벤트 대기",
    "version": "3.0.0",
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
    },
    "name": "getEvents",
    "group": "event",
    "description": "<ul> <li> <p>이벤트 종류 prefix (chat.:채팅, feed.:피드, feedgroup.:피드 그룹, inform.:알림, user.:유저, etc.:기타)</p> </li> <li> <p>이벤트 종류 prefix 로 정보 데이터 반환 (ex: {&quot;type&quot;:&quot;chat.message&quot;,&quot;chat&quot;:{Object}})</p> </li> <li> <p>채팅 type: chat.(message:메시지, read:읽음, detach:퇴장, join:초대, room:대화방 설정 변경)</p> </li> <li> <p>피드 type: feed.(feed:새글, reply:댓글, like:좋아요, tagfeed:태그 글, tagreply:태그 댓글, removefeed:글 삭제, removereply:댓글 삭제, removelike:좋아요 삭제, changefeed:글 수정, changereply:댓글 수정, watch:지켜보기)</p> </li> <li> <p>피드 그룹 type: feedgroup. (join:생성/초대/새 멤버, detach:탈퇴, admin:관리자 변경, config:설정)</p> </li> <li> <p>알림 type: inform. (removefeed:피드 알림 삭제, readfeed:피드 읽음 상태 변경)</p> </li> <li> <p>유저 type: user. (password:패스워드, approval:팀 가입, exit:팀 탈퇴, block:팀 중지, drop: 계정 삭제)</p> </li> <li> <p>기타 type: etc. (transfer:p2p 전송)</p> </li> </ul>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ip",
            "description": "<p>내부 ip (pc 버전 p2p 가능 시 set)</p>"
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
            "field": "events",
            "description": "<p>이벤트 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.type",
            "description": "<p>이벤트 종류</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.chat",
            "description": "<p>채팅 이벤트 정보 (type: chat.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.chat.room",
            "description": "<p>방 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.user",
            "description": "<p>유저 번호 (type: chat.message,detach)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.chat.msg",
            "description": "<p>메시지 번호 (type: chat.message)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.chat.alert",
            "description": "<p>알림 (0:사용안함, 1:사용, type: chat.room)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "events.chat.name",
            "description": "<p>방 이름 (type: chat.room)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.feed",
            "description": "<p>피드 이벤트 정보 (type: feed.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.feed",
            "description": "<p>피드 번호 (0:그룹 전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.user",
            "description": "<p>유저 번호 (type: feed.feed,reply,like,tagfeed,tagreply,removelike)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.watch",
            "description": "<p>지켜보기 (0:안함, 1:사용, type: feed.feed,tagfeed,reply,tagreply,watch)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.push",
            "description": "<p>강제 알림 (0:안함, 1:사용, type: feed.feed,tagfeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feed.reply",
            "description": "<p>댓글 번호 (type: feed.reply,tagreply,removereply,changereply)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feed.inform",
            "description": "<p>알림탭 갱신 여부 (0:미참여, 1:최근 참여, 2:이전 참여, type: feed.reply,tagreply,like)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.feedgroup",
            "description": "<p>피드 그룹 이벤트 정보 (type: feedgroup.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.feedgroup.team",
            "description": "<p>팀 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.feedgroup.feedgroup",
            "description": "<p>피드 그룹 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.inform",
            "description": "<p>알림 이벤트 정보 (type: inform.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.inform.feedgroup",
            "description": "<p>피드 그룹 번호 (0:알림 전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.inform.feed",
            "description": "<p>피드 번호 (0:그룹 전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "LongNumber",
            "optional": true,
            "field": "events.inform.noti",
            "description": "<p>알림 번호 (0:전체)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.inform.read",
            "description": "<p>읽음 상태 (0:전체, 1:읽은 알림만, type: inform.removefeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.inform.watch",
            "description": "<p>지켜보기 (0:일반, 1:지켜보기, type: inform.removefeed)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.user",
            "description": "<p>유저 이벤트 정보 (type: user.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.user.user",
            "description": "<p>유저 번호 (type: user.password,drop)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "events.user.team",
            "description": "<p>팀 번호 (type: user.approval,exit,block)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "events.user.users",
            "description": "<p>유저 번호 리스트 (type: user.approval,exit,block)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "events.etc",
            "description": "<p>기타 이벤트 정보 (type: etc.*)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "events.etc.relaykey",
            "description": "<p>p2p 릴레이 키 (type: etc.transfer)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n\"events\":[\n{\"type\":\"chat.message\",\"chat\":{\"team\":1,\"room\":1,\"msg\":9576}},\n{\"type\":\"chat.read\",\"chat\":{\"team\":1,\"room\":1}},\n{\"type\":\"chat.detach\",\"chat\":{\"team\":1,\"room\":1,\"user\":1}},\n{\"type\":\"chat.join\",\"chat\":{\"team\":1,\"room\":1}},\n{\"type\":\"feed.feed\",\"feed\":{\"team\":1,\"feed\":123,\"feedgroup\":1}},\n{\"type\":\"feed.reply\",\"feed\":{\"team\":1,\"reply\":34,\"feed\":124,\"feedgroup\":1}},\n{\"type\":\"feed.removefeed\",\"feed\":{\"team\":1,\"feed\":123,\"feedgroup\":1}},\n{\"type\":\"feedgroup.join\",\"feedgroup\":{\"team\":1,\"feedgroup\":1}},\n{\"type\":\"inform.removefeed\",\"inform\":{\"noti\":0,\"read\":1,\"watch\":1}}\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./handler.go",
    "groupTitle": "event"
  }  
] });

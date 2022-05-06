# Back End

### Member

-   노누리
-   소범기
-   이상원

## MVP(Minimum Viable Product)

총 4가지의 MVP가 구현되어 있습니다. User, BoardGame, Favorite, Community로 구성되어 있습니다.

### User

사용자 동작에 대한 MVP입니다. 기본 동작으로는 사용자 회원가입, 로그인, 비밀번호 찾기, 사용자 정보 수정을 지원합니다.  
추가적으로 구글 로그인이 있으며, 인증 방식에 refresh token을 도입하였습니다.

### BoardGame

보드게임에 대한 MVP입니다. 보드게임 데이터는 추가와 삭제는 불가능하며, 조회만 가능합니다.  
보드게임 상세정보 조회, 원하는 조건에 따른 보드게임 조회 동작을 지원합니다.

### Favorite

보드게임 좋아요(하트)에 대한 MVP입니다. 사용자와 보드게임 데이터를 사용하며, 하트를 누르게 되면 사용자의 보드게임 찜 목록에 추가됩니다.

### Community

사용자들이 게시글과 댓글을 작성할 수 있는 MVP입니다. 사용자는 Community에서 게시글을 적고 함께 게임할 사람을 찾거나 게임에 대해 의견을 서로 공유할 수 있습니다.

## 폴더 구조

```shell
.
└── back
    └── src
        ├── controllers
        ├── db
        ├── middlewares
        ├── routes
        ├── services
        └── utils

```

### contollers

controllers에서는 request를 받아 client에 원하는 정보를 response 해주는 역할을 합니다.  
각 controller는 class로 작성되어 있으며, class의 각 함수들은 static 함수로 작성되어 있습니다.

### db

db에서는 MongoDB Atlas를 연결하고 스키마들을 정의합니다.

### middlewares

middlewares에서는 사용자의 로그인이 유효한지 확인하는 authJWT와 에러 발생 시 에러 메세지를 보여주는 errorMessage가 있습니다.

### routes

routes에서는 각 요청이 어떤 함수로 연결되어 있는지 확인할 수 있습니다.

### services

services에서는 database에 CRUD를 요청합니다. client의 요청 조건에 맞는 데이터를 조회, 전처리 하여 응답해 줍니다.

### utils

utils에 jwt-utils에서는 jsonwebtoken으로 access token과 refresh token을 발급, 검증을 진행합니다. refresh에서는 refresh token을 이용해서 사용자의 access token 재발급을 진행합니다.

## 적용된 기술 및 기능

-   페이지에서 사용자 인증에 refresh token 도입
-   reset token을 사용한 비밀번호 찾기
-   google OAuth2.0을 사용한 소셜 로그인
-   routes, controller, service 3계층 구조
-   offset 방식의 pagination

# Front End

### Member

-   김애림
-   송가람
-   안민영

## MVP(Minimum Viable Product)

## 폴더 구조

```shell
.
└── front
    ├── public
    │   └── image
    └── src
        ├── components
        │   ├── boardgame
        │   ├── boardgamedetail
        │   ├── home
        │   ├── intro
        │   ├── mypage
        │   └── user
        └── store
            ├── actions
            └── reducers
```

### components

총 6개의 폴더가 존재합니다.

**boardgame**:  
보드게임 조회 시 받아온 보드게임 데이터들을 카드 형식으로 보여줍니다. 백엔드에서 보여줄 페이지의 값을 받아 pagination을 적용시켜 줍니다.  
사용자는 보드게임 조회 시 원하는 카테고리와 정렬 방식을 선택할 수 있습니다.

**boardgamedetail**:
사용자가 보드게임 리스트에서 하나를 선택했을 때 보드게임의 상세 페이지를 보여줍니다. 상세 페이지에는 백엔드에서 보드게임 정보를 받아와 보여주고 유사한 보드게임을 함께 보여줍니다.

**home**:
사용자가 로그인을 하게되면 만나는 첫 페이지 입니다. BOARDMON 서비스의 메인 페이지이며 매년 출시된 보드게임의 추세를 확인할 수 있습니다.  
페이지 하단에는 BOARDMON 서비스를 개발한 사람들을 보여줍니다.

**intro**
사용자가 BOARDMON 서비스에 도착하게 되면 만나게 되는 페이지 입니다.  
"Get Started"를 클릭하게되면 사용자는 회원가입, 로그인(구글 로그인), 비밀번호 찾기 동작을 할 수 있습니다.

**mypage**
사용자가 BOARDMON 서비스에 가입되어 있는 본인의 정보를 확인할 수 있는 페이지입니다.  
mypage에서는 사용자 정보를 수정할 수 있습니다. 사용자의 개인정보와 사용자가 찜해놓은 보드게임을 한 눈에 확인할 수 있습니다.

### store

dispatch -> action으로 전역 선택을 만들어줌

## 적용된 기술 및 기능

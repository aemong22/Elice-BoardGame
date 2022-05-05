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
사용자가 보드게임 리스트에서 하나를 선택했을 때 보드게임의 상세 페이지를 보여줍니다. 상세 페이지에는 백엔드에서

### store

dispatch -> action으로 전역 선택을 만들어줌

## 적용된 기술 및 기능

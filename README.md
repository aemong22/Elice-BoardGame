# BOARDMON

-   보드게임 추천 웹 서비스

## 프로젝트 구성 안내

## 1. 프로젝트 소개

### 사용 데이터

#### [BoardGameGeek Reviews](https://www.kaggle.com/datasets/jvanelteren/boardgamegeek-reviews)

-   보드게임 리뷰 데이터
-   보드게임 설명, 사용자 리뷰, 랭킹 등의 데이터

#### [Board Games Dataset](https://www.kaggle.com/datasets/bananalee67/board-games-dataset)

-   인원 수, 연령, 리뷰 수 등의 데이터

#### [Fantastic Board Games: TU Wien DOPP 3 Submission](https://www.kaggle.com/code/bananalee67/fantastic-board-games-tu-wien-dopp-3-submission)

-   추천 시스템 참고 코드

### 기술 스택

-   python
-   jupyter
-   colab
-   javascript
-   react
-   mongoDB

#### [Board Games Dataset](https://www.kaggle.com/datasets/bananalee67/board-games-dataset)

-   인원 수, 연령, 리뷰 수 등의 데이터

#### [Fantastic Board Games: TU Wien DOPP 3 Submission](https://www.kaggle.com/code/bananalee67/fantastic-board-games-tu-wien-dopp-3-submission)

## 데이터 전처리

-   Data에서 필요한 feature을 추출 진행
    -   데이터 셋 축소를 위해 2022년 1월 19일 기준으로 rank 500위 안에 드는 data set을 선별했다.
    -   축소된 데이터 셋의 보드게임 추천시스템 구축 과 시각화 및 워드 클라우드에 필요한 feature를 선별하여 병합하는 데이터 전처리 과정을 진행했다.(player 수, 게임 time, 랭킹, image URL, 게임 설명, 게임 난이도, 게임 나이 제한, 게임 카테고리, 게임 제작년도 등등)
-   추천 시스템 구축
    -   Item-based CF을 이용하기 위해 2022년 1월 8일의 랭킹의 500위안에든 게임중 2019년 5월까지 1600만개의 유저가 보드게임에 대한 평가정보를 filtering과정을 진행했다.
    -   이를 유저 - 게임 에대한 평가의 matrix를 구성하여 cosine similarity를 통해 유사한 게임 5개를 추출하여 새로운 feature로 recommandation list를 만들어 추가하였다.

### 사용한 언어 및 프레임워크

-   Python
-   Javascript
-   ReactJS
-   MongoDB
-   Express

### 사용한 라이브러리 및 도구

**recommend system**

-   sickit-learn
-   pandas

**wordcloud**

-   wordCloud
-   nltk
-   googletrans
-   pandas
-   colab

**Front**

-   mui
-   react-chartjs-2
-   redux
-   aws-sdk

**Back**

-   nodemailer
-   redis

### 웹 서비스 개요

## 2. 프로젝트 목표

코로나19 확산으로 일상에 변했습니다. 밖에 나가지 못하고 집에서 대부분의 시간을 보내는 '집콕'이 장기화 되면서, 이제는 집에서 재미있게 시간을 보낼 수 있는 방법을 찾게 되었습니다. 주로 실내에서 즐길 수 있는 보드게임을 직접 사거나, 모바일 앱으로 플레이하는 경우가 늘어났는데, 우리는 그 중에서도 보드게임을 추천하고, 소개하는 서비스를 제공하고자 합니다.

`BOARDMON`은 사람들과 함께 집에서 시간을 보낼 수 있는 하나의 방향성을 제시하여, 즐거움을 선사합니다. 보드게임에 대해 잘 모르는 입문자도 쉽게 접근할 수 있습니다. 또한 보드게임을 이미 많이 해보신 분들에게는 카테고리에 맞는 보드게임을 추천함으로써 다양한 보드게임을 접하게 해주며, 보드게임 선택에 편리함을 제공합니다.

[중앙일보 기사: 집콕하는 나를 위한 선물... 보드게임 판매량 716% 급증했다](https://www.joongang.co.kr/article/23890658#home)

## 3. 프로젝트 기능 설명

### 카테고리에 따른 보드게임 조회

약 500여개의 보드게임의 정보를 모두 확인하고 선택하기는 쉬운일이 아닙니다. `BOARDMON`은 인원 수, 연령, 게임 플레이 시간, 테마, 난이도에 따른 보드게임을 조회할 수 있습니다. 또한 랭킹, 평점, 리뷰 순으로 정렬하여 인기있는 보드게임을 확인할 수 있습니다.

### 사용자들과 소통할 수 있는 community

`BOARDMON`은 보드게임 입문자부터 실력자까지 모든 사람들이 유용하게 사용할 수 있는 서비스입니다. `BOARDMON`에서는 함께 게임을 할 사람을 찾거나 보드게임에 대한 의견을 나눌 수 있는 community가 있습니다. Community에서 보드게임에 대한 더 많은 정보를 얻을지도 모릅니다.

### 내가 찜한 보드게임

`BOARDMON`은 사용자가 보드게임을 찾다가 마음에 들거나 나중에 할 보드게임에 하트를 눌러 찜 목록에 추가할 수 있습니다. 하트를 누른 보드게임은 사용자의 mypage에서 모아볼 수 있습니다.

### 상세 페이지 추천

`BOARDMON`은 사용자가 선택한 보드게임의 상세 정보와 유사한 보드게임들을 제공합니다. 상세정보에는 보드게임의 설명, 인원 수, 게임 플레이 시간, 테마, 난이도를 확인할 수 있습니다. 더보기(+) 버튼을 누르면 보드게임의 설명을 기반으로 한 워드 클라우드도 확인할 수 있습니다. 또한 상세 페이지 아래에 유사한 보드게임을 보여줍니다. 유사한 보드게임은 review 데이터 댓글들의 cosine 유사도를 파악해 얻은 데이터입니다. 조회한 보드게임과 유사한 게임들을 만날 수 있습니다.

## 4. 프로젝트 구성도

### Intro

![user](https://user-images.githubusercontent.com/55802893/167119226-d1059ef0-fd9d-474e-831f-e63c2c0bd3be.png)

-   intro 페이지에서 Get stated를 누르게되면 일반 로그인, 구글 로그인, 회원가입, 비밀번호 찾기 동작을 할 수 있습니다.

### Home

![home](https://user-images.githubusercontent.com/55802893/167116794-c40f3576-118d-4313-a69e-e0a401e969fc.png)

-   사용자가 로그인한 후 만나게 되는 페이지 입니다.
-   매년 출시된 보드게임의 수를 확인할 수 있습니다.
-   서비스를 개발한 개발자들의 한마디를 볼 수 있습니다.

### Mypage & logout

![mypage](https://user-images.githubusercontent.com/55802893/167118287-857e0116-1482-42e1-927e-2cb195e87f3a.png)

-   오른쪽 상단 프로필을 누르게 되면 Mypage와 logout 버튼을 누를 수 있습니다.
-   Mypage에서는 사용자의 정보를 수정할 수 있고, favorite에서 사용자가 찜(하트)한 보드게임을 확인할 수 있습니다.

## 5. 프로젝트 팀원 역할 분담

| 이름   | 담당 업무                     |
| ------ | ----------------------------- |
| 김애림 | 프론트엔드 개발               |
| 노누리 | 백엔드 개발/**최종 발표**     |
| 송가람 | 프론트엔드 개발               |
| 안민영 | 프론트엔드 개발/**중간 발표** |
| 소범기 | 백엔드 개발/데이터 분석       |
| 이상원 | 팀장/백엔드 개발              |

**멤버별 responsibility**

1. 팀장

-   기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서, 개발 문서 작성
-   개발 단계: 팀원간의 일정 등 조율 + 백엔드 개발
-   수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 담당

[Frontend README 보기👉](/front/README.md)

-   기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
-   개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
-   수정 단계: 피드백 반영해서 프론트 디자인 수정

3.  백엔드 담당

[Backend README 보기👉](/back/README.md)  
[Backend API 문서 보기👉](https://app.swaggerhub.com/apis-docs/nowgnas/board_game/1.0.0)

-   기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
-   개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용
-   수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

4. 데이터 담당

-   데이터 선정 단계: 프로젝트 기획에 맞는 데이터 선정
-   데이터 전처리 단계: 선정한 데이터를 분석 후 DB 저장, 인사이트 도출(추천 시스템)을 위한 데이터 정제
-   추천 시스템 구현 단계: 보드게임의 설명을 기반으로 한 유사한 보드게임 선정
-   시각화 단계: 정제된 데이터를 사용해 데이터 시각화 진행
-   수정 단계: 코치님 피드백 반영, 데이터 분석 방향 수정

## 6. 데이터 분석 (추천 시스템)

> Collaborative filtering

-   User-based CF(해당 고객이 선호하는 상품들 중에 내가 아직 접하지 않은 상품을 추천하는 방식) 과 Item-based CF(내가 평점을 매긴 상품의 평점들과 유사한 패턴으로 평점을 부여된 상품을 추천하는 방식)

    -   우리는 `Item-based CF`를 사용한다.

-   `과거에 동일한 사람들이 미래에 동일한 성향을 갖을 거라는 가정에 기초를 두고있다.`

-   사용자의 행동으로 부터 모델을 만들때 명시적인 형태로 제공가능함

-   이 모델을 사용함으로써 생기는 문제

    -   cold star 문제 : 기존에 고객이 취했던 평점 데이터기반으로 추천하기 때문에, 신규 게임에 대해서는 추천할 수 없는 문제가 발생한다

        -   해결방법 : 20년부터 22년의 최신 게임에 대해서는 새로운 DB를 구성하여 제공해준다.

    -   long tail 문제 : 사용자들이 관심이 많은 컨텐츠만 보여준다.

        -   해결방법 : random으로 보여주는 추천게임을 만들어 관심이 없어도 게임을 보여준다.

    -   계산 효율이 저하

    -   모델의 생성으로 인해 생기는 문제점 해결방안 정리
    -   2022년기준 rank 500위 안에 생기는 보드게임을 기반으로 data set을 축소하여 추천시스템을 제공한다. 사실 Content-base filtering이 더욱 많은양의 데이터와 계산량이 들어가기 때문에 우리는 Collaborative filtering을 선택했다. 또한 우리는 Item-based CF를 cosine similarity를 사용하여 추천 게임에 대한 근거를 제공할 수 있는 모델을 선택했다. 위에 언급한 cold star문제와 long tail문제를 해결하기 위해 제작한 홈페이지에 해결방안을 접목하여 디자인했다.

-   if 시간이 충분했다면...
    -   최근 추천시스템은 content-base filtering과 collaborative filtering을 합친 hybrid 시스템을 많이 사용한다. 또는 Machine Learning을 활용한 추천시스템을 제작할 수 있다. hybrid 시스템의 경우에는 추천시스템의 제작의 목적에 따라 다양한 ensemble방법들이 우리팀은 content-base filtering과 collaborative filtering을 구현했지만 수치적으로 타당하게 근거를 줄 수 있는 collaborative filtering을 선택했다. 또한 collaborative filtering을 사용함으로 생기는 문제점을 보안하기 위해 다양한 기능을 추가하여 보안했다.
        Machine Learning을 확실하게 적용하기 위해서는 data에 대한 domain지식이 충분해야한다. 그러나 kaggle data는 미국 사용자에 대한 정보로 model을 구성해야 하기 때문에 data를 한국사람의 data로 대표할 수 없고, 보드게임에 대한 구체적인 domain 지식이 부족했다. 따라서 정확한 모델을 만들 수 없고, 모델을 제작한다 하더라도 python을 js에서 real-time으로 동작하는 구현대하여 시간적인 여력이 부족했다. 위의 두가지 문제를 해결한다면 한국인에 더 친화적인 추천 model을 만들 수 있다 생각한다.

## 7. word cloud

> word cloud는 메타 데이터에서 얻어진 태그들을 분석하여 중요도나 인기도 등을 고려하여 시각적으로 늘어 놓아 웹 사이트에 표시하는 것이다.  
> <sub>출처: 위키 백과</sub>

Board game의 description을 이용해서 각 게임마다 word cloud를 생성하였다. Description의 단어들만 뽑아 한글로 번역한 word cloud를 생성하였다. Word cloud를 생성한 순서는 다음과 같다.

### 1. Description 전처리

게임의 설명을 모두 소문자로 변경, 정규식으로 영어 단어만 남기고 nltk의 sentence_tokenize 라이브러리를 사용해 문장 단위 tokenizing을 진행합니다. 문장별로 나눈 후 nltk의 word_tokenize를 사용해 단어별로 나눠줍니다. Stop words를 지정해서 단어들 중 불용어를 삭제합니다. 예를들면 "is", "a"처럼 뜻을 가지지 않은 단어와 데이터를 보고 잘못된 단어를 stop word에 넣어 전처리를 해줍니다.

### 2. 한글로 된 word cloud 생성하기

서비스 사용 대상은 한국인이기 때문에 word cloud를 한글로 생성해야 합니다. Description 전처리를 통해 얻은 단어들을 모두 한글로 번역해 줍니다. 번역에 사용된 라이브러리는 python의 `googletrans`로 라이브러리를 통해 구글 번역기를 사용할 수 있습니다. 번역된 단어들을 이용해서 word cloud를 생성합니다. Word cloud 생성은 번역된 단어들을 collections.Counter 함수를 사용, 빈도수 기준으로 생성하였습니다.

### 3. word cloud 예시

![wordcloud](https://github.com/nowgnas/elice-2nd-project-img/blob/main/wordcloud/2_224517.png?raw=true)

## 8. 프로젝트 한계점

### 데이터를 구성하는 언어

사용한 데이터는 모두 영어로 구성되어 있습니다. 하지만 한국인을 대상으로 가정하고 개발된 프로젝트이므로 모든 데이터들을 한글로 번역하는 과정에서 어려움이 있었습니다. 보드게임의 설명을 기반으로 워드 클라우드를 생성하였는데, 문장과 단어로 토크나이징한 후 단어들을 번역하여 워드 클라우드를 생성했습니다. googletrans 라이브러리를 사용하는 과정에서 번역이 안되는 단어나 오역이 되는 단어가 많았고, 단어의 수가 많아 구글 번역 서버에 접근을 못하는 이슈가 있었습니다.

불용어 제거를 위해 nltk 라이브러리를 사용하고 여러번 의미가 없는 단어들을 제외했지만 여전히 이상한 단어가 나왔습니다. 토크나이징된 단어들에서 의미가 없는 글자나 번역이 안되는 단어들을 모두 불용어에 추가한 다음 워드 클라우드를 생성하는 방법으로 해결할 수 있을 것 같습니다.

### redis 저장소 사용의 어려움

사용자가 비밀번호를 기억하지 못해 비밀번호 초기화가 필요한 경우 사용자의 메일로 비밀번호를 변경할 링크를 보내줍니다. Reset token을 사용해서 5분 내에 링크에 접속해 비밀번호를 변경하는 방식입니다. Redis를 AWS ElasticCache에 설치해 사용하려고 했으나 AWS 내부에서만 접근이 가능해 기능 구현을 위해서는 redis를 EC2에 설치해서 사용해야 했습니다. 하지만 EC2에 설치 후 테스트 과정에서 연결이 끊기거나 EC2에 접속이 안되는 이슈가 발생했습니다.

EC2 연결 오류가 발생하면 서버를 새로 생성해 연결하는 방식으로 해결했습니다.

## 9. 버전

-   1.0.0

## 10. FAQ

**Q**: 보드게임을 검색하는 페이지에서 정렬 방식을 바꿔도 보드게임의 순서가 바뀌지 않는데 정렬이 안되고 있는게 아닌가요??  
**A**: 현재 랭킹, 평점, 리뷰 순으로 정렬하는 옵션이 있습니다. 세 가지 조건의 순서가 동일한 경우가 대부분이고, 조건의 값들이 비례하기 때문에 순서가 같게 보이는 현상이 있습니다.

**Q**: 보드게임 설명이 이상하고 워드 클라우드에 영어가 포함되어 있습니다. 왜 그런건가요??  
**A**: `BOARDMON`에 사용된 데이터는 Kaggle 데이터입니다. 모든 데이터가 영어로 구성되어 번역이 필요했으며, 번역 과정에서 문장이 매끄럽지 않거나 워드 클라우드에 번역이 안된 단어가 들어가 있을 수 있습니다. 보드게임 설명은 글을 요약하는 모델을 사용해 번역는 방식으로 해결할 수 있을 것 같고, 워드 클라우드는 불용어를 추가하는 방식으로 해결할 수 있을 것 같습니다.

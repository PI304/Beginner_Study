## 🐥 Beginner_Study

## Index

1. [시작하기](##1.-시작하기)
2. [기술 스택](##2.-기술-스택)
3. [index.html 가이드](##3.-index.html-가이드)
4. [협업 방법](##4.-협업-방법)
5. [브랜치 이름 컨벤션](##5.-브랜치-이름-컨벤션)
6. [커밋 메세지 컨벤션](##6.-커밋-메세지-컨벤션)

## 1. 시작하기

### 1. Clone

```shell
$ git clone https://github.com/PI304/Beginner_Study.git
```

## 2. 기술 스택

<a><img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white"/></a>

## 3. index.html 가이드

```
          <div class="card">
            <a href="본인메인페이지 경로" target="_blank">
              <div class="card-img">
                <img src="본인 썸네일 경로" />
              </div>
              <div class="card-body">
                <h2 class="card-title">본인이름</h2>
                <p class="card-intro">@github ID</p>
              </div>
            </a>
          </div>
          <div class="card">
            <div class="card-img skeleton"></div>
            <div class="card-body">
              <h2 class="card-title skeleton"></h2>
              <p class="card-intro skeleton"></p>
            </div>
          </div>
        </div>
      </div>
```



## 4. 협업 방법

### 1. MyPage 작업

MyPage를 작업 하기 전에 `git pull origin master`를 해줍니다

### 2. 브랜치 생성

MyPage를 작업 하기 전에 브랜치 생성을 해줍니다

```shell
// 아래 명령어를 통해 브랜치 생성
$ git checkout -b Week?/기능요약
```
**브랜치 이름 컨벤션에 대해선 아래 참고해주세요**

### 3. 작업 후 push

```shell
$ git push origin [브랜치명]
```

### 4. Github에서 PR을 생성합니다. PR 시 나타나는 템플릿을 채워주세요.

```markdown
## Feature Description

- 이런 이런 기능입니다

## To Reviewers

- 이런 이런 점을 유의해주세요
```
아래 예시를 참고해주세요
<img width="920" alt="스크린샷 2023-04-05 23 42 48" src="https://user-images.githubusercontent.com/110515401/230116422-6631dd1a-19b7-414d-b143-3521a4765b25.png">



### 5. Review 과정을 거칩니다.
운영진이 PR된 코드를 확인하고 코드리뷰 과정을 거칩니다


### 6. Self Merge 해주세요.
코드리뷰 과정이 끝난다면 운영진이 Merge가 가능하도록 Approve 해줍니다

*️⃣ Squash Merge되며, Merge된 Branch는 자동 삭제됩니다.

### 6-1. 코드 리뷰

1. PR 시 leeunduck / dmsthf2000을 Reviewer로 지정합니다.
2. 수정이 필요하면 Request Changes로 코드 수정을 요청드립니다.
3. 이상이 없으면 Approve 합니다.
4. Approve된 PR을 코드작성자가 Self Merge 합니다.

*️⃣ Merge 시 나타나는 템플릿을 아래와 같이 채워주세요
<img width="846" alt="스크린샷 2023-04-05 23 56 11" src="https://user-images.githubusercontent.com/110515401/230120382-3073d734-5675-4ee6-af1f-b39a1909fe77.png">


### 7. 로컬에서 master 브랜치로 체크아웃한 뒤 Pull하고, 새로운 브랜치로 분기하여 다음 작업을 진행해주세요.

```shell
$ git checkout master
$ git checkout -b Week?/
```



## 5. 브랜치 이름 컨벤션

```
Week?/[기능요약]

- 맨 첫글자 W만 대문자로, 기능요약은 소문자로 작성해주세요
- 기능요약은 영어로 작성해주세요

ex) Week2/dropdown
```

## 6. 커밋 메세지 컨벤션

```
<태그>: <제목>

- : 뒤에만 띄어쓰기가 있습니다
- 제목은 한영 혼용이 가능합니다 (가급적 영어로)
- 태그의 첫글자는 대문자로 작성해주세요
- 태그는 아래에 적힌 것들만 사용해주세요

Feat: 새로운 기능 추가, 기능 로직 변경
Fix: 버그 수정
Refactor: 코드 리팩토링 (기능 변화 X)
Style: 코드 포맷팅, 코드 변경이 없는 경우
Chore: 빌드 업무 수정, 패키지 매니저 수정
Docs: 문서 수정, 주석
```


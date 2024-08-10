## 프로젝트 생성 

-> 기존의 component를 사용하여 적용 
-> google 로그인기능 추가 

## 부가요소 설치 

`npm install @react-navigation/native`
`npm install @react-navigation/native-stack`
`npm install react-native-safe-area-context react-native-screens`
`npm install @expo/vector-icons`

## RootApp

기존의 네비게이션은 App.js에서 진행하였지만 RootApp.js를 만들어 분리시켜 코드 관리를 용이하게 함

## Screen 구성 

Diary추가 화면, Diary 목록화면, Diary 세부내용 화면, Setting 화면 

## Navigator 

stackNavigation => 화면 순서 (DiaryListScreen,DiaryDetailScreen,SettingScreen) => RootStackNavigation으로 관리
SplashView 로그인이 되었는지 안되었는지 확인 로그인이 안되었으면 SplashView를 도출한다.



# react-native-workshop

## How to Run

### Prepare iOS and Android environment
[Windows prepare environment](https://segmentfault.com/a/1190000014166744)

[Mac prepare environment](https://segmentfault.com/a/1190000014190384)


### Get codebase

1. You can download the code via git

```
git clone https://github.com/ThoughtWorksWuhanUI/react-native-workshop.git
cd react-native-workshop
```

2. Or you can download code via the download button

### Install Dependencies
```bash
yarn install
```

### Run on iOS or Android in debug mode
`Run in iOS`

```bash
react-native run-ios
```

`Run in Android`

```bash
react-native run-android
```

### Run on iOS or Android in release mode
`Run in iOS`

```bash
react-native run-ios --configuration Release
```

`Run in Android`

```bash
react-native run-android --variant=release
```

## 需求说明
通过一张照片，识别你的年龄。

作为一个用户，打开app时，我可以看到轮播的图片。点击其中任何一张图片，会打开一个页面，页面会显示选中的图片以及分析中。当分析完成后，图片上显示每个人的性别和年龄。

作为一个用户，打开app时，我可以看到一个“选择图片”的按钮。点击“选择图片”按钮，会打开我的个人相册。我可以从中选择一张图片，会打开一个新的页面，页面会显示选中的图片以及分析中。当分析完成后，图片上显示每个人的性别和年龄。


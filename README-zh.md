# touch-hover
[![npm](https://img.shields.io/npm/v/touch-hover.svg)](https://www.npmjs.com/package/touch-hover)
> [English Readme](https://github.com/lixilin123/touch-hover)
### 1. 简介
本仓库封装了一个用于设置移动端点击样式的文件
### 2. 效果
![](https://user-images.githubusercontent.com/34760420/39755381-34376bbc-52f8-11e8-9efd-2333a6b29de1.gif)
## 3. 使用方法
1.**安装：**使用 `npm` 命令安装，`npm install --save touch-hover`
2.**引入：**使用ES6的方式直接引入：`import 'touch-hover'`
3.**示例：**
```html
<div data-hover="custom-class-name"> hello world </div>
```
``` css
.custom-class-name {
	transform: scale(0.95)
}
```
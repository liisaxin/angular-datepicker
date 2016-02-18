# 介绍
angular-datepicker

# 安装需求
本插件依赖jquery 和 https://github.com/xdan/datetimepicker jquery插件

# 安装
```html
<script type="text/javascript" src="YOURPATH/assets/bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="YOURPATH/assets/bower_components/datetimepicker/jquery.datetimepicker.js"></script>
<script type="text/javascript" src="YOURPATH/assets/bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="YOURPATH/Datetimepicker.js"></script>
<link rel="stylesheet" href="../src/datetimepicker/jquery.datetimepicker.css" type="text/css">
```
# 使用
```javascript
var app = angular.module('app', ['datetimepicker']);
```
```html
<input type="text" datetimepicker ng-model="test.start_time" plugintype="datetime" placeholder="开始时间" class="date" />
<input type="text" datetimepicker ng-model="test.start_time" plugintype="date" placeholder="开始时间" class="date" />
<input type="text" datetimepicker ng-model="test.start_time" plugintype="time" placeholder="开始时间" class="date" />
```

#注意
jquery必须在angular之前引入, 否则可能会导致ng-model无法更新到scope
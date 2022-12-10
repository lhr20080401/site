window.onerror = function(error) {
    str = error.filename;
    var index = str.indexOf("cw.js");
    if (index != -1) {
      // 如果找到了子字符串，则执行以下语句
      console.log("找到了cw的错误: " + index + "错误信息：" + error.message + "正在刷新配置");
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/cw-cgi/api?type=config", true);
      xhr.send();
      console.log("配置已刷新");
  
    } else {
      // 如果没有找到子字符串，则执行以下语句
      console.log("不是cw的错误");
    }
  }
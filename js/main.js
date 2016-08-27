function aaa(app){
  $(app).each(function(){
      var path = document.location.pathname.split('/'); //   的到 /  ,然后也split('/') 用 / 替换，成了 数组，得到了一个   ， 、
      // 得到刷新到哪个页面 ，拿到 url 的 后缀名字， 如： index.html,在这里，你只需要 点击 不同的 在连接，就能够跳转，实现页面刷新。，也就 拿到，后缀了
      var page = path[path.length-1];  // 点那个页面 ， 得到 哪个页面的，后缀
      var href = $(this).attr('href'); // 得到 a 上面的 href  ,是什么
      if(href == page){               // 点的 a 的 href 值 ， 和 当前的 后缀名 一样时
        $(this).addClass('active');   // 给当前的 a 添加 active
        return false;                 // 返回  false , 不让它进入 if 语句
      }
  })
}

aaa('.app-footer a')
aaa('.sidebar a')

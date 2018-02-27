


function handleAjax(url, param, callback, isErrShow, getmMode){
    var mode = getmMode || 'GET';
    return $.ajax({
        url: url,
        type: mode,
        dataType: 'JSON',
        data: param,
        success: function(res) {
            callback(res);
        },
        error: function(req, textStatus, errorThrown) {
            console.log('textStatus, errorThrown',textStatus, errorThrown);
        }
    });
}

function fileNameCompare(suffix) {
  return /(gif|jpg|jpeg|GIF|JPG|JPEG|png)/.test(suffix)
}

function getDefaultHours(time, flag) {
  var now = new Date(parseInt(time) * 1000);
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var Hours = now.getHours();
  var Minutes = now.getMinutes();
  var Seconds = now.getSeconds();
  var am
  if (month < 10) {
    month = "0" + month
  }
  if (date < 10) {
    date = "0" + date
  }
  if (Hours < 10) {
    Hours = "0" + Hours
  }
  if (Minutes < 10) {
    Minutes = "0" + Minutes
  }
  if (Seconds < 10) {
    Seconds = "0" + Seconds
  }
  if (flag == 0) {
    return `${year}-${month}-${date}  ${Hours}:${Minutes}:${Seconds}`
  } else if (flag == 1) {
    return `${year}.${month}.${date}  ${Hours}.${Minutes}.${Seconds}`

  } else if (flag == 2) {
    return `${year}.${month}.${date}`
  } else if (flag == 3) {
    return `${year}-${month}-${date}  ${Hours}:${Minutes}`
  } else if (flag == 4) {
    return `${month}-${date}  ${Hours}:${Minutes}:${Seconds}`
  }
}


// 取小数点 后两位
function timeCurrentMillFn(timeCurrent){
  if (String(timeCurrent).indexOf('.') != -1) {
    let timeString = String(timeCurrent).split('.')
    let timeString_1 = timeString[1].substr(0, 2)
    let time = timeString[0] + '.' + timeString_1
    return `${time}`;
  } else {
    return `${timeCurrent}`;
  }

}





















var katzDeli = [];

function currentLine(arr){
  var res="The line is currently:"
  for (var i = 0;i<arr.length;++i){
    res+=((i===0 ? " " : ", "))+(i+1)+". "+arr[i]
  }
  return res
}

function nowServing(arr){
  return "Currently serving "+arr[0]+"."
}

function takeANumber(arr,name){
  arr.push(name)
  return "Welcome, "+name+". You are number "+arr.length+" in line."
}

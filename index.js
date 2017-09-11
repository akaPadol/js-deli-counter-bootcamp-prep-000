var katzDeli = [];

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"

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

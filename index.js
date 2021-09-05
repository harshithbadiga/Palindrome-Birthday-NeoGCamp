






function reverseStr(str){
    // var listofChar = str.split(" ")
    // var reverseList = listofChar.reverse()
    // var reversedStr = reverseList.join("")
    let reversedStr = str.split('').reverse().join('')
    return reverseStr
}


function isPlaindrome(str){
    var reverse = reverseStr(str)
    return str === reverse
}

function converDateToString(date){
    var dateStr = { day:" ",month:" ",year:" "}

    if (date.day < 10) {
        dateStr.day = '0' + date.day;
      }
      else {

        dateStr.day = date.day.toString();
      }
    
      if (date.month < 10) {
        dateStr.month = '0' + date.month;
      }
      else {
        dateStr.month = date.month.toString();
      }
    
      dateStr.year = date.year.toString();
    
      return dateStr;
    }
    

 

    function getAllDateFormat(date){
        var dateStr = converDateToString(date)


        let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
        let mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
        let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
        let ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
        let mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
        let yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
      
        return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    }

    function checkPalindromeOrNo(date){
        var listOfPalindromes = getAllDateFormat(date)
        var flag = false
        for(var i=0; 1<listOfPalindromes.length; i++){
            if(isPlaindrome(listOfPalindromes[i])){
                flag = true
                break
            }
        }
        return flag
    }


    var date1 = {
        day: 13,
        month: 9,
        year: 2011
    }



console.log(checkPalindromeOrNo(date1))
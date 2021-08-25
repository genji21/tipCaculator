// tim so lon nhat cua  1 so nguyen duong 

function findMax(a){
    let temp = a 
    let max = 0; 
    while(a != 0 ){
    let i = a % 10
    if (i > max) {
        max = i 
    } 
    a/=10
    // console.log(a);
    }
    console.log(`chu so lon nhat cua ${temp} la ` + Math.trunc(max));
    
}

//bai 2 , kiem tra so toi da co 3 chu so co phai la so doi xung hay khong 
function isDoixung(a) {
    let soDao = 0 
    let temp = a
    while(a != 0 ) {
        let finalNumber = a % 10 ; 
        soDao = soDao*10+finalNumber;
        a = Math.trunc(a / 10 )
    }
    console.log(soDao);
    if(soDao == temp ) {
        console.log(`${soDao} la so doi xung `);
    }
    else {
        console.log(`${soDao} ko phai la so doi xung `);
    }
}
// tìm nguyên âm a e o i u trong chuỗi và xóa 
function findNguyenam(chuoi){
    let result = ''
    let count = 0 
   for ( let i = 0 ; i < chuoi.length;i++){
      if (chuoi[i] == 'a'|| chuoi[i] == 'e' || chuoi[i] == 'o' || chuoi[i] == 'i' || chuoi[i] == 'u') {
         chuoi = chuoi.replace(/[aeoiu]/g,'')
         count++
      }
      
    }
    console.log(count);
    console.log(chuoi);   
  
}
// 
function reversedString(string){
let arrayS = string.split(' ');
for ( let i = 0 ; i<arrayS.length;i++){
    console.log(arrayS[i].split(''));
   if(arrayS[i].split('').length>=5) {
       let newArray = arrayS[i].split('').reverse()
        arrayS[i] = newArray.join('')   

   }
   
}
let result = arrayS.join(' ');
console.log(result);
return result
}
//function digPow
function digPow(n,p){
    let result = 0 ; 
    let k = 0 ;
    let arrayNumber = String(n).split('').map((num)=>{
        return Number(num)
     })
    let tempAr= Number(arrayNumber.join(''))
    for (let i = 0 ; i < arrayNumber.length;i++){
      result += Math.pow(arrayNumber[i],p+i)
    }   
    k = ((result % tempAr == 0 )) ? result / tempAr : -1
    return k;
}
//
function nbYear(p0,percent,aug,p){
    //output  tìm ra số năm để dân số từ p0 đạt tới p 
    //chuyển percent
    let percenta =percent/100;
    console.log(percenta);
   ; // Qua mỗi năm , dân số sẽ tăng được  
    let peoploe = p0*percenta+aug
    let finalPopu =p - p0 ;// tổng dân số phải đặt được từ p0 đến p 
    let countYear = 0; 
    // tổng số năm dự kiến để đạt được là ?? 
    let finalYear = Math.ceil(finalPopu/peoploe) 
    for(let i = 0 ; i< finalYear;i++){
        // 
        let nPendyear =Math.trunc(p0*percenta+aug) 
        p0 += nPendyear;
        countYear++
        if(p0 >= p) {
            break;
        }
    console.log(p0);
        
    }
    console.log(countYear);
    return countYear
}

function moveZeros(arr){
  let newArr = arr.filter(element => {
        return element !== 0  
    });
    // console.log(newArr);
    let zeroArr = arr.filter(element=>{
        return element === 0 ;
    })
    let result = newArr.concat(zeroArr)
    return result
}

function humanReadable(n) {
    let minutes ;
    let hours ;
    let seconds;
    let subN;
    let hh,ss,mm;
    let result
    if(n <= 359999 ) {
        hours = (n >= 3600 ) ? Math.trunc(( n / 3600 )) : 0
        // tong so giay con lai khi da doi sang gio 
        subN = n - (hours*3600)
        minutes =  (Math.trunc(subN / 60))
        seconds = n - (hours*3600 + minutes*60)
        console.log(hours,minutes,seconds);
        // convert to Array 
        hours = String(hours).split('');
        minutes = String(minutes).split('');
        seconds = String(seconds).split('');
        // check length = 1 , if true , push 0 into array 
        hh = (hours.length == 1 ) ? ['0',...hours] : hours
        mm = (minutes.length == 1 ) ? ['0',...minutes] : minutes;
        ss = (seconds.length == 1 ) ? ['0',...seconds] : seconds
       //convert to string  have syntax constructor for user  :: 
       result = hh.join('').concat(':',mm.join('')).concat(':',ss.join(''))
       return result 
    }
  else {
      return false
  } 
}
//// aabbcc = > 
function expandedForm(num){
    let result = '' ; 
    let nAr = String(num).split('').map(item=>{
        return Number(item)
    })
    let coso = Math.pow(10,nAr.length-1);
  result = nAr.map((item,index)=>{
     coso = (index++) ? coso/10 : coso
        return String(item*coso)
    })
    console.log(result.filter(item=>{
        return item !=0
    }).join(' + '));
   return  result.filter(item=>{
        return item !=0
    }).join(' + ')

}

function likes(names){
    let string ='';
    let chieudai = names.length
   switch (true) {
       case chieudai == 1 :
            string = `${names[0]} likes this`
            break;
        case chieudai ==2 : 
            string = `${names[0]} and ${names[1]} like this`
        break;
        case chieudai === 3 :
            string = `${names[0]},${names[1]} and ${names[2]} like this `
            break;
        case chieudai >=4:
            string = names[0] + "," +" " + names[1] + ` and ${chieudai - 2 } others like this` 
            break;
       default:
           string = 'no one like this'
           break;
   }
  return string
}

function alphabetPosition(text){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   text = text.toLowerCase().split('')
    let array =[]
    // lap qua alphabet => 
   for(let i = 0; i<text.length;i++){
       for(let j = 0 ; j<=alphabet.length;j++){
           if(text[i] == alphabet[j]) {
               array.push(j+1)
           }
       }
   }
   let result = array.join(' ');
   return result
   
}

function findOdd(arr) {
    result =  arr.find((item, index) => arr.filter(el => el == item).length % 2)
    console.log(arr);
  }

  function sum(digits){
      let string = ""
      let result 
      let b = 0 
    if(typeof digits === 'number' || typeof digits === 'string'){
        String(digits).split('').forEach(element => {
            b += Number(element)
          string += element + ' + ' 
          })
       result =  string.slice(0,string.length-2) + "= " + String(b)
       console.log(result);
       return  result
    }
    else {
        
        return ''
    }
  }
  function generateHashtag (str) {
      let result = ''
     result =  (str.length ==  0 || str.length > 140 ) ? false :("\u0023"+str.trim().split(' ').map(item=>{
        return item  =  item.charAt(0).toUpperCase() + item.slice(1)
                     }).join(''));
                  
                     return str.length == 0 || str.length > 140 ? false : result;
    }
   console.log(generateHashtag('#dsad#'))

    function firstNonRepeatingLetter(arr,callback) {
            let result ='d'
        if(arr.length === 1 ) {
            console.log(result = arr );
          return   result = arr;
        }
        else if(arr !== undefined || arr !== ''){
            if(!callback(arr)) {
                console.log('repeat stringggggggggg');
              console.log('');
              return result
            }
            else {
               arr = arr.split("");
             result =  arr.find((item, index) => arr.filter(el => el.toLowerCase() == item.toLowerCase()).length == 1 )
             console.log(result)
             return result;
        }
    }
       console.log(result);
    }
      function isAllCharactersSame(s)
    {
        let n = s.length;
        for (let i = 1; i < n; i++) {
            if (s[i] !== s[0])
            {   
                return true
             }
        }  
           return false 
    }
firstNonRepeatingLetter('kkkkkkkkkkkk',isAllCharactersSame)



// alphabetPosition('The narwhal bacons at midnight')
// findMax(129392)
// isDoixung(121)
// findNguyenam('ookkkuuiicnv')
// reversedString("Welcome")
// digPow(92,1);
// nbYear(1500000, 2.5, 10000, 2000000)
// let array1 = ["a","b",null,"c","d",1,1,3,1,9,{},9,0,0,0,false,0,0,[],0,0,0,0,0];
// moveZeros(array1)
// humanReadable(34500)
// expandedForm(12)
// likes(['Max', 'John', 'Mark'])
// findOdd
// sum(undefined)
// generateHashtag("Codewars")

// var courseApi = "http://localhost:3000/courses";

// function start() {
//  getCourses(renderCourses);
//  handleCreateForm();
// }

// start();

// // Functions

// // Render Courses

// function getCourses(callback) {
//  fetch(courseApi)
//   .then(function (response) {
//    return response.json();
//   })
//   .then(callback);
// }

// function renderCourses(courses) {
//  var listCoursesBlock = document.querySelector("#list-courses");
//  var htmls = courses.map(function (course) {
//   return `
//   <li class="course-item-${course.id}">
//    <h2>${course.name}</h2>
//    <p>${course.description}</p>
//    <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
//    <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
//   </li>`;
//  });
//  listCoursesBlock.innerHTML = htmls.join("");
// }

// // CreateCourse

// function createCourse(data, callback) {
//  var options = {
//   method: "POST",
//   headers: {
//    "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
//  };
//  fetch(courseApi, options)
//   .then(function (response) {
//    return response.json();
//   })
//   .then(callback);
// }

// function handleCreateForm() {
//  var createBtn = document.querySelector("#create");
//  createBtn.onclick = function () {
//   var name = document.querySelector('input[name="name"]').value;
//   var description = document.querySelector('input[name="description"]').value;
//   var formData = {
//    name: name,
//    description: description,
//   };
//   if (name != "" && description != "") {
//    createCourse(formData, function () {
//     getCourses(renderCourses);
//    });
//   } else {
//    alert("Hãy nhập đầy đủ thông tin");
//   }
//  };
// }

// // Delete course
// function handleDeleteCourse(id) {
//  var options = {
//   method: "DELETE",
//   headers: {
//    "Content-Type": "application/json",
//   },
//  };
//  fetch(courseApi + "/" + id, options)
//   .then(function (response) {
//    return response.json();
//   })
//   .then(function () {
//    var courseItem = document.querySelector(".course-item-" + id);
//    if (courseItem) {
//     courseItem.remove();
//    }
//   });
// }

// // Update course

// function updateCourse(id, data, callback) {
//  var options = {
//   method: "PUT",
//   headers: {
//    "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
//  };
//  fetch(courseApi + "/" + id, options)
//   .then(function (response) {
//    return response.json();
//   })
//   .then(callback);
// }

// function handleUpdateCourse(id) {
//  var courseItem = document.querySelector(".course-item-" + id);

//  var getName = courseItem.querySelector("h2").innerText;
//  var getDescription = courseItem.querySelector("p").innerText;

//  var name = document.querySelector('input[name="name"]');
//  var description = document.querySelector('input[name="description"]');

//  name.value = getName;
//  description.value = getDescription;
//  if (!document.querySelector("#update")) {
//   document.querySelector("#create").id = "update";
//  }
//  document.querySelector("#update").innerText = "Lưu";

//  var updateBtn = document.querySelector("#update");
//  updateBtn.onclick = function () {
//   var formData = {
//    name: name.value,
//    description: description.value,
//   };
//   if (name.value != "" && description.value != "") {
//    updateCourse(id, formData, function () {
//     getCourses(renderCourses);
//    });
//   } else {
//    alert("Hãy nhập đầy đủ thông tin");
//   }
//  };
// }
//test promise 
function delay(ms){
   return new Promise(function(resolve,reject){
     setTimeout(()=>{
         console.log("???")
     },3000)
   })
}


delay(3000).then(()=>{
    console.log("WTAH")
})
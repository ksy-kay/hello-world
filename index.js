var express = require('express');
// require(모듈_이름) 함수는 node.js에서 기본적으로 주어지는 함수로,
//modules폴더 안에 설치된 모듈을 불러오는 함수설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.
//항상 처음으로 따라옴

app.get('/', function(req, res) { // '/' 위치에 'get'요청을 받는 경우,
  res.send('Hello World!'); // "Hello World!"를 보냅니다.
});
//req : request에 관련된 값들과 함수들이 저장되어 있는 object. HTTP request header, 요청 url, cookies, query, body 등의 정보가 저장되어 있습니다.
//이 object의 전체 구조를 확인하고 싶을땐 콜백 함수에 console.log(req) 코드를 넣으면 안을 확인할 수 있습니다.(req 뿐만 아니라 나머지 res, next 등도 console.log를 통해 값을 확인해 봅시다!)

//res : response에 관련된 값들과 함수들이 저장되어 있는 object. HTTP response header, cookies, HTTP code 등의 정보를 확인하고 값을 변경할 수도 있습니다.
//또한 어떠한 방식으로 response할지도 정할 수 있습니다. 위 예제에서는 res.send를 사용해서 텍스트를 response하였습니다.

//next : 만약 여러개의 콜백 함수를 사용한다면 이 함수를 호출하여 다음번 콜백 함수로 넘어갈 수 있습니다. 위 예제에서는 함수가 하나뿐이므로 parameter에 적지도 않았습니다.

var port = 3000; // 사용할 포트 번호를 port 변수에 넣습니다.
app.listen(port, function(){ // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});

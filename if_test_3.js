const browser = prompt("사용하시는 브라우저를 입력해주세요");

if(browser=='Edge') {
    console.log( "Edge를 사용하고 계시네요!" );
    }
else if(browser =='Chrome'|| browser=='Firefox'||browser=='Safari'||browser=='Opera'){
    console.log( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
}
else{
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}


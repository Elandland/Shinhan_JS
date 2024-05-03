function ask(question, yes,no){
    if(question())
        yes();
    else
        no();
}
ask(
    // () => confirm("동의하십니까?"),
    () => {                                           //=>함수에서는 return 생략가능, 중괄호 있으면 생략 x
        return confirm("동의하십니까?");               //confirm과 alert는 브라우저에서 사용하기 위한 기능이다.
        },
    function() { alert("동의하셨습니다.") },
    function() { alert("취소 버튼을 누르셨습니다.") }
 );


// function ask(question, yes,no){
//     if(question)
//         yes();
//     else
//         no();
// }
// ask(
//     confirm("동의하십니까?"),             
//     function() { alert("동의하셨습니다.") },
//     function() { alert("취소 버튼을 누르셨습니다.") }
//  );
//이래 해도 되긴함.
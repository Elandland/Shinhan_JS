let wrap = document.getElementById('wrap');
let outer = document.getElementById('outer');
let inner = document.getElementById('inner');

wrap.addEventListener('click', e=>{
    console.log("wrap Event");
})

outer.addEventListener('click', e=>{
    e.stopPropagation();
    console.log("outer Event");
})

inner.addEventListener('click', e=>{
    e.stopPropagation();
    console.log("inner Event");
})

let submitBtn = document.getElementById('submit_button');       //얘가 없으면 버튼 누를때 url에 ?로 빈 get 요청을 날리는 듯. 이걸 방지하려고 얘를 추가
submitBtn.addEventListener('click',e=>{
    e.preventDefault();                                         //이게 방지 하는거 인듯
    alert("버튼 클릭");
})
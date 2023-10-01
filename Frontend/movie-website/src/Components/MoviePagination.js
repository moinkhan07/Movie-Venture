import React from 'react';
const MoviePagination = () => {
  return (
    <div id='moviePagination'>
      <h1>Pagination Button Will Be Here!</h1>
    </div>
  );
};
// let renderDom = (index)=>{
//   // let cont = document.querySelector("#mo");
//   // cont.innerHTML="";
//   // let start = 20*index;
//   // let end = start+20;
//   //let perPageData= data.slice(start,end);
//   // perPageData.forEach((el)=>{
//   //     let p= document.createElement("p");
//   //     p.innerText=`${el.id} ${el.name}`;
//   //     cont.append(p);
//   // })
//   btn1(1);
// }
// renderDom(0);
// //btn1(0);

// let btn = document.querySelector("#moviePagination");

// let btn1=(page)=>{
  
//   btn.innerHTML="";
// if(page<=3){
//   page=3;
// }
// if(page>25){
//  alert("Data is not available")
//  return false;
// }
//   for(let r=page-2;r<page+3;r++){
//       let btn2=document.createElement("button");
//       btn2.innerText=r;
//       btn2.addEventListener("click",()=>{
//           sendIndex(r);
//       })
//       btn.append(btn2);
//   }
// }

// let sendIndex=(r)=>{
//  renderDom(r-1);
// }
export default MoviePagination;
/*
let url ="https://jsonplaceholder.typicode.com/comments";
let data =[];
let getData = async ()=>{
    let res = await fetch(url);
    res = await res.json();
    return res;
}
let main = async()=>{
     data = await getData();
     renderDom(0);
    console.log(data);
}
main();

*/
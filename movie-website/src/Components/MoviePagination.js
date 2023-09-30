import React from 'react';

const MoviePagination = () => {
  return (
    <div id='moviePagination'>
      <h1>Pagination Button Will Be Here!</h1>
    </div>
  );
};

export default MoviePagination;

// let cont = document.querySelector("#top");
// cont.innerHTML="";
// let data1 = data.slice(0,10);
// data1.forEach((el)=>{
//   let div = document.createElement("div");
//   let div1= document.createElement("div");
//   let div2= document.createElement("div");
//   let img=document.createElement("img");
//   img.src=el.urlToImage;
//   let h1=document.createElement("h1");
//   h1.innerText=el.title;
//   let p= document.createElement("p");
//   p.innerText=el.content;
//   let p1=document.createElement("p");
//   p1.innerText=el.description;
//   div.append(img);
//   div1.append(h1,p,p1);
//   div2.append(div,div1);
//   cont.append(div2);
// })
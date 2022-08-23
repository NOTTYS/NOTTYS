// import React, { useState } from "react";
// import "../Assets/sass/RandomPage.scss";
// import { Row, Col, Card } from "react-bootstrap";
// import name from "../JSON/name.json";
// import randomColor from "randomcolor";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Confetti from "react-confetti";

// function Test() {
//   // document.addEventListener( "DOMContentLoaded", function() {
//   //   // it's a div, that holds your news
//   //   // it holds ul with news in li elements
//   //   var div = document.getElementById( "container" );
//   //   div.addEventListener( "scroll", function() {
//   //     var max_scroll = this.scrollHeight - this.clientHeight;
//   //     var current_scroll = this.scrollTop;
//   //     var bottom = 100;
//   //     if ( current_scroll + bottom >= max_scroll ) {
//   //       var ul = document.getElementsByTagName( "ul" )[ 0 ];
//   //       var current = parseInt( ul.dataset.current, 10 );
//   //       var li = document.getElementsByTagName( "li" )[ current ];
//   //       var new_li = li.cloneNode( true );
//   //       ul.appendChild( new_li );
//   //       ul.dataset.current = current + 1;
//   //     }
//   //   } );
//   // } );

//   const [modalShow, setModalShow] = React.useState(false);
//   const [number, setnumber] = useState();
//   function reload() {
//     window.location.reload(true);
//   }
//   let randomNumber = name.sort(() => Math.random() - Math.random());
//   console.log(randomNumber);

//   let getMax = randomNumber.reduce((max, obj) =>
//     max.price > obj.price ? max : obj
//   );
//   console.log("Max value: ");
//   console.log(getMax);
//   // program to get a random item from an array

//   function Random() {
//     let slot = document.querySelector(".spin");
//     let item = document.querySelectorAll(".itemNumber");
//     const spin = document.querySelector(".circle");
//     let slot2;
//     // let clones = [];
//     // let disableScroll = false
//     // let scrollHeight = 0;
//     // let scrollpos = 0
//     // let clonesHeight = 0

//     // function getScrollPos() {
//     //   return slot.scrollTop;
//     // }

//     // function setSCrollPos(pos) {
//     //   slot.scrollTop = pos;
//     // }

//     // function getCloneHeight() {
//     //   clonesHeight = 0;

//     //   clones.forEach(clone => {
//     //     clonesHeight += clone.offsetHeight;
//     //   })

//     //   return clonesHeight
//     // }

//     // function reCalc() {
//     //   scrollpos = getScrollPos();
//     //   scrollHeight = slot.scrollHeight;
//     //   clonesHeight = getCloneHeight();

//     //   if(scrollpos <= 0) {
//     //     setSCrollPos(1);
//     //   }
//     // }

//     // function scrollUpdate() {
//     //   if(!disableScroll){
//     //     scrollpos = getScrollPos();
//     //     if(clonesHeight + scrollpos >= scrollHeight) {
//     //       setSCrollPos(1);
//     //       disableScroll = true
//     //     }
//     //     else if (scrollpos <= 0) {
//     //       setSCrollPos(scrollHeight - clonesHeight);
//     //       disableScroll = true;
//     //     }
//     //   }
//     //   if(disableScroll) {
//     //     window.setTimeout(()=> {
//     //       disableScroll = false
//     //     }, 40);
//     //   }
//     // }

//     // function onload() {
//     //     const clone = slot.cloneNode(true);
//     //     slot.appendChild(clone);
//     //     clone.classList.add('js-clone');

//     //   clones = slot.querySelectorAll('.js-clone');

//     //   reCalc();

//     //   slot.addEventListener('scroll', () =>{
//     //     window.requestAnimationFrame(scrollUpdate);
//     //   }, false);

//     //   window.addEventListener('resize', () => {
//     //     window.requestAnimationFrame(reCalc);
//     //   }, false);
//     // }

//     // window.reload = onload();

//     let value = 0;

//     value = Math.floor(12000 + Math.random() * 12000);

//     spin.style.visibility = 'hidden'
//     const height = slot.offsetHeight;
//     let y = 0;
//     let y2 = height;
//     let speed = 10;
//     for (let i = 0; i <= 6; i++) {
//       slot2 = slot.cloneNode(true);
//       slot.appendChild(slot2);
//       slot2.style.top = `${height}px`;
//     }

//     let target = document.querySelectorAll(`${getMax.price}`);
//     let rectTarget = target.getBoundingClientRect();
//     console.log("Position Y of target");
//     console.log(rectTarget);


//     console.log(value);
//     spin.classList.add("spinning");
//     setTimeout(() => {
//       slot.classList.add("blur")
//     }, 1000);
//     slot.style.transition = "all 20s ease";
//     slot.style.transform = `translateY(-${16000}px)`;
//     slot.addEventListener("transitionend", function () {
//       slot.style.transition = "none";
//       slot.classList.remove("blur")
//       setTimeout(() => {
//         setModalShow(true);
//       }, 1000);
//     });
//   }
//   Random()
//   return (
//     <div>
//       <div className="spin">
//             {randomNumber.map((e, key) => {
//               return (
//                 <li
//                   id={`${e.price}`}
//                   key={e.number}
//                   style={{
//                     backgroundColor: `${randomColor({
//                       format: "rgba",
//                       luminosity: "dark",
//                       height: "auto",
//                     })}`,
//                   }}
//                   className="itemNumber p-3 text-center fw-bold d-block mx-auto fs-3 text-white fw-bold"
//                 >
//                   {e.number}
//                 </li>
//               );
//             })}
//           </div>
//     </div>
//   );
// }

// export default Test;

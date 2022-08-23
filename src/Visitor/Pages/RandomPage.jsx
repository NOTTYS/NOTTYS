import React, { useState } from "react";
import "../Assets/sass/RandomPage.scss";
import { Row, Col, Card } from "react-bootstrap";
import name from "../JSON/name.json";
import randomColor from "randomcolor";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Confetti from "react-confetti";

function RandomPage(props) {

  const [modalShow, setModalShow] = React.useState(false);
  const [number, setnumber] = useState();

  //ຟັງເຊິນ Refresh Page
  function reload() {
    window.location.reload(true);
  }
  
  //ສະຫລັບຕຳແຫນ່ງຜູ້ໂຊກດີໃນ Array Object
  let randomNumber = name.sort(() => Math.random() - Math.random());
  console.log(randomNumber);

  //ຫາຜູ້ສຸ່ມທີ່ຊື້ເລກຫລາຍທີ່ສຸດ
  let getMax = randomNumber.reduce((max, obj) =>
    max.price > obj.price ? max : obj
  );
  console.log("Max value: ");
  console.log(getMax);

  function Random() {
    let slot = document.querySelector(".spin");
    let item = document.querySelectorAll(".itemNumber");
    const spin = document.querySelector(".circle");
    let slot2;

    //ຫາຂະຫນາດຂອງຟອມຈຳນວນຜູ້ສຸ່ມລວມກັນທັງຫມົດ
    let rectslot = slot.getBoundingClientRect();
    console.log("Position Y of slot");
    console.log(rectslot);
    // rectTarget.y-570
    // let clones = [];
    // let disableScroll = false
    // let scrollHeight = 0;
    // let scrollpos = 0
    // let clonesHeight = 0

    // function getScrollPos() {
    //   return slot.scrollTop;
    // }

    // function setSCrollPos(pos) {
    //   slot.scrollTop = pos;
    // }

    // function getCloneHeight() {
    //   clonesHeight = 0;

    //   clones.forEach(clone => {
    //     clonesHeight += clone.offsetHeight;
    //   })

    //   return clonesHeight
    // }

    // function reCalc() {
    //   scrollpos = getScrollPos();
    //   scrollHeight = slot.scrollHeight;
    //   clonesHeight = getCloneHeight();

    //   if(scrollpos <= 0) {
    //     setSCrollPos(1);
    //   }
    // }

    // function scrollUpdate() {
    //   if(!disableScroll){
    //     scrollpos = getScrollPos();
    //     if(clonesHeight + scrollpos >= scrollHeight) {
    //       setSCrollPos(1);
    //       disableScroll = true
    //     }
    //     else if (scrollpos <= 0) {
    //       setSCrollPos(scrollHeight - clonesHeight);
    //       disableScroll = true;
    //     }
    //   }
    //   if(disableScroll) {
    //     window.setTimeout(()=> {
    //       disableScroll = false
    //     }, 40);
    //   }
    // }

    // function onload() {
    //     const clone = slot.cloneNode(true);
    //     slot.appendChild(clone);
    //     clone.classList.add('js-clone');

    //   clones = slot.querySelectorAll('.js-clone');

    //   reCalc();

    //   slot.addEventListener('scroll', () =>{
    //     window.requestAnimationFrame(scrollUpdate);
    //   }, false);

    //   window.addEventListener('resize', () => {
    //     window.requestAnimationFrame(reCalc);
    //   }, false);
    // }

    // window.reload = onload();

    //ເພິ່ມຈຳນວນຜູ້ສຸ່ມເພື່ອບໍ່ໃຫ້ມັນເລື່ອນບໍ່ຫມົດ
    spin.style.visibility = 'hidden'
    const height = slot.offsetHeight;
    let y = 0;
    let y2 = height;
    let speed = 10;
    for (let i = 0; i <= 6; i++) {
      slot2 = slot.cloneNode(true);
      slot.appendChild(slot2);
      slot2.style.top = `${height}px`;
    }

    //ຫາຕຳແຫນ່ງຂອງ Element ຜູ້ໂຊກດີ
    let target = document.getElementById(`${getMax.price}`);
    let rectTarget = target.getBoundingClientRect();
    console.log("Position Y of target");
    console.log(rectTarget);

    //ຫາຄ່າ Rand
    let rand = Math.floor(Math.random() * (290 - 235 + 1)) + 235;
    console.log("rand is ")
    console.log(rand)

    spin.classList.add("spinning");
    setTimeout(() => {
      slot.classList.add("blur")
    }, 1000);
    slot.style.transition = "all 15s ease"; //ໃຫ້ເລື່ອນພາຍໃນ 15 ວິນາທີໃຫ້ເລື່ອນຂຶ້ນໄປເທິງເປັນແນວແກນ Y
    slot.style.transform = `translateY(-${(rectslot.height*5)+(rectTarget.y-rectslot.top-rand)}px)`; //ສູດຄຳນວນຫາຕຳແຫນ່ງ Element ຜູ້ໂຊກດີ ແບບແນວຕັ້ງແກນ Y

    //ເງື່ອນໄຂ ຫລັງຈາກຢຸດຫມຸນ
    slot.addEventListener("transitionend", function () { 
      slot.style.transition = "none";
      slot.classList.remove("blur")
      console.log(getMax)
      setTimeout(() => {
        setModalShow(true); //ສະແດງຟອມ Pop up
      }, 1500); //ເວລາໃນການສະແດງຟອມ Pop up
    });
  }

  return (
    <div>
      <body className="background">
        <div className="my-5 d-block mx-auto bg-white w-50 rounded rounded-5">
          <h1 className="p-3 text-center fw-bold shadow-lg">
            Spin ສຸ່ມລຸ້ນໂຊກຄັ້ງທີ 1
          </h1>
        </div>
        <div style={{height: 600}}>
        <div className="border border-5 d-block mx-auto formRandom position-relative">
          <div
            onClick={() => Random()}
            className="circle shadow border border-1"
          >
            Spin
          </div>
          <div className="arrow-right"></div>
          <div className="arrow-left"></div>
          <div className="spin">
            {randomNumber.map((e, key) => {
              return (
                <li
                  id={`${e.price}`}
                  key={e.number}
                  style={{
                    backgroundColor: `${randomColor({
                      format: "rgb",
                      luminosity: "dark",
                    })}`,
                  }}
                  className="itemNumber"
                >
                  <h2 className="number text-center fw-bold text-white fw-bold">{e.number}</h2>
                </li>
              );
            })}
          </div>
        </div>
        </div>
      <audio src=""></audio>
        {/* <Button
          className="d-block mx-auto my-5"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Launch vertically centered modal
        </Button> */}

        <div className="my-5 d-block mx-auto bg-white w-50 rounded rounded-5">
          <h1 className="p-3 text-center fw-bold shadow-lg">ເລກບິນຜູ້ໂຊກດີ</h1>
        </div>
        <Row className="px-5">
          <Col className="border border-1 border-top-0 border-left-0 border-bottom-0">
            <div className="my-5 d-block mx-auto bg-white rounded rounded-5 w-50">
              <h4 className="p-3 text-center fw-bold shadow-lg">
                ລາງວັນ 1,000,000 ກີບ
              </h4>
            </div>
            <Card
              className="mb-4 cardbox d-block mx-auto"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  100000000
                </Card.Title>
                <hr />
                <Card.Title className="text-center mb-3">1</Card.Title>
                <Card.Title className="fs-3 text-center text-white prize">
                  100000 ກີບ
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="border border-1 border-top-0 border-left-0 border-bottom-0">
            <div className="my-5 d-block mx-auto bg-white rounded rounded-5 w-50">
              <h4 className="p-3 text-center fw-bold shadow-lg">
                ລາງວັນ 500,000 ກີບ
              </h4>
            </div>
            <Card
              className="mb-4 cardbox d-block mx-auto"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  100000000
                </Card.Title>
                <hr />
                <Card.Title className="text-center mb-3">1</Card.Title>
                <Card.Title className="text-center text-white prize">
                  100000 ກີບ
                </Card.Title>
              </Card.Body>
            </Card>

            <Card
              className="mb-4 cardbox d-block mx-auto"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  100000000
                </Card.Title>
                <hr />
                <Card.Title className="text-center mb-3">1</Card.Title>
                <Card.Title className="text-center text-white prize">
                  100000 ກີບ
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="border border-1 border-top-0 border-left-0 border-bottom-0">
            <div className="my-5 d-block mx-auto bg-white rounded rounded-5 w-50">
              <h4 className="p-3 text-center fw-bold shadow-lg">
                ລາງວັນ 100,000 ກີບ
              </h4>
            </div>
            <Row>
              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                className="mb-4 cardbox d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    100000000
                  </Card.Title>
                  <hr />
                  <Card.Title className="text-center mb-3">1</Card.Title>
                  <Card.Title className="text-center text-white prize">
                    100000 ກີບ
                  </Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          animation={false}
          className="rounded rounded-5"
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          <Confetti className="w-100" />
          <Modal.Body className="border border-1">
            <h2 className="text-center mt-1 mb-4 fw-bold">ຜູ້ໂຊກດີ</h2>
            <h3 style={{backgroundColor: "#00A8CC"}} className="bd text-center my-5 shadow p-3 text-white rounded rounded-3">
              {`ເລກບິນ: ${getMax.number}\n `}
              <br />
              <br />
              {`ຊື່ຜູ້ໂຊກດີ: ${getMax.first_name} ${getMax.last_name}`}
              <br />
              <br />
              <h3 className="fw-bold fs-1">{`ເງິນລາງວັນ 1,000,000 ກີບ`}</h3>
            </h3>
          </Modal.Body>
          <Button className="w-25 d-block mx-auto my-3 fs-3" onClick={reload}>
            ປິດ
          </Button>
        </Modal>
        {/* <FormPopUp />

        <FormPopUp show={modalShow} onHide={() => setModalShow(false)} /> */}
      </body>
    </div>
  );
}

export default RandomPage;

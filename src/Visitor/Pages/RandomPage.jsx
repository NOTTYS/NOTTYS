import React, { useState } from "react";
import "../Assets/sass/RandomPage.scss";
import "../Assets/sass/LuckyPeople.scss";
import "../Assets/sass/LuckyName.scss";
import { Row, Col, Card } from "react-bootstrap";
import name from "../JSON/name.json";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Confetti from "react-confetti";
import Select from "react-select";
import LuckyGuys from "../JSON/LuckyGuys.json";
import AOS from "aos";
import "aos/dist/aos.css";

function RandomPage(props) {
  AOS.init();

  let randNumber = Math.floor(Math.random() * name.length);
  let lucky = name[randNumber];

  const [modalShow, setModalShow] = React.useState(false);
  const [luckyNumber, setLuckyNumber] = useState(lucky);
  const [select, setSelect] = useState();
  const [data, setData] = useState(LuckyGuys.slice(0, 20));

  function getInput(event) {
    setSelect(event.label);
    filterData(event.label);
  }

  const filterData = (value) => {
    if (!value) {
      setData(LuckyGuys);
    } else if (value) {
      const filteredData = [];
      setData(filteredData);
    } else if (value != LuckyGuys.value) {
      const filteredData = ["No data"];
      setData(filteredData);
    }
  };

  //ຟັງເຊິນ Refresh Page
  function reload() {
    window.location.reload(true);
  }

  //ສະຫລັບຕຳແຫນ່ງຜູ້ໂຊກດີໃນ Array Object
  let randomNumber = name.sort(() => Math.random() - Math.random());
  console.log("random Array");
  console.log(randomNumber);

  console.log("random Lucky Number");
  console.log(luckyNumber);

  //ຫາຜູ້ສຸ່ມທີ່ຊື້ເລກຫລາຍທີ່ສຸດ
  // let getMax = randomNumber.reduce((max, obj) =>
  //   max.price > obj.price ? max : obj
  // );
  // console.log("Max value: ");
  // console.log(getMax); {
  const colors = [
    "#F24C4C",
    "#EC9B3B",
    "#FBCB0A",
    "#6BCB77",
    "#4D96FF",
    "#1576EC",
    "#7A39CEE5",
    "#D840BFE5",
  ];

  function Random() {
    let slot = document.querySelector(".spin");
    let item = document.querySelectorAll(".itemNumber");
    let text = document.querySelectorAll(".TextNumber")
    const spin = document.querySelector(".circle");
    var speed = 0;
    let slot2;

    if (name.length > 10) {
      speed = 6
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 68px");
        console.log(name.length);
      }
    } else if (name.length <= 10 && name.length > 5) {
      speed = 20
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 198px");
        console.log(name.length);
      }
    } else if (name.length <= 5 && name.length > 2) {
      speed = 20
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 298px");
        console.log(name.length);
      }
    } else if (name.length <= 3 && name.length > 2) {
      speed = 20
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 298px");
        console.log(name.length);
      }
    } else if (name.length == 2 && name.length > 1) {
      speed = 20
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 398px");
        console.log(name.length);
      }
    } else if (name.length == 1) {
      for (let i = 0; i < item.length; i++) {
        item[i].setAttribute("style", "justify-content: center; align-item: center; line-height: 298px");
        console.log(name.length);
      }
      alert("ບໍ່ສາມາດສຸ່ມໃດ້ ຖ້າມີຜູ້ສຸ່ມພຽງຄົນດຽວ")
      reload()
    } else if (name.length == 0) {
      alert("ບໍ່ມີລາຍຊື່ຜູ້ສຸ່ມ ບໍ່ສາມາດສຸ່ມໃດ້")
      reload()
    }

    //ຫາຂະຫນາດຂອງຟອມຈຳນວນຜູ້ສຸ່ມລວມກັນທັງຫມົດ
    let rectslot = slot.getBoundingClientRect();
    console.log("Position Y of slot");
    console.log(rectslot);

    //ເພິ່ມຈຳນວນຜູ້ສຸ່ມເພື່ອບໍ່ໃຫ້ມັນເລື່ອນບໍ່ຫມົດ
    spin.style.visibility = "hidden";
    const height = slot.offsetHeight;
    for (let i = 0; i <= 6; i++) {
      slot2 = slot.cloneNode(true);
      slot.appendChild(slot2);
      slot2.style.top = `${height}px`;
    }

    //ຫາຕຳແຫນ່ງຂອງ Element ຜູ້ໂຊກດີ
    let target = document.getElementById(`${luckyNumber.price}`);
    let rectTarget = target.getBoundingClientRect();
    console.log("Position Y of target");
    console.log(rectTarget);

    //ຫາຄ່າ Rand
    let rand = Math.floor(Math.random() * (290 - 235 + 1)) + 235;
    console.log("rand is ");
    console.log(rand);

    spin.classList.add("spinning");
    setTimeout(() => {
      slot.classList.add("blur");
    }, 1000);
    slot.style.transition = "all 15s ease"; //ໃຫ້ເລື່ອນພາຍໃນ 15 ວິນາທີໃຫ້ເລື່ອນຂຶ້ນໄປເທິງເປັນແນວແກນ Y
    slot.style.transform = `translateY(-${
      (rectslot.height * speed) + (rectTarget.y - rectslot.top - rand)
    }px)`; //ສູດຄຳນວນຫາຕຳແຫນ່ງ Element ຜູ້ໂຊກດີ ແບບແນວຕັ້ງແກນ Y

    //ເງື່ອນໄຂ ຫລັງຈາກຢຸດຫມຸນ
    slot.addEventListener("transitionend", function () {
      slot.style.transition = "none";
      slot.classList.remove("blur");
      setTimeout(() => {
        setModalShow(true); //ສະແດງຟອມ Pop up
      }, 1500); //ເວລາໃນການສະແດງຟອມ Pop up
    });
  }
  console.log(colors);

  return (
    <div>
      <div className="background">
        {/* {colors.forEach(<div style={{ backgroundColor: colors}} className="w-50">Colors</div>)} */}
        <div className="d-flex justify-content-center mt-5">
          <p className="fs-3 px-3">ເລືອກງວດ:</p>
          <Select
            id="select"
            placeholder={select}
            className="w-25 search-box"
            value={select}
            onChange={getInput}
            options={LuckyGuys}
          />
          <p className="fs-3 ps-5 pe-3">ເລືອກລາງວັນ:</p>
          <Select
            id="select"
            placeholder={select}
            className="w-25 search-box"
            value={select}
            onChange={getInput}
            options={LuckyGuys}
          />
        </div>
        <h1 className="my-4 p-3 text-center fw-bold fs-2 backgroundText1">
          Spin ສຸ່ມລຸ້ນໂຊກ
        </h1>
        <div style={{ height: 600 }} data-aos="fade-up">
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
                  <div
                    id={`${e.price}`}
                    key={e.number}
                    className="itemNumber border border-1 text-center text-white fs-2 fw-bold"
                  >
                      {e.number}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <audio src=""></audio>

        <div className="my-5">
          <h1 className="p-3 text-center fw-bold backgroundText2">
            ເລກບິນຜູ້ໂຊກດີ
          </h1>
        </div>
        <Row className="px-5">
          <Col className="border border-1 border-top-0 border-left-0 border-bottom-0">
            <div className="my-5 d-block mx-auto bg-white rounded rounded-5 w-50">
              <h4 className="p-3 text-center fw-bold shadow-lg">
                ລາງວັນ 1,000,000 ກີບ
              </h4>
            </div>
            <div
              className="mx-3 mb-4 luckybox shadow d-block mx-auto"
              style={{ width: "18rem" }}
            >
              <p className="mt-4 text-center fw-bold fs-3 textColor">
                {`Hi`} <br /> {`Hi`}
              </p>
              <hr className="line" />
              <p className="mt-4 text-center fw-bold fs-3 textColor">
                {`ເລກບິນ`} <br /> {`1`}
              </p>
              <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-3 mb-5">{`ລາງວັນ: 1,000,000 ກີບ`}</p>
            </div>
          </Col>
          <Col className="border border-1 border-top-0 border-left-0 border-bottom-0">
            <div className="my-5 d-block mx-auto bg-white rounded rounded-5 w-50">
              <h4 className="p-3 text-center fw-bold shadow-lg">
                ລາງວັນ 500,000 ກີບ
              </h4>
            </div>
            <div
              className="mx-3 mb-4 luckybox shadow d-block mx-auto"
              style={{ width: "18rem" }}
            >
              <p className="mt-4 text-center fw-bold fs-3 textColor">
                {`Hi`} <br /> {`Hi`}
              </p>
              <hr className="line" />
              <p className="mt-4 text-center fw-bold fs-3 textColor">
                {`ເລກບິນ`} <br /> {`1`}
              </p>
              <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
            </div>

            <div
              className="mx-3 mb-4 luckybox shadow d-block mx-auto"
              style={{ width: "18rem" }}
            >
              <p className="mt-4 text-center fw-bold fs-3 textColor">
                {`Hi`} <br /> {`Hi`}
              </p>
              <hr className="line" />
              <p className="mt-4 text-center fw-bold fs-3 textColor">
                {`ເລກບິນ`} <br /> {`1`}
              </p>
              <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
            </div>
          </Col>

          <Col className="border border-1 border-top-0 border-left-0 border-bottom-0">
            <div className="my-5 d-block mx-auto bg-white rounded rounded-5 w-50">
              <h4 className="p-3 text-center fw-bold shadow-lg">
                ລາງວັນ 100,000 ກີບ
              </h4>
            </div>

            <Row>
              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>

              <div
                className="mx-3 mb-4 luckybox shadow d-block mx-auto"
                style={{ width: "18rem" }}
              >
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`Hi`} <br /> {`Hi`}
                </p>
                <hr className="line" />
                <p className="mt-4 text-center fw-bold fs-3 textColor">
                  {`ເລກບິນ`} <br /> {`1`}
                </p>
                <p className="text-center fw-bold fs-4 text-center fw-bold fs-3 bgPrize py-3 mx-4 mb-5">{`ລາງວັນ: 1`}</p>
              </div>
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
            <h3
              style={{ backgroundColor: "#00A8CC" }}
              className="bd text-center my-5 shadow p-3 text-white rounded rounded-3"
            >
              {`ເລກບິນ: ${luckyNumber.number}\n `}
              <br />
              <br />
              {`ຊື່ຜູ້ໂຊກດີ: ${luckyNumber.first_name} ${luckyNumber.last_name}`}
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
      </div>
    </div>
  );
}

export default RandomPage;

import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useEffect } from "react";

const SubsribeButton = ({ companyName, isSubscribed, portfolioPage }) => {
  const [subscribeLoading, setSubscribeLoading] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [interestPoint, setInterestPoint] = useState(-1);

  const handleChange = (e) => {
    setInterestPoint(e.target.value);
  };

  useEffect(() => {
    const storedPosition = sessionStorage.getItem("scrollPosition");
    if (storedPosition) {
      window.scrollTo(0, parseInt(storedPosition));
      setScrollPosition(parseInt(storedPosition));
    }

    const handleScroll = () => {
      const position = window.pageYOffset;
      sessionStorage.setItem("scrollPosition", position);
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [interestPoint]);

  const subscribe = async (e) => {
    if (!isSubscribed) {
      let data = {
        memberId: JSON.parse(sessionStorage.getItem("data")).id,
        companyName: companyName,
      };
      await axios
        .post("http://localhost:8080/add/portfolio", JSON.stringify(data), {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((res) => {
          console.log(res);
          setSubscribeLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
      setSubscribeLoading(true);
      window.location.reload();
    } else {
      unSubscribe();
    }
  };

  const unSubscribe = async (e) => {
    console.log("unSub");
    let data = {
      memberId: JSON.parse(sessionStorage.getItem("data")).id,
      companyName: companyName,
    };
    console.log("data");

    await axios
      .post("http://localhost:8080/remove/portfolio", JSON.stringify(data), {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log(res);
        setSubscribeLoading(false);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
    setSubscribeLoading(true);
  };

  if (portfolioPage) {
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          구독 중..
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>구독 취소를 하시겠습니까?</Modal.Title>
          </Modal.Header>
          <Modal.Body>구독을 취소하실 경우 알람을 못 받습니다.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                unSubscribe();
              }}
            >
              네, 취소합니다.
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  if (!isSubscribed) {
    console.log(interestPoint);
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          구독하기
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            완료하기 버튼을 누르면 구독이 완료됩니다!
            <input onChange={handleChange} />
            <img src="../img/Brazuca - Pride.png" alt="모나리자" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                subscribe();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          구독 중..
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>설정 값을 변경 하시겠습니까?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input onChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                unSubscribe();
              }}
            >
              아니요, 구독을 취소합니다.
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};

export default SubsribeButton;

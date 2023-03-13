import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";

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
    console.log(interestPoint, companyName);
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
            <Modal.Title>구독을 통해 알람을 받아보세요.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            관심도를 설정 하여 알림을 받을 수 있습니다.
            <InputGroup>
              <InputGroup.Text>회사의 관심도 설정</InputGroup.Text>
              <Form.Control
                aria-label="Dollar amount (with dot and two decimal places)"
                onClick={handleChange}
              />
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup>
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
            관심도 값을 설정 후 메일을 통해 알람을 받을 수 있습니다.
            <InputGroup>
              <InputGroup.Text>회사의 관심도 설정</InputGroup.Text>
              <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                subscribe();
              }}
            >
              설정 값 변경
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

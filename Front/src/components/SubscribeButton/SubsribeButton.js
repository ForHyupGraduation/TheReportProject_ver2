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
  const [interestPoint, setInterestPoint] = useState();

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
        interestPoint: interestPoint,
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
      // window.location.reload();
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
          ?????? ???..
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>?????? ????????? ???????????????????</Modal.Title>
          </Modal.Header>
          <Modal.Body>????????? ???????????? ?????? ????????? ??? ????????????.</Modal.Body>
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
              ???, ???????????????.
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
          ????????????
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>????????? ?????? ????????? ???????????????.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ???????????? ?????? ?????? ????????? ?????? ??? ????????????.
            <InputGroup>
              <InputGroup.Text>????????? ????????? ??????</InputGroup.Text>
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
          ?????? ???..
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>?????? ?????? ?????? ???????????????????</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ????????? ?????? ?????? ??? ????????? ?????? ????????? ?????? ??? ????????????.
            <InputGroup>
              <InputGroup.Text>????????? ????????? ??????</InputGroup.Text>
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
              ?????? ??? ??????
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                unSubscribe();
              }}
            >
              ?????????, ????????? ???????????????.
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};

export default SubsribeButton;

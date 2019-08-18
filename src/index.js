import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import axios from "axios";

import "./styles.scss";
import ModalWindow from "./components/ModalWindow";

const App = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState([false, "", ""]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const handleClose = () => {
    setModal(false);
  };
  const handleShow = (show, name, email) => {
    setModal([show, name, email]);
  };

  const removeUser = (e, userID) => {
    e.stopPropagation();
    const persistUsers = users.filter(user => user.id !== userID);
    setUsers(persistUsers);
  };

  return users ? (
    <div className="App">
      <Container>
        <Row>
          {users.map((user, i) => {
            return (
              <Col sm={4} key={i}>
                <Card
                  onClick={() =>
                    handleShow(true, users[i].name, users[i].email)
                  }
                >
                  <div className="close-div">
                    <button
                      className="close-button"
                      onClick={e => {
                        removeUser(e, users[i].id);
                      }}
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                  <img
                    className="avatar"
                    alt={i}
                    src={`https://robohash.org/${users[i].id}?set=set2`}
                  />
                  <p>{users[i].name}</p>
                  <p>{users[i].email}</p>
                  <p>{users[i].company.name}</p>
                  <Badge variant={i % 2 === 0 ? `info` : `warning`}>
                    {i % 2 === 0 ? `Odd` : `Even`}
                  </Badge>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <ModalWindow modal={modal} handleClose={handleClose} />
    </div>
  ) : (
    <div>No Data</div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

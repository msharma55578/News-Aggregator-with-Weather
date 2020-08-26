import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import "./NewsPage.css";
function NewsPage(props) {
  const { post } = props.articles;
  return (
    <span className="OCard">
        
      {/* <h2>{props.articles.title}</h2>  
       <h4>{props.articles.description}</h4>
            <h4>{props.articles.url}</h4>
            <h4>{props.articles.image}</h4>
            <h5>{props.articles.publishedAt}</h5>
        <img src={props.articles.image} alt="image"/> */}
    
      <CardDeck style={{
        width: "350px",
        position: "relative",
        boxShadow: "6px 6px 6px 6px rgb(204,204,204)",
      }}>
        <Card>
          <Card.Img variant="top" src={props.articles.image} />
          <Card.Body>
            <Card.Title>{props.articles.title}</Card.Title>
            <Card.Text>{props.articles.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.articles.publishedAt}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </span>
  );
}

export default NewsPage;

import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const SearchResults = ({ data, history }) => {
  const roomLink = '/room/' + data.roomID;

  return (
    <a href={roomLink}>
      <Card>
        <CardImg top src={data.image || "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"} alt="Card image cap" />
        <CardBody>
          <CardTitle>{data.title}</CardTitle>
          <CardSubtitle>{data.site}</CardSubtitle>
          <CardSubtitle>{data.date}</CardSubtitle>
          <CardSubtitle>{data.usersOnline} users online</CardSubtitle>
          <CardText>{data.description}</CardText>
        </CardBody>
      </Card>
    </a>
  );
};

export default SearchResults;
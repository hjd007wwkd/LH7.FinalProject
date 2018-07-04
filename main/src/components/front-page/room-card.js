import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const SearchResults = ({ data, history }) => {
  const roomLink = '/room/' + data.roomID;
  const date = new Date(data.date);
  return (
    <a href={roomLink}>
      <Card>
        <CardImg top src={data.image || "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"} alt="Card image cap" />
        <CardBody>
          <CardTitle>{data.title.length > 40 ? `${data.title.slice(0, 60)}...` : data.title.slice(0, 40)}</CardTitle>
          <CardSubtitle className="news-site">{`${data.site} - ${date.toDateString()}`}</CardSubtitle>
          <CardText>{data.description.length > 182 ? `${data.description.slice(0, 182)}...` : data.description.slice(0, 100)}</CardText>
          <CardSubtitle className='user_online'>{data.usersOnline} users online</CardSubtitle>
        </CardBody>
      </Card>
    </a>
  );
};

export default SearchResults;
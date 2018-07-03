import React from 'react';

const ArticleView = (props) => {
  return (
    <React.Fragment>
      <div className="article-title">
        <h3>{props.articleData.title}</h3>
        <p>{props.articleData.site}</p>
        <p>{props.articleData.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.articleData.content }} />
    </React.Fragment>
  );
}

export default ArticleView;
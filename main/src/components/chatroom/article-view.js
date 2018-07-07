import React from 'react';

const ArticleView = ({ articleData }) => {
  return (
    <React.Fragment>
      <div className="article-title">
        <h3>{articleData.title}</h3>
        <p>{articleData.site}</p>
        <p>{new Date(articleData.date).toDateString()}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: articleData.content }} />
    </React.Fragment>
  );
}

export default ArticleView;
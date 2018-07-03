import React from 'react';

const ArticleView = (props) => {
  return (
    <div className="article-container">
      <div dangerouslySetInnerHTML={{ __html: props.article[0].content }} />
    </div>
  );
}

export default ArticleView;
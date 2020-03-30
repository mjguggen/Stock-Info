import React from 'react';

const News = props => (
    <div>
        {props.articles && <div id="news">
        <div className='news' id={'news-'+props.mode}>
             <h2 className='section-title' id={'section-title-'+props.mode}>News</h2>
             {props.articles}


            </div>
        </div>  }
    </div>
);



export default News;
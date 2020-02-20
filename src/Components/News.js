import React from 'react';


const News = props => (


    <div>
        {props.source1 && <div id="news">
        <div className='news' id={'news-'+props.mode}>
            { props.source && <h2 className='section-title' id={'section-title-'+props.mode}>News</h2>}
            { props.source && <div className='news-container'>
                <a className='article-container' id={'article-container-'+props.mode} href={props.url} target="_blank">
                    { props.source && <p className="article-source"> { props.source } </p> }
                    { props.title && <p className="article-title"> { props.title } </p> }
                    <div className='article-info'>
                        { props.description && <p className="article"> { props.description } </p> }
                    </div>
                </a>
                <a className='article-container' id={'article-container-'+props.mode} href={props.url1} target="_blank">
                    { props.source1 && <p className="article-source"> { props.source1 } </p> }
                    { props.title1 && <p className="article-title"> { props.title1 } </p> }
                    <div className='article-info'> 
                        { props.description1 && <p className="article"> { props.description1 } </p> }
                    </div>
                </a>
                <a className='article-container' id={'article-container-'+props.mode} href={props.url2} target="_blank">
                    { props.source2 && <p className="article-source"> { props.source2 } </p> }
                    { props.title2 && <p className="article-title"> { props.title2 } </p> }
                    <div className='article-info'> 
                        { props.description2 && <p className="article"> { props.description2 } </p> }
                    </div>
                </a>
                <a className='article-container' id={'article-container-'+props.mode} href={props.url3} target="_blank">
                    { props.source3 && <p className="article-source"> { props.source3 } </p> }
                    { props.title3 && <p className="article-title"> { props.title3 } </p> }
                    <div className='article-info'> 
                        { props.description3 && <p className="article"> { props.description3 } </p> }
                    </div>
                </a>
                <a className='article-container' id={'article-container-'+props.mode} href={props.url4} target="_blank">
                    { props.source4 && <p className="article-source"> { props.source4 } </p> }
                    { props.title4 && <p className="article-title"> { props.title4 } </p> }
                    <div className='article-info'> 
                        { props.description4 && <p className="article"> { props.description4 } </p> }
                    </div>    
                </a>
            </div> }
            </div>
        </div>  }
    </div>
);


export default News;
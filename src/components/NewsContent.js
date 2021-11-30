import React from 'react';

const NewsContent = (props) => {

    return (
        <div className="table">
            <div className="card p-0">
                <tr>
                    <td className="col-3"><img className="img-thumbnail img-center mt-5" src={props.news.urlToImage} alt={props.news.title} /></td>
                    <td className="mt-0">
                        <h3 className="fw-bolder mt-0">{props.news.title}</h3>
                        <div>
                            <p>
                                <button className="btn btn-secondary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#viewDetails" aria-expanded="false" aria-controls="viewDetails">
                                    Views Details
                                </button>
                            </p>
                            <div >
                                <div class="collapse" id="viewDetails">
                                    <div>
                                        <td className="fw-bold">
                                            <tr>
                                            <td>Author  <br /> </td>
                                            <td> :  {props.news.author}</td>
                                            </tr>
                                            <tr>
                                            <td>Source  <br /> </td>
                                            <td> :  {props.news.source.name}</td>
                                            </tr>
                                            
                                        </td>
                                        <p className="mt-3"> Description : {props.news.content}  </p>
                                        <p className="fw-bold text-end">{props.news.publishedAt} </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </td>
                </tr>


            </div>

        </div>

    );
}

export default NewsContent;

import React, { Fragment } from 'react';

import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const MovieData = ({movie}) => {
    const {title,poster_path,overview,release_date } = movie;
   

    return (
    <Fragment>
        <Card border="primary" style={{ width: '25rem' }}>
            <Card.Header><Card.Title>{title}</Card.Title></Card.Header>
            <Card.Img variant="top" height="300rem" src= {`https://image.tmdb.org/t/p/w300/${poster_path}`} alt= {title}/>
            <Card.Text> Realease Date : {release_date ? release_date : <h11>No Release Date Provided</h11>}</Card.Text>
            <Card.Body>
                <Card.Text>
                        {overview ? overview : <h2>NO Description</h2>}  
                </Card.Text>
            </Card.Body>
        </Card>
        <br/>

        </Fragment>
    );

};

export default MovieData;
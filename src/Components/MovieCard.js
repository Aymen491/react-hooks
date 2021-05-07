import React from 'react';
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
function MovieCard({ el }) {

    return (
        <div className="listM">
            { <div style={{ height: '600px' }} className="Movie">
                <Card >
                    <Card.Body>
                        <Card.Img id="cardimg" variant="top" src={el.Image} />
                        <Card.Title>{el.title}</Card.Title>
                        <Card.Text>{el.Year}</Card.Text>
                        <ReactStars value={el.rate} count={5} edit={false} size={30} />
                    </Card.Body>
                </Card>


            </div>

            }


        </div>

    );
}
export default MovieCard;

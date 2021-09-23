import type { NextPage } from 'next';
import Button from "react-bootstrap/Button";
import Image from 'next/image';
import Card from "react-bootstrap/Card";

interface Props {
    name: string;
    rating: number;
    imageAddress: string;
    location: {
        country: string;
        state: string;
        city: string;
    }
}

const Hotel: NextPage<Props> = (props) => {
    const { name, rating, location, imageAddress } = props;
    const { country, state, city } = location;

    let color = null;
    if (rating >= 1 && rating < 2.5)
        color = 'red';
    else if (rating >= 2.5 && rating < 4)
        color = 'orange';
    else if (rating >= 4 && rating < 5)
        color = 'green';
    else if (rating === 5)
        color = 'blue';

    return (
        <Card className="hotel">
            <Card.Img variant="top" src={imageAddress} />
            <Card.Body>
                <Card.Title className="hotel__name">{name}</Card.Title>
                <Card.Text className="hotel__location">{city}, {state}, {country}</Card.Text>
                <Card.Text className="hotel__description">
                    Some quick example text to build on the card title and make up the bulk of
                    the cards content. Some quick example text to build on the card title and make up the bulk of
                    the cards content.
                </Card.Text>
                <Card.Text className="hotel__rating" style={{
                    backgroundColor: `${color}`,
                    width: '10%',
                    color: '#fff',
                    borderRadius: '0.25rem',
                    margin: '25px auto'
                }}>{rating}</Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
    );
}

export default Hotel;
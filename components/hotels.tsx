import type { NextPage } from 'next';
import Hotel from "./hotel";

interface Props {
    searchValue: string
};

const data = {
    hotels: [
        {
            id: 1,
            name: 'Villa Olga',
            imageAddress: 'https://villaspro.com/images/w.1280/h.853/c.1/mr.1/d.listing_photos/sd.2018-01/i.2ff7bbbbb80879b72313aeba020b9e54.jpg',
            rating: 4.9,
            location: {
                country: 'Greece',
                state: 'Central Macedonia',
                city: 'Kriptos'
            }
        }
    ]
};

const Hotels: NextPage<Props> = (props) => {
    return (
        <div className="hotels">
            {data.hotels
                .filter(i => {
                    if (props.searchValue === "" || !props.searchValue) {
                        return i;
                    }
                    else if (i.name.toLowerCase().includes(props.searchValue)) {
                        return i;
                    }
                })
                .map(i => {
                    return <Hotel
                        key={i.id}
                        name={i.name}
                        imageAddress={i.imageAddress}
                        rating={i.rating}
                        location={i.location} />
                })}
        </div>
    );
}

export default Hotels;
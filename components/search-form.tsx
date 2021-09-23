import type { NextPage } from 'next';
import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
interface Props {
    setSearchValue: (arg: any) => void
}

const SearchForm: NextPage<Props> = (props) => {
    const locationRef = useRef<HTMLInputElement>(null);

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(locationRef.current?.value);
        props.setSearchValue(locationRef.current?.value);
    }

    return (
        <Form className="search-form" onSubmit={onFormSubmit}>
            <h2>Search for locations or hotels.</h2>
            <Container>
                <Form.Group controlId="location">
                    <Form.Control ref={locationRef} type="text" placeholder="Where are you going?" />
                    {/* <Autocomplete ref={locationRef} placeholder="Where are you going?" /> */}
                </Form.Group>
                <Button type="Submit" style={{ marginLeft: '5px' }}>Search</Button>
            </Container>
        </Form>
    );
}

export default SearchForm;
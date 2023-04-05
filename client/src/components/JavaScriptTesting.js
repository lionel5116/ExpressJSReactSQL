import React from 'react'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { fetchCandidateNominees } from '../api/sharedAPI';


function JavaScriptTesting() {

    const fetchCandidateNomineesRecords = async (e) => {
        //e.preventDefault();
        try {
            let _SEARCH_DATA = [];
            _SEARCH_DATA = await fetchCandidateNominees();
            console.log(_SEARCH_DATA)
            if (_SEARCH_DATA !== null) {
                console.log("Records returned")
                
            }
            else {
                console.log("Nothing returned")
            }

        }
        catch (err) {
            console.log(err)

        }

    }

    const onSubmit = e => {

        e.preventDefault();

        fetchCandidateNomineesRecords()

    }

    return (
        <div className="container">
            <br />
            <h1>
                Javascript Testing Harness
            </h1>
            <Form onSubmit={e => onSubmit(e)}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    )
}

export default JavaScriptTesting
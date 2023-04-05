import React from 'react'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { fetchCandidateNominees } from '../api/sharedAPI';
import { fethECCSchoolData } from '../api/sharedAPI';



function JavaScriptTesting() {

    const fetchCandidateNomineesRecords = async (e) => {
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

    const fetchECCSchoolRecords = async (e) => {
        try {
            let _FETCH_DATA = [];
            _FETCH_DATA = await fethECCSchoolData();

            if (_FETCH_DATA !== null) {
                console.log(_FETCH_DATA);
                console.log(_FETCH_DATA[0].EducationOrgNaturalKey)
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

    return (
        <div className="container">
            <br />
            <h1>
                Javascript Testing Harness
            </h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Button variant="primary">
                            Fetch Candidate Nominees
                        </Button>
                        <Button variant="warning"
                         onClick={(e)=>fetchECCSchoolRecords(e)}
                        >
                            ECC School Data
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    )
}

export default JavaScriptTesting
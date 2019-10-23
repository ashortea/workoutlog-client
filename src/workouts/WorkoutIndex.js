import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutTable from './WorkoutTable';

const WorkoutIndex =(props) =>{
    const [workouts, setWorkouts]= useState([]);

    const fetchWorkouts = () => {
        fetch('http://localhost:3000/api/log/', {
            method:'GET',
            headers: new Headers({
                'Content-Type': 'appication/json',
                'Authorization': props.token
            })
        }).then((res)=> res.json())
        .then((logData) => {
            setWorkouts(logData)
        })
    }

    useEffect(()=> {
        fetchWorkouts();
    }, [])

    return(
        <Container>
            <Row>
                <Col md ="3">
                    <WorkoutCreate fetchWorkouts={fetchWorkouts} token={props.token}/>
                </Col>
                <Col md="9">
                    <WorkoutTable workouts={workouts} token={props.token}/>
                </Col>
            </Row>
        </Container>
    )
}
export default WorkoutIndex;
 
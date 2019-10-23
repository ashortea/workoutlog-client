import React from 'react';
import {Table, Button} from 'reactstrap';

const WorkoutTable = (props) => {

    const deleteWorkout =(workout) => {
        fetch ('http://localhost:3000/api/log/${workout.id}',{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(()=> props.fetchWorkouts())
    }
    const workoutMapper=() =>{
        return props.workout.map((workout, index) =>{
            return(
                <tr key={index}>
                    <th scope='row'>{workout.id}</th>
                    <td>{workout.results}</td>
                    <td>{workout.description}</td>
                    <td>{workout.definition}</td>
                    <td>
                        <Button color="warning">Update</Button>
                        <Button color="danger" onClick={()=>{deleteWorkout(workout)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Workout History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Result</th>
                    <th>Description</th>
                    <th>Definition</th>
                </tr>
            </thead>
        </Table>
        </>
    )
}
export default WorkoutTable;
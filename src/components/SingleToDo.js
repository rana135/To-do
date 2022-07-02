import React from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

const SingleToDo = ({ task, refetch, index }) => {

    const { date, taskInput, _id, complete } = task

    const handleComplete = (e, id) => {

        fetch(`http://localhost:5000/api/completeTask/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success("Added into Completed Task", { id: "completed task" })
                refetch()
            }
        })

    }


    return (
        <>
            {
                !complete &&
                <>
                    <tr className="hover">
                        <th>{index + 1}</th>
                        <td><input onClick={(e) => handleComplete(e, _id)} type="checkbox" name="" id="" /> </td>
                        <td>{date}</td>
                        <td>{taskInput}</td>
                        <td><Link to={`/singleToDo/${_id}`} className='bg-blue-600 text-white px-3 py-1'>Edit</Link></td>
                    </tr>
                </>
            }
        </>
    );
};

export default SingleToDo;
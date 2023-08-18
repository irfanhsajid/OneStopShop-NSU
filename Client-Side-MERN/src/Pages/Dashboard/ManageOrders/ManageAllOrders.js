import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted]);
    //delete method 
    const handleDelete = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once clicked, you will not be able to recover this Order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! One Order has been deleted!", {
                        icon: "success",
                    });
                    fetch(`http://localhost:3000/deleteOrder/${id}`, {
                        method: "DELETE",
                        headers: { "content-type": "application/json" }
                    })
                        .then(res => res.json())
                        .then(result => {
                            // console.log(result.deletedCount)
                            if (result.deletedCount) {
                                setIsDeleted(true)
                            }
                            else {
                                setIsDeleted(false)
                            }
                        });
                } else {
                    swal("Order is Unchanged!");
                }
            });
    };

    return (
        <div className='container my-4'>
            <h2 data-aos="fade-down-left" data-aos-duration="1000" className="text-center mb-4 fw-bold"> Total <span className="text-danger">{orders.length}</span> Orders Found </h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-primary">
                        <th>#</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Payment</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Delivered</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td className=" fw-bold">{pd?.productName}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.phone}</td>
                            <td>{pd?.payment}</td>
                            <td>{pd?.location}</td>
                            <td>{pd?.price}</td>
                            <td align="center"> <button onClick={() => handleDelete(pd?._id)} className="btn btn-success px-2"><i className="fa-solid fa-check"></i></button></td>
                            <td align="center"> <button onClick={() => handleDelete(pd?._id)} className="btn btn-danger px-2"><i className="far fa-trash-alt"></i></button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrders;
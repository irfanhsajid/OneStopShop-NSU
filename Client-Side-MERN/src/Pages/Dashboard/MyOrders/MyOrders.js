import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../Login-Register/Hooks/useAuth';
const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(() => {
        fetch(`https://one-stop-shop-api.vercel.app/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, user.email]);
    //delete method 
    const handleDelete = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once clicked, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your Order has been deleted!", {
                        icon: "success",
                    });
                    fetch(`https://one-stop-shop-api.vercel.app/deleteOrder/${id}`, {
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
                    swal("Your Order is unchanged!");
                }
            });
    };
    return (
        <div className='container my-4'>

            {
                <div>
                    <h3
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="text-center text-danger mb-4 fw-bold"
                    >
                        Total Price: {
                            orders && Array.isArray(orders)
                                ? orders
                                    .filter(pd => pd && pd.price && typeof pd.price === 'string')
                                    .reduce((total, pd) => total + parseFloat(pd.price), 0)
                                    .toFixed(0)
                                : 0
                        }
                    </h3>
                </div>
            }

            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-primary">
                        <th>#</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Payment By</th>
                        <th>Location</th>
                        <th>Price</th>

                        <th>Delete?</th>
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
                            <td align="center"> <button onClick={() => handleDelete(pd?._id)} className="btn btn-danger px-2"><i className="far fa-trash-alt"></i></button></td>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrders;
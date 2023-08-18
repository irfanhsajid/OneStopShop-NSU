import React, { useState } from 'react';
import swal from 'sweetalert';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
        e.target.value = '';

    }
    const handleAdminSubmit = (e) => {
        const user = { email };
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "Once submitted, this user will be successsfully set as admin!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! This user is set as an ADMIN!", {
                        icon: "success",
                    });
                    fetch('http://localhost:3000/users/admin', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })

                } else {
                    swal("Operation Unchanged!");
                }
            });
    }
    return (
        <div className="text-center" data-aos="fade-down"

            data-aos-duration="500" >
            <h1>Make a new Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} className="p-2 border-1 border-bottom border-primary w-50" type="email" name="email" id="" placeholder="Enter Admin Email" /> <br />
                <input className="m-2 btn btn-primary w-25" type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;
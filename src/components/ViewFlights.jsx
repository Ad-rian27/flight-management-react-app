import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';

const ViewFlights = () => {
    const [fdata, changeData] = useState([]);

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/flights")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching flights:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <NavigationBar />
            <div className="container mt-5 pt-5">
                <h2 className="mb-4 text-center">Flight Directory</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered align-middle text-center">
                        <thead className="table-primary">
                            <tr>
                                <th>Flight No</th>
                                <th>Airline</th>
                                <th>Origin</th>
                                <th>Destination</th>
                                <th>Date</th>
                                <th>Departure</th>
                                <th>Arrival</th>
                                <th>Fare</th>
                                <th>Available Seats</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fdata.length > 0 ? (
                                fdata.map((value, index) => (
                                    <tr key={value._id || index}>
                                        <td>{value.flight_number}</td>
                                        <td>{value.airline}</td>
                                        <td>{value.origin}</td>
                                        <td>{value.destination}</td>
                                        <td>{value.departure_date}</td>
                                        <td>{value.departure_time}</td>
                                        <td>{value.arrival_time}</td>
                                        <td>{value.fare}</td>
                                        <td>{value.available_seats}</td>
                                        <td>
                                            <span className={`badge ${
                                                value.status === 'On Time' ? 'bg-success' : 
                                                value.status === 'Delayed' ? 'bg-warning text-dark' : 
                                                value.status === 'Cancelled' ? 'bg-danger' : 'bg-primary'
                                            }`}>
                                                {value.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="text-muted py-4">No flights available.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewFlights;
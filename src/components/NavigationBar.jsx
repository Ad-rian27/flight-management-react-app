import React from 'react'

const NavigationBar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4 d-flex align-items-center" href="/">
                        <span class="text-primary me-2">✈</span> Flight Management
                    </a>

                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto gap-2 text-center text-lg-start pt-3 pt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active px-3 rounded" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3 rounded" href="/add">Add Flight</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-3 rounded" href="/view">View Flights</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NavigationBar
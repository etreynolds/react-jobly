import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import LoadingSpinner from "./LoadingSpinner";


function CompanyDetail() {
    const { handle } = useParams();
    console.debug("CompanyDetail", "handle=", handle);

    const [company, setCompany] = useState(null);

    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
        }

        getCompany();
    }, [handle]);

    if (!company) return <LoadingSpinner />;

    return (
        <div className="col-md-8 offset-md-2">
            <h1>This page shows information about a specific company.</h1>
            <h4>{company.name}</h4>
            <p>{company.description}</p>
        </div>
    );
}

export default CompanyDetail;

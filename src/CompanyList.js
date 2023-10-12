import React, { useEffect, useState, usesEffect } from "react";
import JoblyApi from "./api";

function CompanyList() {
    console.debug("CompanyList");

    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesOnMount() {
        console.debug("CompanyList useEffect getCompaniesOnMount");
        search();
    }, []);

    return (
        <div>
            <h1>This is the page to show a list of all companies.</h1>
        </div>
    );
}

export default CompanyList;

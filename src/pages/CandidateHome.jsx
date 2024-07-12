import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ListCard from "../components/ListCard";
import Search from "../components/Search";
import { fetchCompanies } from "../services/api";

const CandidateHome = () => {
  const navigate = useNavigate();
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleSearch = async (query) => {
    const results = await fetchCompanies(query);
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <div className="container mt-4">
        <Search onSearch={handleSearch} />
        <div className="row">
          <div className="col-md-6">
            <ListCard items={referrals} type="referral" />
          </div>
          <div className="col-md-6">
            <ListCard items={services} type="service" />
          </div>
        </div>
        {searchResults.length > 0 && (
          <div className="mt-4">
            <h4 className="text-light">Search Results</h4>
            <ul className="list-group">
              {searchResults.map((company) => (
                <li key={company.SK} className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img
                        src={company.logoUrl}
                        alt={company.name}
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      {company.name} ({company.industry})
                    </div>
                    <a
                      href={company.carrierPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                    >
                      View
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateHome;

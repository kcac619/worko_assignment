import React, { useState } from "react";
import { fetchCompanies } from "../services/api";
import { Link } from "react-router-dom";

const Index = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim() !== "") {
      const results = await fetchCompanies(query);
      setSearchResults(results);
    }
  };

  return (
    <div className="container text-light">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a company by name or industry"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn button-text button-background"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {searchResults.length > 0 && (
            <ul className="list-group mt-4">
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
          )}
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/login" className="btn btn-outline-light">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Index;

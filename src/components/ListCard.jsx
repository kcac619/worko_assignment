import React from "react";

const ListCard = ({ items, type }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        {type === "referral" ? "Referrals" : "Services"}
      </div>
      <ul className="list-group list-group-flush">
        {items.map((item) => (
          <li key={item.SK} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  style={{ width: "50px", marginRight: "10px" }}
                />
                {item.name}
              </div>
              <a
                href={item.carrierPage}
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
  );
};

export default ListCard;

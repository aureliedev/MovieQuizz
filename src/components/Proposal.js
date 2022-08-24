import React, { useEffect, useState } from "react";

/****** COMPONENT PROPOSAL ********/
const Proposal = () => {
  const [proposalList, setProposalList] = useState();
  const [proposalCount, setProposalCount] = useState();

  useEffect(() => {
    const proposal = [];
  });

  /****** RENDU VISUEL ********/
  return (
    <>
      <div className="main-card-proposal">
        <h4>Cet acteur a t'il joué dans ce film ? 🍿</h4>
        <div className="section-card">
          <div className="img-container">
            <div className="image">IMAGE ICI</div>
          </div>
          <div className="img-container">
            <div className="image">IMAGE ICI</div>
          </div>
        </div>
        <div className="section-card">
          <div className="button-yes">✔️ OUI</div>
          <div className="button-no">✖️ NON</div>
        </div>
      </div>
    </>
  );
};

export default Proposal;

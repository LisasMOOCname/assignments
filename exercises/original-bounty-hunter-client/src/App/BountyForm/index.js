import React from "react";

function BountyForm(props) {
    return (
        <div>
            <BountyForm>
                <input className="newBounty" type="text" />New Bounty
                <button className="newBountyBtn">Add New Bounty</button>
            </BountyForm>
            <BountyForm>
                <input className="retrieveBounty" type="text" />Enter Bounty ID
                <input className="changeBounty" type="text" />Change Bounty
                <button className="changeBountyBtn">Enter Change</button>
            </BountyForm>
            <BountyForm>
                <input className="retrieveBounty" type="text" />Enter Bounty ID
                <input className="deleteBounty" type="text" />Delete Bounty
                <button className="deleteBountyBtn">Delete Bounty</button>
            </BountyForm>
        </div>
    )
}
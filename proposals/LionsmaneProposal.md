# Lion’s Mane Offer
## Proposed Services Company
Lion’s Mane

## Summary
Lion’s Mane (a company incorporated in the BVI) (Lion’s Mane) offers its services to the Tracer DAO (DAO) in order to work with the DAO on the development of Tracer and the Tracer DAO (collectively, the Tracer Project).

## Remuneration
To assist in creating a thriving ecosystem for the Tracer Project, Lion’s Mane requests: 
1. $75,000 USD (or equivalent) per month (or part thereof) starting on the day that Lion’s Mane is engaged and ending when Lion’s Mane is no longer engaged by the DAO, to be paid on the last day of each calendar month. If a payment does not occur because the DAO has insufficient funds, the amount of that payment will accrue and be paid to Lion’s Mane when the DAO has sufficient funds to pay for that calendar month;
2. 21,500,000 TCR vested on the day that Lion’s Mane is engaged (if engaged);
3. 32,250,000 TCR vested on the day that is six months after the day that Lion’s Mane is engaged; and
4. 161,250,000 TCR vested on a pro rata basis over three years, starting on the day that Lion’s Mane is engaged,
for the incentivisation of the team’s current and future employees.

## Deliverables
If Lion’s Mane is engaged by a DAO Proposal to provide the services described in this Offer to the DAO, it will provide the following services (Deliverables):
1. Work with the DAO on the development of Tracer and the Tracer DAO;
2. Facilitating alpha and (if needed) beta testing of the Tracer DAO and Tracer, including, but not limited to, the procurement and presentation of persons for DAO selection (by way of DAO Proposal), development of testing infrastructure, and collection of feedback;
3. If the DAO votes to engage a third party to perform any audit process, work with that third party to assist that audit process;
4. Working with the DAO to establish a frontend for Tracer DAO TCR Holders to interact with the Governance Mechanism (DAO Frontend), including:
    1. If the DAO, by way of Proposal, engages a third party to host a DAO Frontend, facilitating that process; and
    2. If the DAO, by way of Proposal, builds and deploy its own DAO Frontend, facilitating that process;
5. Facilitating the establishment of a frontend for Tracer (including, but not limited to, establishing and managing an interface to the protocol, establishing and managing a Discord, establishing and managing a Twitter account and writing and posting whitepaper(s), articles, or other materials in relation to Tracer and the Tracer DAO);
6. Facilitating the transformation of successful DAO Proposals into code, to allow the Tracer DAO Schemes and Tracer Schemes to develop in accordance with successful DAO Proposals; and
7. Participating in discussions relating to the Tracer Project (including via community or private forums and any other interface used by Governance Token Holders or the public to discuss the Tracer Project or Proposals) and providing commentary and feedback in relation to the Tracer Project or Proposals.

## Commitments 
If Lion’s Mane is engaged to provide the Deliverables, it will:
1. For the first 12 months of its engagement, not:
    1. Vote in relation to a Proposal using those TCR tokens received in connection with this Offer; or 
    2. Commence a Proposal.
2. Prior to selling any TCR tokens received in connection with this Offer, make public, via Lion’s Mane’s website or social media accounts:
    1. When the tokens will be sold;
    2. Where and how the tokens will be sold; and
    3. Why the tokens are being sold. 
3. At the end of each quarter, make public, via Lion’s Mane’s website or social media accounts, its expenses incurred in relation to this Offer.
4. At the end of each quarter, make public and update, via Lion’s Mane’s website or social media accounts, a roadmap which details work which will be done for the next quarter in relation to this Offer.
5. At the end of each quarter, make public and update, via Lion’s Mane’s website or social media accounts, a breakdown of how it plans to allocate its resources (for example, between research and development, software development and community involvement) for the next quarter in relation to this Offer.

## Variation and Termination
1. Lion’s Mane acknowledges that, if engaged, its engagement can be varied by future Proposals, which Proposals, as noted above, Lion’s Mane cannot vote in favour of or against under certain circumstances.
2. Lion’s Mane expects that any engagement will be terminated if it fails to deliver in accordance with the Deliverables or Commitments specified above.


## Conflicts of Interest
In the context of the Tracer Project, conflicts of interest include:
1. Existing Service Providers who are Related Parties; and
2. Existing (vested and unvested) holdings of TCR tokens.

Lion’s Mane wishes to declare the following conflicts of interest:
1. No conflicts of interest to declare.

## Interpretation
Unless otherwise defined in this Offer, all terms beginning with a capital letter which are defined in the Participation Agreement shall have the same meanings herein as therein unless the context hereof otherwise requires.
If this Offer is accepted as a Proposal under the Participation Agreement, Lion’s Mane may more formally document aspects of that Proposal.

## Technical Implementation of Proposal
In order for Lion’s Mane to be engaged to provide the services described in the Offer, the following targets and relevant proposalData must be passed to the DAO, via Proposal, by a current DAO member, in order to facilitate the execution of that Proposal. For each piece of Proposal data provided, the function encoded data that must be passed into the DAO is present, as well as the parameters and function calls used to generate this data. By utilising a package such as web3, any DAO member may verify this data using the web3.eth.abi.decodeParameters function (https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html#decodeparameters).

The steps that the DAO must execute in order to appoint Lion’s Mane are as follows:
1.  Transfer 21500000 TCR tokens to the Lion’s Mane multisig.
2. Transfer 193500000 TCR to the proposed vesting contract.
3. Set up a vesting schedule for 32250000 TCR to be transferred to the Lion’s Mane multisig exactly 6 months after the Proposal executes.
4. Set up a vesting schedule for 161250000 TCR to be linearly vested to the Lion’s Mane multisig over 3 years, claimable at any time during that period.

### Step 1
Name: Transfer 21500000 TCR tokens to the Lion’s Mane multisig.
Target: 0x9C4A4204B79dd291D6b6571C5BE8BbcD0622F050 (Tracer Token Address)
proposalData: (INSERT encoded data)
raw data: 
- Function: transfer
- Parameters:
    - Type: address
    - Name: recipient
    - Value: LMD Multisig Wallet
    - Type: uint256
    - Name: amount
    - Value: 21500000000000000000000000

### Step 2
Name: Transfer 193500000 TCR to the proposed vesting contract.
Target: 0x9C4A4204B79dd291D6b6571C5BE8BbcD0622F050 (Tracer Token Address)
proposalData: (INSERT encoded data)
raw data: 
- Function: transfer
- Parameters:
    - Type: address
    - Name: recipient
    - Value: Proposed Vesting Contract
    - Type: uint256
    - Name: amount
    - Value: 193500000000000000000000000

### Step 3
Name: Set up a vesting schedule for the Lion’s Mane multisig for 32250000 TCR to be released exactly 6 months after the Proposal executes.
Target: 0x0 (Proposed Vesting Contract)
proposalData: (INSERT encoded data)
raw data: 
- Function: setVestingSchedule
- Parameters:
    - Type: address
    - Name: recipient
    - Value: Proposed Vesting Contract
    - Type: uint256
    - Name: amount
    - Value: 32250000000000000000000000
    - Type: bool
    - Name: isFixed
    - Value: true
    - Type: uint256
    - Name: cliffWeeks
    - Value: 26
    - Type: uint256
    - Name: vestingWeeks
    - Value: 26

### Step 4
Name: Set Vesting for 161250000 TCR to be linearly vested over 3 years
Target: 0x0 (Proposed Vesting Contract)
proposalData: (INSERT encoded data)
raw data: 
- Function: setVestingSchedule
- Parameters:
    - Type: address
    - Name: recipient
    - Value: Proposed Vesting Contract
    - Type: uint256
    - Name: amount
    - Value: 161250000000000000000000000
    - Type: bool
    - Name: isFixed
    - Value: true
    - Type: uint256
    - Name: cliffWeeks
    - Value: 0
    - Type: uint256
    - Name: vestingWeeks
    - Value: 156


## Copyright Waiver
Copyright and related rights are waived pursuant to CC0.

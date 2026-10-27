# Lender-Basic-Project
Okay so all of my thought process will be there here

1. Time limitations
    I have got one day, like 10 hours so have to plan it very accurately

2. Project idea
    So one thing to be clear. I will not be having main focus on security
    first things, frontend will be written is next.js and will have basic "FORM" structure
    Second things, i need to use solidity for writing the contracts,
    
    The main idea of the project is simple, People come fill out the form in our frontend,
    the data gets transfered to supabase, our backend, and stored there , and also the data
    gets transfered to smart contracts , which contains the life cycle
    ---
    # Collateral
    now, the people would come, should have a "collateral".
    The value of collateral will be calculated by a formula, which takes in current ETH price
    and then scales it by the factor of how much USDC they are lending

    To keep the project simple we are only going to be using ETH to USDC lendings

    If the value of ETH starts to drop, our smart contract should always be checking it , and should liquidate 
    the money as soon as it reached 150% or 175% of the total price money
    150% or 175% represents collateralization ratio = market value of ETH/ Loan amount

    For ETH pricing there will be a mock ETH graph which will first go up and come down to demostrate each edge case

    There will be a "bot" aka the "Keeper" who will be there to monitor the price changes of the eth and call the liquidation
    function
    
    The above thing should be clearly mentioned in our terms and conditions
    ---
    # User flow
    Next thing is, the login is based on your wallet address, not a email , password login
    This is a common practice among most etherum based services to give a "psudoanynonimity"

    After lending the "USDC" we will be able to set the lifecycle of the wallet address from "Not lended yet" to 
    "Lended", and then until the fix period of time the lender will be able to return the lended money to get the 
    collateral , otherwise their collateral will be liquidated and the price for loan money + interest + breach of 
    policy will be taken from them

    if any money remains after all of this, it will be transfered to their wallet

    since all of this is a mockup, instead of ETH and USDC i will be using, sepolia testnet ETH and a manually deployed USDC,
    stable coin
    ---

    # Limitations
    We will be using a mock pool, which will contain 1000usdc and not much, and yes the usdc will be our manually deployed one

    The USDC should inheritly increase, if all the lenders pay the money with interest

    The USDC is self made so it can be minted as much as we want, so thats the limit, no real money involved

    Partial withdrawals, if a lender deposits 100USDC and borrower borrows 90USDC and then the lender wants to get their 100USDC back
    they will only get their 10 USDC and then get their rest when it arrives, they will be in a queue

    # Lets begin

    Phase 0: writing this readme, this will be committed and then after the phase 1 will start
    

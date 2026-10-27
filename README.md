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

    # Phase 0: 
    writing this readme, this will be committed and then after the phase 1 will start

    ---
    # Phase 1:
        writing the user flow

        the basic user flow will be
            1.  Lender :
                - connect the wallet
                - deposit their tokens
                - see what lifecycle their tokens are in
                - book return of money/ withdrawal
            2. Borrower
                - connect wallet
                - borrow money, put in details
                    - details contain:
                        - wallet address
                        - time period
                        - collateral to be given
                - transfer collateral
                - receive usdc
                - get a time limit until the payment other wise liquid
                - make them agree to the terms and conditions
                - monitor loan
                - repay the loan with appropriate interest
                - return their collateral
                - liquidation if required
            3. Admin:
                - fund the pool with 1000 usdc (for mock purposes)
                - blacklist a borrower or lender
                - monitor loans
                - execute liquidity
                - make changes in "looks" of the main dashboard




    # Phase 2:
        writing the code
        insane.

        used to write full fledged html css js and php apps before
        what tf is this

        okay i got the basics, to create a app in our directory 

        first install npm 
        then do npx create-next-app@latest "ur source directory"

        I SEARCHED THROUGH OUT THE DOCUMENTATION PAGE THERE WASNT A SINGLE MENTION OF THE SOURCE DIRECTORY

        wasted an hour
        searched google and found it

        wow it launched with its basic next js landing page

        it works ig?

        hard part
        go into app/.
        delete all
        since all of it is just next js basic landing page things


        okay done

        now make page.tsx right? yea

        okay now lets try smt each
        lets write hello world

        wrote 
        ```
        const message: string = "Hellow world";
        alert(message);
        ```

        the site was running non stop due to nodemon heh
        ```
        Error: page.tsx doesn't have a root layout. To fix this error, make sure every page has a root layout. 
        ```
        WHAAAAAAT
        WHY DOES IT NEED LAYOUT BRUH

        HOW TO MAKE LAYOUT

        oh easy just create layout.tsx

        okay it should work right??

        ```
                ⨯ ReferenceError: alert is not defined
            at Object.eval (app\page.tsx:2:1)
            at module evaluation (C:\Users\Pranav Shewale\lender-basic-project\.next\dev\server\chunks\ssr\[root-of-the-server]__0g1_yi1wvm5m-._.js:184:47)
        1 | const message: string = "Hellow world";
        > 2 | alert(message);
            | ^ {
        page: '/'
        }
        GET / 500 in 74ms (next.js: 54ms, application-code: 20ms)
        [browser] Uncaught ReferenceError: alert is not defined
            at Object.eval (app\page.tsx:2:1)
            at module evaluation (app/page.tsx:2:7)
        1 | const message: string = "Hellow world";
        > 2 | alert(message);
            | ^
    ```

    WHAT IN THE ACTUAL F ***

    ALERT ISNT DEFINED???????? HELLO??
    ISNT TYPESCRIPT WRITEN OVER JAVASCRIPT??

    im done for today too much work done

    i cant believe that i used to make working demo in hours in this specific tech stack
    yet i cant even deploy the basic code damn

    i guess the fullstack development isnt that easy afterall
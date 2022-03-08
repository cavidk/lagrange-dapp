

# _Lagrange_Smart_Contract built on Anchor Framework..


  In this quest, we will be developing our own crypto-currency on the Solana blockchain or our own spl-token in the Solana lingo. 
  This essentially means that once you are done with this quest, you will be able to make your crypto-currency using Solana programs and use that to do whatever you can think of, including using it as a fan token, a social token, a governance token, a utility token or a coin.

  There are a few things that we need to get up and running before we move forward in this quest. Before we move forward make sure you've a working NodeJS environment set up. We need rust, Solana, Mocha(a JS testing framework), Anchor and Phantom wallet for this quest. To install rust, run

<b>curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh </b>

<b>
source $HOME/.cargo/env
rustup component add rustfmt
To install Solana, run
</b>

<b>
sh -c "$(curl -sSfL https://release.solana.com/v1.8.0/install)"
</b>
  To install mocha globally, run

<b>npm install -g mocha</b>
Now we'll be installing Anchor. If you're on a linux system, run

<b> npm i -g @project-serum/anchor-cli </b>

  Fair Warning : If you are using a Windows system, we highly suggest using WSL2 (Windows sub-system for Linux) or switching to a Linux environment. Setting up WSL is also quick and easy. A good walk-through can be found here For any other OS, you need to build from source.     Run the following command

<b> cargo install --git https://github.com/project-serum/anchor --tag v0.17.0 anchor-cli --locked </b>

To verify that Anchor is installed, run

<b> anchor --version </b>

Anchor abstracts away a lot of potential security holes from a conventional Solana program, takes care of the serialization and deserialization, reduces large boilder-platey code to macros and lot of other good good stuff.

The first command you should run on your terminal (assuming Solana CLI was properly installed in the last quest) is:

<b> solana config get </b>


  If you didnot set up your keypair earlier, then you won't be having the Keypair Path in your results. To set that up, follow the instructions over here:

  We would want to remain on the local network for building our program and later shift to the devent or mainnet-beta if required. If the RPC URL field of your last result did not show localhost, you can set it to localhost using the following command:

<b> solana config set --url localhost </b>

  Next, we would want to know our account/wallet address and airdrop some SOL tokens into it, to handle all the deployment, transactions etc costs that come with interacting with and using a Solana program. To do that first let's find our address. The command to do that is:

<b> solana address </b>

Then, for more comprehensive details of your account, use the following command with the address that you got from the last command

<b> solana account <your address from the last command>  </b>


Next, we want to spin up our local network. Think of this local network as a mock Solana blockchain running on your own single system. This network would be required for development and testing of our program. To spin it up, in a separate tab, use the following command:

  <b> solana-test-validator </b>

Now, our last task is to top up our account with some SOL, which you can do by using:

<b> solana airdrop 100 </b>


In this sub-quest all we would do is initialize an Anchor project and see whether everything's there and working fine or not and after move on ahead to make our own changes. Head over to your preferred destination for the project using your terminal and then type the following command:

<b> anchor init mymoneydapp

cd mymoneydapp or etc...
  </b>

  First we check whether we can see the programs, app, programs, migrations directory among others or not. If we can, we would head over to programs/messengerapp/src/lib.rs to see the default program that Anchor provides us. This is the most basic example possible on Anchor and what's happening here is simply that a user-defined function Initialize whenever called would successfully exit the program. That's all, nothing fancy. Now, let's try to compile this program using the following command:

  <b> anchor build </b>

   This build creates a new folder in your project directory called, target. This target folder contains the idl directory, which would also contain the idl for our program. 
  The IDL or Interface Description Language describes the instructions exposed by the contract and is very similar to ABI in Solidity and user for similar purposes, ie, for tests and front-end integrations. Next, we can move onto testing this program, so that we can get familiar with how testing is done in Anchor. Head to tests/messengerapp.js. Here, you'll see a test written in javascript to interact and test the default program. 
   Next, to actually run these tests, first head over to the tab where you ran the solana-test-validator command and kill that process (using Ctrl-C). Now, use the following command:

<b>anchor test</b>

 Let's head over to the programs directory and start importing some cool Rust crates provided by Anchor which will help us build our lagrange app.

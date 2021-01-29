const { web3 } = require("@openzeppelin/test-helpers/src/setup")
const { ether } = require("@openzeppelin/test-helpers")
const DAOUpgradable = artifacts.require("TracerDAO")
const TCR = artifacts.require("TracerToken");
const Vesting = artifacts.require("TokenVesting")
const Claim = artifacts.require("InitialClaim")
const SelfUpgradableProxy = artifacts.require("CustomUpgradeableProxy")
module.exports = async function(deployer, network, accounts) {
    if (network == "localTest") {
        // Deploy TCR token -> total supply of 1 billion tokens
        await deployer.deploy(TCR, web3.utils.toWei('1000000000'), accounts[0])
        let tcr = await TCR.deployed()

        // Deploy Gov
        await deployer.deploy(DAOUpgradable)
        let gov = await DAOUpgradable.deployed()
        let govInitData = web3.eth.abi.encodeFunctionCall(
            {
                name: "initialize",
                type: "function",
                inputs: [
                    { type: "address", name: "_govToken" },
                    { type: "uint32", name: "_maxProposalTargets" },
                    { type: "uint32", name: "_warmUp" },
                    { type: "uint32", name: "_coolingOff" },
                    { type: "uint32", name: "_proposalDuration" },
                    { type: "uint32", name: "_lockDuration" },
                    { type: "uint96", name: "_proposalThreshold" },
                    { type: "uint8", name: "_quorumDivisor" },
                ],
            },
            //max proposal targets = 10
            //warmUp time = 2 days
            //coolingOff period = 2 days
            //proposalDuration = 3 days
            //lockDuration = 7 days
            //proposalThreshold = 1 TCR
            //quorumDivisor = 2 (50% vote reuqired)
            [tcr.address, 10, 120, 120, 240, 420, ether("1"), 2]
        )
        
        // Deploy proxy and initalize governance
        await deployer.deploy(SelfUpgradableProxy, gov.address, govInitData)
        let proxy = await SelfUpgradableProxy.deployed()

        // Deploy vesting
        await deployer.deploy(Vesting, tcr.address)
        let vesting = await Vesting.deployed()
        await vesting.transferOwnership(proxy.address) 

        // Send 1% of tokens to each test user
        let a = "0x264ba0FDE1A83b0Df043e6b4B7b92c67D331D2fa"
        let b = "0x80EC7fB0c5529639761DC0bda8E7161B24Ece7d6"
        let c = "0x9c68ca6127efC3A2C80c5936521A725d9786F781"
        let d = "0x8eE3373A107c8330Eff4bCBA7Fadbe747936f81B"
        let e = "0xe182c70Ca247853D7e14aE41a02dF89AF1507E56"
        let f = "0xFF7F427AB1DEDDd6FD61841183750bff2F9f73A0"
        let g = "0xf62b5220001c0e491dc7eBd5CA72b161e59ECa65"

        await tcr.transfer(a, web3.utils.toWei('10000000'))
        await tcr.transfer(b, web3.utils.toWei('10000000'))
        await tcr.transfer(c, web3.utils.toWei('10000000'))
        await tcr.transfer(d, web3.utils.toWei('10000000'))
        await tcr.transfer(e, web3.utils.toWei('10000000'))
        await tcr.transfer(f, web3.utils.toWei('10000000'))
        await tcr.transfer(g, web3.utils.toWei('10000000'))
        
        // Send rest of tokens to gov
        await tcr.transfer(proxy.address, web3.utils.toWei('940000000'))  
    }
    if (network == "DAODEPLOY") {
        const day = 86400

        // Deploy TCR token -> total supply of 1 billion tokens
        await deployer.deploy(TCR, web3.utils.toWei('1000000000'), accounts[0])
        let tcr = await TCR.deployed()

        // Deploy Gov
        await deployer.deploy(DAOUpgradable)
        let gov = await DAOUpgradable.deployed()
        let govInitData = web3.eth.abi.encodeFunctionCall(
            {
                name: "initialize",
                type: "function",
                inputs: [
                    { type: "address", name: "_govToken" },
                    { type: "uint32", name: "_maxProposalTargets" },
                    { type: "uint32", name: "_warmUp" },
                    { type: "uint32", name: "_coolingOff" },
                    { type: "uint32", name: "_proposalDuration" },
                    { type: "uint32", name: "_lockDuration" },
                    { type: "uint96", name: "_proposalThreshold" },
                    { type: "uint8", name: "_quorumDivisor" },
                ],
            },
            //max proposal targets = 10
            //warmUp time = 2 days
            //coolingOff period = 2 days
            //proposalDuration = 3 days
            //lockDuration = 7 days
            //proposalThreshold = 1 TCR
            //quorumDivisor = 2 (50% vote reuqired)
            [tcr.address, 10, 2*day, 2*day, 3*day, 7*day, ether("1"), 2]
        )
        
        // Deploy proxy and initalize governance
        await deployer.deploy(SelfUpgradableProxy, gov.address, govInitData)
        let proxy = await SelfUpgradableProxy.deployed()
        
        // Deploy vesting
        await deployer.deploy(Vesting, tcr.address)
        let vesting = await Vesting.deployed()

        // Deploy claim
        await deployer.deploy(Claim, tcr.address, vesting.address)
        let claim = await Claim.deployed()

        // Send 1% of tokens to claim contract
        // 1% of 1 billion = 10 million
        await tcr.transfer(claim.address, web3.utils.toWei('10000000'))
        
        // Send 99% of tokens to gov contract
        // 99% of 1 billion = 990 million
        await tcr.transfer(proxy.address, web3.utils.toWei('990000000'))

        // Transfer ownership to the proxy
        await tcr.transferOwnership(proxy.address)
        
        // Transfer ownership of vesting to the claim contract so it can set vesting.
        // NOTE: This vesting contract should not be used for anything but the initial claim
        await vesting.transferOwnership(claim.address) 
    } 
};

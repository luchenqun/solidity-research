const hre = require("hardhat");

async function main() {
  const MUD = await hre.ethers.getContractFactory("MetaUserDAOToken");
  const mud = await MUD.deploy();

  await mud.deployed();

  console.log(`mud contract deployed to ${mud.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

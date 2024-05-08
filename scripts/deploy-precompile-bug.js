const hre = require('hardhat');

async function main() {
  const PrecompileBug = await hre.ethers.getContractFactory('PrecompileBug');
  const precompileBug = await PrecompileBug.deploy();
  await precompileBug.deployed();

  console.log(`PrecompileBug contract deployed to ${precompileBug.address}`);
  let tx;

  tx = await precompileBug.setCount();
  await tx.wait();
  console.log('count', await precompileBug.count());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

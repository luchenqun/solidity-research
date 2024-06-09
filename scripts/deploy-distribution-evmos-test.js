const hre = require('hardhat');

async function main() {
  const [sender] = await hre.ethers.getSigners();
  const amount = '1000000000000000000';
  const distributionModuleAddress = '0x93354845030274cD4bf1686Abd60AB28EC52e1a7';
  let tx, depositor;

  const DistributionTest = await hre.ethers.getContractFactory('DistributionTestEvmos');
  const distributionTest = await DistributionTest.deploy();

  await distributionTest.deployed();

  console.log(`DistributionTest contract deployed to ${distributionTest.address}`);
  console.log('counter', await distributionTest.counter());
  console.log('before fundCommunityPool distribution module address balance', await hre.ethers.provider.getBalance(distributionModuleAddress));

  depositor = await sender.getAddress();
  tx = await distributionTest.testFundCommunityPool(depositor, amount);
  await tx.wait();
  console.log('after eoa account fundCommunityPool distribution module address balance', await hre.ethers.provider.getBalance(distributionModuleAddress));
  console.log('after eoa account fundCommunityPool counter value', await distributionTest.counter());

  console.log('send 1evmos to contract address');
  tx = await sender.sendTransaction({
    to: distributionTest.address,
    value: amount,
  });
  await tx.wait();

  console.log('before fundCommunityPool contract balance', await hre.ethers.provider.getBalance(distributionTest.address));
  depositor = distributionTest.address;
  tx = await distributionTest.testFundCommunityPool(depositor, amount);
  await tx.wait();
  console.log('after contract account fundCommunityPool distribution module address balance', await hre.ethers.provider.getBalance(distributionModuleAddress));
  console.log('after contract account fundCommunityPool counter', await distributionTest.counter());
  console.log('after  fundCommunityPool contract balance', await hre.ethers.provider.getBalance(distributionTest.address));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

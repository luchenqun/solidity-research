// scripts/create-virtual-house.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const adminSigner = ethers.provider.getSigner(0);
  // console.log(await adminSigner.getAddress());
  const VirtualHouse = await ethers.getContractFactory("VirtualHouse");
  const virtualHouse = await upgrades.deployProxy(VirtualHouse, [await adminSigner.getAddress()], { gasLimit: 8000000 });
  await virtualHouse.deployed();
  console.log("VirtualHouse deployed to:", virtualHouse.address);
}

main();

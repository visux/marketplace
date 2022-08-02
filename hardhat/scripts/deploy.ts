import { ethers } from "hardhat";

async function main() {
  const Market = await ethers.getContractFactory("Marketplace");
  const market = await Market.deploy();

  await market.deployed();

  const SonikchainCollection = await ethers.getContractFactory("SonikchainCollection");
  const sonikchainCollection = await SonikchainCollection.deploy(market.address);

  await sonikchainCollection.deployed();

  console.log("Sonikchain collection deployed to:", sonikchainCollection.address);
  console.log("Marketplace deployed to:", market.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";
import type { ContractTransactionResponse } from "ethers";

const waitForTx = async (tx: ContractTransactionResponse) => await tx.wait();

async function main() {
  //const [deployer] = await ethers.getSigners();

  const lock = await ethers.getContractAt(
    "Lock",
    "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318"
  );

  console.log(await lock.isLocked());
}

main();

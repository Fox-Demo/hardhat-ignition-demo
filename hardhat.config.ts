import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",

  networks: {
    holesky: {
      url: "https://holesky.infura.io/v3/311142eea537485aabe9b15954cb5960",
      accounts: [
        "0x5a1f0c30177b4a718f01c0a756ad7cc55accab5fa8147ae996939fdf914a1823",
      ],
    },
  },
};

export default config;

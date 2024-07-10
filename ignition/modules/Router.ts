import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import Lock2 from "./Lock";
import { LockModule } from "./Lock";

export default buildModule("Router", (m) => {
  const { lock2 } = m.useModule(Lock2);
  const { lock } = m.useModule(LockModule);
  const router = m.contract("Router", [lock, lock2]);

  m.call(router, "add", [1, 1]);

  return { router };
});

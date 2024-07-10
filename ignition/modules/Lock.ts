import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI: bigint = 1_000_000_000n;

// const LockModule = buildModule("LockModule", (m) => {
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const lock = m.contract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   return { lock };
// });

// export default LockModule;

export const LockModule = buildModule("LockModule", (m) => {
  const lock = m.contract("Lock");

  m.call(lock, "lock", []);
  m.call(lock, "unlock", []);

  m.staticCall(lock, "isLocked", []);

  return { lock };
});

export default buildModule("Lock2Module", (m) => {
  const { lock } = m.useModule(LockModule);
  const lock2 = m.contract("Lock2", [lock]);

  return { lock2 };
});

// export default buildModule("Lock2Module", (m) => {
//   const { lock2, lock } = m.useModule(Lock2Module);

//   const router = m.contract("Router", [lock, lock2]);

//   return { router };
// });

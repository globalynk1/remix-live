"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3389],{

/***/ 73389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  \n## What's RLN?\n\nWelcome to the Remix Circom ZKP RLN Workspace.\n\nRLN is a zero-knowledge gadget that enables spam prevention in anonymous environments.\nTo learn more about RLN and how it works - check out [documentation](https://rate-limiting-nullifier.github.io/rln-docs/).\n\nThe workspace comprises two main directories:\n\n### circuits: Contains sample semaphore contracts. These can be compiled to generate a witness using 'Circom ZKP Compiler' plugin.\n\n### scripts: Provides a sample script designed for a trusted setup using snarkjs. This script also aids in generating Solidity code, which is essential for on-chain deployment.\n\n### first steps:\n\n#### 1) compile the semaphore circuit using the remix circom compiler. This will generate artifacts.\n\n#### 2) execute the file `run_setup.ts`:\n\nThis step generates a verification key that can be used for generating proof, it will also generate a Solidity contract for on-chain verification.\n\nNote that this section should only be used for development purposes as this way of running the setup is heavily centralized (although some pieces of this script can be used to achieve that).\n\nThis generates a verification key (`./zk/build/verification_key.json`) and artifacts from the setup (`./zk/build/zk_setup.txt`).\n\n#### 3) execute the file `run_verification.ts`:\n\nThis script:\n\n- create a list of identity commitments and add it to a `IncrementalMerkleTree`. The tree is used to generate a merkle proof that a specified identity is actually in the tree (see`tree.createProof(0)`).\n\n- generate a witness and a proof of execution with `messageId`equal to 0.\n\n- generate a witness and a proof of execution with `messageId`equal to 0.\n\n- generating 2 proofs (two different messages) with the same `messageId` reveal the two points of the polynomial necessary to deduct the `identitySecret` (using `shamirRecovery`).\n");

/***/ })

}]);
//# sourceMappingURL=3389.plugin-etherscan.1728572116224.js.map
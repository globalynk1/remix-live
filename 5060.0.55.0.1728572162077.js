"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5060],{45060:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="import { ethers, BigNumber } from 'ethers'\nimport { poseidon } from \"circomlibjs\" // v0.0.8\n\n// eslint-disable-next-line @typescript-eslint/no-var-requires\nconst snarkjs = require('snarkjs');\n\nconst logger = {\n  info: (...args) => console.log(...args),\n  debug: (...args) => console.log(...args),\n  error: (...args) => console.error(...args),\n};\n\n(async () => {\n  try {\n    // @ts-ignore\n    await remix.call('circuit-compiler', 'compile', 'circuits/calculate_hash.circom');\n    // @ts-ignore\n    const wasmBuffer = await remix.call('fileManager', 'readFile', 'circuits/.bin/calculate_hash.wasm', { encoding: null });\n    // @ts-ignore\n    const wasm = new Uint8Array(wasmBuffer);\n    const zkey_final = {\n      type: \"mem\",\n      data: new Uint8Array(JSON.parse(await remix.call('fileManager', 'readFile', 'scripts/plonk/zk/keys/zkey_final.txt')))\n    }\n\n    const wtns = { type: \"mem\" };\n    const value1 = '1234'\n    const value2 = '2'\n    const value3 = '3'\n    const value4 = '4'\n\n    const wrongValue = '5' // put this in the poseidon hash calculation to simulate a non matching hash.\n\n    const signals = {\n      value1,\n      value2,\n      value3,\n      value4,\n      hash: poseidon([value1, value2, value3, value4])\n    }\n\n    console.log('calculate')\n    await snarkjs.wtns.calculate(signals, wasm, wtns, logger);\n\n    const { proof, publicSignals } = await snarkjs.plonk.prove(zkey_final, wtns);\n\n    const vKey = JSON.parse(await remix.call('fileManager', 'readFile', 'scripts/plonk/zk/keys/verification_key.json'))\n\n    const verified = await snarkjs.plonk.verify(vKey, publicSignals, proof);\n\n    console.log('zk proof validity', verified);\n    const templates = {\n      plonk: await remix.call('fileManager', 'readFile', 'templates/plonk_verifier.sol.ejs')\n    }\n    const solidityContract = await snarkjs.zKey.exportSolidityVerifier(zkey_final, templates)\n\n    await remix.call('fileManager', 'writeFile', 'scripts/plonk/zk/build/zk_verifier.sol', solidityContract)\n    await remix.call('fileManager', 'writeFile', 'scripts/plonk/zk/build/input.json', JSON.stringify({\n      _proof: [\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.A[0]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.A[1]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.B[0]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.B[1]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.C[0]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.C[1]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.Z[0]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.Z[1]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.T1[0]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.T1[1]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.T2[0]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.T2[1]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.T3[0]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.T3[1]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.Wxi[0]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.Wxi[1]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.Wxiw[0]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.Wxiw[1]).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.eval_a).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.eval_b).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.eval_c).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.eval_s1).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.eval_s2).toHexString(), 32),\n        ethers.utils.hexZeroPad(ethers.BigNumber.from(proof.eval_zw).toHexString(), 32),\n      ],\n      _pubSignals: publicSignals\n    }, null, 2))\n\n    console.log('proof done.')\n\n  } catch (e) {\n    console.error(e.message)\n  }\n})()\n"}}]);
//# sourceMappingURL=5060.0.55.0.1728572162077.js.map
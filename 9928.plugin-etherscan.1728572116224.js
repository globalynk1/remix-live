"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9928],{

/***/ 39928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("// SPDX-License-Identifier: GPL-3.0\n/*\n    Copyright 2021 0KIMS association.\n\n    This file is generated with [snarkJS](https://github.com/iden3/snarkjs).\n\n    snarkJS is a free software: you can redistribute it and/or modify it\n    under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    snarkJS is distributed in the hope that it will be useful, but WITHOUT\n    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY\n    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public\n    License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with snarkJS. If not, see <https://www.gnu.org/licenses/>.\n*/\n\n\npragma solidity >=0.7.0 <0.9.0;\n\nimport \"hardhat/console.sol\";\n\ncontract PlonkVerifier {\n    // Omega\n    uint256 constant w1 = <%=w%>;    \n    // Scalar field size\n    uint256 constant q  = 21888242871839275222246405745257275088548364400416034343698204186575808495617;\n    // Base field size\n    uint256 constant qf = 21888242871839275222246405745257275088696311157297823662689037894645226208583;\n    \n    // [1]_1\n    uint256 constant G1x = 1;\n    uint256 constant G1y = 2;\n    // [1]_2\n    uint256 constant G2x1 = 10857046999023057135944570762232829481370756359578518086990519993285655852781;\n    uint256 constant G2x2 = 11559732032986387107991004021392285783925812861821192530917403151452391805634;\n    uint256 constant G2y1 = 8495653923123431417604973247489272438418190587263600148770280649306958101930;\n    uint256 constant G2y2 = 4082367875863433681332203403145435568316851327593401208105741076214120093531;\n    \n    // Verification Key data\n    uint32 constant n         = <%=2**power%>;\n    uint16 constant nPublic   = <%=nPublic%>;\n    uint16 constant nLagrange = <%=Math.max(nPublic, 1)%>;\n    \n    uint256 constant Qmx  = <%=Qm[0]%>;\n    uint256 constant Qmy  = <%=Qm[0] == \"0\" ? \"0\" : Qm[1]%>;\n    uint256 constant Qlx  = <%=Ql[0]%>;\n    uint256 constant Qly  = <%=Ql[0] == \"0\" ? \"0\" : Ql[1]%>;\n    uint256 constant Qrx  = <%=Qr[0]%>;\n    uint256 constant Qry  = <%=Qr[0] == \"0\" ? \"0\" : Qr[1]%>;\n    uint256 constant Qox  = <%=Qo[0]%>;\n    uint256 constant Qoy  = <%=Qo[0] == \"0\" ? \"0\" : Qo[1]%>;\n    uint256 constant Qcx  = <%=Qc[0]%>;\n    uint256 constant Qcy  = <%=Qc[0] == \"0\" ? \"0\" : Qc[1]%>;\n    uint256 constant S1x  = <%=S1[0]%>;\n    uint256 constant S1y  = <%=S1[0] == \"0\" ? \"0\" : S1[1]%>;\n    uint256 constant S2x  = <%=S2[0]%>;\n    uint256 constant S2y  = <%=S2[0] == \"0\" ? \"0\" : S2[1]%>;\n    uint256 constant S3x  = <%=S3[0]%>;\n    uint256 constant S3y  = <%=S3[0] == \"0\" ? \"0\" : S3[1]%>;\n    uint256 constant k1   = <%=k1%>;\n    uint256 constant k2   = <%=k2%>;\n    uint256 constant X2x1 = <%=X_2[0][0]%>;\n    uint256 constant X2x2 = <%=X_2[0][1]%>;\n    uint256 constant X2y1 = <%=X_2[1][0]%>;\n    uint256 constant X2y2 = <%=X_2[1][1]%>;\n    \n    // Proof calldata\n    // Byte offset of every parameter of the calldata\n    // Polynomial commitments\n    uint16 constant pA       = 4 + 0;\n    uint16 constant pB       = 4 + 64;\n    uint16 constant pC       = 4 + 128;\n    uint16 constant pZ       = 4 + 192;\n    uint16 constant pT1      = 4 + 256;\n    uint16 constant pT2      = 4 + 320;\n    uint16 constant pT3      = 4 + 384;\n    uint16 constant pWxi     = 4 + 448;\n    uint16 constant pWxiw    = 4 + 512;\n    // Opening evaluations\n    uint16 constant pEval_a  = 4 + 576;\n    uint16 constant pEval_b  = 4 + 608;\n    uint16 constant pEval_c  = 4 + 640;\n    uint16 constant pEval_s1 = 4 + 672;\n    uint16 constant pEval_s2 = 4 + 704;\n    uint16 constant pEval_zw = 4 + 736;\n    \n    // Memory data\n    // Challenges\n    uint16 constant pAlpha  = 0;\n    uint16 constant pBeta   = 32;\n    uint16 constant pGamma  = 64;\n    uint16 constant pXi     = 96;\n    uint16 constant pXin    = 128;\n    uint16 constant pBetaXi = 160;\n    uint16 constant pV1     = 192;\n    uint16 constant pV2     = 224;\n    uint16 constant pV3     = 256;\n    uint16 constant pV4     = 288;\n    uint16 constant pV5     = 320;\n    uint16 constant pU      = 352;\n    \n    uint16 constant pPI      = 384;\n    uint16 constant pEval_r0 = 416;\n    uint16 constant pD       = 448;\n    uint16 constant pF       = 512;\n    uint16 constant pE       = 576;\n    uint16 constant pTmp     = 640;\n    uint16 constant pAlpha2  = 704;\n    uint16 constant pZh      = 736;\n    uint16 constant pZhInv   = 768;\n\n    <% for (let i=1; i<=Math.max(nPublic, 1); i++) { %>\n    uint16 constant pEval_l<%=i%> = <%=768+i*32%>;\n    <% } %>\n    <% let pLastMem = 800+32*Math.max(nPublic,1) %>\n    \n    uint16 constant lastMem = <%=pLastMem%>;\n\n    function verifyProof(uint256[24] calldata _proof, uint256[<%=nPublic%>] calldata _pubSignals) public view returns (bool) {\n        assembly {\n            /////////\n            // Computes the inverse using the extended euclidean algorithm\n            /////////\n            function inverse(a, q) -> inv {\n                let t := 0     \n                let newt := 1\n                let r := q     \n                let newr := a\n                let quotient\n                let aux\n                \n                for { } newr { } {\n                    quotient := sdiv(r, newr)\n                    aux := sub(t, mul(quotient, newt))\n                    t:= newt\n                    newt:= aux\n                    \n                    aux := sub(r,mul(quotient, newr))\n                    r := newr\n                    newr := aux\n                }\n                \n                if gt(r, 1) { revert(0,0) }\n                if slt(t, 0) { t:= add(t, q) }\n\n                inv := t\n            }\n            \n            ///////\n            // Computes the inverse of an array of values\n            // See https://vitalik.ca/general/2018/07/21/starks_part_3.html in section where explain fields operations\n            //////\n            function inverseArray(pVals, n) {\n    \n                let pAux := mload(0x40)     // Point to the next free position\n                let pIn := pVals\n                let lastPIn := add(pVals, mul(n, 32))  // Read n elements\n                let acc := mload(pIn)       // Read the first element\n                pIn := add(pIn, 32)         // Point to the second element\n                let inv\n    \n                \n                for { } lt(pIn, lastPIn) { \n                    pAux := add(pAux, 32) \n                    pIn := add(pIn, 32)\n                } \n                {\n                    mstore(pAux, acc)\n                    acc := mulmod(acc, mload(pIn), q)\n                }\n                acc := inverse(acc, q)\n                \n                // At this point pAux pint to the next free position we subtract 1 to point to the last used\n                pAux := sub(pAux, 32)\n                // pIn points to the n+1 element, we subtract to point to n\n                pIn := sub(pIn, 32)\n                lastPIn := pVals  // We don't process the first element \n                for { } gt(pIn, lastPIn) { \n                    pAux := sub(pAux, 32) \n                    pIn := sub(pIn, 32)\n                } \n                {\n                    inv := mulmod(acc, mload(pAux), q)\n                    acc := mulmod(acc, mload(pIn), q)\n                    mstore(pIn, inv)\n                }\n                // pIn points to first element, we just set it.\n                mstore(pIn, acc)\n            }\n            \n            function checkField(v) {\n                if iszero(lt(v, q)) {\n                    mstore(0, 0)\n                    return(0,0x20)\n                }\n            }\n            \n            function checkInput() {\n                checkField(calldataload(pEval_a))\n                checkField(calldataload(pEval_b))\n                checkField(calldataload(pEval_c))\n                checkField(calldataload(pEval_s1))\n                checkField(calldataload(pEval_s2))\n                checkField(calldataload(pEval_zw))\n            }\n            \n            function calculateChallenges(pMem, pPublic) {\n                let beta\n                let aux\n\n                let mIn := mload(0x40)     // Pointer to the next free memory position\n\n                // Compute challenge.beta & challenge.gamma\n                mstore(mIn, Qmx)\n                mstore(add(mIn, 32), Qmy)\n                mstore(add(mIn, 64), Qlx)\n                mstore(add(mIn, 96), Qly)\n                mstore(add(mIn, 128), Qrx)\n                mstore(add(mIn, 160), Qry)\n                mstore(add(mIn, 192), Qox)\n                mstore(add(mIn, 224), Qoy)\n                mstore(add(mIn, 256), Qcx)\n                mstore(add(mIn, 288), Qcy)\n                mstore(add(mIn, 320), S1x)\n                mstore(add(mIn, 352), S1y)\n                mstore(add(mIn, 384), S2x)\n                mstore(add(mIn, 416), S2y)\n                mstore(add(mIn, 448), S3x)\n                mstore(add(mIn, 480), S3y)\n\n                <%for (let i=0; i<nPublic;i++) {%>\n                mstore(add(mIn, <%= 512 + i*32 %>), calldataload(add(pPublic, <%=i*32%>)))\n                <%}%>\n                mstore(add(mIn, <%= 512 + nPublic*32 + 0 %> ), calldataload(pA))\n                mstore(add(mIn, <%= 512 + nPublic*32 + 32 %> ), calldataload(add(pA, 32)))\n                mstore(add(mIn, <%= 512 + nPublic*32 + 64 %> ), calldataload(pB))\n                mstore(add(mIn, <%= 512 + nPublic*32 + 96 %> ), calldataload(add(pB, 32)))\n                mstore(add(mIn, <%= 512 + nPublic*32 + 128 %> ), calldataload(pC))\n                mstore(add(mIn, <%= 512 + nPublic*32 + 160 %> ), calldataload(add(pC, 32)))\n                \n                beta := mod(keccak256(mIn, <%= 704 + 32 * nPublic %>), q) \n                mstore(add(pMem, pBeta), beta)\n\n                // challenges.gamma\n                mstore(add(pMem, pGamma), mod(keccak256(add(pMem, pBeta), 32), q))\n                \n                // challenges.alpha\n                mstore(mIn, mload(add(pMem, pBeta)))\n                mstore(add(mIn, 32), mload(add(pMem, pGamma)))\n                mstore(add(mIn, 64), calldataload(pZ))\n                mstore(add(mIn, 96), calldataload(add(pZ, 32)))\n\n                aux := mod(keccak256(mIn, 128), q)\n                mstore(add(pMem, pAlpha), aux)\n                mstore(add(pMem, pAlpha2), mulmod(aux, aux, q))\n\n                // challenges.xi\n                mstore(mIn, aux)\n                mstore(add(mIn, 32),  calldataload(pT1))\n                mstore(add(mIn, 64),  calldataload(add(pT1, 32)))\n                mstore(add(mIn, 96),  calldataload(pT2))\n                mstore(add(mIn, 128), calldataload(add(pT2, 32)))\n                mstore(add(mIn, 160), calldataload(pT3))\n                mstore(add(mIn, 192), calldataload(add(pT3, 32)))\n\n                aux := mod(keccak256(mIn, 224), q)\n                mstore( add(pMem, pXi), aux)\n\n                // challenges.v\n                mstore(mIn, aux)\n                mstore(add(mIn, 32),  calldataload(pEval_a))\n                mstore(add(mIn, 64),  calldataload(pEval_b))\n                mstore(add(mIn, 96),  calldataload(pEval_c))\n                mstore(add(mIn, 128), calldataload(pEval_s1))\n                mstore(add(mIn, 160), calldataload(pEval_s2))\n                mstore(add(mIn, 192), calldataload(pEval_zw))\n\n                let v1 := mod(keccak256(mIn, 224), q)\n                mstore(add(pMem, pV1), v1)\n\n                // challenges.beta * challenges.xi\n                mstore(add(pMem, pBetaXi), mulmod(beta, aux, q))\n\n                // challenges.xi^n\n                <%for (let i=0; i<power;i++) {%>\n                aux:= mulmod(aux, aux, q)\n                <%}%>\n                mstore(add(pMem, pXin), aux)\n\n                // Zh\n                aux:= mod(add(sub(aux, 1), q), q)\n                mstore(add(pMem, pZh), aux)\n                mstore(add(pMem, pZhInv), aux)  // We will invert later together with lagrange pols\n                                \n                // challenges.v^2, challenges.v^3, challenges.v^4, challenges.v^5\n                aux := mulmod(v1, v1,  q)\n                mstore(add(pMem, pV2), aux)\n                aux := mulmod(aux, v1, q)\n                mstore(add(pMem, pV3), aux)\n                aux := mulmod(aux, v1, q)\n                mstore(add(pMem, pV4), aux)\n                aux := mulmod(aux, v1, q)\n                mstore(add(pMem, pV5), aux)\n\n                // challenges.u\n                mstore(mIn, calldataload(pWxi))\n                mstore(add(mIn, 32), calldataload(add(pWxi, 32)))\n                mstore(add(mIn, 64), calldataload(pWxiw))\n                mstore(add(mIn, 96), calldataload(add(pWxiw, 32)))\n\n                mstore(add(pMem, pU), mod(keccak256(mIn, 128), q))\n            }\n            \n            function calculateLagrange(pMem) {\n                let w := 1                \n                <% for (let i=1; i<=Math.max(nPublic, 1); i++) { %>\n                mstore(\n                    add(pMem, pEval_l<%=i%>), \n                    mulmod(\n                        n, \n                        mod(\n                            add(\n                                sub(\n                                    mload(add(pMem, pXi)), \n                                    w\n                                ), \n                                q\n                            ),\n                            q\n                        ), \n                        q\n                    )\n                )\n                <% if (i<Math.max(nPublic, 1)) { %>\n                w := mulmod(w, w1, q)\n                <% } %>\n                <% } %>\n                \n                inverseArray(add(pMem, pZhInv), <%=Math.max(nPublic, 1)+1%> )\n                \n                let zh := mload(add(pMem, pZh))\n                w := 1\n                <% for (let i=1; i<=Math.max(nPublic, 1); i++) { %>\n                <% if (i==1) { %>\n                mstore(\n                    add(pMem, pEval_l1 ), \n                    mulmod(\n                        mload(add(pMem, pEval_l1 )),\n                        zh,\n                        q\n                    )\n                )\n                <% } else { %>\n                mstore(\n                    add(pMem, pEval_l<%=i%>), \n                    mulmod(\n                        w,\n                        mulmod(\n                            mload(add(pMem, pEval_l<%=i%>)),\n                            zh,\n                            q\n                        ),\n                        q\n                    )\n                )\n                <% } %>\n                <% if (i<Math.max(nPublic, 1)) { %>\n                w := mulmod(w, w1, q)\n                <% } %>\n                <% } %>\n\n\n            }\n            \n            function calculatePI(pMem, pPub) {\n                let pl := 0\n                \n                <% for (let i=0; i<nPublic; i++) { %> \n                pl := mod(\n                    add(\n                        sub(\n                            pl,  \n                            mulmod(\n                                mload(add(pMem, pEval_l<%=i+1%>)),\n                                calldataload(add(pPub, <%=i*32%>)),\n                                q\n                            )\n                        ),\n                        q\n                    ),\n                    q\n                )\n                <% } %>\n                \n                mstore(add(pMem, pPI), pl)\n            }\n\n            function calculateR0(pMem) {\n                let e1 := mload(add(pMem, pPI))\n\n                let e2 :=  mulmod(mload(add(pMem, pEval_l1)), mload(add(pMem, pAlpha2)), q)\n\n                let e3a := addmod(\n                    calldataload(pEval_a),\n                    mulmod(mload(add(pMem, pBeta)), calldataload(pEval_s1), q),\n                    q)\n                e3a := addmod(e3a, mload(add(pMem, pGamma)), q)\n\n                let e3b := addmod(\n                    calldataload(pEval_b),\n                    mulmod(mload(add(pMem, pBeta)), calldataload(pEval_s2), q),\n                    q)\n                e3b := addmod(e3b, mload(add(pMem, pGamma)), q)\n\n                let e3c := addmod(\n                    calldataload(pEval_c),\n                    mload(add(pMem, pGamma)),\n                    q)\n\n                let e3 := mulmod(mulmod(e3a, e3b, q), e3c, q)\n                e3 := mulmod(e3, calldataload(pEval_zw), q)\n                e3 := mulmod(e3, mload(add(pMem, pAlpha)), q)\n            \n                let r0 := addmod(e1, mod(sub(q, e2), q), q)\n                r0 := addmod(r0, mod(sub(q, e3), q), q)\n                \n                mstore(add(pMem, pEval_r0) , r0)\n            }\n            \n            function g1_set(pR, pP) {\n                mstore(pR, mload(pP))\n                mstore(add(pR, 32), mload(add(pP,32)))\n            }   \n\n            function g1_setC(pR, x, y) {\n                mstore(pR, x)\n                mstore(add(pR, 32), y)\n            }\n\n            function g1_calldataSet(pR, pP) {\n                mstore(pR,          calldataload(pP))\n                mstore(add(pR, 32), calldataload(add(pP, 32)))\n            }\n\n            function g1_acc(pR, pP) {\n                let mIn := mload(0x40)\n                mstore(mIn, mload(pR))\n                mstore(add(mIn,32), mload(add(pR, 32)))\n                mstore(add(mIn,64), mload(pP))\n                mstore(add(mIn,96), mload(add(pP, 32)))\n\n                let success := staticcall(sub(gas(), 2000), 6, mIn, 128, pR, 64)\n                \n                if iszero(success) {\n                    mstore(0, 0)\n                    return(0,0x20)\n                }\n            }\n\n            function g1_mulAcc(pR, pP, s) {\n                let success\n                let mIn := mload(0x40)\n                mstore(mIn, mload(pP))\n                mstore(add(mIn,32), mload(add(pP, 32)))\n                mstore(add(mIn,64), s)\n\n                success := staticcall(sub(gas(), 2000), 7, mIn, 96, mIn, 64)\n                \n                if iszero(success) {\n                    mstore(0, 0)\n                    return(0,0x20)\n                }\n                \n                mstore(add(mIn,64), mload(pR))\n                mstore(add(mIn,96), mload(add(pR, 32)))\n\n                success := staticcall(sub(gas(), 2000), 6, mIn, 128, pR, 64)\n                \n                if iszero(success) {\n                    mstore(0, 0)\n                    return(0,0x20)\n                }\n                \n            }\n\n            function g1_mulAccC(pR, x, y, s) {\n                let success\n                let mIn := mload(0x40)\n                mstore(mIn, x)\n                mstore(add(mIn,32), y)\n                mstore(add(mIn,64), s)\n\n                success := staticcall(sub(gas(), 2000), 7, mIn, 96, mIn, 64)\n                \n                if iszero(success) {\n                    mstore(0, 0)\n                    return(0,0x20)\n                }\n                \n                mstore(add(mIn,64), mload(pR))\n                mstore(add(mIn,96), mload(add(pR, 32)))\n\n                success := staticcall(sub(gas(), 2000), 6, mIn, 128, pR, 64)\n                \n                if iszero(success) {\n                    mstore(0, 0)\n                    return(0,0x20)\n                }\n            }\n\n            function g1_mulSetC(pR, x, y, s) {\n                let success\n                let mIn := mload(0x40)\n                mstore(mIn, x)\n                mstore(add(mIn,32), y)\n                mstore(add(mIn,64), s)\n\n                success := staticcall(sub(gas(), 2000), 7, mIn, 96, pR, 64)\n                \n                if iszero(success) {\n                    mstore(0, 0)\n                    return(0,0x20)\n                }\n            }\n\n            function g1_mulSet(pR, pP, s) {\n                g1_mulSetC(pR, mload(pP), mload(add(pP, 32)), s)\n            }\n\n            function calculateD(pMem) {\n                let _pD:= add(pMem, pD)\n                let gamma := mload(add(pMem, pGamma))\n                let mIn := mload(0x40)\n                mstore(0x40, add(mIn, 256)) // d1, d2, d3 & d4 (4*64 bytes)\n\n                g1_setC(_pD, Qcx, Qcy)\n                g1_mulAccC(_pD, Qmx, Qmy, mulmod(calldataload(pEval_a), calldataload(pEval_b), q))\n                g1_mulAccC(_pD, Qlx, Qly, calldataload(pEval_a))\n                g1_mulAccC(_pD, Qrx, Qry, calldataload(pEval_b))\n                g1_mulAccC(_pD, Qox, Qoy, calldataload(pEval_c))            \n\n                let betaxi := mload(add(pMem, pBetaXi))\n                let val1 := addmod(\n                    addmod(calldataload(pEval_a), betaxi, q),\n                    gamma, q)\n\n                let val2 := addmod(\n                    addmod(\n                        calldataload(pEval_b),\n                        mulmod(betaxi, k1, q),\n                        q), gamma, q)\n\n                let val3 := addmod(\n                    addmod(\n                        calldataload(pEval_c),\n                        mulmod(betaxi, k2, q),\n                        q), gamma, q)\n\n                let d2a := mulmod(\n                    mulmod(mulmod(val1, val2, q), val3, q),\n                    mload(add(pMem, pAlpha)),\n                    q\n                )\n\n                let d2b := mulmod(\n                    mload(add(pMem, pEval_l1)),\n                    mload(add(pMem, pAlpha2)),\n                    q\n                )\n\n                // We'll use mIn to save d2\n                g1_calldataSet(add(mIn, 192), pZ)\n                g1_mulSet(\n                    mIn,\n                    add(mIn, 192),\n                    addmod(addmod(d2a, d2b, q), mload(add(pMem, pU)), q))\n\n\n                val1 := addmod(\n                    addmod(\n                        calldataload(pEval_a),\n                        mulmod(mload(add(pMem, pBeta)), calldataload(pEval_s1), q),\n                        q), gamma, q)\n\n                val2 := addmod(\n                    addmod(\n                        calldataload(pEval_b),\n                        mulmod(mload(add(pMem, pBeta)), calldataload(pEval_s2), q),\n                        q), gamma, q)\n    \n                val3 := mulmod(\n                    mulmod(mload(add(pMem, pAlpha)), mload(add(pMem, pBeta)), q),\n                    calldataload(pEval_zw), q)\n    \n\n                // We'll use mIn + 64 to save d3\n                g1_mulSetC(\n                    add(mIn, 64),\n                    S3x,\n                    S3y,\n                    mulmod(mulmod(val1, val2, q), val3, q))\n\n                // We'll use mIn + 128 to save d4\n                g1_calldataSet(add(mIn, 128), pT1)\n\n                g1_mulAccC(add(mIn, 128), calldataload(pT2), calldataload(add(pT2, 32)), mload(add(pMem, pXin)))\n                let xin2 := mulmod(mload(add(pMem, pXin)), mload(add(pMem, pXin)), q)\n                g1_mulAccC(add(mIn, 128), calldataload(pT3), calldataload(add(pT3, 32)) , xin2)\n                \n                g1_mulSetC(add(mIn, 128), mload(add(mIn, 128)), mload(add(mIn, 160)), mload(add(pMem, pZh)))\n\n                mstore(add(add(mIn, 64), 32), mod(sub(qf, mload(add(add(mIn, 64), 32))), qf))\n                mstore(add(mIn, 160), mod(sub(qf, mload(add(mIn, 160))), qf))\n                g1_acc(_pD, mIn)\n                g1_acc(_pD, add(mIn, 64))\n                g1_acc(_pD, add(mIn, 128))\n            }\n            \n            function calculateF(pMem) {\n                let p := add(pMem, pF)\n\n                g1_set(p, add(pMem, pD))\n                g1_mulAccC(p, calldataload(pA), calldataload(add(pA, 32)), mload(add(pMem, pV1)))\n                g1_mulAccC(p, calldataload(pB), calldataload(add(pB, 32)), mload(add(pMem, pV2)))\n                g1_mulAccC(p, calldataload(pC), calldataload(add(pC, 32)), mload(add(pMem, pV3)))\n                g1_mulAccC(p, S1x, S1y, mload(add(pMem, pV4)))\n                g1_mulAccC(p, S2x, S2y, mload(add(pMem, pV5)))\n            }\n            \n            function calculateE(pMem) {\n                let s := mod(sub(q, mload(add(pMem, pEval_r0))), q)\n\n                s := addmod(s, mulmod(calldataload(pEval_a),  mload(add(pMem, pV1)), q), q)\n                s := addmod(s, mulmod(calldataload(pEval_b),  mload(add(pMem, pV2)), q), q)\n                s := addmod(s, mulmod(calldataload(pEval_c),  mload(add(pMem, pV3)), q), q)\n                s := addmod(s, mulmod(calldataload(pEval_s1), mload(add(pMem, pV4)), q), q)\n                s := addmod(s, mulmod(calldataload(pEval_s2), mload(add(pMem, pV5)), q), q)\n                s := addmod(s, mulmod(calldataload(pEval_zw), mload(add(pMem, pU)),  q), q)\n\n                g1_mulSetC(add(pMem, pE), G1x, G1y, s)\n            }\n            \n            function checkPairing(pMem) -> isOk {\n                let mIn := mload(0x40)\n                mstore(0x40, add(mIn, 576)) // [0..383] = pairing data, [384..447] = pWxi, [448..512] = pWxiw\n\n                let _pWxi := add(mIn, 384)\n                let _pWxiw := add(mIn, 448)\n                let _aux := add(mIn, 512)\n\n                g1_calldataSet(_pWxi, pWxi)\n                g1_calldataSet(_pWxiw, pWxiw)\n\n                // A1\n                g1_mulSet(mIn, _pWxiw, mload(add(pMem, pU)))\n                g1_acc(mIn, _pWxi)\n                mstore(add(mIn, 32), mod(sub(qf, mload(add(mIn, 32))), qf))\n\n                // [X]_2\n                mstore(add(mIn,64), X2x2)\n                mstore(add(mIn,96), X2x1)\n                mstore(add(mIn,128), X2y2)\n                mstore(add(mIn,160), X2y1)\n\n                // B1\n                g1_mulSet(add(mIn, 192), _pWxi, mload(add(pMem, pXi)))\n\n                let s := mulmod(mload(add(pMem, pU)), mload(add(pMem, pXi)), q)\n                s := mulmod(s, w1, q)\n                g1_mulSet(_aux, _pWxiw, s)\n                g1_acc(add(mIn, 192), _aux)\n                g1_acc(add(mIn, 192), add(pMem, pF))\n                mstore(add(pMem, add(pE, 32)), mod(sub(qf, mload(add(pMem, add(pE, 32)))), qf))\n                g1_acc(add(mIn, 192), add(pMem, pE))\n\n                // [1]_2\n                mstore(add(mIn,256), G2x2)\n                mstore(add(mIn,288), G2x1)\n                mstore(add(mIn,320), G2y2)\n                mstore(add(mIn,352), G2y1)\n                \n                let success := staticcall(sub(gas(), 2000), 8, mIn, 384, mIn, 0x20)\n                \n                isOk := and(success, mload(mIn))\n            }\n            \n            let pMem := mload(0x40)\n            mstore(0x40, add(pMem, lastMem))\n            \n            checkInput()\n            calculateChallenges(pMem, _pubSignals)\n            calculateLagrange(pMem)\n            calculatePI(pMem, _pubSignals)\n            calculateR0(pMem)\n            calculateD(pMem)\n            calculateF(pMem)\n            calculateE(pMem)\n            let isValid := checkPairing(pMem)\n   \n            mstore(0x40, sub(pMem, lastMem))\n            mstore(0, isValid)\n            return(0,0x20)\n        }\n        \n    }\n}");

/***/ })

}]);
//# sourceMappingURL=9928.plugin-etherscan.1728572116224.js.map
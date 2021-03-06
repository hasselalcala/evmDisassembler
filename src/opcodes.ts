export const opcodes : [string, string, number][] = [
    //['UNKNOWN','00, 0],
    ['STOP','00', 0],
    ['ADD','01', 0 ],
    ['MUL','02', 0 ],
    ['SUB','03', 0 ],
    ['DIV','04', 0 ],
    ['SDIV','05', 0 ],
    ['MOD','06', 0 ],
    ['SMOD','07', 0 ],
    ['ADDMOD','08', 0 ],
    ['MULMOD','09', 0 ],
    ['EXP','0A', 0 ],
    ['SIGNEXTEND','0B', 0],
    ['LT','10', 0 ],
    ['GT','11', 0 ],
    ['SLT','12', 0 ],
    ['SGT','13', 0 ],
    ['EQ','14', 0 ],
    ['ISZERO','15', 0 ],
    ['AND','16', 0 ],
    ['OR','17', 0 ],
    ['XOR','18', 0 ],
    ['NOT','19', 0 ],
    [ 'BYTE','1A', 0 ],
    ['SHL','1B', 0 ],
    ['SHR','1C', 0 ],
    ['SAR','1D', 0 ],
    ['SHA3','20', 0 ],
    ['ADDRESS','30', 0 ],
    ['BALANCE','31', 0 ],
    ['ORIGIN','32', 0 ],
    ['CALLER','33', 0 ],
    ['CALLVALUE','34', 0 ],
    ['CALLDATALOAD','35', 0 ],
    ['CALLDATASIZE','36', 0 ],
    ['CALLDATACOPY','37', 0 ],
    ['CODESIZE','38', 0 ],
    ['CODECOPY','39', 0 ],
    ['GASPRICE','3A', 0 ],
    ['EXTCODESIZE','3B', 0 ],
    ['EXTCODECOPY','3C', 0 ],
    ['RETURNDATASIZE','3D', 0 ],
    ['RETURNDATACOPY','3E', 0 ],
    ['BLOCKHASH','40', 0 ],
    ['COINBASE','41', 0 ],
    ['TIMESTAMP','42', 0 ],
    ['NUMBER','43', 0 ],
    ['DIFFICULTY','44', 0 ],
    ['GASLIMIT','45', 0 ],
    ['POP','50', 0 ],
    ['MLOAD','51', 0 ],
    ['MSTORE','52', 0 ],
    ['MSTORE8','53', 0 ],
    ['SLOAD','54', 0 ],
    ['SSTORE','55', 0 ],
    ['JUMP','56', 0 ],
    ['JUMPI','57', 0 ],
    ['PC','58', 0 ],
    ['MSIZE','59', 0 ],
    ['GAS','5A', 0 ],
    ['JUMPDEST','5B', 0 ],
    ['PUSH1','60', 1 ],
    ['PUSH2','61', 2 ],
    ['PUSH3','62', 3 ],
    ['PUSH4','63', 4 ],
    ['PUSH5','64', 5 ],
    ['PUSH6','65', 6 ],
    ['PUSH7','66', 7 ],
    ['PUSH8','67', 8 ],
    ['PUSH9','68', 9 ],
    ['PUSH10','69', 10 ],
    ['PUSH1 1','6A', 11 ],
    ['PUSH12','6B', 12 ],
    ['PUSH13','6C', 13 ],
    ['PUSH14','6D', 14 ],
    ['PUSH15','6E', 15 ],
    ['PUSH16','6F', 16 ],
    ['PUSH17','70', 17 ],
    ['PUSH18','71', 18 ],
    ['PUSH19','72', 19 ],
    ['PUSH20','73', 20 ],
    ['PUSH21','74', 21 ],
    ['PUSH22','75', 22 ],
    ['PUSH23','76', 23 ],
    ['PUSH24','77', 24 ],
    ['PUSH25','78', 25 ],
    ['PUSH26','79', 26 ],
    ['PUSH27','7A', 27 ],
    ['PUSH28','7B', 28 ],
    ['PUSH29','7C', 29 ],
    ['PUSH30','7D', 30 ],
    ['PUSH31','7E', 31 ],
    ['PUSH32','7F', 32 ],
    ['DUP1','80', 0 ],
    ['DUP2','81', 0 ],
    ['DUP3','82', 0 ],
    ['DUP4','83', 0 ],
    ['DUP5','84', 0 ],
    ['DUP6','85', 0 ],
    ['DUP7','86', 0 ],
    ['DUP8','87', 0 ],
    ['DUP9','88', 0 ],
    ['DUP10','89', 0 ],
    ['DUP11','8A', 0 ],
    ['DUP12','8B', 0 ],
    ['DUP13','8C', 0 ],
    ['DUP14','8D', 0 ],
    ['DUP15','8E', 0 ],
    ['DUP16','8F', 0 ],
    ['SWAP1','90', 0 ],
    ['SWAP2','91', 0 ],
    ['SWAP3','92', 0 ],
    ['SWAP4','93', 0 ],
    ['SWAP5','94', 0 ],
    ['SWAP6','95', 0 ],
    ['SWAP7','96', 0 ],
    ['SWAP8','97', 0 ],
    ['SWAP9','98', 0 ],
    ['SWAP10','99', 0 ],
    ['SWAP11','9A', 0 ],
    ['SWAP12','9B', 0 ],
    ['SWAP13','9C', 0 ],
    ['SWAP14','9D', 0 ],
    ['SWAP15','9E', 0 ],
    ['SWAP16','9F', 0 ],
    ['LOG0','A0', 0 ],
    ['LOG1','A1', 0 ],
    ['LOG2','A2', 0 ],
    ['LOG3','A3', 0 ],
    ['LOG4','A4', 0 ],
    ['CREATE','F0', 0 ],
    ['CALL','F1', 0 ],
    ['CALLCODE','F2', 0 ],
    ['RETURN','F3', 0 ],
    ['DELEGATECALL','F4', 0 ],
    ['STATICCALL','FA', 0 ],
    ['REVERT','FD', 0 ],
    ['INVALID','FE', 0 ],
    ['SELFDESTRUCT','FF', 0]
   ];
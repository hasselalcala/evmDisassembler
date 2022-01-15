
import {getOpcodes} from '../src/opcode';



// Bytecode: 604260005260206000F3
// OPCODE: PUSH1 42, PUSH1 00, MSTORE, PUSH1 20, PUSH1 00, RETURN

/* BYTE CODE     -     OPCODE
    60 42            PUSH1 42
    60 00            PUSH1 00
    52               MSTORE
    60 20            PUSH1 20
    60 00            PUSH1 00
    F3               RETURN
*/


describe('disassembler test', () => {
  it('return opcode', () => {
    const operationCode = getOpcodes('604260005260206000F3');
    expect(operationCode).toEqual('PUSH1 42 PUSH1 00 MSTORE PUSH1 20 PUSH1 00 RETURN');
  });
});


describe('disassembler test', () => {
  it('return opcode', () => {
    const operationCode = getOpcodes('6080604052');
    expect(operationCode).toEqual('PUSH1 80 PUSH1 40 MSTORE');
  });
});

describe('disassembler test', () => {
  it('return opcode', () => {
    const operationCode = getOpcodes('0x600035601c52');
    expect(operationCode).toEqual('PUSH1 00 CALLDATALOAD PUSH1 1C MSTORE');
  });
});
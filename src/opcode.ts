import { opcodes } from "./opcodes";


function removeWhiteSpaces(bytecode: string) : string{
  return bytecode.trim();
}

function removePrefix(bytecode : string) : string{
  if (bytecode.startsWith('0x') ) {
    return bytecode.slice(2)
  }
  return bytecode;
}

function isValidLength(bytecode : string) : boolean{
  return bytecode.length % 2 == 0;
}

function codeWithUpperCaseLetters(bytecode : string) : string{
  return bytecode.toLocaleUpperCase();
}

//debe recibir el par de caracteres y hacer la busqueda, regresar la operación y el número de parámetros 
function getOperations(bytecode : string) : string{
  
  let opcodeResult : string = '';

  while(bytecode.length != 0){
    let sliceByteCode = bytecode.slice(0,2);
    bytecode = bytecode.slice(2,bytecode.length);

    for(let i = 0; i < opcodes.length; i++){
        if(sliceByteCode == opcodes[i][1]){
            opcodeResult = opcodeResult.concat(opcodes[i][0], ' ');
            if(opcodes[i][2] != 0){
                let takeValues: number = 0;
                while(takeValues != opcodes[i][2]){
                    let value = bytecode.slice(0,2);
                    bytecode = bytecode.slice(2,bytecode.length);
                    opcodeResult = opcodeResult.concat(value, ' ');
                    takeValues++;
                }
            }
            break;
        }
    }
  }
  return opcodeResult;
}

export function getOpcodes (bytecode :string): string  {

  const code = removeWhiteSpaces(bytecode);
  const codeWithoutPrefix = removePrefix(code);
  const codeUpperCaseLetters = codeWithUpperCaseLetters(codeWithoutPrefix);
  console.log(codeUpperCaseLetters);

  if(!isValidLength(codeUpperCaseLetters)){
    throw new Error ('Invalid Length');
  }
  
  const opCodeResult = getOperations(codeUpperCaseLetters);

  return opCodeResult.trim();
}

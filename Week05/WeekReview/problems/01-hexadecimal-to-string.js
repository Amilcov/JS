/******************************************************

Convert a Hexadecimal array of numbers into decimal values. The decimal values
should be treated as character codes and converted into characters. Return a
string of those characters.

Examples:

hexadecimalToString(['0x004a']) => 74 => "J"
hexadecimalToString(['0x0041', '0x0042', '0x0043']) => 61, 62, 63 => "ABC"
hexadecimalToString(['0x0048', '0x0065', '0x0078', '0x0061']) => 72, 101, 120, 97 => "Hexa"

*******************************************************/

function hexadecimalToString(hexadecimalChars) {
  let chars = [];
    // Fill this in
    for (let i = 0; i < hexadecimalChars.length; i++){
         let elem = hexadecimalChars[i];
         let charCode = hexaToDec(elem.toLowerCase());
         let char = String.fromCharCode(charCode);
         chars.push(char);

    }

    return chars.join('');
}

function hexaToDec(hex) {
    let dec = 0;
    let i = hex.length - 1;
    let hexPowerVal = 1;
    let obj = {'a': 10,
               'b': 11,
               'c': 12,
               'd': 13,
               'e': 14,
               'f': 15
              }

    while (hex[i] !== 'x') {
        
          let char = hex[i];
          if (isNaN(char)) {
               char = obj[char];
          }

          dec += hexPowerVal * parseInt(char);
          hexPowerVal *= 16;
          i--;
    }

    return dec;
}


hexadecimalToString(['0x0041', '0x0042', '0x0043']);  // 'ABC'


module.exports = hexadecimalToString;

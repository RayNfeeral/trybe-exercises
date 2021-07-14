function encode(string) {
  const encodeKey = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  return string.split('').map((char) => encodeKey[char] ? encodeKey[char] : char).join('');
}

function decode(encodedString) {
  const decodeKey = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return encodedString.split('').map((char) => decodeKey[char] ? decodeKey[char] : char).join('');
}

module.exports = { encode, decode };

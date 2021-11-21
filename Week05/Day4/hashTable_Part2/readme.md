Part 2: Hash function
In order to test your hash table predictably, you will be implementing a very simple string hashing function.

hashTable.hash(key) takes in a string key and returns the sum of all its ASCII values.

Example: hash('ABC') would add up the ASCII values of 'A' (65), 'B' (66) and 'C' (67), returning 198.

Hint: You may find charCodeAt useful.

hashMod(key) takes in a string key and return the hash modulo the length of the data array.

Example: hashMod('ABC') in a hash table with 10 buckets would return 198 modulo 10, or 8.

Read the specs in test/hash-table-spec.js for more details.
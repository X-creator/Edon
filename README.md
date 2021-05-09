# Caesar cipher CLI* tool

> Command Line Interface*

### Encrypt/Decrypt a text by the Caesar cipher

only latin letters (case-insensitive).

## Install

1. Open command line
2. `git clone https://github.com/X-creator/Edon.git`
2. `cd Edon`
3. `npm i`

## Commands

* `-s` *[short version]*, `--shift` => **shift**. An `integer` (positive, negative or zero) *[Required]*
* `-a` *[short version]*, `--action` => **mode**. `encode` or `decode`. *[Required]*
* `-i` *[short version]*, `--input` =>  **input file path**. (.txt) *[Optional]*
* `-o` *[short version]*, `--output` =>  **output file path**. (.txt) *[Optional]*

## Usage:

`node index -a encode -s 7 -i "./input.txt" -o "output.txt"`

`node index --action decode --shift 15 --output "result.txt"`

`node index --action decode -s 24 --input "from.txt"`
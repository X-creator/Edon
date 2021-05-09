const fs = require('fs');
const {Transform} = require('stream');
const caesarCipher = require('./caesar-cipher');

function readStream(input) {
    if (input) {
        return fs.createReadStream(input);
    } else {
        process.stdout.write('▼▼▼ Type here:\n');
        return process.stdin;
    }
}

class TransformStream extends Transform {
    constructor(shift, action, input, output) {
        super();
        this.shift = shift;
        this.action = action;
        this.input = input;
        this.output = output;
    }

    _transform(chunk, encoding, callback) {
        let text = caesarCipher(chunk.toString(), Number(this.shift), this.action);
        if (this.input === undefined && this.output === undefined) text = 'Result ➤➤➤\t' + text;
        this.push(text);
        callback();
    }
}

function writeStream(output) {
    return output ? fs.createWriteStream(output, {flags: 'a'}) : process.stdout;
}

module.exports = {
    readStream,
    TransformStream,
    writeStream
};
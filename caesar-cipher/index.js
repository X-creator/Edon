const {pipeline} = require('stream');
const checkArgs = require('./checkArgs');
const {readStream, TransformStream, writeStream} = require('./streams');
const {Command} = require('commander');
const program = new Command();

program
    .requiredOption('-s, --shift <number>', 'a shift')
    .requiredOption('-a, --action <mode>', 'an action encode/decode')
    .option('-i, --input [file]', 'an input file')
    .option('-o, --output [file]', 'an output file');


program.parse(process.argv);
const {shift, action, input, output} = program.opts();

checkArgs(shift, action, input, output);

const crypto = new TransformStream(shift, action, input, output);

pipeline(
    readStream(input),
    crypto,
    writeStream(output),
    (err) => {
        if (err) {
            process.stderr.write(err);
        } else {
            process.stdout.write('➤➤➤ Success. Please check "output" file.');
        }
    }
);
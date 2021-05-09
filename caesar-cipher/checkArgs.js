const fs = require('fs');
const path = require("path");

function checkArgs(shift, action, ...files) {
    let n = Number(shift);
    let regexp = /[.,]/;

    if (Number.isNaN(n) || regexp.test(shift)) {
        process.stderr.write('➤➤➤ "[-s, --shift] shift" must be an integer');
        process.exit(9);
    }

    if (action !== 'encode' && action !== 'decode') {
        process.stderr.write('➤➤➤ "[-a, --action] action" must be "encode" or "decode"');
        process.exit(9);
    }

    files.forEach((file) => {
        if (typeof file === 'boolean') {
            let fileType = typeof files[1] !== 'boolean' ? 'input' : 'output';
            process.stderr.write(`➤➤➤ "${fileType}" file location not specified`);
            process.exit(9);
        }

        if (file) {
            if (!file.endsWith('.txt')) {
                process.stderr.write('➤➤➤ "input/output" file extension must be ".txt"');
                process.exit(9);
            }

            const filePath = path.resolve(__dirname, file);
            try {
                fs.lstatSync(filePath).isFile();
            } catch (e) {
                if (e.code == 'ENOENT') {
                    process.stderr.write(`➤➤➤ "${filePath}" file does not exist`);
                    process.exit(9);
                }
            }
        }
    });
}

module.exports = checkArgs;
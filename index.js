XLSX = require('xlsx');

exports.start = function (startRow, callback) {
    try {
        if (process.argv[2] !== undefined) {
            callback(processXlsx(startRow, process.argv[2]));
        } else {
            process.stdin.setEncoding('utf8');
            process.stdin.on('readable', () => {
                const input = process.stdin.read();
                if (input !== null) {
                    let object = JSON.parse(input);
                    if (object.name === 'file') {
                        callback(processXlsx(startRow, object.content));
                    }
                }
            });
        }
    } catch (e) {
        console.log(encode.protocol('error', e.message));
    } 
}

function processXlsx(startRow, file) {
    const workbook = XLSX.readFile(file, {
        type: 'binary', 
        cellDates: true, 
        cellStyles: true
    });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    let jsonSheet = XLSX.utils.sheet_to_json(worksheet, {
        range: startRow
    });
    return jsonSheet;
}
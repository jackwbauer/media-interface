const fs  = require('fs');
const fileName = 'test.txt';
const dir = './test-files';

function readDirectory(dir) {
    let allFiles = [];
    const options = {
        encoding: 'utf8',
        withFileTypes: true
    }

    const files = fs.readdirSync(dir, options);

    files.forEach(file => {
        if(file.indexOf(".mkv"|".ts") == -1) {
            const newDir = `${dir}/${file}`;
            allFiles.push(readDirectory(newDir));
        } else {
            allFiles.push(file);
        }
    })
    return allFiles;
}

function readTSV(filePath) {
    const options = {
        encoding: 'utf8',
        withFileTypes: true
    }

    fs.readFile(filePath, options, (err, data) => {
        if(err) {
            console.error(err);
        }
        let dataArray = data.split('\n');
        dataArray.forEach(title => {
            let column = title.split('\t');
            title = column;
            console.log(title);
        })
    });
}

// const allFiles = readDirectory(dir);
// console.log(allFiles);

readTSV('./IMDB/title-episode.tsv')
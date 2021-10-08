const uuid = require('uuid');
const path = require('path');

class FileService {
  saveFile(file) {
    try {
      const filename = `${uuid.v4()}.jpg`;
      const filePath = path.resolve('static');
      file.mv(filePath);
      return filename;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FileService();

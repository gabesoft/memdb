function Db() {
    this.data = {};
}

module.exports.Db = Db;

Db.prototype.exec = function(cmd) {
    var data = this.data
      , out  = 'OK';

    switch (cmd.text) {
        case 'SET':
            data[cmd.name] = cmd.value;
            break;
        case 'GET':
            out = data[cmd.name] || null;
            break;
        case 'UNSET':
            delete data[cmd.name];
            break;
        case 'NUMEQUALTO':
            out = Object.keys(data)
               .map(function (k) { return data[k]; })
               .filter(function (v) { return v === cmd.name; })
               .length;
            break;
        default:
            out = 'UNKNOWN COMMAND: ' + cmd.text;
    }

    return out;
};


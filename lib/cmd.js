function Cmd (text) {
    var pattern = /([A-Za-z]+)(\s+(\w+))?(\s+(\w+))?/
      , match   = pattern.exec(text);

    match    = match || [];
    match[1] = match[1] || 'NIL';
    match[3] = match[3] || null;
    match[5] = match[5] || null;

    this.text  = match[1].toUpperCase();
    this.name  = match[3];
    this.value = match[5];
}

module.exports.Cmd = Cmd;

Cmd.prototype.end = function() {
    return this.text === 'END';
};
 

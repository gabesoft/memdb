var prompt = require('prompt')
  , colors = require('colors')
  , Cmd    = require('./cmd').Cmd
  , Db     = require('./db').Db
  , db     = new Db()
  , props  = {
        properties: {
            cmd: { description: '>'.yellow }
        }
    }
  , next = function (cmd) {
        return cmd !== 'END';
    }
  , run = function (err, result) {
        if (err) {
            console.log(err.stack || err);
            return;
        }

        var cmd = new Cmd(result.cmd);
        if (!cmd.end()) {
            console.log(db.exec(cmd));
            prompt.get(props, run);
        }
    };

prompt.message   = 'memdb'.cyan;
prompt.delimiter = '';

prompt.start();

prompt.get(props, run);

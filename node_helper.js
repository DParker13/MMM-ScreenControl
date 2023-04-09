const NodeHelper = require('node_helper');
const {PythonShell} = require('python-shell');

module.exports = NodeHelper.create({
  
  python_toggle: function () {
    const self = this;
    const pyshell = new PythonShell('modules/' + this.name + '/gpiocontrol/gpiocontrol.py', { mode: 'json', args: [JSON.stringify(this.config)]});
    pyshell.on('message', function (message) {
      if (message.hasOwnProperty('status'))
      {
        console.log("[" + self.name + "] " + message.status);
      }
    });
    pyshell.end(function (err)
    {
      if (err) throw err;
      console.log("[" + self.name + "] " + 'finished running...');
    });
  },

  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if(notification === 'Toggle')
    {
      this.config = payload;
      this.python_toggle(this.config);
    };
  }
});

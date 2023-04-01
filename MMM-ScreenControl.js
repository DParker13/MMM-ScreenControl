const gpio = require("pi-gpio");

Module.register("MMM-ScreenControl", {

	defaults: {
		updateInterval: 15,
	},

	start: function () {
		setTimeout(() => {
			this.toggleScreen();
		}, this.config.updateInterval * 1000);
	},

	toggleScreen: function () {
		gpio.open(11, "output", function(err) {
			gpio.write(11, 1, function() {
				gpio.close(11);
			});
		});

	}
});

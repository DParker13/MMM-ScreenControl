Module.register("MMM-ScreenControl", {

	defaults: {
		gpio_pin: 11,
		updateInterval: 1,
	},

	start: function () {
		setTimeout(() => {
			this.sendSocketNotification('Toggle', this.config);
		}, this.config.updateInterval * 1000);
	},
});

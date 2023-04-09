Module.register("MMM-ScreenControl", {

	defaults: {
		gpio_pin: 11,
		updateInterval: 1,
	},

	start: function () {
		this.sendSocketNotification('Toggle', this.config);
	},
});

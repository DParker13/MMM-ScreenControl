Module.register("MMM-ScreenControl", {

	defaults: {
		gpio_pin: 11,
		on_time: 0800,
		off_time: 1900,
		updateInterval: 1,
	},

	start: function () {
		this.sendSocketNotification('Toggle', this.config);
	},
});

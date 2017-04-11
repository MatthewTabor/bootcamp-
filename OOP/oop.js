function Button(text) {
	this.text = text || 'Hello there lazy ass';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var btn1 = new Button('Not a lazy ass');
btn1.create();

var btn2 = new Button();
btn2.create();

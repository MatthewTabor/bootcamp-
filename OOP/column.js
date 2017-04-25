function Column(id, name) {
		var self = this; //for nesting purposes	
		this.id  = id;
		this.name = name;
		this.$element = createColumn();

	function createColumn() {
		var $column = $('<div>').addClass('column col-lg-3');
		var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
		var $columnCardList = $('<ul>').addClass('column-card-list');
		var $columnDelete = $('<button>').addClass('btn btn-danger').text('x');
		var $columnAddCard = $('<button>').addClass('add-card btn btn-success').text('Dodaj kartę');
	
		$columnDelete.click(function() {
			self.removeColumn();
		});
		$columnAddCard.click(function(event) {
			var cardName = prompt("Wpisz nazwę karty");
			event.preventDefault();
			$.ajax({
				url: baseUrl + '/card',
				method: 'POST',
				data: {
					name: cardName,
					bootcamp_kanban_column_id: self.id
				},
				success: function() {
					var card = new Card(response.id, cardName);
					self.createCard(card);
				}
			});
		});

		$column.append($columnTitle)
			.append($columnDelete)
			.append($columnAddCard)
			.append($columnCardList);

		return $column;
	}//createColumn
	} //column
	Column.prototype = {
		addCard: function(card) {
			this.$element.children('ul').append(card.$element);
		}, //addCard
	 //addCard
		removeColumn: function() {
			var self = this;
			$.ajax({
				url: baseUrl + '/column/' + self.id,
				method: 'DELETE',
				success: function(response){
					self.element.remove();
				}
			});
		} //removeColumn
	};//prototype
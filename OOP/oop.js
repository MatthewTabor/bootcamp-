$(function(){
	function randomString() {
    		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    		var str = '';
    		for (i = 0; i < 10; i++) {
        		str += chars[Math.floor(Math.random() * chars.length)];
    		}
    		return str;
    	}//random string
	
	function Column(name) {
		var self = this; //for nesting purposes	
		this.id  = randomString();
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
			self.addCard(new Card(prompt("Wpisz nazwę karty")));
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
			this.$element.remove();
		} //removeColumn
	};//prototype
	
	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard();

	function createCard() {
		var $card = $('<li>').addClass('card');
		var $cardDescription = $('<p>').addClass('card-description').text(self.description);
		var $cardDelete = $('<button>').addClass('btn btn-danger cardRemoval').text('x');

		$cardDelete.click(function(){
			self.removeCard();
		});

		$card.append($cardDelete)
			.append($cardDescription);

		return $card;
	}//createCard
	} //card

	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}//removeCard
	}//prototype

	var board = {
		name: 'Tablica Kanban',
		addColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},//Column
		$element: $('#board .column-container')
	};

		function initSortable() {
			$('.column-card-list').sortable({
				connectWith: '.column-card-list',
				placeholder: '.card-placeholder'
			}).disableSelection();
		} //initSortable

		$('.create-column').click(function(){
			var name = prompt('Wpisz nazwę kolumny');
			var column = new Column(name);
			board.addColumn(column);
		});

	

	//Creating columns
	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('W trakcie');
	var doneColumn = new Column('Wykonane');

	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	//Creating cards

	var card1 = new Card('Nowe Zadanie');
	var card2 = new Card('Udoskonalić tablicę');

	todoColumn.addCard(card1);
	doingColumn.addCard(card2);
})


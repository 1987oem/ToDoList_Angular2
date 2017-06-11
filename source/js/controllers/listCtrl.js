angular.module('app').controller('listCtrl', function (listFactory, cardFactory) {
   // console.log('listCtrl');
    this.removeList = function (list) {
        listFactory.removeList(list);
    };

    this.sortByName = function (lists) {
        listFactory.sortByName(lists);
    };

    this.getCards = function (list) {
      return cardFactory.getCards(list);
    };

    this.createCard = function (list) {
        cardFactory.createCard(list, this.cardDescription);
        this.cardDescription = '';
    };
});
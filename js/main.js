$('#berries').affix({
  offset: {
    top: function () {
      return (this.top =
              $('.jumbotron').outerHeight(true) + 35);
              //$('.page-header').outerHeight(true) + 10);
              //$('.page-header').outerHeight(true) +
              //$('.jumbotron').outerHeight(true)) + 10;
    }
  }
});

FlowRouter.route('/', {
  action: function (params, queryParams) {
    ReactLayout.render(WelcomeComponent, { source: 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=83db85d2c7ea5899f21bde1df3414c07&format=json&nojsoncallback=1&auth_token=72157664451304839-9ed4028a8fcd80c7&api_sig=3f2c2a53cde144ef532012a5ffe59ebe' });
  }
});

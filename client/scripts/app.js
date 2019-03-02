var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.fetch();
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },
// var callback = function(){}
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      data.results.forEach(function(item) {
        // var textMessage = item.text;
        // var roomname = item.roomname;
        // var username = item.username;
        var renderedMessage = MessageView.render(item);
        $('#chats').append(renderedMessage);
      })

///////////////WORKS WITHS SUCCESSCB IN PARSE//////////////
    //   data.results.forEach(function(item) {
    //     if (textMessage) {
    //       $('#chats').append('<div>' + textMessage + '</div>');
    //     }
    // })
/////////////////////////////////////////////////


        // var room = item.roomname;
        // var roomTracker = [];
        // if (room && !roomTracker.includes(room)) {
        //   $('select').append('<option value =' + room + '>' + room + '</option>');
        //   roomTracker.push(room);
        // }
      //data is an object with one key (result)
      //  the key result has the value: one array
      //  that array has 100 objects
      //  those objects 
      console.log(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

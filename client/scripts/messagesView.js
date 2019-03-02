var message = {
  username: 'Mel Brooks',
  text: 'Never underestimate the power of the Schwartz!',
  roomname: 'lobby'
};

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  // check the server for messages from before. if there are, show them.
  },

  render: function() { //should render all messages
    // if this is true, then probably implement the template loop?
  },

  //create our own renderMessage function that takes in input of message (only one mesesage)
  // _.template returns a function definition where when called with an input that is an object with the key text, will return the div elements
  // with this text
  
  renderMessage: function(message) {
    var renderedMessage = MessageView.render(message);
    $(MessagesView.$chats).append(renderedMessage);

  }
    // this is a function definition that will take in an input: (input = object that should have some of the following keys: username text and roomname)
    // we want to run this template function on our message
    // now append the result to the DOM (index.html) at ID main
    // 
    
 
};
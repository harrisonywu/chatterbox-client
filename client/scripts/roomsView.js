var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() { //if rooms were created before, save them
  },

  renderRoom: function(roomName) {
    //append to the select element in index.html
    $(RoomsView.$select).append(roomName);
  }
};


//  <option value="room1">Room 1</option> 

// RoomsView.renderRoom('superLobby');
// expect($('#rooms select').children().length).to.equal(1);
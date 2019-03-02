var MessageView = { // creating an object 

  // adding a method to the object
  // a String?
  
  render: _.template(`
      <div class="chat">
        <div class="username"><%=username%></div>
        <div class="text"><%=text%></div>
        <div class="roomname"><%=roomname%></div>
      </div>
    `)
};

// render: _.template('hello <%= pet %>, his favorite color is <%= color%>')
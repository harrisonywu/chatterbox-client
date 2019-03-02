var MessageView = { // creating an object 

  // adding a method to the object
  // a String?
  render: _.template('hello <%= pet %>, his favorite color is <%= color%>')

};

// render: _.template(`
//       <!--
//       <div class="chat">
//         <div class="username"></div>
//         <div></div>
//       </div>
//       -->
//     `)
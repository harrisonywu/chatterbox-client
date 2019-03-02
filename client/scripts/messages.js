var Messages = {
//create a function that uses a template, which inputs a data in parse
    // var messages = $('#message').text;
    Parse.readAll(data) => {
        data.results.forEach(function(item) {
            var textMessage = item.text;
            ``
        })
    }


};

// Messages is an object. Therefore, it must have keys and values (properties).
// So what are the keys?
// We're guessing the values are the messages that we create using the template function

var t1 = _.template('Hello <%=user%>!');//compile
t1({ user: '<Jane>' });
// var t2 = _.template("Today is <%=day%>!");
// t2({day: "<Friday>"})




// in DOM we write a message. when we click submit, we want to save that message here (in Messages)
//   QUESTIOn: we don't know if 
//      1) we should parse our chat box input first, or 
//      2) send it to Messages (this file) first and then have it parsed
// RIGHT NOW: we think #2, because of how learn says "Display messages retrieved from the parse server."
//  whichever one is correct, we take the result and input into messageView (and messagesView too)
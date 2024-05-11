// Here we create a script that compt:
let i = 0;

function timedCount() {
  i++;
  postMessage(i);
  setTimeout("timedCount()", 500);
}

timedCount();

// The important part of the code above is the postMessage() method - which is used to post a message back to the HTML page.

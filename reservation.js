var Table = require("./table");

var resInfo = [];
var waitlist = [];

// Make reservation
$("#submit").on("click", function() {
    // get userinput, push it into new table object,
    // then push the new table object into resInfo array
    var usrEmail = $("#emailaddress").val().trim();
    var usrName = $("#name").val().trim();
    var usrPhone = $("#number").val().trim();
    var usrUniqueID = $("#uniqueID").val().trim();

    // make new table
    var table = new Table(usrEmail, usrName, usrPhone, usrUniqueID);

    // push the new table into the array
    if(resInfo.length <= 7) {
        resInfo.push(table);
        // and then maybe display successfully reserved
        alert("Reservation successfully made!");
    }
    else {
        waitlist.push(table);
        // and then display You are on waitlist or something like that
    }
});

// when you click on the view reservation button, 
// go through the array and display the table info
$("#viewBtn").on("click", function() {

    for(var i = 0; i < resInfo.length; i++) {
    // Should dynamically create new div for displaying

    }
});



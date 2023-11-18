// Fixed value
var channel_token = "865e5c6c4fdf7a336c780cf846104f56"; // Your channel access token

var url = "https://api.line.me/v2/bot/message/reply";

var spreadsheet = SpreadsheetApp.openById("Your Spreadsheet ID"); // Replace with your Spreadsheet ID
var sheet = spreadsheet.getSheetByName('Your Sheet name'); // Replace with your Sheet name

// Events from LINE arrive at doPost
function doPost(e) {
  // Converts the information that came in so that it is easier to handle
  var json = e.postData.contents;
  var events = JSON.parse(json).events;

  // Get the sent text
  var user_massage = events[0].message.text;

  // Write to the bottom row of the spreadsheet here
  sheet.appendRow([user_massage]);

  var event = events[0];
  // If the event type is a text message with talk
  if (event.type == "message") {
    if (event.message.type == "text") {

      // Contents of automatic reply message
      var message = {
        "replyToken": event.replyToken,
        "messages": [{ "type": "text", "text": "Input completed" }]
      };
      // Information that must be included in the message
      var options = {
        "method": "post",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + channel_token
        },
        "payload": JSON.stringify(message)
      };

      // Send auto-reply message
      UrlFetchApp.fetch(url, options);
    }
  }
}
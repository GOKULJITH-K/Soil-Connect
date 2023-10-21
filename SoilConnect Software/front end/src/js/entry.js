$(document).ready(function() {
    // Fetch channel feed information to get the total number of entries
    $.getJSON('https://api.thingspeak.com/channels/2220496/feed.json', function(data) {
       // Get the entry count from the feed information
       var entryCount = data.channel.last_entry_id;

       // Display the entry count on the page
       $('#entryCount').text('Number of Entries: ' + entryCount);
    });
 });
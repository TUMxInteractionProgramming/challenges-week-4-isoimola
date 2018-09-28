/* #6 start the #external #action and say hello */

console.log("App is alive");
/**
* #6 #Switcher function for the #channels name in the right app bar
* @param channelName Text which is set
*/


// toggling two classess for the star ID $('#channel-star').toggleClass( "fas far" );



function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);
    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName;
    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by < a href="http://w3w.co/' + channelObject.createdBy + '" target="_blank">< strong>' + channelObject.createdBy + '< /strong>< /a>';
    /* #6 #liking channels on #click */
    $('#channel-star').attr("fas fa-star");
    /* #6 #highlight the selected #channel.
      This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channel.name + ')').addClass('selected');
} 
/* #6 #liking a channel on #click */
function star() {
    $("i.fas fa-star").toggleClass("far fa-star");
    $('#channels li:contains(' + currentChannel.name + ') span .fa-star');
}
/**
* #6 #taptab selects the given tab
* @param tabId #id of the tab
*/
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');
    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);
    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}
/**
* #6 #toggle (show/hide) the emojis menu #smile
*/
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

var currentChannel = {};

var currentLocation = { latitude: '51.508405', longitude: ' - 0.125368', what3words: '  '};

console.log(currentLocation);

function addMessage() {
    var message = $("input[]").val();



}


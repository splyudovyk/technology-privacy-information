/* Names: Spencer Lyudovyk, Andrew Wang, Andrew Li, Ben FitzGerald
Date: 06/08/22
Project: Foresight (BME/CSE Wearable Sensor)
File: mainScripts.js
Purpose: This file contains the code for dynamically updating the webpage in ways not related to Firebase.
Task description: To create a wearable sensor that collects data about a user to help solve a particular issue.
 */

$(document).ready(function () {
    /*Title fades out on index.html when scrolling down to main content*/
    $(window).scroll(() => {
        /*Gets height of title and amount scrolled*/
        var scrollTop = $(window).scrollTop();
        var height = $('#title-div').height();

        /*Title gradually fades out and eventually fully disappears*/
        $('#title-div').css({
            'opacity': (((0.8 * height) - scrollTop) / (0.8 * height))
        });
    });


    /*Nav Bar Buttons*/
    
    /*All nav bar buttons/elements change styles on hover*/
    buttons = ['sign-in', 'sign-up', 'view-stats', 'your-acc', 'return', 'change-pass', 'your-prof', 'sign-out', 'how-to-use', 'home', 'trinity', 'thor',
                'credit', 'explorer', 'birthcontrol', 'napalm', 'xerox', 'clipper', 'sources']  //Array of button classes
    for(let i = 0; i < buttons.length; i++){  // Iterates through array
        changeButtonOnHover('.' + buttons[i]);
    }

    function changeButtonOnHover(button) {
        /**
         * changeButtonOnHover() modifies the button's appearance on hover
         * 
         * Parameter (required):
         *      button - the buton that should update when hovered over
         */

        $(button).hover(() => {
            $(button).addClass('z-depth-3'); // Applies drop shadow
            $(button).css("background-color", "rgba(180, 189, 231, 0.7)");  // Lighter color background
            $(button).css("cursor", "pointer");  // Mouse cursor changes to pointer
        }, () => {
            // Styles reset to original when not hovering
            $(button).removeClass('z-depth-3');
            $(button).css("background-color", 'rgba(0, 0, 0, 0)');
        });
    }

    /*Nav Bar Dropdowns*/

    /*Dropdowns initially hidden*/
    $('.your-acc-links').hide();  //Your account dropdown

    /*Primary or account dropdown display when hovering over certain elements*/
    showGen('.your-acc', '.your-acc-links', '.arrow-ud-2');  //Account dropdown displayed if hovering over "Your Account" title
    showGen('.your-acc-links', '.your-acc-links', '.arrow-ud-2');  //Account dropdown displayed if hovering over account dropdown

    /*Function for displaying primary/account dropdown*/
    function showGen(element, element2, arrow) {
        $(element).hover(() => {
            $(element2).show();  //Primary dropdown is displayed
            $(arrow).html("&#9206;");  //Arrow in primary dropdown title is pointed up
        }, () => {
            $(element2).hide();  //Primary dropdown is hidden
            $(arrow).html("&#9207;");  //Arrow in primary dropdown title is pointed down
        });
    }

});
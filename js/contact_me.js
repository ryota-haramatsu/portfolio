// $(function() {

//   $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function($form, event, errors) {
//       // additional error messages or events
//     },
//     submitSuccess: function($form, event) {
//       event.preventDefault(); // prevent default submit behaviour
//       // get values from FORM
//       var name = $("input#name").val();
//       var email = $("input#email").val();
//       var title = $("input#title").val();
//       var message = $("textarea#message").val();
//       var firstName = name; // For Success/Failure Message
//       // Check for white space in name for Success/Fail message
//       if (firstName.indexOf(' ') >= 0) {
//         firstName = name.split(' ').slice(0, -1).join(' ');
//       }
//       $this = $("#sendMessageButton");
//       $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
//       $.ajax({
//         url: "https://docs.google.com/forms/d/e/1FAIpQLSc8QD_IcJly4IXu9oaMd5gteYQLk2mBO-bHU2hOB5I1X024Ig/formResponse", 
//         type: "POST",
//         data: {
//           "entry.930545169": name,
//           "emailAddress": email,
//           "entry.57352405": title,
//           "entry.57352405": message
//         },
//         dataType: "xml",
//         cache: false,
//         success: function() {
//           // Success message
//           $('#success').html("<div class='alert alert-success'>");
//           $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-success')
//             .append("<strong>Your message has been sent. </strong>");
//           $('#success > .alert-success')
//             .append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },
//         error: function() {
//           // Fail message
//           $('#success').html("<div class='alert alert-danger'>");
//           $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
//           $('#success > .alert-danger').append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },
//         complete: function() {
//           setTimeout(function() {
//             $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
//           }, 1000);
//         }
//       });
//     },
//     filter: function() {
//       return $(this).is(":visible");
//     },
//   });

//   $("a[data-toggle=\"tab\"]").click(function(e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// });

// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//   $('#success').html('');
// });



// $(document).ready(function () {
// var name = $("#contactForm input[name=name]").val();
// var email = $("#contactForm input[name=email]").val();
// var title = $("#contactForm input[name=title]").val();
// var message = $("#contactForm input[name=message]").val();

//   $("#contactForm").submit(function (event) {
//       $.ajax({
//           url: "https://docs.google.com/forms/d/e/1FAIpQLSc8QD_IcJly4IXu9oaMd5gteYQLk2mBO-bHU2hOB5I1X024Ig/formResponse",
//           data: {
//               "entry.12798606": name,
//               "entry.1388151218": email,
//               "entry.983919269": title,
//               "entry.1467404344":message
//           },
//           type: "POST",
//           dataType: "xml",
//           statusCode: {
//               0: function () {
//                   //送信に成功したときの処理
//                   $("form").slideUp();
//                   $('#success-form').css("display", "block");
//               },
//               200: function () {
//                   //送信に失敗したときの処理
//                   $("form").slidUp();
//                   $('#error-form').css("display", "block");
//               }
//           }
//       });
//       event.preventDefault();
//   });
// });


function sendGform(){
    document.sentMessage.submit();
    document.getElementById('formWrapper').style.display = 'none';
    document.getElementById('success-form').style.display = 'block';
 }
 

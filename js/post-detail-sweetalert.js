$(function() {
   $('.alert-detail').click(function() {
        alert('Alert detail');
   });
   $('.sweet-alert1').click(function() {
        swal("Good job!", "You clicked the button!", "success");
   });
   
   $('.vd1').click(function() {
        swal("Here's a message!")
   });
   $('.vd2').click(function() {
        swal("Here's a message!", "It's pretty, isn't it?")
   });
   $('.vd3').click(function() {
        swal("Good job!", "You clicked the button!", "success")
   });
   $('.vd4').click(function() {
        swal({   title: "Auto close alert!",   text: "I will close in 2 seconds.",   timer: 2000 });
   });
   $('.vd5').click(function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false },
            function(isConfirm){
                if (isConfirm) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
        });
   });
   $('.vd6').click(function() {
        swal({
            title: "Sweet!",
            text: "Here's a custom image.",
            imageUrl: "images/icon-sweet.jpg"
        });
   });

   $('#cmt1').click(function() {
        swal({
            title: "Are you sure?",
            text: "Do you want to delete this comment!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false },
            function(isConfirm){
                if (isConfirm) {
                    $('#comment1').remove();
                    swal("Deleted!", "Comment has been deleted successfully!", "success");
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
        });
   });

   $('#cmt2').click(function() {
        swal({
            title: "Are you sure?",
            text: "Do you want to delete this comment!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false },
            function(isConfirm){
                if (isConfirm) {
                    $('#comment2').remove();
                    swal("Deleted!", "Comment has been deleted successfully!", "success");
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
        });
   });
});
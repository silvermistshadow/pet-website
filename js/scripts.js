$(document).ready(function() {
  $("button#switch-dark").click(function() {
    $("body").removeClass("light-theme")
    $("body").addClass("dark-theme");
    $("button#switch-dark").hide();
    $("button#switch-light").show();
  });
  $("button#switch-light").click(function() {
    $("body").removeClass("dark-theme");
    $("body").addClass("light-theme");
    $("button#switch-light").hide();
    $("button#switch-dark").show();
  });

});

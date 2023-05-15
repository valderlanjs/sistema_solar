$(window).load(function () {
  let body = $("body"),
    universe = $("#universe"),
    solarsys = $("#solar-system");

  let int = function () {
    body
      .removeClass("viwe-2D opening")
      .addClass("view-3D")
      .delay(2000)
      .queue(function () {
        $(this).removeClass("hide-UI").addClass("set-speed");
        $(this).dequeue();
      });
  };

  let setView = function (view) {
    universe.removeClass().addClass(view);
    $("toggle-data").click(function (e) {
      body.toggleClass("data-open data-close");
      e.preventDefault();
    });

    $("#toggle-controls").click(function (e) {
      body.toggleClass("controls-open controls-close");
      e.preventDefault();
    });

    $("#data a").click();
  };
});

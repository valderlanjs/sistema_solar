//Evento que é acionado quando a pagina é carregado por completo para executar o código dentro da função.
$(window).load(function () {
  //Seleciona os elementos relevantes
  let body = $("body"), // Elemento Body
    universe = $("#universe"), // Elemento com id "universe"
    solarsys = $("#solar-system"); // Elemento com id "solor-system"

  // Função de inicialização
  let init = function () {
    body
      .removeClass("view-2D opening") // Remove as classes view-2d e opening do body
      .addClass("view-3D") // Adiciona a classe view-3d ao body
      .delay(2000) // atraso de 2 segundos antes da execução do proximo comando
      .queue(function () {
        // adiciona uma função a fila de comando a serem executadas
        $(this).removeClass("hide-UI").addClass("set-speed"); // Remove a class "hide-UI" e adiciona a classe "set-speed"
        $(this).dequeue(); // remove o proximo comando da fila
      });
  };
  let setView = function (view) {
    // Define a visualização do universo
    universe.removeClass().addClass(view); // Remove todas as classes e adiciona a classe especificada para o elemento "universe"
  };
  $("#toggle-data").click(function (e) {
    // Manipula o evento de clique no elemento com id "toggle-data"
    body.toggleClass("data-open data-close"); // Alterna entre as classes "data-open" e "data-close" no <body>
    e.preventDefault(); // Impede o comportamento padrão do link (neste caso, seguir o link)
  });

  $("#toggle-controls").click(function (e) {
    // Manipula o evento de clique no elemento com id "toggle-controls"

    body.toggleClass("controls-open controls-close"); // Alterna entre as classes "controls-open" e "controls-close" no <body>
    e.preventDefault(); // Impede o comportamento padrão do link (neste caso, seguir o link)
  });

  $("#data a").click(function (e) {
    // Manipula o evento de clique em um link dentro do elemento com id "data"
    let ref = $(this).attr("class"); // Obtém o valor da classe do link clicado
    solarsys.removeClass().addClass(ref); // Remove todas as classes e adiciona a classe obtida para o elemento "solarsys"
    $(this).parent().find("a").removeClass("active"); // Remove a classe "active" de todos os links dentro do elemento pai do link clicado
    $(this).addClass("active"); // Adiciona a classe "active" ao link clicado
    e.preventDefault();
  });

  $(".set-view").click(function () {
    // Manipula o evento de clique em um elemento com a classe "set-view"

    body.toggleClass("view-3D view-2D"); // Alterna entre as classes "view-3D" e "view-2D" no <body>
  });

  $(".set-zoom").click(function () {
    // Manipula o evento de clique em um elemento com a classe "set-zoom"

    body.toggleClass("zoom-large zoom-close"); // Alterna entre as classes "zoom-large" e "zoom-close" no <body>
  });

  $(".set-speed").click(function () {
    // Manipula o evento de clique em um elemento com a classe ".set-speed"

    setView("scale-stretched set-speed"); // Define a visualização do universo com as classes "scale-stretched" e "set-speed"
  });

  $(".set-size").click(function () {
    // Manipula o evento de clique em um elemento com a classe ".set-size"

    setView("scale-s set-size"); // Define a visualização do universo com as classes "scale-s" e "set-size"
  });

  $(".set-distance").click(function () {
    // Manipula o evento de clique em um elemento com a classe ".set-distance"

    setView("scale-d set-distance"); // Define a visualização do universo com as classes "scale-d" e "set-distance"
  });

  init(); // Chama a função de inicialização
});

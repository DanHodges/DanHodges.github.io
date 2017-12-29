var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");

var icon = normal !== null ? normal : reverse;

function toggle() {
  var navRight = document.getElementById("nav");
  var navLeft = document.getElementById("nav-left");
  var nav = navRight !== null ? navRight : navLeft;

  var button = document.getElementById("menu");
  var site = document.getElementById("wrap");

  if (nav.className == "menu-open" || nav.className == "menu-open-left") {
    nav.className = "";
    button.className = "";
    site.className = "";
  } else if (reverse !== null) {
    nav.className += "menu-open-left";
    button.className += "btn-close";
    site.className += "fixed";
  } else {
    nav.className += "menu-open";
    button.className += "btn-close";
    site.className += "fixed";
  }
}

icon.addEventListener("click", toggle);

var createElement = preactHyperscript.createElement,
  div = preactHyperscript.div,
  h2 = preactHyperscript.h2,
  p = preactHyperscript.p,
  table = preactHyperscript.table,
  thead = preactHyperscript.thead,
  tbody = preactHyperscript.tbody,
  tr = preactHyperscript.tr,
  td = preactHyperscript.td;

function TILTable(props) {
  return div([
    h2(".bold", "today I learned"),
    p(
      {
        style: {
          fontSize: "1em",
          fontWeight: 200,
          color: "#333",
          fontStyle: "italic"
        }
      },
      "A list of things I've been reading/watching/hacking on outside of work"
    ),
    table(
      {
        style: {
          textAlign: "left",
          verticalAlign: "middle",
          width: "80%",
          fontWeight: 300
        }
      },
      [
        thead([tr([td("Date"), td("Topic"), td("Category"), td("Minutes")])]),
        tbody(
          props.data.map(function(item) {
            return tr([
              td(item.date),
              td(item.topic),
              td(item.categories.join(", ")),
              td(item.minutes)
            ]);
          })
        )
      ]
    )
  ]);
}

(function() {
  var x = new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET", "db.json", true);
  x.onreadystatechange = function() {
    if (x.readyState == 4 && x.status == "200") {
      window.preact.render(
        createElement(TILTable, {
          data: JSON.parse(x.responseText).data
        }),
        document.getElementById("til")
      );
    }
  };
  x.send(null);
})();

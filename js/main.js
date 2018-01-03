const { h, render } = preact;
const normal = document.getElementById("nav-menu");
const reverse = document.getElementById("nav-menu-left");

const icon = normal !== null ? normal : reverse;

const toggle = () => {
  const navRight = document.getElementById("nav");
  const navLeft = document.getElementById("nav-left");
  const nav = navRight !== null ? navRight : navLeft;

  const button = document.getElementById("menu");
  const site = document.getElementById("wrap");

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
};

icon.addEventListener("click", toggle);

const TILTable = ({ data }) =>
  h(
    "div",
    null,
    h("h2", { class: ".bold" }, "today I learned"),
    h(
      "table",
      {
        style: {
          textAlign: "left",
          verticalAlign: "middle",
          width: "80%",
          fontWeight: 300
        }
      },

      h(
        "thead",
        null,
        h(
          "tr",
          null,
          ["Date", "Topic", "Category", "Minutes"].map(title =>
            h("td", null, title)
          )
        )
      ),
      h(
        "tbody",
        null,
        data.map(({ date, topic, categories, minutes }) =>
          h(
            "tr",
            null,
            [date, topic, categories.join(", "), minutes].map(text =>
              h("td", null, text)
            )
          )
        )
      )
    )
  );

fetch("db.json")
  .then(response => response.json())
  .then(({ data }) => {
    render(h(TILTable, { data }), document.getElementById("til"));
  });

function template(minCount) {
  return [
    "javascript:",
    "var userMatch = window.location.href.match(/:\\/\\/twitter.com\\/([^?/#]+)/);",
    "var user = userMatch && userMatch[1];",
    'if (user === "search"){',
    "  var search = decodeURIComponent(window.location.search).match(/from:(.+?)\\b/);",
    "  user = search && search[1];",
    "}",
    "var query = `from:${user} " + minCount + "`;",
    "window.location.href=`/search?q=${encodeURIComponent(query)}`;",
  ].join("");
}

let retweetsContainer = document.querySelector("#retweets");
[10, 20, 50, 100, 500, 1000, 2000, 5000, 10000].forEach((count) => {
  addLink(
    retweetsContainer,
    template("min_retweets:" + count),
    count + "+ retweets"
  );
});

let likesContainer = document.querySelector("#likes");
[10, 50, 500, 1000, 2000, 5000, 10000, 20000, 40000].forEach((count) => {
  addLink(likesContainer, template("min_faves:" + count), count + "+ likes");
});

function addLink(container, href, name) {
  let a = document.createElement("a");
  a.classList.add("btn");
  a.href = href;
  a.title = "Drag into bookmark bar and click on twitter's user profile page";
  a.innerText = name;
  container.appendChild(a);
  a.onclick = printNoNoNo;
}

function printNoNoNo(e) {
  let help = document.querySelector(".nonono");
  help.style.display = "visible";
  e.preventDefault();
  return false;
}

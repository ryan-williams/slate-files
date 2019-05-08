
// My laptop screen.
var laptop = new Screen('1440x900');
//var wlaptop = new Screen('1280x800');
var wlaptop = new Screen('1680x1050');

// My large dell monitor at home.
var dell = new Screen('2560x1080');

// Large LG curved 34" monitor at chez williams
var cw = new Screen('3440x1440');

// Horizontal dell monitor at work.
var wd = new Screen('2560x1440');

// Vertical dell monitor at work.
var vwd = new Screen('1440x2560');

var  widenRight = S.op("resize", { "width" : "+10%", "height" : "+0" });
var narrowRight = S.op("resize", { "width" : "-10%", "height" : "+0" });
function widenLeft(w) {
  w.doOperation(
        S.op(
              "move", {
                "width" : "windowSizeX+screenSizeX/10",
                height: "windowSizeY",
                "x": "windowTopLeftX-screenSizeX/10",
                y: "windowTopLeftY"
              }
        )
  )
}
function narrowLeft(w) {
  w.doOperation(
        S.op(
              "move", {
                "width" : "windowSizeX-screenSizeX/10",
                height: "windowSizeY",
                "x": "windowTopLeftX+screenSizeX/10",
                y: "windowTopLeftY"
              }
        )
  )
}

var pushBottom = S.op("resize", { "width" : "+0", "height" : "+10%" });
var pullBottom = S.op("resize", { "width" : "+0", "height" : "-10%" });

function pullTop(w) {
  w.doOperation(
        S.op(
              "move", {
                "width" : "windowSizeX",
                x: "windowTopLeftX",
                height: "windowSizeY-screenSizeY/10",
                "y": "windowTopLeftY+screenSizeY/10",
              }
        )
  )
}

function pushTop(w) {
  w.doOperation(
        S.op(
              "move", {
                "width" : "windowSizeX",
                x: "windowTopLeftX",
                height: "windowSizeY+screenSizeY/10",
                "y": "windowTopLeftY-screenSizeY/10",
              }
        )
  )
}

var throwTop =
      // S.op(
      //       "resize", {
      //         "anchor": "bottom-left",
      //         "height": "+10%",
      //         "width": "+0",
      //       }
      // );
S.op(
      "move", {
        "width" : "windowSizeX",
        x: "windowTopLeftX",
        height: "windowTopLeftY+windowSizeY",
        "y": "screenOriginY",
        //"screen": w,
      }
);

// function throwTop(w) {
//   return (
//   //w.doOperation(
//         S.op(
//               "resize", {
//                 "anchor": "bottom-left",
//                 "height": "+10%",
//                 "width": "+0",
//               }
//         )
//         // S.op(
//         //       "move", {
//         //         "width" : "windowSizeX",
//         //         x: "windowTopLeftX",
//         //         height: "screenSizeY", // "100%", //"windowSizeY+screenSizeY-windowTopLeftY",
//         //         "y": "screenOriginY+0",
//         //         "screen": w,
//         //       }
//         // )
//   )
// }

function throwBottom(w) {
  w.doOperation(
        S.op(
              "move", {
                "width" : "windowSizeX",
                x: "windowTopLeftX",
                height: "screenSizeY-windowTopLeftY",
                "y": "windowTopLeftY",
              }
        )
  )
}

var hint = S.op("hint");

var bindings = {
  "right:ctrl":  widenRight,
   "left:ctrl": narrowRight,
  "right:ctrl,shift": narrowLeft,
   "left:ctrl,shift":  widenLeft,
  "1:f4,ctrl,alt": hint,
  "l:alt": hint,
   "left:a,alt:toggle": widenLeft,
  "right:a,alt:toggle": narrowLeft,
  "up:a,alt:toggle": pullBottom,
  "down:a,alt:toggle": pushBottom,
  "u:a,alt:toggle": pushTop,
  "i:a,alt:toggle": pullTop,
  "j:a,alt:toggle": pushBottom,
  "k:a,alt:toggle": pullBottom,
  "y:a,alt:toggle": throwTop,
  // "y:a,alt:toggle": hint,
  "h:a,alt:toggle": throwBottom,
  // "left:a,alt:toggle": widenLeft,
  // "right:a,alt:toggle": narrowLeft,
  //"left:ctrl,shift": S.op("move", { "width" : "+10%", "x": "-10%", "height" : "+0%" }),
  // "right:ctrl": S.op("resize", { "width" : "windowSizeX+screenSizeX/10", "height" : "+0" }),
  //  "left:ctrl": S.op("resize", { "width" : "windowSizeX-screenSizeX/10", "height" : "+0" }),
  // "right:ctrl,shift": S.op("resize", { "width" : "windowSizeX-screenSizeX/10", "height" : "+0%", "anchor": "bottom-right" }),
  //  "left:ctrl,shift": S.op("resize", { "width" : "windowSizeX+screenSizeX/10", "height" : "+0%", "anchor": "bottom-right" }),
  "h:alt": narrowRight,
  "0:alt": grid(),
  "d:alt,shift": S.op("relaunch"),
  "d:alt": function() { S.source("/Users/ryan/.slate.js"); },
};

// Alt-d: reload this Slate config.
// bindings["d:alt"] = function() { S.source("/Users/ryan/.slate.js"); };

// {Alt+N, Alt+Shift+N}: {left,right}-most N columns
for (var n = 1; n < 10; ++n) {
  bindings[n + ":alt;shift"] = left(n);
  bindings[n + ":alt"] = right(n);
}
// Alt+0: full screen
// bindings["0:alt"] = grid();˙

// Organize windows on laptop + wd-monitor.
var office3Monitors = S.layout("office-3monitors", {
  "Google Chrome": wd.grid(1, 7),
  "iTerm2": vwd.grid(),
  "IntelliJ IDEA": wd.right(6),
  "IntelliJ IDEA-EAP": wd.right(6),
  "WebStorm": wd.right(6),
  "Eclipse": wd.right(6),
  "Emacs": wd.right(6),
  "NetBeans": wd.right(6),
  "GitX": wd.right(5),
  "Gitter": wd.right(7),
  "Slack": wd.right(7),
  "Msngr": wd.right(7),
  "Signal": wd.right(7),
  "Sunrise Calendar": wlaptop.right(8),
  "Snippets": wd.right(5),
  "Cluster": wd.right(6),
  "Sublime Text 2": wd.right(6),
  "Sublime Text": wd.right(6),
  "Safari": wd.right(6),
  "GCal": wd.right(6)
});

// S.default([ wlaptop.id, wd.id, vwd.id ], office3Monitors);
// bindings["m:ctrl;cmd"] = S.op("layout", { name: office3Monitors });

// Organize windows on laptop.
var laptop1Monitor = (function(l) { return S.layout("laptop-1monitor", {
  "Google Chrome": l.right(9),
  "iTerm2": l.grid(),
  "IntelliJ IDEA": l.right(9),
  "IntelliJ IDEA-EAP": l.right(9),
  "WebStorm": l.grid(),
  "Eclipse": l.grid(),
  "NetBeans": l.grid(),
  "Emacs": l.grid(),
  "GitX": l.grid(),
  "Slack": l.right(9),
  "Msngr": l.right(9),
  "Signal": l.right(9),
  "Sunrise Calendar": l.right(9),
  "Snippets": l.right(9),
  "Sublime Text 2": l.right(9),
  "Sublime Text": l.right(9),
  "Safari": l.right(9)
}) })(wlaptop);
S.default([ wlaptop.id ], laptop1Monitor);
bindings["l:ctrl;cmd"] = S.op("layout", { name: laptop1Monitor });

function two(name, l, r) {
  return S.layout(name, {
    "Google Chrome": l.grid(2, 8),
    "iTerm2": l.left(6),
    "IntelliJ IDEA": l.right(6),
    "IntelliJ IDEA-EAP": l.right(6),
    "WebStorm": l.right(5),
    "Eclipse": l.right(5),
    "NetBeans": l.right(8),
    "Emacs": l.right(7),
    "Msngr": l.right(6),
    "GitX": l.right(8),
    "Slack": l.right(6),
    "Gitter": l.right(6),
    "Sunrise Calendar": r.right(8),
    "Snippets": l.right(6),
    "Cluster": l.right(5, 10),
    "Sublime Text 2": l.right(6),
    "Sublime Text": l.right(6),
    "Safari": l.right(6),
    "GCal": l.right(6),
    "Signal": r.grid(),
  });
}
var home2Monitors = two("home-2monitors", §laptop, dell);
var office2Monitors = two("office-2monitors", wd, laptop);

S.default([ laptop.id, dell.id ], home2Monitors);
bindings["n:ctrl;cmd"] = S.op("layout", { name: home2Monitors });

S.default([ laptop.id, wd.id ], office2Monitors);
bindings["m:ctrl;cmd"] = S.op("layout", { name: office2Monitors });


// Bind all hotkeys.
S.bindAll(bindings);


// My laptop screen.
var laptop = new Screen('1440x900');

// My apple monitor at work.
var apple = new Screen('2560x1440');

// My dell monitor at home.
var dell = new Screen('1920x1080');

var bindings = {};

// Alt-d: reload this Slate config.
bindings["d:alt"] = function() { S.source("/Users/ryan/.slate.js"); };


// {Alt+N, Alt+Shift+N}: {left,right}-most N columns
for (var n = 1; n < 10; ++n) {
  bindings[n + ":alt"] = left(n);
  bindings[n + ":alt;shift"] = right(n);
}
// Alt+0: full screen
bindings["0:alt"] = grid();


// Organize windows on laptop + apple-monitor.
var office2Monitors = S.layout("office-2monitors", {
  "Google Chrome": apple.grid(1, 7),
  "iTerm": apple.left(5),
  "IntelliJ IDEA": apple.right(6),
  "Emacs": apple.right(6),
  "NetBeans": apple.right(6),
  "GitX": apple.right(5),
  "HipChat": laptop.grid(),
  "Slack": laptop.grid()
});
S.default([ laptop.id, apple.id ], office2Monitors);
bindings["m:ctrl;cmd"] = S.op("layout", { name: office2Monitors });


// Organize windows on laptop.
var laptop1Monitor = S.layout("laptop-1monitor", {
  "Google Chrome": laptop.grid(),
  "iTerm": laptop.grid(),
  "IntelliJ IDEA": laptop.grid(),
  "NetBeans": laptop.grid(),
  "Emacs": laptop.grid(),
  "GitX": laptop.grid(),
  "HipChat": laptop.grid(),
  "Slack": laptop.grid()
});
S.default([ laptop.id ], laptop1Monitor);
bindings["l:ctrl;cmd"] = S.op("layout", { name: laptop1Monitor });


var home2Monitors = S.layout("home-2monitors", {
  "Google Chrome": dell.grid(1, 8),
  "iTerm": dell.left(7),
  "IntelliJ IDEA": dell.right(8),
  "NetBeans": dell.right(8),
  "Emacs": dell.right(8),
  "GitX": dell.right(8),
  "HipChat": laptop.grid(),
  "Slack": laptop.grid()
});
S.default([ laptop.id, dell.id ], home2Monitors);
bindings["n:ctrl;cmd"] = S.op("layout", { name: home2Monitors });


// Bind all hotkeys.
S.bindAll(bindings);

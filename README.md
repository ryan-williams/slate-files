# slate-files

My config files for the [Slate window manager](https://github.com/jigish/slate)

Currently focused on aligning windows to a 10x10 grid (a la [Divvy](http://mizage.com/divvy/)), with capability to manipulate many windows with one hotkey / when display(s) configuration changes.

## Installing

First, [install Slate](https://github.com/jigish/slate#installing-slate) (including giving it accessibility permissions and setting it to run at startup, most likely).

Then, rather than write your own `.slate{,.js}`, simply run this repo's `install.sh` script.

    $ .../slate-files/install.sh

This will create a `.slate.js` file in your home directory (`$HOME`) that will `Slate.source` the `.js` files from this repository.


## Configuring
Change [the `Screen` instantiations in `slate.js`](https://github.com/ryan-williams/slate-files/blob/master/slate.js#L2) to match the screens/resolutions that you work with:

      var laptop = new Screen('1440x900');
      var apple = new Screen('2560x1440');

Change the [layouts' per-application sizes](https://github.com/ryan-williams/slate-files/blob/master/slate.js#L22) to your heart's content as well, from e.g.:

      "Google Chrome": apple.grid(1, 7),
      "iTerm": apple.left(5),
      "IntelliJ IDEA": apple.right(6),
      "GitX": apple.right(5),
      "HipChat": laptop.grid()

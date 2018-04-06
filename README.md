# README
This is a repo for the Lambert IP Law website.

## General
The site is built with [Jekyll](http://jekyllrb.com/), a Ruby based static site generator and templating engine. See their official docs for installation instructions.

## Working on the site
This project stays close to the folder structure recommended by the Jekyll docs. It does not use multiple layouts but does make use of several partials (in `_includes/`).

Styling is done in Sass using Jekyll's built in Sass engine; no need to run any `sass` from the command line, Jekyll does that all for you. In short, ignore the `css/` folder and instead just modify the component pieces in `_scss/`. If you add a new stylesheet, make sure to `import` it into `__collector.scss`.

## Testing
Running `jekyll serve` in the root directory will serve the site on `localhost:4000`. Changes to any files will automatically reload the page.

## Building
Running `jekyll build` will create a full build of the site in the folder `_site`, which can then be dropped into any hosting environment and work immediately. It's a static site, remember!

Note that the base URL of the website is defined in `_config.yml`. This is ignored when serving on localhost, but will be built into things like navigation links and image source URLs. If you build for a staging site, you'll need to change this value before running `jekyll build` -- just remember to change it back before building for production. And, of course, you'll need to change this value if the site ever changes addresses.

I would highly caution against modifying the post-build static pages. This may be tempting if you're just making small changes, but modifications made this way will be overwritten when you `jekyll build` again. Anyway, once you have Jekyll installed, generating a new build takes a matter of seconds.

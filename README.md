# Zeppelin

<p align="center">
	<a href="https://registerguard.github.com/zeppelin/dev/">
		<img width="100%" src="zeppelin.gif" alt="“No ticket.”">
	</a>
</p>

**If anyone wants more nav then they can pound sand down a rat hole! :)**

## About

Simple 3rd party header for use on Register-Guard project pages and websites.

## Demo

Click or scan:

DEVELOPMENT | PRODUCTION
:-: | :-:
[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://registerguard.github.io/zeppelin/dev/&chs=240x240)](http://registerguard.github.io/zeppelin/dev/) | [![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://registerguard.github.io/zeppelin/prod/&chs=240x240)](http://registerguard.github.io/zeppelin/prod/)
`$ grunt` | `$ grunt prod`

## Usage

1. [Visit](http://dev.registerguard.com/zeppelin/prod/) the latest Zeppelin “production” build.
1. View page source.
1. Copy and paste the `zeppelin.min.css` stylesheet into the `<head>` of your document.
1. Copy and paste the `zeppelin.min.js` javascript into the `<head>`, or foot, of your document.
1. Copy the `<header>` markup into your document just after the opening `<body>` tag.
1. Modify the `Lorem ipsum dolor` text to suit the needs of your project.
1. Update the “[Active build versions](https://github.com/registerguard/zeppelin/wiki/Active-build-versions)” page of the Zeppelin WIKI.

Example:

```html
<!doctype html>
<html>
<head>
<link rel="stylesheet" href="http://static.registerguard.com/v5/zeppelin/prod/0.1.0/20140714/1/styles/zeppelin.min.css">
</head>
<body>
<header id="zeppelin" role="banner">
	<h6><a href="http://registerguard.com">The Register-Guard</a></h6>
	<p>Lorem <a href="#">ipsum dolor</a></p>
</header>
<script src="http://static.registerguard.com/v5/zeppelin/prod/0.1.0/20140714/1/scripts/zeppelin.min.js"></script>
</body>
</html>
```

### Theme:

By default, the Zeppelin theme is light text on a dark background.

Add `class="z_light"` to the `<header>` for a dark text on a light background.

## Development

Assuming you already have [Grunt.js](http://gruntjs.com/) installed …

### Installation:

Here’s a few ways to install this code:

1. Download as a [`zip`](https://github.com/registerguard/zeppelin/archive/gh-pages.zip).
1. Clone it: `$ git clone https://github.com/registerguard/zeppelin.git`.
1. Fork it and clone: `$ git clone git@github.com:USERNAME/zeppelin.git`.

### Setup dependencies:

Navigate to the local repo’s `source/` folder:

```bash
$ cd zeppelin/source/
```

Install Grunt tasks:

```bash
$ npm install
```

This project depends on [Headroom.js](https://github.com/WickyNilliams/headroom.js).

While Headroom.js has been included with this repo, one can update to the latest version using [Bower](http://bower.io/); just `cd` to `source/` and run `bower update`.

Note that `headroom.js` has been symlinked to the `source/files/scripts/` directory:

```bash
$ ln -s ../plugins/headroom.js/dist/headroom.js ./files/scripts/headroom.js
```

### Development preview:

Test the development build:

```bash
$ grunt
# "grunt dev" would also work.
```

Visit the development build:

<http://localhost/zeppelin/dev/>

**Note:** The above URL will depend upon your local development environment; for previewing my projects I use [XAMPP](http://www.apachefriends.org/index.html).

### Edit:

At this point, you can modify any of the files, especially the ones found in the `/source/files` folder.

To make life easier while developing, run:

```
$ grunt watch
```

... the `watch` command will run a development build any time these folders/file(s) change:

```text
/source/Gruntfile.js
/source/scripts/scripts/**/*
/source/files/styles/**/*
/source/files/templates/**/*
```

### Production build:

Once you’re ready to do a production build, run:

```bash
$ grunt prod
```

Push the production build to your GitHub repo.

Depending on your setup, you may need to pull the latest build to your production server.

Visit the production build locally:

<http://localhost/zeppelin/prod/>

**Note:** The production build’s asset files are absolutely linked to the production server; hence the need to get the latest files there before previewing the production’s HTML file and related assets.

### Pull to static:

Visit our static server, `cd` to [`zeppelin/`](http://static.registerguard.com/v5/zeppelin/) and:

```bash
$ git remote update && git status
```

… If everything looks good, then:

```bash
$ git pull
```

### Update production theme(s):

Follow the appropriate steps to update the production build’s path on the various RG production systems/environments and/or languages.

### Update WIKI:

Lastly, update the “[Active build versions](https://github.com/registerguard/zeppelin/wiki/Active-build-versions)” page of the Zeppelin WIKI.

---

#### LEGAL

Copyright © 2013-2014 [The Register-Guard](http://www.registerguard.com)

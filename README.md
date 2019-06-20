# gulp-bootstrap-email

Gulp plugin for [Bootstrap Email](https://github.com/schwarzdavid/bootstrap-email)

[![NPM](https://nodei.co/npm/gulp-bootstrap-email.png)](https://nodei.co/npm/gulp-bootstrap-email/)

# Install

```bash
npm install gulp-bootstrap-email -D
```

# Usage

Simply compile a html template into table-layout:

```javascript
const gulp = require('gulp');
const gulp_bootstrap_email = require('gulp-bootstrap-email');

gulp.task('email', () => {
    return gulp.src('./path/to/template.html')
        .pipe(gulp_bootstrap_email())
        .pipe(gulp.dest('./path/to/output');
});
```

A more advanced example with [htmlmin](https://www.npmjs.com/package/gulp-htmlmin) and [inline-images](https://www.npmjs.com/package/gulp-inline-images) could look like this:

```javascript
gulp.task('advanced', () => {
    return gulp.src(input)
        .pipe(gulp_bootstrap_email())
        .pipe(gulp_htmlmin({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(gulp_inline_images())
        .pipe(gulp.dest(output))
});
```

_(Be aware, that inlining images with base64 will not work with Outlook)_

# Options

You cann pass `style` and `head`. Both can be a string or function which returns a string. If you pass a function, the parameters `path`, `basename`, `extension` and `filename` will be passed as an object. 

For further details, see the [Bootstrap Email docs](https://github.com/schwarzdavid/bootstrap-email)

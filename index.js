const BootstrapEmail = require('bootstrap-email');
const through = require('through2');
const PluginError = require('plugin-error');
const path = require('path');

const PLUGIN_NAME = require('./package').name;

const gulpBootstrapEmail = ({style, head} = {}) => through.obj(async (file, enc, cb) => {
	if (file.isNull()) {
		return cb(null, file);
	}

	if (file.isStream()) {
		return cb(new PluginError(PLUGIN_NAME, 'Streams are not supported'));
	}

	const extension = path.extname(file.path);
	const basename = path.basename(file.path, extension);
	const filename = path.basename(file.path);

	const fileName = {
		path: file.path,
		extension,
		basename,
		filename
	};

	let _head = head;
	let _style = style;

	if(typeof _head === 'function'){
		_head = _head(fileName);
	}

	if(typeof _style === 'function') {
		_style = _style(fileName);
	}

	try {
		const content = file.contents.toString();
		const bootstrapEmail = new BootstrapEmail(content, {
			head: _head,
			style: _style
		});

		file.contents = Buffer.from(bootstrapEmail.compile());

		return cb(null, file);
	} catch (err) {
		return cb(new PluginError(PLUGIN_NAME, err));
	}
});

module.exports = gulpBootstrapEmail;

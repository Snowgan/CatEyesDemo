var mongoose = require('mongoose');

var filmSchema = new mongoose.Schema({
	poster: String,
	title: String,
	audiRate: Number,
	proRate: Number,
	infoDetail: String,
	playinfo: {
		theaterNum: Number,
		playNum: Number
	}
});

module.exports = mongoose.model('film', filmSchema);
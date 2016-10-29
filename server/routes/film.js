var express = require('express');
var mongoose = require('mongoose');
var Film = require('../models/film');
var router = express.Router();

// 查询
router.get('/list', function (req, res, next) {
	Film.find({}, function (err, lists) {
		res.json({
			data: lists,
			type: 'success'
		});
		res.status(200).end();
	})
})
// 创建
router.post('/', function (req, res, next) {
	if (Object.prototype.toString.call(req.body) === '[object Array]') {
		var resdata = [];
		req.body.forEach(function (ele, idx) {
			Film.create(ele, function (err, post) {
				if (err) return next(err);
				resdata.push(post);
				if (idx === req.body.length - 1) {
					res.json({
						post: resdata,
						data: 'success'
					});
					res.status(200).end();
				}
			})
		})
	} else {
		res.json({
			data: 'post error'
		});
		res.status(200).end();
	}
	
})

router.post('/delete', function (req, res, next) {
	Film.remove({title: '使徒行者'}, function (err) {
		if (err) return next(err);
		res.json({
			data: 'success delete.'
		})
		res.status(200).end();
	})
})

module.exports = router;
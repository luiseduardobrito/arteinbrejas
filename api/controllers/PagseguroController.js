/**
 * PagseguroController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var util = require("util")

module.exports = {
	
	redir: function(req, res) {

		var val = req.param("value") || req.cookies.value;

		if(val.indexOf(".") < 0)
			val += ".00";

		res.view({
			value: val
		});
	}

};

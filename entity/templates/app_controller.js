'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    <%=formalEntityName%> = mongoose.model('<%=formalEntityName%>'),
    _ = require('lodash');


/**
 * Find <%=entityName%> by id
 */
exports.<%=entityName%> = function(req, res, next, id) {
    <%=formalEntityName%>.load(id, function(err, <%=entityName%>) {
        if (err) return next(err);
        if (!<%=entityName%>) return next(new Error('Failed to load <%=entityName%> ' + id));
        req.<%=entityName%> = <%=entityName%>;
        next();
    });
};

/**
 * Create an <%=entityName%>
 */
exports.create = function(req, res) {
    var <%=entityName%> = new <%=formalEntityName%>(req.body);
                <%=entityName%>.user = req.user;

                <%=entityName%>.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                <%=entityName%>: <%=entityName%>
            });
        } else {
            res.jsonp(<%=entityName%>);
        }
    });
};

/**
 * Update an <%=entityName%>
 */
exports.update = function(req, res) {
    var <%=entityName%> = req.<%=entityName%>;

    <%=entityName%> = _.extend(<%=entityName%>, req.body);

    <%=entityName%>.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                <%=entityName%>: <%=entityName%>
            });
        } else {
            res.jsonp(<%=entityName%>);
        }
    });
};

/**
 * Delete an <%=entityName%>
 */
exports.destroy = function(req, res) {
    var <%=entityName%> = req.<%=entityName%>;

    <%=entityName%>.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                <%=entityName%>: <%=entityName%>
            });
        } else {
            res.jsonp(<%=entityName%>);
        }
    });
};

/**
 * Show an <%=entityName%>
 */
exports.show = function(req, res) {
    res.jsonp(req.<%=entityName%>);
};

/**
 * List of <%=formalEntityName%>s
 */
exports.all = function(req, res) {
    <%=formalEntityName%>.find().sort('-created').populate('user', 'name username').exec(function(err, <%=entityName%>s) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(<%=entityName%>s);
        }
    });
};

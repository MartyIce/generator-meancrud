/**
 * Module dependencies.
 */

 var mongoose = require('mongoose'),
    <%= entityName %> = mongoose.model('<%= entityName %>'),
    _ = require('underscore');


/**
 * Find <%= _.slugify(entityName) %> by id
 */
exports.<%= _.slugify(entityName) %> = function(req, res, next, id) {
    <%= entityName %>.load(id, function(err, <%= _.slugify(entityName) %>) {
        if (err) return next(err);
        if (!<%= _.slugify(entityName) %>) return next(new Error('Failed to load <%= _.slugify(entityName) %> ' + id));
        req.<%= _.slugify(entityName) %> = <%= _.slugify(entityName) %>;
        next();
    });
};

/**
 * Create a <%= _.slugify(entityName) %>
 */
exports.create = function(req, res) {
    var <%= _.slugify(entityName) %> = new <%= entityName %>(req.body);
    <%= _.slugify(entityName) %>.user = req.user;

    <%= _.slugify(entityName) %>.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                <%= _.slugify(entityName) %>: <%= _.slugify(entityName) %>
            });
        } else {
            res.jsonp(<%= _.slugify(entityName) %>);
        }
    });
};

/**
 * Update a <%= _.slugify(entityName) %>
 */
exports.update = function(req, res) {
    var <%= _.slugify(entityName) %> = req.<%= _.slugify(entityName) %>;

    <%= _.slugify(entityName) %> = _.extend(<%= _.slugify(entityName) %>, req.body);

    <%= _.slugify(entityName) %>.save(function(err) {
        res.jsonp(<%= _.slugify(entityName) %>);
    });
};

/**
 * Delete an <%= _.slugify(entityName) %>
 */
exports.destroy = function(req, res) {
    var <%= _.slugify(entityName) %> = req.<%= _.slugify(entityName) %>;

    <%= _.slugify(entityName) %>.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(<%= _.slugify(entityName) %>);
        }
    });
};

/**
 * Show an <%= _.slugify(entityName) %>
 */
exports.show = function(req, res) {
    res.jsonp(req.<%= _.slugify(entityName) %>);
};

/**
 * List of <%= entityName %>s
 */
exports.all = function(req, res) {
    <%= entityName %>.find().sort('-created').populate('user', 'name username').exec(function(err, <%= _.slugify(entityName) %>s) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(<%= _.slugify(entityName) %>s);
        }
    });
};

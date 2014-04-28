'use strict';

// <%=formalEntityName%>s routes use <%=entityName%>s controller
var <%=entityName%>s = require('../controllers/<%=entityName%>s');
var authorization = require('./middlewares/authorization');

// <%=formalEntityName%> authorization helpers
var hasAuthorization = function(req, res, next) {
    if (req.<%=entityName%>.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/<%=entityName%>s', <%=entityName%>s.all);
    app.post('/<%=entityName%>s', authorization.requiresLogin, <%=entityName%>s.create);
    app.get('/<%=entityName%>s/:<%=entityName%>Id', <%=entityName%>s.show);
    app.put('/<%=entityName%>s/:<%=entityName%>Id', authorization.requiresLogin, hasAuthorization, <%=entityName%>s.update);
    app.del('/<%=entityName%>s/:<%=entityName%>Id', authorization.requiresLogin, hasAuthorization, <%=entityName%>s.destroy);

    // Finish with setting up the <%=entityName%>Id param
    app.param('<%=entityName%>Id', <%=entityName%>s.<%=entityName%>);

};
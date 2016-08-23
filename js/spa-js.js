(function () {
    var app = {
        // routes ( ie. views and their functionality) defined here
        'routes': {
            'UC_method': {
                'rendered': function() {
                    console.log("this view is 'UC_method'");
                }
            },
            'what-UC-model': {
                'rendered': function() {
                    console.log("this view is 'what-UC-model'");
                }
            },
            'get-set-up': {
                'rendered': function() {
                    console.log('this view is "get-set-up"');
                    /*app.routeElem.innerHTML = '<p>This javascript content overrides the static content for this view.</p>'; */
                }
            },
            'client-brief': {
                'rendered': function() {
                    console.log("this view is 'client-brief'");
                }
            },
            'import-package': {
                'rendered': function() {
                    console.log("this view is 'import-package'");
                }
            },
            'gather-requirements': {
                'rendered': function() {
                    console.log("this view is 'gather-requirements'");
                }
            },
            
            'modelling-use-cases': {
                'rendered': function() {
                    console.log("this view is 'modelling-use-cases'");
                }
            },
            
            'why-UC-works': {
                'rendered': function() {
                    console.log("this view is 'why-UC-works'");
                }
            },
            
            'exporting-your-model': {
                'rendered': function() {
                    console.log("this view is 'exporting-your-model'");
                }
            },
        },
        // The default view is recorded here. A more advanced implementation
        // might query the DOM to define it on the fly
        'default': 'the-default-view',
        'routeChange': function() {
            app.routeID = location.hash.slice(1);
            app.route = app.routes[app.routeID];
            app.routeElem = document.getElementById(app.routeID);
            if (app.route) {
                app.route.rendered();
            }
        },
        // The function to start the app.
        'init': function() {
            window.addEventListener('hashchange', function() {
                app.routeChange();
            });
            // If there's no hash in the URL, change the URL to include the default view's hash
            if (!window.location.hash) {
                window.location.hash = app.default;
            } else {
                // Execute routeChange() for the first time
                app.routeChange();
            }
        }
    };
    window.app = app;
})();

app.init();
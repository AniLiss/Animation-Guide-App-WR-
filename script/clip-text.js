/**
 * Created by Elizabeth Anatskaya on 24.01.2017.
 */
var clipboard = new Clipboard('.property__use-case-name');

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});

/* TODO DONE: Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */

page();
page('/' , article);
page('/about', about);

function article() {
  articleController.reveal();
  console.log('article() ran');
}

function about() {
  aboutController.reveal();
  console.log('about() ran');
}

/* TODO DONE: What function do we call to activate page.js?
    Fire it off now, to execute it: */

branch = window.location.href.split('...')[1];
base = window.location.href.split('...')[0].replace('compare/last_release', '');

$('.gh-header-title').text('Getting latest release...')


$.get(base + '/releases').done(function(data) {
  url = base + 'compare/' + $('.commit-title', data)[0].innerText.replace(/[^0-9.v]+/g, "") + "..." + branch;
  $("#js-repo-pjax-container").load(url + " #js-repo-pjax-container");
});

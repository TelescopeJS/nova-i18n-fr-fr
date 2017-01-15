Package.describe({
  name: "nova:i18n-fr-fr",
  summary: "Telescope i18n package (fr_FR)",
  version: "0.27.5-nova",
  git: "https://github.com/TelescopeJS/telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");
  
  api.use([
    'nova:core@0.27.5-nova'
  ]);

  api.use([
    'softwarerero:accounts-t9n@1.3.6',
  ], {weak: true});

  api.addFiles([
    'lib/fr_FR.js'
  ], ["client", "server"]);
});

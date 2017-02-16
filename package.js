Package.describe({
  name: "nova:i18n-fr-fr",
  summary: "Telescope i18n package (fr_FR)",
  version: "1.1.0",
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'nova:core@1.1.0'
  ]);

  api.use([
    'softwarerero:accounts-t9n',
  ], {weak: true});

  api.addFiles([
    'lib/fr_FR.js'
  ], ["client", "server"]);
});

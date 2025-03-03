(() => {
  'use strict';

  const options = {};
  /*
   * Add a logo to top of the sidebar.
   */
  options.logo_path = "img/logo.png",
  /*
   * Add links to the "LINKS" section at the bottom of the sidebar.
   * The "LINKS" section will only be created if this option is passed.
   */
  options.links = [
    {
      "url": "https://github.com/3cf173ba/manochrome.git",
      "html": "<img src=\"img/github-mark-white.svg\" style=\"height:1rem;vertical-align:middle\"> MANochrome repository"
    }
  ];

  /*
   * Initialize manochrome
   */
  const manochrome = (MANochrome.has_index_id()) ? 
    new MANochrome_pod(options) : false;

})();

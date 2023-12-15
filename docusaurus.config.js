// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UN Smart Maps Learning Hub",
  tagline: "Keep learning open for a better world",
  url: "https://unopengis.github.io",
  baseUrl: "/learning/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.png",
  i18n: {
    defaultLocale: 'en',
    locales: ['en','ja'],
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "unopengis", // Usually your GitHub org/user name.
  projectName: "learning", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // docLayoutComponent: "@theme/DocPage",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{property: 'og:image', content: 'https://unopengis.github.io/smartmaps/assets/images/dwg7-provisional-social-preview-image-2-d153649a67d422600f9229d8c87a5227.jpg'}, {property: 'og:type', content: 'website'},{property: 'og:title', content: 'UN Smart Map Learning Hub'},{property: 'og:description', content: 'Keep web maps open for a better world'},{property: 'og:url', content: 'https://unopengis.github.io/learning-hub/'},{property: 'og:height', content: '608'},{property: 'og:width', content: '1502'}],
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: "UN Smart Maps Learning Hub",
        logo: {
          alt: "UN Smart Maps Logo",
          src: "img/favicon.png"
        },
        items: [
          {
            to: "/about",
            position: "left",
            label: "About"
          },
          {
            to: "/category/tutorials", // path to the page
            label: "Learn", // label of the tab
            position: "left" // position of the tab
          },
          {
            to: "/examples", // path to the page
            label: "Examples", // label of the tab
            position: "left" // position of the tab
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/unopengis/learning/",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/intro"
              },
              {
                label: "Examples",
                to: "/examples"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/unopengis"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/unopengis/"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`
      },
      colorMode: {
        disableSwitch: false,
        defaultMode: "light",
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [[require.resolve('docusaurus-lunr-search'),{indexBaseUrl: true,languages: ['en', 'ja']}]],
  markdown: {
    mermaid: true,
  },
  // themes: ['@docusaurus/theme-mermaid']
  themes: ['@docusaurus/theme-live-codeblock'],
  
};

module.exports = config;

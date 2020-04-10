module.exports = {
  title: 'Agricultural supply chain management',
  tagline: 'centralized demand and decentralized supply',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Socialist-SriLanka', // Usually your GitHub org/user name.
  projectName: 'Agricultural-supply-chain-management', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ASCM for SriLanka',
      logo: {
        alt: 'ASCM',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/background',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Socialist-SriLanka/Agricultural-supply-chain-management',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            
          ],
        },
        {
          title: 'Community',
          items: [
            
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Socialist-SriLanka',
            },
            {
              label: 'Twitter',
              href: '#',
            },
            {
              label: 'Facebook',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Socialist SriLanka, org.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Socialist-SriLanka/Agricultural-supply-chain-management/edit/master/site/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

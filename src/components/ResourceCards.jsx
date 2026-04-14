import React from 'react';

const ResourceCards = () => {
  const resources = [
    {
      title: 'Resources',
      links: [
        { text: 'C# Documentation', href: '/docs/index.html#Sdk/Introduction.md' },
        { text: 'REST Documentation', href: '/docs/index.html#Rest/Introduction.md' },
        { text: 'OpenAPI Documentation', href: '/openapi/index.html' },
        { text: 'PowerOffice Go at GitHub', href: 'https://github.com/PowerOffice/go-api/', external: true },
        { text: 'PowerOffice Go SDK at NuGet', href: 'https://www.nuget.org/packages/PowerOfficeGoSdk/', external: true },
        { text: 'PowerOffice Go Home', href: 'http://www.poweroffice.no/go', external: true }
      ]
    },
    {
      title: 'Examples',
      links: [
        { text: 'C# Getting Started', href: '/docs/index.html#Sdk/Tutorials/GettingStarted.md' },
        { text: 'C# Examples', href: 'https://github.com/PowerOffice/go-api/tree/master/Examples', external: true },
        { text: 'REST Getting Started', href: '/docs/index.html#Rest/Introduction.md' },
        { text: 'REST Examples', href: '/docs/index.html#Rest/Examples.md' }
      ]
    },
    {
      title: 'Support',
      links: [
        { text: 'Issue Tracker', href: 'https://github.com/PowerOffice/go-api/issues', external: true },
        { text: 'Contact Us', href: 'mailto:go-api@poweroffice.no', external: true },
        { text: 'Known issues', href: '/docs/index.html#Common/knownissues.md' }
      ]
    }
  ];

  return (
    <section className="resources">
      <div className="resources-container">
        {resources.map((section) => (
          <div key={section.title} className="resource-card">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourceCards;

import React from 'react';

const GettingStarted = () => {
  const steps = [
    {
      number: 1,
      title: 'Register Your Application',
      link: '/docs/index.html#Common/Registration.md'
    },
    {
      number: 2,
      title: 'Read Documentation',
      link: '/docs/index.html#Welcome.md'
    },
    {
      number: 3,
      title: 'Start Coding',
      link: '/docs/index.html#Sdk/Tutorials/GettingStarted.md'
    }
  ];

  return (
    <section className="getting-started">
      <div className="getting-started-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <a href={step.link} className="step-card">
              <span className="step-number">{step.number}</span>
              <span className="step-title">{step.title}</span>
            </a>
            {index < steps.length - 1 && <div className="step-connector" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default GettingStarted;

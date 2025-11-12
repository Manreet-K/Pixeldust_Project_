/* Custom agents page data map */
import IconAutomation from '../assets/images/icons/icon-automation.svg';
import IconCloud from '../assets/images/icons/icon-cloud-native.svg';
import IconPointUp from '../assets/images/icons/icon-point-up.svg';
import IconStar from '../assets/images/icons/icon-star.svg';
import IconLever from '~/assets/images/icons/icon-lever.svg';
import IconAIArrow from '~/assets/images/icons/icon-ai-arrow.svg';
import IconBolt from '~/assets/images/icons/icon-bolt-o.svg';
import IconProcess from '~/assets/images/icons/icon-process-o.svg';
import IconFactory from '~/assets/images/icons/icon-factory-o.svg';
import IconRobot from '~/assets/images/icons/icon-robot.svg';
import IconAgent from '~/assets/images/icons/icon-strategy-agent.svg';
import IconDataAnalytics from '~/assets/images/icons/icon-data-graph.svg';
import IconSearch from '~/assets/images/icons/icon-search-agent.svg';
import IconTruck from '~/assets/images/icons/icon-truck-o.svg';
import IconDollar from '~/assets/images/icons/icon-dollar-o.svg';
import IconHeadphone from '~/assets/images/icons/icon-headphone-o.svg';
import IconLifeline from '~/assets/images/icons/icon-lifeline-o.svg';

export default [
  {
    _component: 'heroSection',
    label: 'Activate Your Enterprise',
    title: `Move Beyond Generative AI. Start Your Agentic AI Factory.`,
    description: `AgentX Platform is CriticalRiver's premier service offering that builds, deploys,
      and manages a workforce of autonomous AI agents. We move you from passive AI (answering questions)
      to active AI (getting work done).`,
    leaderHeadline: '',
    headingMaxWidth: 1050,
    leaderMaxWidth: 940,
    ctaText: 'Schedule Your AgentX Platform Strategy Session'
  },
  {
    _component: 'introColumnSection',
    label: '',
    title: `The Future Isn't Just Generative, It's Agentic`,
    description: `You’ve seen AI generate text, images, and code.
      But the real transformation begins when AI can take action.
      The challenge for most enterprises is moving from simply
      "chatting" with data to creating autonomous agents that can reason,
      plan, and execute complex, multi-step tasks. These agents need to
      interact with your applications, analyze data, make decisions,
      and complete processes, just like a human employee.`,
    points: [
      {
        title: 'The Agentic Enterprise',
        description: `Building this requires a specialized "factory" — a dedicated team
          with deep expertise in complex frameworks, automation, and enterprise integration.`,
        image: IconRobot,
      }
    ]
  },
  {
    _component: 'multiFeaturesSection',
    headingWidth: 720,
    lgSpaceReduce: true,
    label: 'Our Solution',
    title: 'The AgentX Platform Factory',
    description: `AgentX Platform is your on-demand AI workforce factory.
      We provide expert teams, frameworks, and IP to build tailored AI agents
      that orchestrate workflows and unlock productivity.`,
    rows: [
      {
        type: 'point-list',
        title: 'Ready Agents',
        subTitle: `Deploy in Weeks, Not Months`,
        points: [
          {
            title: 'Enterprise Strategy Agent',
            description: `Conducts market analysis, competitive intelligence,
              and SWOT analysis, offering strategic recommendations.`,
            image: IconAgent
          },
          {
            title: 'Data Analyst Agent',
            description: `Connects to data sources, interprets language,
              performs analyses, and creates visualizations—no SQL needed.`,
            image: IconDataAnalytics
          },
          {
            title: 'Enterprise Search Agent',
            description: `Understands user intent, searches various data sources
              (CRM, SharePoint, etc.), and delivers a single, cited answer.`,
            image: IconSearch
          },
        ]
      },
      {
        type: 'description-point-list',
        title: 'Custom Agent Development',
        subTitle: `Built for Your Business`,
        description: `Your business processes are unique. Our expert team will partner
          with you to identify, design, and build bespoke agents that solve
          your most complex challenges.`,
        bullets: [
          `Use Case Identification: Analyzing workflows for highest-ROI automation.`,
          `Bespoke Build: Custom agents for any specific use case.`
        ],
        pointList: {
          title: 'Example Custom Use Cases:',
          points: [
            {
              title: 'Financial Reconciliation',
              image: IconDollar
            },
            {
              title: 'Supply Chain Orchestration',
              image: IconTruck
            },{
              title: 'Customer Support Escalations',
              image: IconHeadphone
            },{
              title: 'IT System Health Monitoring',
              image: IconLifeline
            },
          ]
        }
      }
    ]
  },
  {
    _component: 'featuresSection',
    headingWidth: 822,
    lightingLeft: true,
    lgSpaceReduce: true,
    label: '',
    title: 'Our Technology & Expertise',
    description: `Our AgentX Platform teams are masters of the modern agentic AI ecosystem.
      We leverage the best-in-class tools and our own internal IP to build agents that are powerful, secure, and scalable.`,
    points: [
      {
        title: 'Core Frameworks',
        description: `Deep competency in LangChain, LlamaIndex, and other AI orchestration engines.`,
        image: IconPointUp
      },
      {
        title: 'Automation',
        description: `Expertise in platforms like n8n, enabling agents to connect to hundreds of applications.`,
        image: IconAutomation
      },
      {
        title: 'Cloud-Native',
        description: `Deploying on AWS Bedrock, Google Vertex AI, and Azure AI Studio.`,
        image: IconCloud
      },
      {
        title: 'Proprietary IP',
        description: `Our own frameworks and accelerators to speed up development and reduce TCO.`,
        image: IconStar
      }
    ]
  },
  {
    _component: 'featuresBulletsSection',
    headingWidth: 822,
    lgSpaceReduce: true,
    label: 'Beyond The Factory',
    title: 'Enablement & Optimization',
    description: `Supercharge your AI adoption with expert-led training and model specialization.`,
    points: [
      {
        title: 'Model Tuning Offering',
        description: `Off-the-shelf models are a great start, but true performance comes from specialization.
          Our experts fine-tune models on your specific data, improving accuracy, reducing hallucinations,
          and optimizing for your unique domain.`,
        image: IconLever,
        points: [
          'Improved Accuracy',
          'Domain-Specific Expertise',
          'Cost-Performance Optimization'
        ]
      },
      {
        title: 'AI BootCamp Offering',
        description: `Empower your teams to build, manage, and scale with our intensive AI BootCamp.
          We go beyond theory to provide hands-on training, transforming your developers
          into an effective agent-building workforce.`,
        image: IconAIArrow,
        points: [
          'Team Empowerment',
          'Hands-On, Practical Training',
          'Build and Scale In-House'
        ]
      }
    ]
  },
  {
    _component: 'columnPointersSection',
    label: '',
    title: 'Why Partner with CriticalRiver?',
    description: `We are digital transformation experts who understand how to re-engineer
      your business processes to maximize the impact of AI.`,
    points: [
      {
        title: 'Process First, Technology Second',
        description: `We understand how to re-engineer your business processes to maximize the impact of AI.`,
        image: IconProcess,
      },
      {
        title: 'A Factory, Not a Project',
        description: `A continuous "Agent Factory" model. We partner for the long term to manage,
          refine, and deploy new agents as you evolve.`,
        image: IconFactory,
      },
      {
        title: 'Proprietary Accelerators',
        description: `In-house IP provides a unique advantage, enabling faster,
          more robust, and more scalable deployments.`,
        image: IconBolt,
      }
    ]
  },
  {
    _component: 'contactSection',
    title: 'Experience the future of finance automation',
    headingMaxWidth: 640,
  }
]
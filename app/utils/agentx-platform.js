/* Custom agents page data map */
import IconAutomation from '../assets/images/icons/icon-automation.svg';
import IconCloud from '../assets/images/icons/icon-cloud-native.svg';
import IconPointUp from '../assets/images/icons/icon-point-up.svg';
import IconStar from '../assets/images/icons/icon-star.svg';
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
    _component: 'featuresSection',
    headingWidth: 822,
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
    _component: 'contactSection',
    title: 'Experience the future of finance automation',
    headingMaxWidth: 640,
  }
]
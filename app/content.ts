export const profile = {
  name: 'Jacob Kobrick',
  username: 'jacobkobr',
  github: 'https://github.com/jacobkobr',
  linkedin: 'https://www.linkedin.com/in/jacob-kobrick/',
  introduction: 'I study computer science at Arizona State University and work as a software engineering intern at FOX Technology.',
};

export const projects = [
  {slug: 'prediction-market', name: 'Prediction Market Inefficiency Research', summary: 'Testing whether mispriced Bitcoin contracts could be traded profitably after spread and fees.'},
  {slug: 'mata', name: 'Mata', summary: 'A desktop chat app for local Ollama models and cloud models, with subscription-based usage.'},
  {slug: 'chatmap', name: 'ChatMap', summary: 'A Chrome extension for finding messages in long ChatGPT conversations.'},
  {slug: 'keepsmile', name: 'Keepsmile BLE research', summary: 'Direct Bluetooth control for my LED lights, without the manufacturer’s app.'},
  {slug: 'open-mc-host', name: 'Open MC Host', summary: 'A self-hosted dashboard for running Minecraft servers and giving friends access.'},
  {slug: 'vmaf-optimizer', name: 'VMAF Optimizer', summary: 'Finding the smallest compression setting for each game clip that still clears a quality score.'},
  {slug: 'kvm-switch', name: 'KVM Switch', summary: 'Working toward one shortcut to switch a monitor, keyboard, and mouse between a PC and a Mac.'},
  {slug: 'arc-raiders-util', name: 'ArcRaidersUtil', summary: 'Reading inventory screenshots to identify items, stack counts, and their positions.'},
  {slug: 'toggle-reddit-sidebar', name: 'Toggle Reddit Sidebar', summary: 'An older Chrome extension that hides the Reddit sidebar and remembers the setting.'},
];

export const portfolioFiles = [
  {path: 'README.md', href: '/readme'},
  {path: 'experience/fox.md', href: '/experience/fox'},
  ...projects.map(project => ({path: `projects/${project.slug}.md`, href: `/projects/${project.slug}`})),
];

export const commits = [
  {id: 'projects', message: 'docs: updated projects', files: portfolioFiles.filter(file => file.path.startsWith('projects/'))},
  {id: 'experience', message: 'docs: added experience to portfolio', files: portfolioFiles.filter(file => file.path.startsWith('experience/'))},
  {id: 'readme', message: 'init', files: portfolioFiles.filter(file => file.path === 'README.md')},
];

export const contentTodos = [
  'Confirm the exact ChatMap store publication date before describing the June 3 documentation update as launch day.',
  'Confirm the public repository URL for the prediction market project before linking it.',
];

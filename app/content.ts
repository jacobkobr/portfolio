export const profile = {
  name: 'Jacob Kobrick',
  username: 'jacobkobr',
  github: 'https://github.com/jacobkobr',
  linkedin: 'https://www.linkedin.com/in/jacob-kobrick/',
  introduction: 'I study computer science at Arizona State University and work as a software engineering intern at FOX Technology.',
};

export const projects = [
  {
    slug: 'kalshi',
    href: '/docs/kalshi',
    name: 'Kalshi trading system',
    status: 'Trading system',
    summary: 'I built a system to record, study, and trade Kalshi’s 15-minute Bitcoin markets. The write-up covers what I tried, what failed, and how live trading went.',
    technologies: ['Python', 'FastAPI', 'WebSocket', 'SQLite', 'XGBoost'],
    sections: [],
    links: [],
    source: 'index.html — Jacob’s project write-up, displayed at /docs/kalshi',
  },
  {
    slug: 'chatmap',
    href: '/projects/chatmap',
    name: 'ChatMap',
    status: 'Chrome extension',
    summary: 'A small minimap for long ChatGPT conversations. Jump to a message, bookmark an answer, or export the chat.',
    technologies: ['TypeScript', 'React', 'Chrome extensions'],
    sections: [
      {title: 'Finding your place', text: 'Finding an earlier answer in a long chat means a lot of scrolling. ChatMap puts the conversation on a small timeline so you can jump straight to a message.'},
      {title: 'Using it', text: 'Hover over a marker to preview the message, then click to jump there. Bookmark messages you want to come back to, or filter the timeline to show just your bookmarks. There are keyboard shortcuts for navigation and export, and you can change them in the extension popup.'},
      {title: 'Under the hood', text: 'I built the extension with TypeScript and React, using Vite to bundle it for Chrome.'},
    ],
    links: [
      {label: 'View repository', url: 'https://github.com/jacobkobr/chatmap'},
      {label: 'Chrome Web Store', url: 'https://chromewebstore.google.com/detail/lmkifloejhppjonoaejlppbghbhcclmd'},
    ],
    source: '../chat-timeline/README.md and package.json',
  },
  {
    slug: 'keepsmile',
    href: '/projects/keepsmile',
    name: 'Keepsmile BLE research',
    status: 'Protocol research',
    summary: 'I reverse engineered my LED lights’ Bluetooth protocol so I could control them without the manufacturer’s app. There’s a Python tool and a native Mac app.',
    technologies: ['Python', 'Swift', 'CoreBluetooth', 'BLE'],
    sections: [
      {title: 'Why I built it', text: 'The official app was slow, full of ads, and limited to a short list of effects. I wanted to control my lights directly and make my own patterns, but the Bluetooth protocol wasn’t documented.'},
      {title: 'Figuring out the protocol', text: 'I captured Bluetooth traffic with PacketLogger while changing colors, brightness, and effects in the official app. Isolating the ATT writes let me work out which bytes controlled each setting.'},
      {title: 'The tools', text: 'The Python CLI and desktop app use Bleak. The Mac menu bar app uses Swift and CoreBluetooth, with custom color cycles, voice commands, and light effects. I’ve tested this on KS03 lights; other models may use a different protocol.'},
    ],
    links: [{label: 'View repository', url: 'https://github.com/jacobkobr/keepsmile-bt-protocol'}],
    source: '../keepsmile-bt-protocol/README.md and pyproject.toml',
  },
  {
    slug: 'kvm-switch',
    href: '/projects/kvm-switch',
    name: 'KVM Switch',
    status: 'In progress',
    summary: 'An early attempt at switching a monitor, keyboard, and mouse between a Windows PC and a Mac with one shortcut. So far, I’m testing monitor control.',
    technologies: ['Rust', 'Windows APIs', 'DDC/CI'],
    sections: [
      {title: 'The idea', text: 'The project is called Handoff. I want one shortcut to switch the monitor’s input and send keyboard and mouse input to the other computer over the local network. It’s still early; there isn’t an app to install yet.'},
      {title: 'What works so far', text: 'I wrote a Rust command-line tool that finds connected monitors and reads their identity and DDC/CI controls. I’ve verified brightness changes on real hardware and checked that repeated monitor enumeration doesn’t leak handles.'},
      {title: 'Next', text: 'I still need to test switching the monitor’s input and restoring it reliably. Then comes secure communication between the two computers and forwarding keyboard and mouse input.'},
    ],
    links: [],
    source: '../kvm-switch/README.md and docs/compatibility.md',
  },
];

// Dates identify documented project milestones, not portfolio commits or project start dates.
export const milestones = [
  {date: '2026-05-22', title: 'Added navigation and setup instructions', project: 'chatmap', source: 'chat-timeline README history'},
  {date: '2026-05-31', title: 'Wrote up the BLE protocol and controls', project: 'keepsmile', source: 'keepsmile-bt-protocol README history'},
  {date: '2026-06-03', title: 'Added the Chrome Web Store link', project: 'chatmap', source: 'chat-timeline README history'},
  {date: '2026-06-06', title: 'First commit of the dashboard and data recorder', project: 'kalshi', source: 'kalshi-bot initial commit'},
  {date: '2026-08-01', title: 'Verified brightness control on a real monitor', project: 'kvm-switch', source: 'kvm-switch compatibility documentation history'},
];

export const skillGroups = [
  {name: 'Web and interfaces', description: 'TypeScript, React, browser extensions, and keyboard-driven navigation.', project: 'chatmap'},
  {name: 'Data and backend', description: 'Python, FastAPI, WebSocket data streams, SQLite, and authenticated APIs.', project: 'kalshi'},
  {name: 'Bluetooth and protocol research', description: 'BLE traffic analysis, GATT writes, Python tooling, Swift, and CoreBluetooth.', project: 'keepsmile'},
  {name: 'Systems and hardware', description: 'Rust, Windows display APIs, DDC/CI, and hardware feasibility testing.', project: 'kvm-switch'},
];

export const contentTodos = [
  'Confirm FOX Technology employment dates before adding the role to the dated milestones.',
  'Add approved, public-safe FOX responsibilities when supplied.',
  'Confirm public repository URLs for Kalshi and KVM Switch before linking them.',
  'Add verified project screenshots if supplied.',
];

export const portfolioFiles = [
  {path: 'README.md', href: '/readme'},
  {path: 'experience/fox.md', href: '/experience/fox'},
  ...projects.map(project => ({path: `projects/${project.slug}.md`, href: `/projects/${project.slug}`})),
];


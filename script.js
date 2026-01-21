
// Portfolio Data Object
const PORTFOLIO_DATA = {
    experience: {
        title: 'Mobile Software Repair Technician',
        company: 'Self-Employed / Freelance',
        period: '2021 - Present',
        description: [
            'Specialized in system-level operations including firmware flashing and kernel-level configurations.',
            'Performing advanced device unlocking, FRP bypassing, and bootloader management across multiple Android platforms.',
            'Diagnosing and resolving complex software bricking issues and system-level conflicts.'
        ],
        skills: ['Android Systems', 'Firmware Flashing', 'Security Bypassing', 'Hardware-Software Interfacing']
    },
    socials: [
        { label: 'GITHUB', val: 'yeminthway', href: 'https://github.com/yeminthway' },
        { label: 'FACEBOOK', val: 'yeminthway', href: 'https://www.facebook.com/share/1BxniUxPa7/?mibextid=wwXIfr' },
        { label: 'TELEGRAM', val: '@yeminthway', href: 'https://t.me/yeminthway' }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initExperience();
    initSocials();
});

function initExperience() {
    const exp = PORTFOLIO_DATA.experience;
    const content = document.getElementById('experience-content');
    const tags = document.getElementById('skills-tags');

    if (!content || !tags) return;

    // Build the experience section
    content.innerHTML = `
        <p class="mono text-[#ff0055] text-[10px] mb-2">[${exp.period}]</p>
        <h4 class="text-xl font-bold text-white mb-1 tracking-tight">${exp.title}</h4>
        <p class="mono text-xs text-[#00f3ff] mb-6 tracking-tighter uppercase font-bold">${exp.company}</p>
        <ul class="space-y-4">
            ${exp.description.map(desc => `
                <li class="text-xs text-neutral-400 leading-relaxed flex items-start group">
                    <span class="mr-3 text-[#ff0055] group-hover:translate-x-1 transition-transform">_</span>
                    ${desc}
                </li>
            `).join('')}
        </ul>
    `;

    // Build skills tags
    tags.innerHTML = exp.skills.map(skill => `
        <span class="mono px-2 py-1 bg-white/5 border border-[#00f3ff]/10 text-[9px] text-neutral-400 uppercase tracking-tighter">
            ${skill}
        </span>
    `).join('');
}

function initSocials() {
    const container = document.getElementById('social-links');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.socials.map(social => `
        <a 
            href="${social.href}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group flex flex-col border-b border-white/5 pb-2 hover:border-[#00f3ff]/50 transition-all duration-300"
        >
            <span class="mono text-[10px] text-neutral-500 group-hover:text-white mb-1 transition-colors">${social.label}</span>
            <span class="mono text-xs text-[#00f3ff] opacity-60 group-hover:opacity-100 transition-opacity">${social.val}</span>
        </a>
    `).join('');
}

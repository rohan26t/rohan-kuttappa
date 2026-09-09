import { assetPath } from './asset-path';
export const profile = {
  email: 'rohan26t@gmail.com', location: 'Bengaluru, India', resume: assetPath('/TM_Rohan_Resume.pdf'),
  tools: ['Jira', 'Power Automate', 'Power BI', 'Excel', 'Microsoft Project Plan', 'Agile / Scrum'],
};
export const experience = [
  { period: 'MAR 2026 — PRESENT', sector: 'TECHNOLOGY & TELECOM', company: 'The Data Duck', location: 'Bengaluru', role: 'VP, Operations Management',
    results: ['Lead a 17-country technology integration portfolio, with 6 integrations and 17 services progressing concurrently across multiple markets.', 'Coordinate a 7-member core engineering team alongside product, QA, operators, partners, security vendors, and senior leadership.', 'Established centralized governance across 17+ parallel workstreams, bringing milestones, risks, ownership, and readiness into one management view.', 'Directed structured UAT across 35+ scenarios per cycle, with standardized evidence, escalation formats, and sign-off criteria.'], tags: ['Portfolio governance', 'Cross-market delivery', 'UAT & launch readiness'] },
  { period: 'APR 2023 — MAR 2026', sector: 'FINANCIAL SERVICES', company: 'State Street', location: 'Hyderabad & Bengaluru', role: 'AVP-2, Program Manager & Scrum Master',
    results: ['Led delivery governance across 5 Scrum teams, improving sprint commitment accuracy from approximately 60% to 95% and on-time delivery from approximately 80% to 95%.', 'Reduced average project timelines by 15%, from 20 to 17 weeks, and improved release success from 85% to 98%.', 'Automated reporting and approval workflows with Power Automate, eliminating 18 manual steps per cycle and saving 120+ hours monthly while reducing team effort by 25%.', 'Improved capacity planning by 20% through roadmap alignment, workload forecasting, and strategic resource rebalancing.'], tags: ['Agile delivery', 'Process automation', 'Capacity planning'] },
  { period: 'SEP 2012 — SEP 2022', sector: 'MILITARY LEADERSHIP', company: 'Indian Army', location: '29 PARA (Special Forces)', role: 'Commissioned Officer',
    results: ['Led and mentored teams of 90+ personnel in high-pressure environments, accountable for planning, resource deployment, risk management, readiness, and execution.', 'Managed defense projects valued at approximately US$1.2M with 96% schedule adherence.', 'Coordinated 12+ joint initiatives with allied forces and law-enforcement agencies; awarded the GOC-in-C Commendation for leadership and execution.'], tags: ['Team leadership', 'Risk management', 'Strategic execution'] },
];
export const expertise = [
  { title: 'Program & project delivery', description: 'End-to-end planning, dependencies, milestones, and operational handover across complex portfolios.' },
  { title: 'Governance & risk', description: 'PMO discipline, executive reporting, and structured risk, issue, and dependency management.' },
  { title: 'Cross-functional leadership', description: 'Aligning engineering, product, vendors, partners, and senior stakeholders around shared priorities.' },
  { title: 'Process & automation', description: 'Simplifying reporting and approval workflows to reduce manual effort and improve visibility.' },
  { title: 'Agile & resource planning', description: 'Scrum delivery, roadmap alignment, workload forecasting, and balanced team capacity.' },
  { title: 'UAT & go-live readiness', description: 'Structured testing, evidence, defect management, sign-offs, and production readiness.' },
];
export const education = [
  { title: 'General Management in Program / Business Management', institution: 'IIM Lucknow' },
  { title: 'B.E., Computer Science Engineering', institution: 'VTU' },
  { title: 'Certified ScrumMaster', institution: 'Scrum Alliance · 2024' },
  { title: 'PG Diploma, Defence Strategic Studies', institution: 'Army War College' },
];

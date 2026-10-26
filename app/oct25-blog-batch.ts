import { makeDailyBlogPost, type DailyBlogTopic } from './sep23-blog-batch';

const topics: readonly DailyBlogTopic[] = [
{
  "slug": "dvo-access-boundary",
  "title": "Set the Offshore Software Development Access Boundary Before Day One",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for set the offshore software development access boundary before day one",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "NIST AI Risk Management Framework",
    "url": "https://www.nist.gov/itl/ai-risk-management-framework"
  }
},
{
  "slug": "dvo-audit-pack",
  "title": "Build an Offshore Software Development Audit Pack Before Anyone Asks",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for build an offshore software development audit pack before anyone asks",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
  }
},
{
  "slug": "dvo-escalation-log",
  "title": "Keep an Offshore Software Development Escalation Log That Moves Work",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for keep an offshore software development escalation log that moves work",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "NIST AI Risk Management Framework",
    "url": "https://www.nist.gov/itl/ai-risk-management-framework"
  }
},
{
  "slug": "dvo-exception-path",
  "title": "Write the Offshore Software Development Exception Path Before Volume Arrives",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for write the offshore software development exception path before volume arrives",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "NIST AI Risk Management Framework",
    "url": "https://www.nist.gov/itl/ai-risk-management-framework"
  }
},
{
  "slug": "dvo-handoff-record",
  "title": "Make the Offshore Software Development Handoff Survive a Second Reviewer",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for make the offshore software development handoff survive a second reviewer",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "NIST AI Risk Management Framework",
    "url": "https://www.nist.gov/itl/ai-risk-management-framework"
  }
},
{
  "slug": "dvo-intake-evidence-control",
  "title": "Build an Offshore Software Development Intake Record That Preserves Evidence",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for build an offshore software development intake record that preserves evidence",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "ISO/IEC 27001 Information Security",
    "url": "https://www.iso.org/isoiec-27001-information-security.html"
  }
},
{
  "slug": "dvo-metric-definition",
  "title": "Define Offshore Software Development Metrics Before You Report Them",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for define offshore software development metrics before you report them",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "NIST Cybersecurity Framework 2.0",
    "url": "https://www.nist.gov/cyberframework"
  }
},
{
  "slug": "dvo-onboarding-plan",
  "title": "Onboard an Offshore Software Development Assistant in Small, Checkable Steps",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for onboard an offshore software development assistant in small, checkable steps",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "ISO/IEC 27001 Information Security",
    "url": "https://www.iso.org/isoiec-27001-information-security.html"
  }
},
{
  "slug": "dvo-quality-sample",
  "title": "Run an Offshore Software Development Quality Sample That Changes the Process",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for run an offshore software development quality sample that changes the process",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "NIST SP 800-128, Security-Focused Configuration Management",
    "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
  }
},
{
  "slug": "dvo-queue-ownership",
  "title": "Give Every Offshore Software Development Queue Item One Owner",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for give every offshore software development queue item one owner",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "NIST SP 800-128, Security-Focused Configuration Management",
    "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
  }
},
{
  "slug": "dvo-source-map",
  "title": "Map the Sources Behind Offshore Software Development Decisions",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for map the sources behind offshore software development decisions",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "NIST SP 800-128, Security-Focused Configuration Management",
    "url": "https://csrc.nist.gov/pubs/sp/800/128/final"
  }
},
{
  "slug": "dvo-weekly-brief",
  "title": "Write a Weekly Offshore Software Development Owner Brief From Queue Evidence",
  "family": "offshore engineering operations",
  "reader": "engineering and delivery leaders",
  "decision": "define ownership, evidence, and stop rules for write a weekly offshore software development owner brief from queue evidence",
  "deliverable": "a review-ready operating record with source, owner, evidence, and close state",
  "scenario": "a status looks complete while the source, reviewer, or next action is missing",
  "measures": "cycle time, rework, exception rate, reviewer load, and escaped defects",
  "service": "/services/devops-release-support",
  "serviceLabel": "DevOps release support",
  "source": {
    "name": "ISO/IEC 27001 Information Security",
    "url": "https://www.iso.org/isoiec-27001-information-security.html"
  }
},
];

export const octoberTwentyFiveBlogBatch = topics.map((topic,index)=>makeDailyBlogPost(topic,index,'2026-10-25'));

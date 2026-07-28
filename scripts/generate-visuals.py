from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / 'public' / 'visuals'
OUT.mkdir(parents=True, exist_ok=True)

DEFS = '''<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071c2c"/><stop offset="1" stop-color="#0b3044"/></linearGradient>
  <linearGradient id="cyan" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#23d5e5"/><stop offset="1" stop-color="#56f0cd"/></linearGradient>
  <linearGradient id="lime" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#d8ff3e"/><stop offset="1" stop-color="#9fe53a"/></linearGradient>
  <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-opacity=".28"/></filter>
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".055"/></pattern>
</defs>'''

def shell(body, title, desc, view='0 0 1200 760'):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view}" role="img" aria-labelledby="title desc">
<title id="title">{title}</title><desc id="desc">{desc}</desc>{DEFS}
<rect width="1200" height="760" rx="36" fill="url(#bg)"/><rect width="1200" height="760" rx="36" fill="url(#grid)"/>{body}</svg>'''

def woman(x: float, y: float, scale: float = 1, jacket: str = '#23d5e5', hair: str = '#101820'):
    return f'''<g transform="translate({x} {y}) scale({scale})">
<ellipse cx="0" cy="190" rx="105" ry="25" fill="#020b12" opacity=".34"/>
<path d="M-86 174Q-76 48 0 35Q76 48 86 174Z" fill="{jacket}"/>
<path d="M-35 64L0 112L35 64L18 43H-18Z" fill="#f5d3bb"/>
<path d="M-33 65L0 112L-5 174H-66Q-62 96-33 65Z" fill="#eaf4f3" opacity=".95"/><path d="M33 65L0 112L5 174H66Q62 96 33 65Z" fill="#eaf4f3" opacity=".9"/>
<ellipse cx="0" cy="0" rx="47" ry="57" fill="#f1c9ad"/>
<path d="M-48 8Q-54-63 0-68Q52-64 50 14Q30-27 4-31Q-26-25-48 8Z" fill="{hair}"/>
<path d="M-45-1Q-57 64-28 83L-9 49Q-39 24-45-1ZM45-1Q56 58 31 84L12 47Q38 23 45-1Z" fill="{hair}"/>
<circle cx="-16" cy="4" r="3" fill="#26333b"/><circle cx="16" cy="4" r="3" fill="#26333b"/><path d="M-13 25Q0 34 13 25" fill="none" stroke="#aa6f64" stroke-width="3" stroke-linecap="round"/>
</g>'''

def man(x: float, y: float, scale: float = 1, jacket: str = '#d8ff3e'):
    return f'''<g transform="translate({x} {y}) scale({scale})"><ellipse cx="0" cy="190" rx="98" ry="24" fill="#020b12" opacity=".3"/><path d="M-80 174Q-65 52 0 42Q65 52 80 174Z" fill="{jacket}"/><path d="M-24 58L0 95L24 58L16 42H-16Z" fill="#e8b995"/><ellipse cx="0" cy="0" rx="45" ry="55" fill="#e7b58e"/><path d="M-43-7Q-37-60 4-60Q43-56 44-17Q16-35-15-27Z" fill="#151d22"/><circle cx="-15" cy="4" r="3"/><circle cx="15" cy="4" r="3"/><path d="M-12 26Q0 33 12 26" fill="none" stroke="#9b6652" stroke-width="3"/></g>'''

visuals = {}
visuals['hero-filipina-executive-assistant.svg'] = shell(f'''
<circle cx="1030" cy="110" r="170" fill="#23d5e5" opacity=".08"/><circle cx="975" cy="610" r="230" fill="#d8ff3e" opacity=".06"/>
<g filter="url(#shadow)"><rect x="72" y="82" width="470" height="596" rx="28" fill="#eff6f3"/><rect x="96" y="106" width="422" height="340" rx="20" fill="#d9e9e7"/>
{woman(302,255,1.28,'#0f5771')}
<rect x="122" y="476" width="370" height="158" rx="18" fill="#071c2c"/><rect x="150" y="510" width="170" height="14" rx="7" fill="#23d5e5"/><rect x="150" y="544" width="298" height="11" rx="5" fill="#fff" opacity=".26"/><rect x="150" y="570" width="246" height="11" rx="5" fill="#fff" opacity=".18"/><circle cx="443" cy="510" r="12" fill="#d8ff3e"/></g>
<g filter="url(#shadow)"><rect x="615" y="120" width="500" height="500" rx="30" fill="#0d2d41" stroke="#23d5e5" stroke-opacity=".35"/>
<rect x="655" y="164" width="420" height="68" rx="14" fill="#112f40"/><circle cx="693" cy="198" r="13" fill="#d8ff3e"/><rect x="722" y="185" width="170" height="12" rx="6" fill="#fff" opacity=".8"/><rect x="722" y="207" width="116" height="8" rx="4" fill="#fff" opacity=".25"/>
<path d="M670 420C735 376 760 468 825 399S931 332 1048 285" fill="none" stroke="url(#cyan)" stroke-width="12" stroke-linecap="round"/><circle cx="825" cy="399" r="15" fill="#d8ff3e"/><circle cx="1048" cy="285" r="15" fill="#23d5e5"/>
<rect x="662" y="491" width="122" height="82" rx="15" fill="#23d5e5" opacity=".16"/><rect x="803" y="454" width="122" height="119" rx="15" fill="#d8ff3e" opacity=".18"/><rect x="944" y="390" width="122" height="183" rx="15" fill="#23d5e5" opacity=".22"/></g>''','Filipina executive assistant and client operations dashboard','A professional Filipina executive assistant beside a structured workflow dashboard.')

visuals['philippines-outsourced-team.svg'] = shell(f'''
<rect x="70" y="86" width="1060" height="570" rx="34" fill="#0c2a3c" stroke="#23d5e5" stroke-opacity=".24"/>
<rect x="110" y="125" width="980" height="176" rx="24" fill="#eef5f3"/><path d="M145 253H1055" stroke="#cbd7d5"/><circle cx="192" cy="190" r="34" fill="#23d5e5"/><circle cx="1008" cy="190" r="34" fill="#d8ff3e"/><path d="M247 190H948" stroke="#071c2c" stroke-width="12" stroke-linecap="round" opacity=".16"/>
{woman(257,402,.83,'#23d5e5')}{woman(473,402,.83,'#d8ff3e')}{man(690,402,.83,'#23d5e5')}{woman(907,402,.83,'#7aa6ff')}
<rect x="154" y="586" width="190" height="14" rx="7" fill="#23d5e5"/><rect x="402" y="586" width="190" height="14" rx="7" fill="#d8ff3e"/><rect x="650" y="586" width="190" height="14" rx="7" fill="#23d5e5"/><rect x="898" y="586" width="120" height="14" rx="7" fill="#7aa6ff"/>''','Philippines outsourced operations team','Four Filipino professionals working together as a managed support team.')

for filename,title,accent,icon in [
('role-executive-assistant.svg','Executive assistant','#23d5e5','M780 170v145M710 242h140'),
('role-customer-support.svg','Customer support specialist','#d8ff3e','M705 248q75-120 150 0M705 248v84M855 248v84'),
('role-operations-coordinator.svg','Operations coordinator','#7aa6ff','M700 170h180v155H700zM730 210h120M730 250h86M730 290h105'),
('role-sales-support.svg','Sales support specialist','#ffb45e','M700 305l45-55 48 28 78-105M854 173h17v18')]:
    visuals[filename]=shell(f'''<circle cx="310" cy="342" r="230" fill="{accent}" opacity=".09"/>{woman(330,310,1.55,accent)}<g filter="url(#shadow)"><rect x="625" y="105" width="470" height="530" rx="36" fill="#0d2c40" stroke="{accent}" stroke-opacity=".42"/><path d="{icon}" fill="none" stroke="{accent}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><rect x="700" y="420" width="310" height="18" rx="9" fill="#fff" opacity=".2"/><rect x="700" y="462" width="260" height="18" rx="9" fill="#fff" opacity=".12"/><rect x="700" y="520" width="150" height="50" rx="25" fill="{accent}"/></g>''',title,f'A stylized professional Filipina {title.lower()} with a visual role panel.')

visuals['managed-team-comparison.svg']=shell('''
<g font-family="Arial,sans-serif" font-weight="700"><rect x="72" y="90" width="315" height="580" rx="28" fill="#0c293a" stroke="#fff" stroke-opacity=".13"/><rect x="443" y="90" width="315" height="580" rx="28" fill="#0c293a" stroke="#fff" stroke-opacity=".13"/><rect x="814" y="70" width="315" height="620" rx="28" fill="#12394d" stroke="#d8ff3e" stroke-width="3"/>
<circle cx="229" cy="190" r="55" fill="#fff" opacity=".13"/><circle cx="600" cy="190" r="55" fill="#23d5e5" opacity=".35"/><circle cx="971" cy="177" r="55" fill="#d8ff3e"/><path d="M188 320h82M188 370h82" stroke="#fff" stroke-width="18" opacity=".22" stroke-linecap="round"/><path d="M538 305h124M538 355h124M538 405h124" stroke="#23d5e5" stroke-width="18" opacity=".55" stroke-linecap="round"/><path d="M886 285h170M886 335h170M886 385h170M886 435h170" stroke="#d8ff3e" stroke-width="18" opacity=".72" stroke-linecap="round"/>
<circle cx="229" cy="560" r="18" fill="#ff7f67"/><circle cx="600" cy="560" r="18" fill="#ffb45e"/><circle cx="921" cy="560" r="18" fill="#d8ff3e"/><circle cx="971" cy="560" r="18" fill="#d8ff3e"/><circle cx="1021" cy="560" r="18" fill="#d8ff3e"/>
<path d="M900 620h142" stroke="#d8ff3e" stroke-width="14" stroke-linecap="round"/></g>''','Freelancer, direct hire, and managed team comparison','Three engagement models with progressively stronger support, backup coverage, and management controls.')

visuals['va-workflow.svg']=shell('''
<path d="M150 380H1048" stroke="#23d5e5" stroke-width="8" stroke-dasharray="18 18" opacity=".55"/>
<g fill="#0d3044" stroke="#23d5e5" stroke-width="3"><rect x="70" y="245" width="210" height="270" rx="28"/><rect x="355" y="245" width="210" height="270" rx="28"/><rect x="640" y="245" width="210" height="270" rx="28"/><rect x="925" y="245" width="210" height="270" rx="28"/></g>
<g fill="none" stroke="#d8ff3e" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M130 350h90v65h-90zM130 350l45 36 45-36"/><path d="M418 420v-83h85v83M438 365h45M438 392h45"/><path d="M696 350h100v88H696zM716 382h60M716 410h40"/><path d="M987 410l31 30 58-82"/></g>
<g fill="#fff" opacity=".2"><rect x="105" y="468" width="140" height="12" rx="6"/><rect x="390" y="468" width="140" height="12" rx="6"/><rect x="675" y="468" width="140" height="12" rx="6"/><rect x="960" y="468" width="140" height="12" rx="6"/></g>
<circle cx="317" cy="380" r="22" fill="#d8ff3e"/><circle cx="602" cy="380" r="22" fill="#d8ff3e"/><circle cx="887" cy="380" r="22" fill="#d8ff3e"/>''','Virtual assistant workflow','A four-stage workflow from incoming request to organized task, client approval, and completion.')

visuals['launch-roadmap.svg']=shell('''
<path d="M115 585C245 545 236 404 371 425S520 572 648 448S790 235 1080 205" fill="none" stroke="#23d5e5" stroke-width="12" stroke-linecap="round"/>
<g fill="#d8ff3e" stroke="#071c2c" stroke-width="12"><circle cx="132" cy="573" r="34"/><circle cx="375" cy="426" r="34"/><circle cx="625" cy="465" r="34"/><circle cx="835" cy="297" r="34"/><circle cx="1060" cy="208" r="34"/></g>
<g fill="#0d3044" stroke="#fff" stroke-opacity=".2"><rect x="62" y="115" width="185" height="220" rx="24"/><rect x="275" y="120" width="185" height="220" rx="24"/><rect x="488" y="115" width="185" height="220" rx="24"/><rect x="701" y="100" width="185" height="220" rx="24"/><rect x="914" y="78" width="185" height="220" rx="24"/></g>
<g stroke="#23d5e5" stroke-width="14" stroke-linecap="round" opacity=".75"><path d="M100 170h110M100 212h80M100 254h95"/><path d="M313 170h110M313 212h80M313 254h95"/><path d="M526 170h110M526 212h80M526 254h95"/><path d="M739 155h110M739 197h80M739 239h95"/><path d="M952 133h110M952 175h80M952 217h95"/></g>''','Five-step assistant launch roadmap','A five-step path from role scoping through matching, onboarding, calibration, and steady operations.')

visuals['operations-dashboard.svg']=shell('''
<rect x="70" y="72" width="1060" height="616" rx="32" fill="#0b293b" stroke="#23d5e5" stroke-opacity=".3"/><rect x="110" y="112" width="980" height="78" rx="18" fill="#12374b"/><circle cx="154" cy="151" r="14" fill="#d8ff3e"/><rect x="190" y="141" width="220" height="20" rx="10" fill="#fff" opacity=".65"/>
<rect x="110" y="225" width="300" height="400" rx="22" fill="#0e3144"/><rect x="450" y="225" width="640" height="190" rx="22" fill="#0e3144"/><rect x="450" y="455" width="640" height="170" rx="22" fill="#0e3144"/>
<g fill="#23d5e5"><rect x="150" y="300" width="220" height="20" rx="10" opacity=".75"/><rect x="150" y="355" width="170" height="20" rx="10" opacity=".45"/><rect x="150" y="410" width="195" height="20" rx="10" opacity=".6"/></g><g fill="#d8ff3e"><circle cx="350" cy="310" r="10"/><circle cx="300" cy="365" r="10"/><circle cx="325" cy="420" r="10"/></g>
<path d="M500 365L570 320 640 342 720 275 800 305 900 245 1030 270" fill="none" stroke="#23d5e5" stroke-width="10" stroke-linecap="round"/><circle cx="900" cy="245" r="13" fill="#d8ff3e"/>
<g fill="#23d5e5"><rect x="500" y="545" width="65" height="45" rx="8" opacity=".35"/><rect x="590" y="505" width="65" height="85" rx="8" opacity=".5"/><rect x="680" y="475" width="65" height="115" rx="8" opacity=".65"/><rect x="770" y="520" width="65" height="70" rx="8" opacity=".45"/><rect x="860" y="488" width="65" height="102" rx="8" opacity=".6"/><rect x="950" y="465" width="65" height="125" rx="8" opacity=".78"/></g>''','Virtual assistant operations dashboard','A dashboard showing queues, task trends, owner approvals, and quality checks.')

visuals['contact-role-planning.svg']=shell(f'''
<rect x="72" y="90" width="1056" height="580" rx="32" fill="#0c2b3e" stroke="#23d5e5" stroke-opacity=".3"/>{woman(304,333,1.45,'#23d5e5')}
<g filter="url(#shadow)"><rect x="560" y="135" width="500" height="470" rx="28" fill="#eef5f3"/><rect x="610" y="185" width="225" height="20" rx="10" fill="#071c2c" opacity=".78"/><rect x="610" y="235" width="390" height="12" rx="6" fill="#071c2c" opacity=".18"/><rect x="610" y="275" width="390" height="80" rx="16" fill="#dce8e6"/><circle cx="650" cy="315" r="14" fill="#23d5e5"/><rect x="682" y="305" width="245" height="15" rx="7" fill="#071c2c" opacity=".5"/><rect x="610" y="380" width="185" height="80" rx="16" fill="#d8ff3e" opacity=".8"/><rect x="815" y="380" width="185" height="80" rx="16" fill="#23d5e5" opacity=".65"/><rect x="610" y="500" width="250" height="54" rx="27" fill="#071c2c"/></g>''','Role planning with a Filipina staffing specialist','A Filipina staffing specialist beside a structured client role-planning form.')

visuals['quality-scorecard.svg']=shell('''
<rect x="82" y="80" width="1036" height="600" rx="32" fill="#0d3044" stroke="#23d5e5" stroke-opacity=".3"/><rect x="125" y="125" width="950" height="74" rx="18" fill="#123a4e"/><circle cx="168" cy="162" r="13" fill="#d8ff3e"/><rect x="206" y="151" width="230" height="20" rx="10" fill="#fff" opacity=".65"/>
<g fill="#0a2637" stroke="#fff" stroke-opacity=".1"><rect x="125" y="235" width="950" height="78" rx="16"/><rect x="125" y="333" width="950" height="78" rx="16"/><rect x="125" y="431" width="950" height="78" rx="16"/><rect x="125" y="529" width="950" height="78" rx="16"/></g>
<g fill="#fff" opacity=".7"><rect x="180" y="264" width="320" height="18" rx="9"/><rect x="180" y="362" width="260" height="18" rx="9"/><rect x="180" y="460" width="350" height="18" rx="9"/><rect x="180" y="558" width="290" height="18" rx="9"/></g>
<g><rect x="820" y="253" width="190" height="42" rx="21" fill="#d8ff3e"/><rect x="820" y="351" width="190" height="42" rx="21" fill="#23d5e5"/><rect x="820" y="449" width="190" height="42" rx="21" fill="#d8ff3e"/><rect x="820" y="547" width="190" height="42" rx="21" fill="#ffb45e"/></g>''','Outsourced team quality scorecard','A structured quality scorecard with four review criteria and clear status markers.')

visuals['philippines-time-zone-handoff.svg']=shell('''
<circle cx="340" cy="380" r="215" fill="#0d3044" stroke="#23d5e5" stroke-width="4"/><circle cx="340" cy="380" r="155" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="22"/><path d="M340 380V258M340 380l92 58" stroke="#d8ff3e" stroke-width="14" stroke-linecap="round"/><circle cx="340" cy="380" r="18" fill="#d8ff3e"/>
<path d="M570 380H940" stroke="#23d5e5" stroke-width="10" stroke-dasharray="18 18"/><path d="M930 340l55 40-55 40" fill="none" stroke="#23d5e5" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="695" y="165" width="405" height="180" rx="28" fill="#0d3044" stroke="#d8ff3e" stroke-opacity=".5"/><rect x="735" y="210" width="220" height="18" rx="9" fill="#fff" opacity=".7"/><rect x="735" y="250" width="310" height="12" rx="6" fill="#fff" opacity=".22"/><rect x="735" y="282" width="260" height="12" rx="6" fill="#fff" opacity=".16"/>
<rect x="695" y="455" width="405" height="180" rx="28" fill="#0d3044" stroke="#23d5e5" stroke-opacity=".5"/><circle cx="755" cy="515" r="22" fill="#23d5e5"/><rect x="800" y="503" width="245" height="18" rx="9" fill="#fff" opacity=".65"/><rect x="735" y="560" width="310" height="12" rx="6" fill="#fff" opacity=".2"/>''','Time-zone handoff and next-shift summary','A clock connected to two structured handoff panels for round-the-clock support.')

for name,svg in visuals.items():
    (OUT/name).write_text(svg)
print(f'generated {len(visuals)} SVG graphics in {OUT}')

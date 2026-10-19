"use client";

import { useEffect, useState, type FormEvent } from "react";

type Props = { endpoint?: string; encoding?: "json" | "form" };
type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };

const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const countryCodes = [
  ["🇺🇸", "+1"], ["🇨🇦", "+1"], ["🇮🇩", "+62"], ["🇵🇭", "+63"], ["🇬🇧", "+44"],
  ["🇦🇺", "+61"], ["🇳🇿", "+64"], ["🇸🇬", "+65"], ["🇮🇳", "+91"], ["🇦🇪", "+971"],
  ["🇲🇽", "+52"], ["🇧🇷", "+55"], ["🇿🇦", "+27"], ["🇩🇪", "+49"], ["🇫🇷", "+33"],
];

export default function StandardContactForm({ endpoint = "/api/contact", encoding = "form" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = {
      "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63",
      "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
      "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971",
    };
    if (zones[zone]) setCountryCode(zones[zone]);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = `${countryCode} ${String(data.get("phoneLocal") || "").trim()}`.trim();
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email: String(data.get("email") || ""), businessEmail: String(data.get("email") || ""), phone,
      companyName: String(data.get("companyName") || ""), company: String(data.get("companyName") || ""),
      website: String(data.get("website") || ""), companySize: String(data.get("companySize") || ""),
      positions: String(data.get("positions") || ""), positionsToFill: String(data.get("positions") || ""),
      referral: String(data.get("referral") || ""), howTheyHeard: String(data.get("referral") || ""),
      referralSpecify: String(data.get("referralSpecify") || ""), message: String(data.get("message") || ""),
      source: "contact-form", formId: "contactPageForm",
    };
    setSubmitting(true);
    setError("");
    try {
      const request = encoding === "form"
        ? { method: "POST", body: new URLSearchParams(payload) }
        : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      const result = await response.json().catch(() => null) as { accepted?: boolean; error?: string } | null;
      if (!response.ok || result?.accepted !== true) throw new Error(result?.error || "Lead endpoint rejected the request");
      try { (window as TrackerWindow).acrTracker?.trackLead?.(payload); } catch {}
      window.location.assign("/thank-you");
    } catch {
      setError("We could not deliver your request. Your information was not marked as sent. Please review the fields and try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="sa-form-card">
      <h2>Find Growth In Your Business By Hiring Industry Experienced Virtual Assistants</h2>
      <form action={endpoint} method="post" onSubmit={submit} id="contactPageForm">
        <input className="sa-hp" name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="sa-grid">
          <label htmlFor="contact-first-name">First Name *<input id="contact-first-name" name="firstName" required autoComplete="given-name" /></label>
          <label htmlFor="contact-last-name">Last Name *<input id="contact-last-name" name="lastName" required autoComplete="family-name" /></label>
        </div>
        <div className="sa-grid">
          <label htmlFor="contact-email">Business Email *<input id="contact-email" name="email" type="email" required autoComplete="email" /><small>Business email only. Personal email providers are not accepted.</small></label>
          <label htmlFor="contact-phone">Phone Number *<span className="sa-phone"><select name="countryCode" aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>{countryCodes.map(([flag, code], i) => <option value={code} key={`${code}-${i}`}>{flag} {code}</option>)}</select><input id="contact-phone" name="phoneLocal" type="tel" required autoComplete="tel-national" placeholder="Phone number" /></span></label>
        </div>
        <div className="sa-grid">
          <label htmlFor="contact-company">Company Name *<input id="contact-company" name="companyName" required autoComplete="organization" /></label>
          <label htmlFor="contact-website">Website / URL<input id="contact-website" name="website" placeholder="example.com" autoComplete="url" /></label>
        </div>
        <div className="sa-grid">
          <label htmlFor="contact-company-size">Company Size *<select id="contact-company-size" name="companySize" required defaultValue=""><option value="" disabled>Select...</option>{companySizes.map((x) => <option key={x}>{x}</option>)}</select></label>
          <label htmlFor="contact-positions">How Many Positions to Fill *<select id="contact-positions" name="positions" required defaultValue=""><option value="" disabled>Select...</option>{positions.map((x) => <option key={x}>{x}</option>)}</select></label>
        </div>
        <label htmlFor="contact-referral">How Did You Hear About Us? *<select id="contact-referral" name="referral" required value={referral} onChange={(e) => setReferral(e.target.value)}><option value="" disabled>Select...</option>{referrals.map((x) => <option key={x}>{x}</option>)}</select></label>
        {referral === "Other" ? <label htmlFor="contact-referral-other">Please Specify *<input id="contact-referral-other" name="referralSpecify" required /></label> : null}
        <label htmlFor="contact-message">Message *<textarea id="contact-message" name="message" rows={4} required /></label>
        <p className={error ? "sa-error" : "sa-sr-only"} role={error ? "alert" : "status"} aria-live="polite">{error || (submitting ? "Sending your request" : "Form ready")}</p>
        <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Book a Free Consultation"}</button>
      </form>
      <style jsx>{`
        .sa-form-card{width:100%;max-width:876px;margin:0 auto;background:#fff;border:1px solid #e3e8ef;border-radius:18px;padding:16px 22px 18px;box-shadow:0 18px 48px rgba(15,34,58,.16);color:#34415a;text-align:left}
        h2{margin:0 0 10px;color:#111827;font-size:20px;line-height:1.2;font-weight:800;letter-spacing:-.02em;max-width:700px}
        form{display:flex;flex-direction:column;gap:8px}.sa-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        label{display:flex;flex-direction:column;gap:3px;font-size:13px;line-height:1.2;font-weight:650;color:#34415a}
        input,select,textarea{box-sizing:border-box;width:100%;border:1px solid #cfd7e3;border-radius:9px;background:#fff;color:#1f2937;font:inherit;font-size:14px;padding:8px 10px;outline:none;min-height:38px}
        input:focus,select:focus,textarea:focus{border-color:#00adf4;box-shadow:0 0 0 3px rgba(0,173,244,.14)}
        small{color:#667085;font-size:11px;font-weight:400}.sa-phone{display:grid;grid-template-columns:105px 1fr;border:1px solid #cfd7e3;border-radius:9px;overflow:hidden}.sa-phone:focus-within{border-color:#00adf4;box-shadow:0 0 0 3px rgba(0,173,244,.14)}
        .sa-phone select,.sa-phone input{border:0;border-radius:0;box-shadow:none!important}.sa-phone select{border-right:1px solid #dbe1ea;padding-right:8px}.sa-phone input{min-width:0}
        textarea{resize:vertical;min-height:54px;max-height:90px}button{width:100%;border:0;border-radius:10px;background:linear-gradient(100deg,#057fae,#117da9);color:#fff;padding:11px 18px;font-size:16px;font-weight:750;cursor:pointer;box-shadow:0 7px 16px rgba(0,105,153,.22)}
        button:hover{filter:brightness(.98)}button:disabled{cursor:wait;opacity:.65}.sa-error{margin:0;color:#b42318;font-size:14px}.sa-hp{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important}
        @media(max-width:700px){.sa-form-card{padding:24px 18px 26px;border-radius:18px}h2{font-size:23px;margin-bottom:18px}form{gap:16px}.sa-grid{grid-template-columns:1fr;gap:16px}label{font-size:16px;gap:6px}input,select,textarea{font-size:16px;padding:12px;min-height:50px}.sa-phone{grid-template-columns:122px 1fr}textarea{min-height:110px;max-height:none}button{font-size:18px;padding:16px}}
      `}</style>
    </div>
  );
}

/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/services/reporting-and-qa", destination: "/services/qa-automation-engineering", permanent: true },
      { source: "/services/operations-support", destination: "/services/devops-release-support", permanent: true },
      { source: "/services/admin-support", destination: "/services/legacy-application-maintenance", permanent: true },
      { source: "/services/offshore-software-development", destination: "/services", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/cancellation-policy", destination: "/cancellation", permanent: true },
    ];
  },
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.svg" }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://acrtracking.stealthagents.us https://cloudflareinsights.com; frame-src https://go.oncehub.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
    ];
  },
};
export default nextConfig;

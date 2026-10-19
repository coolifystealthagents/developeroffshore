import { permanentRedirect } from 'next/navigation';

export default function LegacyCancellationPolicyPage() {
  permanentRedirect('/cancellation');
}

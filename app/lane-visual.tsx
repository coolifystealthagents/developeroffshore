import type { CSSProperties } from 'react';

type TokenClass = 'kw' | 'fn' | 'str' | 'num' | 'com' | 'plain';
type Token = readonly [text: string, tone?: TokenClass];

type LaneMeta = {
  file: string;
  glyph: string;
  accent: string;
  status: string;
  lines: readonly (readonly Token[])[];
};

const LANES: Record<string, LaneMeta> = {
  'next-js-application-development': {
    file: 'app/checkout/page.tsx',
    glyph: '</>',
    accent: '#2f54ff',
    status: 'build passed',
    lines: [
      [['// bounded route · named reviewer', 'com']],
      [['export default ', 'kw'], ['async ', 'kw'], ['function ', 'kw'], ['Page', 'fn'], ['() {']],
      [['  const ', 'kw'], ['order', 'fn'], [' = ', 'kw'], ['await ', 'kw'], ['getOrder', 'fn'], ['(id);']],
      [['  revalidateTag', 'fn'], ['(', 'plain'], ["'orders'", 'str'], [');']],
      [['  return ', 'kw'], ['<', 'plain'], ['Checkout', 'fn'], [' data={order} />;']],
      [['}']],
      [['// first slice: one route, one review', 'com']],
    ],
  },
  'react-frontend-development': {
    file: 'ui/order-summary.tsx',
    glyph: '{ }',
    accent: '#18bfe3',
    status: 'a11y checked',
    lines: [
      [['// states, keyboard, and review notes', 'com']],
      [['const ', 'kw'], ['[state, send]', 'fn'], [' = ', 'kw'], ['useReducer', 'fn'], ['(reducer);']],
      [['return ', 'kw'], ['(']],
      [['  <', 'plain'], ['Button', 'fn'], [' variant=', 'kw'], ['"primary"', 'str'], [' onClick={send}>']],
      [['    Review order']],
      [['  </', 'plain'], ['Button', 'fn'], ['>']],
      [[');']],
    ],
  },
  'node-js-api-development': {
    file: 'server/routes/orders.ts',
    glyph: '{ }',
    accent: '#2f54ff',
    status: 'contract tests 12/12',
    lines: [
      [['// validation before side effects', 'com']],
      [['app.', 'fn'], ['post', 'fn'], ["('/v1/orders'", 'str'], [', validate, handler);']],
      [['const ', 'kw'], ['result', 'fn'], [' = ', 'kw'], ['await ', 'kw'], ['db.', 'fn'], ['tx', 'fn'], ['(work);']],
      [['if ', 'kw'], ['(!result.ok) ', 'plain'], ['throw ', 'kw'], ['new ', 'kw'], ['Conflict', 'fn'], ['();']],
      [['return ', 'kw'], ['res.', 'fn'], ['status', 'fn'], ['(201).', 'plain'], ['json', 'fn'], ['(result);']],
      [['}']],
      [['// denied and malformed cases included', 'com']],
    ],
  },
  'shopify-theme-development': {
    file: 'sections/cart-drawer.liquid',
    glyph: '{%',
    accent: '#7c5cff',
    status: 'preview ready',
    lines: [
      [['{% ', 'kw'], ['schema', 'fn'], [' %}', 'kw']],
      [['  "name": ', 'plain'], ['"Cart drawer"', 'str'], [',']],
      [['  "settings": [', 'plain']],
      [['    { "type": ', 'plain'], ['"checkbox"', 'str'], [' }']],
      [['  ]']],
      [['{% ', 'kw'], ['endschema', 'fn'], [' %}', 'kw']],
      [['<div data-cart-count>{{ cart.item_count }}</div>']],
    ],
  },
  'wordpress-engineering': {
    file: 'blocks/hero/render.php',
    glyph: '<?',
    accent: '#18bfe3',
    status: 'staging checked',
    lines: [
      [['// bounded block change, staging first', 'com']],
      [['register_block_type', 'fn'], ['(__DIR__);']],
      [['$attrs', 'fn'], [' = ', 'kw'], ['get_block_wrapper_attributes', 'fn'], ['();']],
      [['echo ', 'kw'], ["'<section ' . $attrs . '>'", 'str'], [';']],
      [['get_template_part', 'fn'], ["('parts/hero'", 'str'], [');']],
      [['echo ', 'kw'], ["'</section>'", 'str'], [';']],
      [['// rollback and editor check recorded', 'com']],
    ],
  },
  'qa-automation-engineering': {
    file: 'tests/checkout.spec.ts',
    glyph: '✓',
    accent: '#12b981',
    status: 'suite stable',
    lines: [
      [['// risk-based check, not a test count', 'com']],
      [['test', 'fn'], ["('retry path'", 'str'], [', ', 'plain'], ['async ', 'kw'], ['({ page }) => {']],
      [['  await ', 'kw'], ['page.', 'fn'], ['goto', 'fn'], ["('/checkout'", 'str'], [');']],
      [['  await ', 'kw'], ['expect', 'fn'], ['(page.', 'fn'], ['getByRole', 'fn'], ["('alert'", 'str'], [')).', 'plain'], ['toBeVisible', 'fn'], ['();']],
      [['  await ', 'kw'], ['expect', 'fn'], ['(page).', 'fn'], ['toHaveScreenshot', 'fn'], ['();']],
      [['});']],
      [['// failure evidence keeps the reproduction', 'com']],
    ],
  },
  'devops-release-support': {
    file: '.github/workflows/release.yml',
    glyph: '▲',
    accent: '#7c5cff',
    status: 'pipeline green',
    lines: [
      [['# release path with a rollback step', 'com']],
      [['jobs:', 'kw']],
      [['  release:', 'fn']],
      [['    needs: ', 'kw'], ['[build, test]']],
      [['    runs-on: ubuntu-latest']],
      [['    steps:']],
      [['      - run: ', 'kw'], ['kubectl ', 'fn'], ['rollout ', 'fn'], ['status deploy/web']],
    ],
  },
  'data-pipeline-development': {
    file: 'pipelines/orders_daily.sql',
    glyph: '▤',
    accent: '#18bfe3',
    status: 'quality checks passed',
    lines: [
      [['-- traceable source to destination', 'com']],
      [['select ', 'kw'], ['order_id, status, updated_at']],
      [['from ', 'kw'], ['raw.orders']],
      [['where ', 'kw'], ['updated_at >= :start']],
      [['-- 1,240 rows validated', 'com']],
      [['assert ', 'kw'], ['row_count > 0;']],
      [['-- rejected inputs stay inspectable', 'com']],
    ],
  },
  'mobile-app-development': {
    file: 'screens/Orders.tsx',
    glyph: '▯',
    accent: '#2f54ff',
    status: 'device checked',
    lines: [
      [['// offline and safe-area states included', 'com']],
      [['export function ', 'kw'], ['Orders', 'fn'], ['() {']],
      [['  const ', 'kw'], ['insets', 'fn'], [' = ', 'kw'], ['useSafeAreaInsets', 'fn'], ['();']],
      [['  const ', 'kw'], ['{ data }', 'fn'], [' = ', 'kw'], ['useOrders', 'fn'], ['();']],
      [['  return ', 'kw'], ['<', 'plain'], ['List', 'fn'], [' data={data} inset={insets} />;']],
      [['}']],
      [['// one supported device cohort first', 'com']],
    ],
  },
  'legacy-application-maintenance': {
    file: 'tests/invoice-total.test.ts',
    glyph: '{}',
    accent: '#f59e0b',
    status: 'characterization added',
    lines: [
      [['// pin behavior before the bounded fix', 'com']],
      [['const ', 'kw'], ['total', 'fn'], [' = ', 'kw'], ['calculateTotal', 'fn'], ['(fixture);']],
      [['expect', 'fn'], ['(total).', 'fn'], ['toBe', 'fn'], ['(128400);']],
      [['// refactor separated from behavior change', 'com']],
      [['expect', 'fn'], ['(rounding).', 'fn'], ['toMatchSnapshot', 'fn'], ['();']],
      [['// rollback and open questions recorded', 'com']],
      [['}']],
    ],
  },
};

export function LaneVisual({ slug, variant = 'thumb' }: { slug: string; variant?: 'thumb' | 'panel' }) {
  const lane = LANES[slug] ?? LANES['node-js-api-development'];
  const style = { '--lane-accent': lane.accent } as CSSProperties;

  return (
    <div className={`lane-terminal lane-terminal--${variant}`} style={style} aria-hidden="true">
      <span className="lt-glow" />
      <div className="lt-bar">
        <span className="lt-dots"><i /><i /><i /></span>
        <span className="lt-file">{lane.file}</span>
        <span className="lt-branch">main</span>
      </div>

      <div className="lt-body">
        {lane.lines.map((line, index) => (
          <div className="lt-line" key={`${slug}-${index}`}>
            <b>{index + 1}</b>
            <span>
              {line.map(([text, tone], tokenIndex) => (
                <span className={tone ? `lt-${tone}` : undefined} key={`${index}-${tokenIndex}`}>{text}</span>
              ))}
            </span>
          </div>
        ))}
      </div>

      <div className="lt-note">
        <span>scope</span>
        <span>tests</span>
        <span>review</span>
      </div>

      <div className="lt-summary">
        <span><i className="lt-dot" />{lane.status}</span>
        <span>review: your team</span>
        <span>access: scoped</span>
      </div>

      <div className="lt-foot">
        <span>✓ checks passed</span>
        <span>PR #248</span>
      </div>

      <span className="lt-glyph">{lane.glyph}</span>
    </div>
  );
}

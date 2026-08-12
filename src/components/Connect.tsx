import { site } from '../content/site'
import './connect.css'

const CONTACTS = [
  ...site.links.map((l) => ({ ...l, type: 'link' as const })),
  { label: 'Email', href: `mailto:${site.email}`, handle: site.email, type: 'link' as const },
  { label: 'QQ', href: null, handle: '1486853830', type: 'plain' as const },
  { label: 'WeChat', href: null, handle: '19112913292', type: 'plain' as const },
]

export function Connect() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__head" data-reveal>
          <p className="eyebrow">The Summit · 7,546 m — Muztagh Ata</p>
          <h2 className="footer__title">Every climb ends in a conversation.</h2>
          <p className="footer__lead">
            Leave a rope, a flag, or a question. The route is always open.
          </p>
        </div>

        <div className="footer__contacts" data-reveal>
          {CONTACTS.map((c) =>
            c.type === 'link' && c.href ? (
              <a
                key={c.label}
                className="footer__contact footer__contact--link"
                href={c.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer__contact-label">{c.label}</span>
                <span className="footer__contact-handle">{c.handle}</span>
                <span className="footer__contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ) : (
              <span key={c.label} className="footer__contact">
                <span className="footer__contact-label">{c.label}</span>
                <span className="footer__contact-handle">{c.handle}</span>
              </span>
            ),
          )}
        </div>

        <p className="footer__note" data-reveal>
          <span className="footer__snowflake" aria-hidden="true">
            ❄
          </span>
          <span>
            Built like the snow leopard — adapting and evolving in the high mountains of technology.
          </span>
          <span className="footer__copyright">
            © {new Date().getFullYear()} {site.handle}
          </span>
        </p>
      </div>
    </footer>
  )
}

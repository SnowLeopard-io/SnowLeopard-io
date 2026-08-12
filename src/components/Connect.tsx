import { useI18n } from '../i18n/I18nProvider'
import './connect.css'

type Contact = {
  label: string
  href: string | null
  handle: string
  type: 'link' | 'plain'
}

export function Connect() {
  const { t } = useI18n()
  const contacts: Contact[] = [
    ...t.site.links.map((l) => ({ label: l.label, href: l.href, handle: l.handle, type: 'link' as const })),
    { label: 'Email', href: `mailto:${t.site.email}`, handle: t.site.email, type: 'link' as const },
    { label: 'QQ', href: null, handle: '1486853830', type: 'plain' as const },
    { label: 'WeChat', href: null, handle: '19112913292', type: 'plain' as const },
  ]

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__head" data-reveal>
          <p className="eyebrow">{t.connect.eyebrow}</p>
          <h2 className="footer__title">{t.connect.title}</h2>
          <p className="footer__lead">{t.connect.lead}</p>
        </div>

        <div className="footer__contacts" data-reveal>
          {contacts.map((c) =>
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
            © {new Date().getFullYear()} {t.site.name} · {t.site.eyebrow}
          </span>
        </p>
      </div>
    </footer>
  )
}
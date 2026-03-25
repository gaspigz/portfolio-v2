import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-text">
            © {year} Gaspar Giménez. {t.footer.rights}
          </p>
          <p className="footer-text">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}

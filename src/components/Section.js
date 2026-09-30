export default function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold-dark">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">{title}</h2>
            )}
            {subtitle && <p className="mt-3 text-navy-light/80">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

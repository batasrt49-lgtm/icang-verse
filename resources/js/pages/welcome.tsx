import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props as { auth: { user?: object } };

    return (
        <>
            <Head title="Welcome" />

            {/* Google Fonts */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;600&display=swap');

                .graffiti-root {
                    min-height: 100vh;
                    background: #0D0D0D;
                    font-family: 'Space Grotesk', sans-serif;
                    color: #F5F5F0;
                    position: relative;
                    overflow: hidden;
                }

                /* Brick-wall grid overlay */
                .wall-texture {
                    position: absolute;
                    inset: 0;
                    background-image:
                        repeating-linear-gradient(0deg, transparent, transparent 39px, #1a1a1a 39px, #1a1a1a 40px),
                        repeating-linear-gradient(90deg, transparent, transparent 79px, #1a1a1a 79px, #1a1a1a 80px);
                    opacity: 0.4;
                    pointer-events: none;
                }

                /* Spray-paint ambient blobs */
                .spray-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(60px);
                    opacity: 0.12;
                    pointer-events: none;
                }

                /* ── Nav ── */
                .graffiti-nav {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.25rem 2rem;
                    border-bottom: 1px solid #222;
                }

                .logo-tag {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 1.8rem;
                    letter-spacing: 0.05em;
                    color: #F5E642;
                    text-shadow: 3px 3px 0 #FF3366, 6px 6px 0 #8B5CF6;
                    line-height: 1;
                }

                .nav-links { display: flex; gap: 0.75rem; align-items: center; }

                .btn-ghost {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 0.82rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 0.45rem 1.1rem;
                    border: 1.5px solid #444;
                    background: transparent;
                    color: #aaa;
                    transition: all 0.2s;
                    text-decoration: none;
                    display: inline-block;
                }
                .btn-ghost:hover { border-color: #F5E642; color: #F5E642; }

                .btn-solid {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 0.82rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 0.45rem 1.1rem;
                    border: 1.5px solid #F5E642;
                    background: #F5E642;
                    color: #0D0D0D;
                    transition: all 0.2s;
                    text-decoration: none;
                    display: inline-block;
                }
                .btn-solid:hover { background: transparent; color: #F5E642; }

                /* ── Hero ── */
                .hero {
                    position: relative;
                    z-index: 5;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 5rem 2rem 4rem;
                    text-align: center;
                    min-height: 70vh;
                }

                .eyebrow {
                    font-size: 0.75rem;
                    letter-spacing: 0.25em;
                    text-transform: uppercase;
                    color: #00F5A0;
                    margin-bottom: 1.2rem;
                    border: 1px solid #00F5A0;
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                }

                .hero-title {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: clamp(4rem, 14vw, 9rem);
                    line-height: 0.9;
                    letter-spacing: 0.02em;
                    margin: 0 0 0.3rem;
                    color: #F5F5F0;
                }
                .line-yellow { color: #F5E642; }
                .line-pink   { color: #FF3366; }
                .line-green  { color: #00F5A0; }

                /* Paint-drip signature element */
                .drip-container { position: relative; display: inline-block; }
                .drip {
                    position: absolute;
                    bottom: -28px;
                    width: 6px;
                    border-radius: 0 0 6px 6px;
                    opacity: 0.9;
                }
                .drip:nth-child(1) { left: 18%; height: 26px; background: #F5E642; }
                .drip:nth-child(2) { left: 37%; height: 40px; background: #FF3366; }
                .drip:nth-child(3) { left: 55%; height: 18px; background: #00F5A0; }
                .drip:nth-child(4) { left: 71%; height: 32px; background: #8B5CF6; }
                .drip:nth-child(5) { left: 85%; height: 22px; background: #F5E642; }

                .hero-sub {
                    font-size: 1rem;
                    color: #888;
                    max-width: 420px;
                    margin: 3rem auto 2.5rem;
                    line-height: 1.6;
                }

                .cta-group {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .btn-cta-primary {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 0.8rem 2.2rem;
                    border: 2px solid #F5E642;
                    background: #F5E642;
                    color: #0D0D0D;
                    transition: all 0.2s;
                    text-decoration: none;
                    display: inline-block;
                }
                .btn-cta-primary:hover { background: transparent; color: #F5E642; }

                .btn-cta-outline {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 600;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 0.8rem 2.2rem;
                    border: 2px solid #555;
                    background: transparent;
                    color: #ccc;
                    transition: all 0.2s;
                    text-decoration: none;
                    display: inline-block;
                }
                .btn-cta-outline:hover { border-color: #FF3366; color: #FF3366; }

                /* ── Tags strip ── */
                .tags-strip {
                    display: flex;
                    gap: 1.5rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    padding: 1.5rem 2rem;
                    position: relative;
                    z-index: 5;
                }
                .tag-pill {
                    font-size: 0.72rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #444;
                    border-top: 1px solid #222;
                    padding-top: 0.4rem;
                }

                /* ── Feature grid ── */
                .features-row {
                    position: relative;
                    z-index: 5;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 1px;
                    border-top: 1px solid #1e1e1e;
                    background: #1e1e1e;
                    margin: 2rem 0 0;
                }
                .feat-cell {
                    background: #0D0D0D;
                    padding: 2rem 1.5rem;
                }
                .feat-title {
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 1.3rem;
                    letter-spacing: 0.05em;
                    color: #F5F5F0;
                    margin: 0.5rem 0 0.3rem;
                }
                .feat-desc { font-size: 0.78rem; color: #555; line-height: 1.5; }

                /* ── Responsive ── */
                @media (max-width: 560px) {
                    .graffiti-nav { padding: 1rem; }
                    .logo-tag { font-size: 1.4rem; }
                    .hero { padding: 3rem 1.25rem 3rem; min-height: auto; }
                    .feat-cell { padding: 1.5rem 1rem; }
                    .cta-group { flex-direction: column; align-items: center; }
                    .btn-cta-primary, .btn-cta-outline {
                        width: 100%; max-width: 260px; text-align: center;
                    }
                }
            `}</style>

            <div className="graffiti-root">
                {/* Background layers */}
                <div className="wall-texture" />
                <div className="spray-blob" style={{ width: 500, height: 500, background: '#F5E642', top: -200, right: -150 }} />
                <div className="spray-blob" style={{ width: 400, height: 400, background: '#FF3366', bottom: -100, left: -100 }} />
                <div className="spray-blob" style={{ width: 300, height: 300, background: '#8B5CF6', top: '40%', left: '30%' }} />

                {/* Nav */}
                <nav className="graffiti-nav">
                    <div className="logo-tag">GRFX</div>
                    <div className="nav-links">
                        {auth.user ? (
                            <Link href={dashboard()} className="btn-solid">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={login()} className="btn-ghost">
                                    Log in
                                </Link>
                                <Link href={register()} className="btn-solid">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                {/* Hero */}
                <section className="hero">
                    <div className="eyebrow">Est. 2024 · The Wall Is Yours</div>

                    <div className="drip-container">
                        <h1 className="hero-title">
                            <span className="line-yellow">LEAVE</span>
                            <br />
                            <span className="line-pink">YOUR</span>
                            <br />
                            <span className="line-green">MARK.</span>
                        </h1>
                        <div className="drip" />
                        <div className="drip" />
                        <div className="drip" />
                        <div className="drip" />
                        <div className="drip" />
                    </div>

                    <p className="hero-sub">
                        Platform kreatif tanpa batas. Ekspresikan dirimu, bangun komunitas,
                        dan tinggalkan jejak yang tak terhapuskan di dinding digital.
                    </p>

                    <div className="cta-group">
                        <Link href={register()} className="btn-cta-primary">
                            Mulai Gratis
                        </Link>
                        <Link href={login()} className="btn-cta-outline">
                            Masuk Dulu
                        </Link>
                    </div>
                </section>

                {/* Genre tags */}
                <div className="tags-strip">
                    {['Street Art', 'Digital Canvas', 'Urban Culture', 'Community', 'No Limits'].map((t) => (
                        <span key={t} className="tag-pill">{t}</span>
                    ))}
                </div>

                {/* Feature strip */}
                <div className="features-row">
                    {[
                        { icon: '🎨', color: '#F5E642', title: 'Canvas Bebas', desc: 'Buat & share karya tanpa batasan format.' },
                        { icon: '👥', color: '#FF3366', title: 'Komunitas',   desc: 'Terhubung dengan kreator dari seluruh kota.' },
                        { icon: '⚡', color: '#00F5A0', title: 'Real-Time',   desc: 'Kolaborasi langsung, lihat hasilnya seketika.' },
                        { icon: '🔒', color: '#8B5CF6', title: 'Aman & Privat', desc: 'Kendali penuh atas siapa yang melihat karyamu.' },
                    ].map(({ icon, color, title, desc }) => (
                        <div key={title} className="feat-cell">
                            <div style={{ fontSize: '1.4rem' }}>{icon}</div>
                            <div className="feat-title" style={{ color }}>{title}</div>
                            <div className="feat-desc">{desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
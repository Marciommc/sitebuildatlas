const COOKIE_CONSENT_KEY = 'cookie_consent';

function getCookieConsent() {
    try {
        return localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch (error) {
        console.warn('Falha ao ler consentimento de cookies.', error);
        return null;
    }
}

function setCookieConsent(value) {
    try {
        localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch (error) {
        console.warn('Falha ao salvar consentimento de cookies.', error);
    }
}

function canRunTracking() {
    return getCookieConsent() === 'accepted';
}

function initGA4() {
    if (window.__ga4Initialized) return;
    const measurementId = window.GA4_MEASUREMENT_ID || '';

    if (!measurementId) {
        console.info('[Consent] GA4 não configurado (GA4_MEASUREMENT_ID ausente).');
        return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });

    window.__ga4Initialized = true;
    console.info('[Consent] GA4 ativado após consentimento.');
}

function initMetaPixel() {
    if (window.__metaPixelInitialized) return;
    const pixelId = window.META_PIXEL_ID || '';

    if (!pixelId) {
        console.info('[Consent] Meta Pixel não configurado (META_PIXEL_ID ausente).');
        return;
    }

    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
    window.__metaPixelInitialized = true;
    console.info('[Consent] Meta Pixel ativado após consentimento.');
}

function applyTrackingByConsent() {
    if (!canRunTracking()) {
        console.info('[Consent] Tracking bloqueado até aceite explícito do usuário.');
        return;
    }

    initGA4();
    initMetaPixel();
}

function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    if (!banner || !acceptBtn || !rejectBtn) return;

    const consent = getCookieConsent();
    if (!consent) {
        banner.hidden = false;
    }

    acceptBtn.addEventListener('click', () => {
        setCookieConsent('accepted');
        banner.hidden = true;
        applyTrackingByConsent();
    });

    rejectBtn.addEventListener('click', () => {
        setCookieConsent('rejected');
        banner.hidden = true;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initCookieBanner();
    applyTrackingByConsent();

    // Mobile Menu Toggle Premium
    const toggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (toggle && mobileMenu) {
        toggle.addEventListener("click", function() {
            mobileMenu.classList.toggle("active");
            toggle.classList.toggle("active");
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
                toggle.classList.remove("active");
            });
        });
    }


    // Form Submission (Piperun Integration Logic)
    // Original Logic Adapted for new Structure
    const contactForm = document.getElementById('leadForm');

    if (contactForm) {
        const formLoadedAt = Date.now();
        const phoneInput = document.getElementById('whatsapp');

        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
                if (digits.length <= 10) {
                    e.target.value = digits
                        .replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (_, ddd, p1, p2) => {
                            let out = '';
                            if (ddd) out += `(${ddd}`;
                            if (ddd.length === 2) out += ') ';
                            if (p1) out += p1;
                            if (p2) out += `-${p2}`;
                            return out;
                        });
                } else {
                    e.target.value = digits
                        .replace(/(\d{0,2})(\d{0,5})(\d{0,4})/, (_, ddd, p1, p2) => {
                            let out = '';
                            if (ddd) out += `(${ddd}`;
                            if (ddd.length === 2) out += ') ';
                            if (p1) out += p1;
                            if (p2) out += `-${p2}`;
                            return out;
                        });
                }
            });
        }

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default submission

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            const endpointHash = "https://app.pipe.run/webservice/integradorJson?hash=6e8d8105-bec9-4ba1-89f9-da0be270d12b";

            // Get values
            const name = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("whatsapp").value;
            const cidade = document.getElementById("cidade").value.trim();
            const valorInteresse = document.getElementById("valor_interesse").value;
            const origem = document.getElementById("origem").value || 'site_build_atlas';
            const consentimento = document.getElementById("consentimento").checked;
            const honeypot = document.getElementById("website").value;

            // Anti-spam (honeypot + tempo mínimo de preenchimento)
            if (honeypot) {
                alert("Não foi possível enviar seus dados. Tente novamente.");
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                return;
            }

            if (Date.now() - formLoadedAt < 2500) {
                alert("Aguarde alguns segundos e tente novamente.");
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                return;
            }

            if (!consentimento) {
                alert("É necessário aceitar o consentimento LGPD para enviar.");
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                return;
            }

            // Construct Data Payload
            const dataToSend = {
                // Piperun payload structure...
                rules: { update: true, status: "open", equal_pipeline: true, filter_status_update: "open" },
                leads: [{
                    id: email,
                    name: name,
                    email: email,
                    personal_phone: phone,
                    mobile_phone: phone,
                    city: cidade,
                    custom_fields: {
                        "WhatsApp": phone,
                        "Cidade": cidade,
                        "Qual sua capacidade de investimento mensal em reais?": valorInteresse,
                        "Origem": origem
                    },
                    tags: ["lead_lp_novo_site"]
                }]
            };

            // 1. Save to Internal DB (Supabase/Mock) - NEW PHASE 3
            if (window.supabase) {
                window.supabase.from('leads').insert({
                    name: name,
                    email: email,
                    phone: phone,
                    cidade: cidade,
                    valor_interesse: valorInteresse,
                    origem: origem,
                    investment: valorInteresse
                }).then(() => {
                    console.log("Salvo no banco de dados interno.");
                });
            }

            // 2. Send to Piperun (External CRM)
            fetch(endpointHash, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend)
            })
                .then(response => {
                    if (!response.ok) throw new Error("Erro na requisição");
                    return response.json();
                })
                .then(data => {
                    console.log("Dados enviados com sucesso:", data);
                    alert("Obrigado! Recebemos seus dados e entraremos em contato em breve.");
                    contactForm.reset();
                    window.location.href = "#obrigado"; // Or redirect to a thank you page
                })
                .catch(error => {
                    console.error("Erro ao enviar dados:", error);
                    alert("Houve um erro ao enviar. Por favor, tente novamente ou contate-nos pelo WhatsApp.");
                })
                .finally(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Smooth Scroll for Anchor Links (Native scroll-behavior handles most, but this helps cross-browser)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Header height offset calculation
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Premium Header scroll effect
    window.addEventListener("scroll", function() {
        const header = document.getElementById("header");
        if (header) {
            if(window.scrollY > 40){
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        }
    });
});

// Helper function to pre-select plan on contact form (if needed in future)
function selectPlan(planName) {
    // Scroll to contact form
    const contactSection = document.getElementById('contato');
    const headerOffset = 80;
    const elementPosition = contactSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });


    // Optional: You could populate a hidden field or message area with the selected plan
    console.log("Selected Plan:", planName);
}

/* =========================================
   Phase 2: Modernization JS
   ========================================= */

// 1. Motion UI (Intersection Observer)
function initAnimations() {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of element is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// 2. Simulator Logic
function calculateSimulation() {
    const input = document.getElementById('sim-investimento');
    const resultDiv = document.getElementById('sim-result');
    const resultValue = document.getElementById('result-value');

    // Defensive check
    if (!input || !resultDiv || !resultValue) return;

    const investment = parseFloat(input.value);

    // Filter invalid input
    if (isNaN(investment) || investment < 100) {
        alert("Por favor, insira um valor de investimento válido (mínimo R$ 100).");
        return;
    }

    // Logic: Factor 800x (Based on 2090 -> 1.75mi which is ~837x. 800x is conservative)
    // Formula: Investment * 800
    const factor = 800;
    const potentialPatrimony = investment * factor;

    // Format Currency
    const formatted = potentialPatrimony.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Display
    resultValue.innerText = formatted;
    resultDiv.classList.add('show');
}

// Initialize Phase 2 on Load
initAnimations();

const IMG = {
  hero: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1600&q=80",
  innerHero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80",
  lab: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  patient: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  doctorTeam: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
  equipment: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
  dental: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80",
  consultation: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80",
  surgery: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=1200&q=80",
  portrait1: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
  portrait2: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=80",
  mask: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=1200&q=80",
  heart: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80"
};

const routes = {
  "/": { label: "Home", title: "Home" },
  "/about": { label: "About", title: "About Us" },
  "/services": { label: "Services", title: "Services" },
  "/gallery": { label: "Gallery", title: "Gallery" },
  "/doctors": { label: "Doctors", title: "Dedicated Doctors" },
  "/doctor-detail": { label: "Doctor", title: "Dedicated Doctor" },
  "/departments": { label: "Departments", title: "Departments" },
  "/department-detail": { label: "Department", title: "Departments" },
  "/blog": { label: "Blog", title: "Blog Standard" },
  "/post": { label: "Post", title: "Image Post" },
  "/contact": { label: "Contact", title: "Contact Us" }
};

const navItems = [
  { href: "#/", label: "Home" },
  { href: "#/about", label: "Pages" },
  { href: "#/doctors", label: "Doctors" },
  { href: "#/departments", label: "Departments" },
  { href: "#/blog", label: "Blog" },
  { href: "#/gallery", label: "Gallery" },
  { href: "#/contact", label: "Contact" }
];

const services = [
  {
    icon: "heart",
    title: "Health Check",
    text: "Preventive checkups and complete screenings for confident everyday care."
  },
  {
    icon: "shield",
    title: "Operation Theater",
    text: "Modern surgical spaces with clean workflows and attentive clinical teams."
  },
  {
    icon: "building",
    title: "Pharmacy Support",
    text: "Reliable prescriptions, specialist advice, and fast outpatient support."
  },
  {
    icon: "ambulance",
    title: "Ambulance Car",
    text: "Responsive emergency transport with trained medical assistance."
  },
  {
    icon: "microscope",
    title: "Lab Tests",
    text: "Accurate diagnostics with streamlined reports and guided next steps."
  },
  {
    icon: "plus",
    title: "Intensive Care",
    text: "Advanced monitoring for critical patients with round-the-clock expertise."
  }
];

const stats = [
  { icon: "user", label: "Years of Experience", value: "25" },
  { icon: "users", label: "Medical Specialities", value: "470" },
  { icon: "building", label: "Medical Specialists", value: "689" },
  { icon: "heart", label: "Happy Patients", value: "9036" }
];

const homeStats = [
  { icon: "user", label: "Years of Experience", value: "4" },
  { icon: "users", label: "Medical Specialities", value: "75" },
  { icon: "building", label: "Medical Specialists", value: "110" },
  { icon: "heart", label: "Happy Patients", value: "1454" }
];

const doctors = [
  { name: "Emily Haden", role: "Dental Surgeon", img: IMG.portrait1 },
  { name: "Hellen Hill", role: "Heart Specialist", img: IMG.portrait2 },
  { name: "Audrey Button", role: "Family Medicine", img: IMG.patient },
  { name: "Morila Wood", role: "Paediatric Surgeon", img: IMG.hero },
  { name: "Robert Theodore", role: "Orthopaedics", img: IMG.doctorTeam },
  { name: "Lara Croft", role: "Restaurant Owner", img: IMG.consultation }
];

const departments = [
  { title: "Cardiology Department", icon: "heart", img: IMG.consultation },
  { title: "Neurology Department", icon: "plus", img: IMG.equipment },
  { title: "Urology Department", icon: "shield", img: IMG.patient },
  { title: "Gynecological", icon: "user", img: IMG.doctorTeam },
  { title: "Pediatrical", icon: "users", img: IMG.dental },
  { title: "Laboratory", icon: "microscope", img: IMG.lab }
];

const posts = [
  {
    title: "What is The Success rate of a root canal?",
    img: IMG.doctorTeam,
    date: "25 Jan 19",
    excerpt: "Nullam mauris vitae tortor sodales efficitur. Unique oral care, prompt answers, and careful treatment planning."
  },
  {
    title: "How to handle your kids' mystery ailments?",
    img: IMG.consultation,
    date: "14 Mar 20",
    excerpt: "Our family team helps parents understand symptoms, prevention habits, and when a specialist should step in."
  },
  {
    title: "Lung cancer survival rate in England improves",
    img: IMG.equipment,
    date: "11 Aug 20",
    excerpt: "Research-led care pathways can improve early diagnosis, clinical confidence, and long-term outcomes."
  },
  {
    title: "Negative statin stories add to heart health risk",
    img: IMG.mask,
    date: "23 Jan 19",
    excerpt: "Cardiology teams explain medication concerns clearly so patients can make well-informed choices."
  },
  {
    title: "Great health care for patients.",
    img: IMG.heart,
    date: "1 Aug 20",
    excerpt: "Coordinated care and responsive departments help patients move smoothly from checkup to recovery."
  },
  {
    title: "Integrative medicine and cancer treatment.",
    img: IMG.surgery,
    date: "11 Jul 20",
    excerpt: "A modern approach balances specialist treatment, comfort, and careful follow-up for patients."
  }
];

const gallery = [
  { category: "Cancer", img: IMG.equipment },
  { category: "Dental", img: IMG.hero },
  { category: "Cardiology", img: IMG.lab },
  { category: "Eye Care", img: IMG.doctorTeam },
  { category: "Dental", img: IMG.dental },
  { category: "Cancer", img: IMG.patient }
];

const partners = [
  { name: "Elisa", color: "#f47b20", mark: "pulse" },
  { name: "Medical Center", color: "#6bb63f", mark: "plus" },
  { name: "Medical Informatics", color: "#08a9ce", mark: "dot" },
  { name: "Medical Name", color: "#248fd1", mark: "loop" },
  { name: "Orthatech Inc", color: "#7ac142", mark: "cross" }
];

function icon(name, className = "") {
  return `<svg class="icon ${className}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function routePath() {
  const hash = window.location.hash.replace("#", "") || "/";
  return routes[hash] ? hash : "/";
}

function activeClass(path, label) {
  if (label === "Home") return path === "/" ? "is-active" : "";
  if (label === "Pages") return path === "/about" ? "is-active" : "";
  if (label === "Doctors") return path.includes("doctor") ? "is-active" : "";
  if (label === "Departments") return path.includes("department") ? "is-active" : "";
  if (label === "Blog") return path === "/blog" || path === "/post" ? "is-active" : "";
  if (label === "Gallery") return path === "/gallery" ? "is-active" : "";
  if (label === "Contact") return path === "/contact" ? "is-active" : "";
  return "";
}

function header(path) {
  const links = navItems.map((item) => `
    <a class="${activeClass(path, item.label)}" href="${item.href}">
      <span>${item.label}</span>
      ${["About Us", "Doctors", "Departments", "Blog"].includes(item.label) ? icon("", "") : ""}
    </a>
  `).join("");

  return `
    <header class="site-header">
      <div class="header-shell">
        <div class="header-top container">
          <a class="brand" href="#/" aria-label="Medicoz home">
            <span class="brand-mark">${icon("heart")}${icon("plus")}</span>
            <span class="brand-small">Medical Solution</span>
            <strong>Medicoz</strong>
          </a>
          <div class="quick-info">
            <div class="quick-item">${icon("map")}<span>234 Triumph, Los Angeles,<br>California, US</span></div>
            <div class="quick-item">${icon("clock")}<span>Mon - Sat 8.00 - 18.00,<br>Sunday CLOSED</span></div>
          </div>
          <div class="socials" aria-label="Social links">
            <a href="#/contact">f</a>
            <a href="#/contact">t</a>
            <a href="#/contact">s</a>
            <a href="#/contact">in</a>
          </div>
          <a class="btn btn-dark" href="#/contact">Appointment</a>
        </div>
        <div class="nav-bar">
          <div class="container nav-inner">
            <nav class="primary-nav" aria-label="Primary navigation">${links}</nav>
            <div class="nav-actions">
              <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
                ${icon("menu", "menu-open")}${icon("close", "menu-close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function pageHero(title, crumb = title) {
  return `
    <section class="page-hero" style="--hero-img: url('${IMG.innerHero}')">
      <div class="container page-hero-inner reveal">
        <div>
          <h1>${title}</h1>
          <p><a href="#/">Home</a><span></span>${crumb}</p>
        </div>
      </div>
    </section>
  `;
}

function pulseDivider() {
  return `<div class="pulse-divider" aria-hidden="true"><span></span>${icon("heart")}</div>`;
}

function titleBlock(eyebrow, title, align = "center") {
  return `
    <div class="section-title ${align === "left" ? "section-title-left" : ""} reveal">
      <span>${eyebrow}</span>
      <h2>${title}</h2>
      ${pulseDivider()}
    </div>
  `;
}

function serviceCard(service, index = 0) {
  return `
    <article class="service-card reveal" style="--delay:${index * 60}ms">
      <div class="circle-icon">${icon(service.icon)}</div>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
    </article>
  `;
}

function doctorCard(doctor, index = 0) {
  return `
    <article class="doctor-card reveal" style="--delay:${index * 60}ms">
      <a href="#/doctor-detail" class="doctor-photo" aria-label="View ${doctor.name}">
        <img src="${doctor.img}" alt="${doctor.name}, ${doctor.role}" loading="lazy">
      </a>
      <div class="doctor-meta">
        <h3>${doctor.name}</h3>
        <p>${doctor.role}</p>
      </div>
    </article>
  `;
}

function statStrip(items = stats, overlap = false) {
  return `
    <section class="stats-strip ${overlap ? "stats-overlap" : ""}">
      <div class="container">
        <div class="stats-grid reveal">
          ${items.map((item) => `
            <div class="stat-item">
              <div class="circle-icon">${icon(item.icon)}</div>
              <span>${item.label}</span>
              <strong>${item.value}</strong>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function aboutCollage() {
  return `
    <div class="image-collage reveal">
      <button class="play-button" type="button" aria-label="Play clinic video">${icon("play")}</button>
      <img class="collage-main" src="${IMG.lab}" alt="Clinical laboratory microscope" loading="lazy">
      <img class="collage-small collage-small-one" src="${IMG.consultation}" alt="Doctor consulting a patient" loading="lazy">
      <img class="collage-small collage-small-two" src="${IMG.portrait1}" alt="Smiling doctor portrait" loading="lazy">
    </div>
  `;
}

function aboutIntro() {
  return `
    <section class="section about-section hex-bg">
      <div class="container split-grid">
        ${aboutCollage()}
        <div class="about-copy reveal">
          <span class="eyebrow">Our Medical</span>
          <h2>We're setting Standards in Research what's more, Clinical Care.</h2>
          ${pulseDivider()}
          <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
          <p>Our clinic has grown to provide a world class facility for advanced restorative care. We are among the most qualified providers in the AUS with quality training and experience.</p>
          <div class="signature-row">
            <span class="signature">Medicoz</span>
            <a class="btn btn-primary" href="#/about">More About</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function appointmentCta() {
  return `
    <section class="appointment-band">
      <div class="container appointment-inner">
        <div class="appointment-copy reveal">
          <span>Need a doctor for check-up?</span>
          <h2>Just Make an Appointment and You're Done!</h2>
          <p>Get Your Quote or Call:</p>
          <strong>(0080) 123-453-789</strong>
          <a class="btn btn-dark" href="#/contact">Get an Appointment</a>
        </div>
        <img class="appointment-doctor reveal" src="${IMG.hero}" alt="Doctor ready for patient appointment" loading="lazy">
      </div>
    </section>
  `;
}

function testimonialSection(card = false) {
  return `
    <section class="section testimonials ${card ? "testimonial-card-mode" : ""}">
      <div class="container">
        ${titleBlock("Happy Patient", "What Says Our Patients")}
        <div class="testimonial-box reveal">
          <button class="round-arrow" type="button" aria-label="Previous testimonial">${icon("arrow-left")}</button>
          <div class="testimonial-content">
            <div class="avatar-row">
              <img src="${doctors[5].img}" alt="Lara Croft" loading="lazy">
              <img src="${doctors[0].img}" alt="Emily Haden" loading="lazy">
              <img src="${doctors[1].img}" alt="Hellen Hill" loading="lazy">
            </div>
            <h3>Lara Croft</h3>
            <span>Restaurant Owner</span>
            <p>Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen.</p>
            <div class="slider-dots"><span></span><span></span><span></span><span></span><span></span></div>
          </div>
          <button class="round-arrow" type="button" aria-label="Next testimonial">${icon("arrow-right")}</button>
        </div>
      </div>
    </section>
  `;
}

function pricingSection() {
  const plans = [
    ["$299", "Primary", ["Home visits", "Emergency check", "Specialist referral", "Digital report"]],
    ["$120", "First Care", ["Urgent support", "Family medicine", "Pharmacy support", "Lab priority"]],
    ["$150", "Daily Checkup", ["Wellness plan", "Diagnostics", "Care follow-up", "Phone support"]],
    ["$100", "Blood Test", ["Blood count", "Metabolic panel", "Cholesterol screen", "Doctor notes"]]
  ];
  return `
    <section class="section pricing hex-bg">
      <div class="container">
        ${titleBlock("Our Pricing", "Pricing Plan")}
        <div class="pricing-grid">
          ${plans.map((plan, index) => `
            <article class="price-card reveal" style="--delay:${index * 60}ms">
              <div class="price-top"><strong>${plan[0]}</strong><span>/ month</span></div>
              <h3>${plan[1]}</h3>
              <ul>${plan[2].map((item) => `<li>${icon("check")}${item}</li>`).join("")}</ul>
              <a class="btn btn-outline" href="#/contact">Get Offer</a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function newsCards(limit = 3) {
  return `
    <div class="news-grid">
      ${posts.slice(0, limit).map((post, index) => `
        <article class="news-card reveal" style="--delay:${index * 60}ms">
          <a href="#/post" class="news-image">
            <img src="${post.img}" alt="${post.title}" loading="lazy">
            <span>${post.date}</span>
          </a>
          <div class="news-body">
            <h3><a href="#/post">${post.title}</a></h3>
            <p>${post.excerpt}</p>
            <div class="news-meta"><span>By Admin Rose</span><span>0 ${icon("heart")}</span></div>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function latestNewsSection() {
  return `
    <section class="section">
      <div class="container">
        ${titleBlock("Our Blog", "Recent Articles and News")}
        ${newsCards(3)}
      </div>
    </section>
  `;
}

function safeDentalCta() {
  return `
    <section class="blue-pattern">
      <div class="container blue-pattern-inner">
        <div class="reveal">
          <span>We Employ The Latest Technology</span>
          <h2>We Ensure Safe Dental Surgery</h2>
          <a class="btn btn-dark" href="#/contact">Take Appointment</a>
        </div>
        <button class="video-callout reveal" type="button" aria-label="Watch now">${icon("play")}<span>Watch now</span></button>
      </div>
    </section>
  `;
}

function partnerStrip() {
  return `
    <section class="partners">
      <div class="container partner-grid">
        ${partners.map((partner, index) => `
          <div class="partner-logo reveal" style="--delay:${index * 40}ms; --partner:${partner.color}">
            <span class="partner-mark ${partner.mark}"></span>
            <strong>${partner.name}</strong>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function homePage() {
  return `
    <section class="home-hero" style="--hero-img: url('${IMG.hero}')">
      <div class="container home-hero-inner">
        <div class="hero-copy reveal">
          <span>We have a team of best care service</span>
          <h1>We Take Care Our<br>Patients Health</h1>
          <p>Trusted doctors, modern diagnostics, and compassionate care for families across every stage of health.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#/contact">Get Started</a>
            <a class="btn btn-light" href="#/about">View Services</a>
          </div>
        </div>
      </div>
    </section>
    <section class="feature-overlap">
      <div class="container feature-cards">
        ${services.slice(0, 3).map(serviceCard).join("")}
      </div>
    </section>
    ${aboutIntro()}
    <section class="section services-section hex-bg-soft">
      <div class="container">
        ${titleBlock("Departments", "We Care Our Patients.")}
        <div class="services-grid">${services.map(serviceCard).join("")}</div>
      </div>
    </section>
    <section class="section doctors-section hex-bg">
      <div class="container">
        ${titleBlock("Our Team", "Our Dedicated Doctors Team")}
        <div class="doctor-row">${doctors.slice(0, 4).map(doctorCard).join("")}</div>
        <p class="center-note">Don't hesitate, contact us for better help and services. <a href="#/doctors">Explore all Dr. Team</a></p>
      </div>
    </section>
    ${appointmentCta()}
    ${statStrip(homeStats, true)}
    ${testimonialSection()}
    ${pricingSection()}
    ${latestNewsSection()}
    ${partnerStrip()}
  `;
}

function aboutPage() {
  return `
    ${pageHero("About Us", "About")}
    ${aboutIntro()}
    ${statStrip(stats)}
    <section class="section appointment-section hex-bg-soft">
      <div class="container form-hours-grid">
        <form class="contact-card reveal js-form">
          <input type="text" placeholder="Your Name" aria-label="Your Name">
          <input type="email" placeholder="Your Email *" aria-label="Your Email">
          <input type="tel" placeholder="Your Phone" aria-label="Your Phone">
          <textarea placeholder="Tell us about Patient" aria-label="Tell us about Patient"></textarea>
          <button class="btn btn-primary" type="submit">Submit Query</button>
          <p class="form-message" role="status"></p>
        </form>
        <div class="hours-copy reveal">
          <span>Need a Doctor for Check-up?</span>
          <h2>Just Make an Appointment and You're Done!</h2>
          <p>Get Your Quote or Call: <strong>(0080) 123-453-789</strong></p>
          <h3>Opening Hours</h3>
          ${hoursList()}
        </div>
      </div>
    </section>
    <section class="section doctors-section">
      <div class="container">
        ${titleBlock("Meet Our Experienced Team", "Our Dedicated Doctors Team.")}
        <div class="doctor-row three">${doctors.slice(0, 3).map(doctorCard).join("")}</div>
        <p class="center-note">Don't hesitate, contact us for better help and services. <a href="#/doctors">Explore all Dr. Team</a></p>
      </div>
    </section>
    <section class="section equipment-section">
      <div class="container equipment-grid">
        <img class="equipment-img reveal" src="${IMG.dental}" alt="Modern dental surgery equipment" loading="lazy">
        <div class="equipment-panel reveal">
          <span>Best of the Best</span>
          <h2>High End Equipments.</h2>
          ${pulseDivider()}
          <p>Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery or thoracic surgery.</p>
          ${progressBar("Cardio-Oncology", 55)}
          ${progressBar("Heart Assessment", 72)}
          ${progressBar("Dental Surgery", 88)}
          ${progressBar("Heart Assessment", 78)}
          <a class="btn btn-dark" href="#/department-detail">Learn More</a>
        </div>
      </div>
    </section>
    ${testimonialSection(true)}
    ${safeDentalCta()}
    ${partnerStrip()}
  `;
}

function servicesPage() {
  return `
    ${pageHero("Services")}
    <section class="section services-section hex-bg-soft">
      <div class="container">
        <div class="services-grid spacious">${services.map(serviceCard).join("")}</div>
      </div>
    </section>
    ${appointmentCta()}
    ${statStrip(homeStats, true)}
    ${testimonialSection()}
    ${partnerStrip()}
  `;
}

function galleryPage() {
  const categories = ["All", "Cancer", "Dental Care", "Cardiology", "Dental", "Eye Care"];
  return `
    ${pageHero("Gallery")}
    <section class="section gallery-section">
      <div class="container">
        <div class="filter-tabs reveal" role="tablist" aria-label="Gallery filter">
          ${categories.map((cat, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-filter="${cat}">${cat}</button>`).join("")}
        </div>
        <div class="gallery-grid">
          ${gallery.map((item, index) => `
            <a class="gallery-item reveal" href="#/gallery" data-category="${item.category}" style="--delay:${index * 50}ms">
              <img src="${item.img}" alt="${item.category} medical gallery image" loading="lazy">
              <span>${item.category}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
    ${partnerStrip()}
  `;
}

function doctorsPage() {
  return `
    ${pageHero("Dedicated Doctors", "Doctors")}
    <section class="section doctors-section">
      <div class="container">
        <div class="doctor-grid">${doctors.map(doctorCard).join("")}</div>
        <p class="center-note">Don't hesitate, contact us for better help and services. <a href="#/doctor-detail">Explore all Dr. Team</a></p>
      </div>
    </section>
    ${testimonialSection(true)}
    ${safeDentalCta()}
    ${scheduleSection()}
    ${partnerStrip()}
  `;
}

function doctorDetailPage() {
  return `
    ${pageHero("Dedicated Doctor", "Doctors")}
    <section class="section doctor-detail-section">
      <div class="container doctor-detail-grid">
        <aside class="doctor-side">
          <img class="profile-img reveal" src="${IMG.hero}" alt="Dr. Morila Wood" loading="lazy">
          <div class="availability-card reveal">
            <span>Timing</span>
            <h2>Availability</h2>
            ${pulseDivider()}
            <p>Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Vestibulum bib volutpat accumsan.</p>
            ${hoursList()}
          </div>
        </aside>
        <div class="doctor-detail-main reveal">
          <h2>Dr. Morila Wood</h2>
          <p class="qualification">MBBS (Sydney), FRACS (Paediatric Surgery)</p>
          <p>After graduating from West Virginia University Medical School, Dr. Emily Haden completed a two-year fellowship in sports medicine at Akron Children's Hospital. During training at Akron, Dr. Emily Haden Alex was team physician for the University of Akron and Walsh University.</p>
          <div class="info-list">
            ${infoRow("Speciality", "Endocrinology<br>Paediatric Medicine<br>Urology")}
            ${infoRow("Education", "Doctor of Medicine, University of Texas, USA (1990)<br>Medical Orientation Program, St. Louis University (1996)")}
            ${infoRow("Experience", "25 years of Experience in Medicine<br>Vice President and Chief Medical Officer")}
            ${infoRow("Address", "Suite 27, Medical Centre, The Sunshine Coast Private Hospital, QLD 4556")}
            ${infoRow("Timing", "Monday - Friday 08:00 - 20:00<br>Saturday 09:00 - 18:00<br>Sunday 09:00 - 18:00")}
            ${infoRow("Phone", "+1-23-345-6789")}
            ${infoRow("Email", "myemail@yourdomain.com")}
            ${infoRow("Website", "www.yourdomain.com")}
          </div>
          <form class="appointment-form js-form">
            <span>Online Appointment</span>
            <h2>Make An Appointment</h2>
            ${pulseDivider()}
            <div class="two-col">
              <input type="text" placeholder="Your Name" aria-label="Your Name">
              <input type="tel" placeholder="Your Phone" aria-label="Your Phone">
            </div>
            <input type="email" placeholder="Your Email *" aria-label="Your Email">
            <textarea placeholder="Tell us about Patient" aria-label="Tell us about Patient"></textarea>
            <button class="btn btn-primary" type="submit">Submit Query</button>
            <p class="form-message" role="status"></p>
          </form>
        </div>
      </div>
    </section>
    <section class="section hex-bg related-doctors">
      <div class="container">
        <div class="doctor-row">${doctors.slice(0, 4).map(doctorCard).join("")}</div>
      </div>
    </section>
    ${partnerStrip()}
  `;
}

function departmentsPage() {
  return `
    ${pageHero("Departments")}
    <section class="section department-list hex-bg">
      <div class="container">
        <div class="department-grid">${departments.map(departmentCard).join("")}</div>
        <div class="pagination reveal">
          <a href="#/departments" aria-label="Previous page">${icon("arrow-left")}</a>
          <a href="#/departments">1</a>
          <a class="is-active" href="#/departments">2</a>
          <a href="#/departments">3</a>
          <a href="#/departments" aria-label="Next page">${icon("arrow-right")}</a>
        </div>
      </div>
    </section>
    ${partnerStrip()}
  `;
}

function departmentDetailPage() {
  return `
    ${pageHero("Departments")}
    <section class="section department-detail-section">
      <div class="container department-layout">
        <aside class="department-sidebar">
          <nav class="side-menu reveal" aria-label="Departments">
            ${["All Departments", "Cardiology", "Neurology", "Urology", "Gynecological", "Pediatrical", "Laboratory"].map((item, index) => `
              <a class="${index === 2 ? "is-active" : ""}" href="#/department-detail">${icon("chevron")}${item}</a>
            `).join("")}
          </nav>
          <div class="download-card reveal">
            <h3>Download Brochures</h3>
            <p>Etiam tortor lorem, auctor ut orci ut, vehicula ultricies mauris.</p>
            <a class="btn btn-primary" href="#/department-detail">Info Company</a>
            <a class="btn btn-primary" href="#/department-detail">Brochure Newest</a>
          </div>
          <div class="download-card reveal">
            <span>Quick Contact</span>
            <h3>Get Solution</h3>
            <p>Contact us at the Medicoz office nearest to you or submit a business inquiry online.</p>
            <a class="btn btn-primary" href="#/contact">Contact</a>
          </div>
        </aside>
        <article class="department-content reveal">
          <img src="${IMG.equipment}" alt="Neurology department equipment" loading="lazy">
          <h2>Departments Of Neurology</h2>
          <p class="blue-text">ResoFus Alomar Treatment for Essential Tremor and Parkinson's Disease</p>
          <p>ResoFus combines MR imaging and focused ultrasound into MR guided focused ultrasound technology, and provides a transcranial, non-invasive image-guided personalized treatment modality with no incisions and with no ionizing radiation.</p>
          <p>This combination of continuous MR imaging and very highly focused acoustic sound waves provides the ability to provide pinpoint precision treatment at the planned target.</p>
          <div class="article-split">
            <img src="${IMG.consultation}" alt="Doctor caring for a patient" loading="lazy">
            <ul>
              <li>${icon("check")}Enhancing your vision set ametcon sec tetur</li>
              <li>${icon("check")}Adipiscing eiusmod tempor tread depth sit road</li>
              <li>${icon("check")}Eiusmod your vision sit ametcon sec tetur sec</li>
              <li>${icon("check")}Treat your vision sit ametcon sec tetur</li>
            </ul>
          </div>
          <h3>Why Choose This Service</h3>
          <p>Complete account of the systems and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
          <div class="info-tabs" role="tablist">
            <button class="is-active" type="button" data-tab="precautions">Precautions</button>
            <button type="button" data-tab="intelligence">Intelligence</button>
            <button type="button" data-tab="specializations">Specializations</button>
          </div>
          <div class="tab-panel" data-panel="precautions">Suspendisse laoreet at nulla id auctor. Maecenas in dui cursus, lacinia nisl non, blandit lorem.</div>
          <div class="tab-panel" data-panel="intelligence" hidden>Our specialists combine diagnostics, personal care plans, and coordinated follow up.</div>
          <div class="tab-panel" data-panel="specializations" hidden>Specialized support is available across cardiology, neurology, surgery, and rehabilitation.</div>
        </article>
      </div>
    </section>
    <section class="section hex-bg related-departments">
      <div class="container">
        <div class="department-grid three">${departments.slice(0, 3).map(departmentCard).join("")}</div>
        <div class="slider-dots reveal"><span></span><span></span><span></span><span></span></div>
      </div>
    </section>
    ${partnerStrip()}
  `;
}

function blogPage() {
  return `
    ${pageHero("Blog Standard", "Blog")}
    <section class="section blog-section">
      <div class="container blog-layout">
        <div class="post-list">
          ${posts.map((post, index) => blogExcerpt(post, index)).join("")}
          <div class="pagination reveal">
            <a href="#/blog">${icon("arrow-left")}</a>
            <a href="#/blog">1</a>
            <a class="is-active" href="#/blog">2</a>
            <a href="#/blog">3</a>
            <a href="#/blog">${icon("arrow-right")}</a>
          </div>
        </div>
        ${blogSidebar()}
      </div>
    </section>
    ${partnerStrip()}
  `;
}

function postPage() {
  return `
    ${pageHero("Image Post", "Blog")}
    <section class="section blog-section">
      <div class="container blog-layout">
        <article class="single-post reveal">
          <img class="post-hero-img" src="${IMG.doctorTeam}" alt="Doctor explaining a treatment plan" loading="lazy">
          ${postMeta()}
          <h2>What is The Success rate of a root canal?</h2>
          <p>Nullam mauris vitae tortor sodales efficitur. Quisque orci ante, primis amet turpis. Nullam mauris vitae tortor sodales efficitur. There have been a lot of cases in which people were not provided with accurate reports that eventually affected their medical treatment.</p>
          <blockquote>It's a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine could you be mine.</blockquote>
          <p>There anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
          <div class="article-split">
            <img src="${IMG.hero}" alt="Doctor demonstrating treatment" loading="lazy">
            <p>Know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
          </div>
          <p>Over the river and through the woods was more dangerous back when cars had crummy bias-ply tires, rear-wheel drive, Kevin tail capicola bresaola, prosciutto swine cupim tri-tip boudin.</p>
          <div class="tag-share">
            <div><span>Care</span><span>Hygiene</span><span>Auto</span><span>Drink</span></div>
            <div class="share-icons"><a href="#/post">f</a><a href="#/post">t</a><a href="#/post">in</a><a href="#/post">s</a></div>
          </div>
          <div class="author-box">
            <img src="${IMG.portrait2}" alt="Robert Theodore" loading="lazy">
            <div><span>Author</span><h3>Robert Theodore</h3><p>Dynamically innovate resource and leveling customer service for state of the art customer service circumstances occur.</p></div>
          </div>
          <h3>Related News</h3>
          ${newsCards(2)}
          ${commentsBlock()}
        </article>
        ${blogSidebar()}
      </div>
    </section>
    ${partnerStrip()}
  `;
}

function contactPage() {
  return `
    ${pageHero("Contact Us", "Contact")}
    <section class="section map-section">
      <div class="container">
        <div class="map-card reveal" role="img" aria-label="Clinic location map preview">
          <div class="map-popup">
            <strong>Medicoz Clinic</strong>
            <span>2130 Fulton Street, San Diego</span>
          </div>
          <div class="map-pin">${icon("map")}</div>
        </div>
      </div>
    </section>
    <section class="section contact-section">
      <div class="container">
        ${titleBlock("Contact Now", "Write us a Message !")}
        <div class="contact-info-grid reveal">
          <div>${icon("map")}<h3>Address</h3><p>185, Pickton Near Street,<br>Los Angeles, USA</p></div>
          <div>${icon("phone")}<h3>Phone</h3><p>(+92) 313 888 000<br>(+92) 313 999 000</p></div>
          <div>${icon("mail")}<h3>Email</h3><p>support@example.com<br>support@example.com</p></div>
        </div>
        <form class="contact-form-wide reveal js-form">
          <div class="form-left">
            <input type="text" placeholder="Full Name *" aria-label="Full Name">
            <input type="email" placeholder="Email Address *" aria-label="Email Address">
            <input type="tel" placeholder="Your Phone" aria-label="Your Phone">
          </div>
          <textarea placeholder="Message" aria-label="Message"></textarea>
          <button class="btn btn-primary" type="submit">Send Message</button>
          <p class="form-message" role="status"></p>
        </form>
      </div>
    </section>
    ${partnerStrip()}
  `;
}

function departmentCard(item, index = 0) {
  return `
    <article class="department-card reveal" style="--delay:${index * 60}ms">
      <a href="#/department-detail" class="department-img">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
      </a>
      <div class="department-body">
        <h3>${icon(item.icon)}<a href="#/department-detail">${item.title}</a></h3>
        <p>Introduction. Cardiology is the study heart conditions. The consultant with whom you have an appointment is a specialist.</p>
      </div>
    </article>
  `;
}

function hoursList() {
  return `
    <div class="hours-list">
      <div><span>Monday - Friday</span><strong>08:00 - 20:00</strong></div>
      <div><span>Saturday</span><strong>09:00 - 18:00</strong></div>
      <div><span>Sunday</span><strong>09:00 - 18:00</strong></div>
    </div>
  `;
}

function progressBar(label, value) {
  return `
    <div class="progress-row">
      <div><span>${label}</span><strong>${value}%</strong></div>
      <span class="progress-track"><span style="width:${value}%"></span></span>
    </div>
  `;
}

function infoRow(label, value) {
  return `<div><strong>${label}</strong><span>${value}</span></div>`;
}

function scheduleSection() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const rows = ["08:00am", "10:00am", "11:00am", "11:30am", "12:00am", "01:00pm", "02:00pm"];
  return `
    <section class="section schedule-section hex-bg">
      <div class="container">
        <div class="schedule-table reveal">
          <table>
            <thead>
              <tr><th>Time Table</th>${days.map((day) => `<th>${day}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${rows.map((row, index) => `
                <tr>
                  <th>${row}</th>
                  ${days.map((day, dayIndex) => `<td><strong>${["Dental Care", "Gynecology", "Orthopaedics", "Cardiology", "Medicine"][(index + dayIndex) % 5]}</strong><span>8:00 am - 9:00 am<br>Room: 303</span></td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function blogExcerpt(post, index) {
  return `
    <article class="blog-card reveal" style="--delay:${Math.min(index, 5) * 40}ms">
      <a href="#/post"><img src="${post.img}" alt="${post.title}" loading="lazy"></a>
      <div class="blog-card-body">
        ${postMeta(post.date)}
        <h2><a href="#/post">${post.title}</a></h2>
        <p>${post.excerpt}</p>
        <a class="btn btn-primary" href="#/post">Read More</a>
      </div>
    </article>
  `;
}

function postMeta(date = "25 Jan 19") {
  return `<div class="post-meta"><span>${icon("user")}Admin</span><span>${icon("mail")}Comments</span><span>${icon("calendar")}${date}</span></div>`;
}

function blogSidebar() {
  return `
    <aside class="blog-sidebar reveal">
      <label class="search-box">
        <input type="search" placeholder="Search..." aria-label="Search">
        ${icon("search")}
      </label>
      <div class="side-widget">
        <h3>Categories</h3>
        ${["Procedures", "Transplantation", "Management", "Healthcare Tips", "Uncategorized"].map((cat, index) => `<a href="#/blog">${icon("chevron")}${cat}<span>(${(index + 2) * 3})</span></a>`).join("")}
      </div>
      <div class="side-widget">
        <h3>Popular Posts</h3>
        ${posts.slice(1, 4).map((post) => `
          <a class="mini-post" href="#/post">
            <img src="${post.img}" alt="${post.title}" loading="lazy">
            <span><strong>${post.title}</strong><small>${post.date}</small></span>
          </a>
        `).join("")}
      </div>
      <div class="side-widget newsletter">
        <h3>Newsletter</h3>
        <p>Enter your email address below to subscribe to our newsletter</p>
        <input type="email" placeholder="Your email address..." aria-label="Newsletter email">
        <button class="btn btn-primary" type="button">Subscribe</button>
      </div>
      <div class="side-widget">
        <h3>Instagram</h3>
        <div class="instagram-grid">${posts.slice(0, 6).map((post) => `<img src="${post.img}" alt="" loading="lazy">`).join("")}</div>
      </div>
      <div class="side-widget tags">
        <h3>Tag Cloud</h3>
        ${["Ideas", "Doctor", "Health", "Department", "Nurse", "Growth", "Expert", "Tips", "Service", "Medical"].map((tag) => `<a href="#/blog">${tag}</a>`).join("")}
      </div>
    </aside>
  `;
}

function commentsBlock() {
  return `
    <section class="comments">
      <h3>03 Comments</h3>
      ${[
        ["Steven Rich", "JAN 01, 2020", IMG.portrait2],
        ["Donal Smith", "1 hours ago", IMG.portrait1],
        ["Rona Stowe", "2 hours ago", IMG.portrait2]
      ].map((comment) => `
        <article class="comment">
          <img src="${comment[2]}" alt="${comment[0]}" loading="lazy">
          <div><h4>${comment[0]} <span>${comment[1]}</span></h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet tempor tempo.</p><a href="#/post">Reply</a></div>
        </article>
      `).join("")}
      <h3>Leave a Comment</h3>
      <form class="comment-form js-form">
        <div class="two-col">
          <input type="text" placeholder="Name" aria-label="Name">
          <input type="email" placeholder="Email" aria-label="Email">
        </div>
        <textarea placeholder="Your Comments" aria-label="Your Comments"></textarea>
        <button class="btn btn-primary" type="submit">Post Comment</button>
        <p class="form-message" role="status"></p>
      </form>
    </section>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="container footer-grid">
          <div class="footer-about reveal">
            <a class="footer-brand" href="#/">${icon("heart")}<strong>Medicoz</strong><span>Medical Solution</span></a>
            <p>Our clinic has grown to provide a world class facility for the clinic advanced restorative.</p>
            <p>We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
            <div class="footer-socials"><a href="#/contact">f</a><a href="#/contact">G+</a><a href="#/contact">t</a><a href="#/contact">s</a><a href="#/contact">in</a></div>
          </div>
          <div class="footer-col reveal">
            <h3>Departments</h3>
            ${["Surgery & Radiology", "Family Medicine", "Women's Health", "Optician", "Pediatrics", "Dermatology"].map((item) => `<a href="#/department-detail">+ ${item}</a>`).join("")}
          </div>
          <div class="footer-col reveal">
            <h3>Latest News</h3>
            ${posts.slice(0, 3).map((post) => `
              <a class="footer-post" href="#/post">
                <img src="${post.img}" alt="" loading="lazy">
                <span><strong>${post.title}</strong><small>${post.date.replace("Jan", "January").replace("Aug", "August").replace("Jul", "July")}, 2020</small></span>
              </a>
            `).join("")}
          </div>
          <div class="footer-col contact-col reveal">
            <h3>Contact Us</h3>
            <p>${icon("map")}2130 Fulton Street San Diego CA 94117-1080 USA</p>
            <p>${icon("phone")}Mon to Fri : 08:30 - 18:00<br><strong>+898 68679 575</strong></p>
            <p>${icon("mail")}Do you have a Question?<br><strong>info@gmail.com</strong></p>
            <p>${icon("clock")}Mon - Sat 8.00 - 18.00<br><strong>Sunday CLOSED</strong></p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>Copyright &copy; 2025 <strong>Bold Touch</strong> All Rights Reserved.</p>
          <nav><a href="#/about">Privacy Policy</a><a href="#/contact">Contact</a><a href="#/contact">Supplier</a></nav>
        </div>
      </div>
      <a href="#/" class="back-top" aria-label="Back to top">${icon("chevron")}</a>
    </footer>
  `;
}

function renderPage(path) {
  const pages = {
    "/": homePage,
    "/about": aboutPage,
    "/services": servicesPage,
    "/gallery": galleryPage,
    "/doctors": doctorsPage,
    "/doctor-detail": doctorDetailPage,
    "/departments": departmentsPage,
    "/department-detail": departmentDetailPage,
    "/blog": blogPage,
    "/post": postPage,
    "/contact": contactPage
  };

  return pages[path] ? pages[path]() : homePage();
}

function attachInteractions() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        document.body.classList.remove("nav-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll(".js-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = form.querySelector(".form-message");
      if (message) message.textContent = "Thank you. Your request is ready for the clinic team.";
    });
  });

  const galleryGrid = document.querySelector(".gallery-grid");
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      galleryGrid?.querySelectorAll(".gallery-item").forEach((item) => {
        const match = filter === "All" || item.dataset.category === filter || (filter === "Dental Care" && item.dataset.category === "Dental");
        item.hidden = !match;
      });
    });
  });

  const tabs = document.querySelector(".info-tabs");
  if (tabs) {
    tabs.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-tab]");
      if (!button) return;
      document.querySelectorAll(".info-tabs button").forEach((item) => item.classList.remove("is-active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.hidden = panel.dataset.panel !== button.dataset.tab;
      });
      button.classList.add("is-active");
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function render() {
  const path = routePath();
  document.title = `${routes[path].title} | Medicoz Medical Solution`;
  document.getElementById("root").innerHTML = `
    ${header(path)}
    <main id="main">${renderPage(path)}</main>
    ${footer()}
  `;
  attachInteractions();
  window.scrollTo({ top: 0, behavior: "auto" });
}

window.addEventListener("hashchange", render);
render();

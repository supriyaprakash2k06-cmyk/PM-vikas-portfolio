// IoT Portfolio Main Logic Controller

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial State and Settings
  const body = document.body;
  const loader = document.getElementById("loader");
  const sidebar = document.getElementById("sidebar");
  const mobileToggle = document.getElementById("mobile-toggle");
  const themeSwitchBtn = document.getElementById("theme-switch-btn");
  const backToTopBtn = document.getElementById("back-to-top");
  
  // Theme state
  let currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  // Hide loader after load
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 600);
  });
  // Fallback in case load event fired already
  if (document.readyState === "complete") {
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 600);
  }

  // 2. Mobile Sidebar Drawer Controls
  mobileToggle.addEventListener("click", () => {
    sidebar.classList.toggle("mobile-open");
    const icon = mobileToggle.querySelector("i");
    if (sidebar.classList.contains("mobile-open")) {
      icon.className = "fas fa-times";
    } else {
      icon.className = "fas fa-bars";
    }
  });

  // Close sidebar on link click (mobile viewport)
  document.querySelectorAll(".sidebar-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Active states
      document.querySelectorAll(".sidebar-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Scroll to section
      const targetId = link.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Offset for mobile header if visible
        const headerOffset = window.innerWidth <= 992 ? 70 : 0;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      if (window.innerWidth <= 992) {
        sidebar.classList.remove("mobile-open");
        mobileToggle.querySelector("i").className = "fas fa-bars";
      }
    });
  });

  // Highlight sidebar link on scroll
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let currentActive = "";
    const scrollPos = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentActive = section.getAttribute("id");
      }
    });

    if (currentActive) {
      document.querySelectorAll(".sidebar-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-target") === currentActive) {
          link.classList.add("active");
        }
      });
    }

    // Back to top button visibility
    if (window.pageYOffset > 500) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 3. Theme Toggle Implementation
  themeSwitchBtn.addEventListener("click", () => {
    const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeIcon(nextTheme);
    
    // Redraw charts with correct colors
    initCharts(nextTheme);
  });

  function updateThemeIcon(theme) {
    const icon = themeSwitchBtn.querySelector("i");
    if (theme === "light") {
      icon.className = "fas fa-moon";
      themeSwitchBtn.title = "Switch to Dark Mode";
    } else {
      icon.className = "fas fa-sun";
      themeSwitchBtn.title = "Switch to Light Mode";
    }
  }

  // 4. Hero Section Typing Effect
  const typingElement = document.getElementById("typing-text");
  const words = ["IoT Assistant Trainee", "Embedded Systems Programmer", "Smart Automation Builder", "IIIT Kottayam Trainee"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1500; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400; // Pause before typing next word
    }

    setTimeout(typeEffect, speed);
  }
  typeEffect();

  // 5. IoT Circuit Particle Background (HTML5 Canvas)
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");

  let width = canvas.width = canvas.parentElement.offsetWidth;
  let height = canvas.height = canvas.parentElement.offsetHeight;

  window.addEventListener("resize", () => {
    if (canvas && canvas.parentElement) {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }
  });

  const particles = [];
  const particleCount = 45;
  const connectionDistance = 110;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.size = Math.random() * 2 + 1.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = document.documentElement.getAttribute("data-theme") === "light" 
        ? "rgba(0, 119, 182, 0.4)" 
        : "rgba(0, 180, 216, 0.6)";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, width, height);

    // Draw grid junctions lines
    const theme = document.documentElement.getAttribute("data-theme");
    ctx.strokeStyle = theme === "light" ? "rgba(0, 119, 182, 0.03)" : "rgba(0, 180, 216, 0.03)";
    ctx.lineWidth = 1;
    const gridSpacing = 40;
    
    for (let x = 0; x < width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Connect particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const alpha = (1 - dist / connectionDistance) * 0.15;
          ctx.strokeStyle = theme === "light" 
            ? `rgba(0, 119, 182, ${alpha})` 
            : `rgba(0, 180, 216, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();

  // 6. Dynamic Daily Learning Journal Rendering
  const journalTimeline = document.getElementById("journal-timeline");
  const journalSearch = document.getElementById("journal-search");
  const journalFilter = document.getElementById("journal-filter");

  function renderJournal() {
    const searchQuery = journalSearch.value.toLowerCase().trim();
    const filterValue = journalFilter.value; // "all", "week-1", etc.
    journalTimeline.innerHTML = "";

    // Grouping helper
    const filteredData = window.journalDatabase.filter(entry => {
      // Search logic
      const matchesSearch = 
        entry.theme.toLowerCase().includes(searchQuery) ||
        entry.theory.toLowerCase().includes(searchQuery) ||
        entry.lab.toLowerCase().includes(searchQuery) ||
        entry.concepts.some(c => c.toLowerCase().includes(searchQuery)) ||
        entry.tools.some(t => t.toLowerCase().includes(searchQuery)) ||
        entry.notes.toLowerCase().includes(searchQuery) ||
        `day ${entry.day}`.includes(searchQuery);

      if (!matchesSearch) return false;

      // Filter Logic
      if (filterValue === "all") return true;
      if (filterValue === "completed") return entry.status === "Completed";
      
      const day = entry.day;
      if (filterValue === "week-1") return day >= 1 && day <= 7;
      if (filterValue === "week-2") return day >= 8 && day <= 14;
      if (filterValue === "week-3") return day >= 15 && day <= 21;
      if (filterValue === "week-4") return day >= 22 && day <= 30;
      if (filterValue === "week-5") return day >= 31 && day <= 45;
      if (filterValue === "week-6") return day >= 46 && day <= 60;
      
      return true;
    });

    if (filteredData.length === 0) {
      journalTimeline.innerHTML = `<div class="timeline-text" style="text-align: center; padding: 2rem;">No journal entries found matching "${searchQuery}".</div>`;
      return;
    }

    filteredData.forEach(entry => {
      const card = document.createElement("div");
      card.className = "timeline-card glass-card";
      card.id = `journal-day-${entry.day}`;
      
      const conceptsHTML = entry.concepts.map(c => `<span class="module-tag">${c}</span>`).join("");
      const toolsHTML = entry.tools.map(t => `<span class="module-tag" style="border-color: var(--accent-color); color: var(--accent-color);"><i class="fas fa-tools"></i> ${t}</span>`).join("");
      const skillsHTML = entry.skills.map(s => `<li><i class="fas fa-check-circle"></i> ${s}</li>`).join("");

      card.innerHTML = `
        <div class="timeline-header" onclick="toggleJournalCard(${entry.day})">
          <div class="timeline-day">Day ${entry.day} <span>${entry.theme}</span></div>
          <button class="timeline-trigger"><i class="fas fa-chevron-down"></i></button>
        </div>
        <div class="timeline-body" id="journal-body-${entry.day}">
          <div class="timeline-row">
            <div>
              <div class="timeline-section-title">Theory Concepts</div>
              <p class="timeline-text">${entry.theory}</p>
            </div>
            <div>
              <div class="timeline-section-title">Practical Lab Session</div>
              <p class="timeline-text">${entry.lab}</p>
            </div>
          </div>
          
          <div class="timeline-row">
            <div>
              <div class="timeline-section-title">Core Concepts Learned</div>
              <div class="module-tags" style="margin-bottom: 1rem;">
                ${conceptsHTML}
              </div>
            </div>
            <div>
              <div class="timeline-section-title">Tools & Equipment Used</div>
              <div class="module-tags" style="margin-bottom: 1rem;">
                ${toolsHTML}
              </div>
            </div>
          </div>

          <div class="timeline-row">
            <div>
              <div class="timeline-section-title">Technical Skills Gained</div>
              <ul class="module-skills-list">
                ${skillsHTML}
              </ul>
            </div>
            <div>
              <div class="timeline-section-title">Day Notes & Remarks</div>
              <p class="timeline-text" style="font-style: italic;"><i class="far fa-sticky-note"></i> ${entry.notes}</p>
            </div>
          </div>

          <div class="timeline-row" style="margin-bottom: 0; align-items: center;">
            <div>
              <span class="module-badge"><i class="fas fa-check"></i> ${entry.status}</span>
            </div>
            <div style="text-align: right;">
              <span class="timeline-text" style="font-size: 0.8rem;"><i class="fas fa-clock"></i> Skill India Journal ID: PMKVY-${1000 + entry.day}</span>
            </div>
          </div>
        </div>
      `;
      
      journalTimeline.appendChild(card);
    });
  }

  // Bind input and select change
  journalSearch.addEventListener("input", renderJournal);
  journalFilter.addEventListener("change", renderJournal);

  // Global toggle function bound to window
  window.toggleJournalCard = (day) => {
    const card = document.getElementById(`journal-day-${day}`);
    const body = document.getElementById(`journal-body-${day}`);
    if (card && body) {
      const isExpanded = card.classList.contains("expanded");
      if (isExpanded) {
        card.classList.remove("expanded");
        body.style.display = "none";
      } else {
        card.classList.add("expanded");
        body.style.display = "block";
      }
    }
  };

  // Render initial journal database
  renderJournal();
  // Auto-expand the first day for better visual guidance
  setTimeout(() => toggleJournalCard(1), 100);

  // 7. Laboratory Sessions Dynamic Grid & Modal Rendering
  const labsGrid = document.getElementById("labs-grid");
  const modal = document.getElementById("lab-modal");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");

  function renderLabs() {
    labsGrid.innerHTML = "";
    window.labsDatabase.forEach(lab => {
      const card = document.createElement("div");
      card.className = "glass-card lab-card";
      
      card.innerHTML = `
        <div class="lab-top">
          <span class="lab-num">Lab session ${lab.num}</span>
          <span class="lab-status"><i class="fas fa-clipboard-check"></i> ${lab.status}</span>
        </div>
        <h4 class="lab-title">${lab.obj.length > 70 ? lab.obj.substring(0, 70) + "..." : lab.obj}</h4>
        <button class="lab-action-btn" onclick="openLabModal(${lab.num})">
          <span>View Details & Code</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      `;
      labsGrid.appendChild(card);
    });
  }

  window.openLabModal = (num) => {
    const lab = window.labsDatabase.find(l => l.num === num);
    if (!lab) return;

    modalTitle.textContent = `Lab Session ${lab.num}`;
    
    // Components badges mapping
    const compsBadges = lab.comps.map(c => `<span class="module-tag">${c}</span>`).join("");

    modalDetails.innerHTML = `
      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-bullseye"></i> Lab Objective</div>
        <p class="timeline-text" style="font-size: 1rem; color: var(--text-primary); font-weight: 500;">${lab.obj}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-boxes"></i> Components & Equipment Used</div>
        <div class="module-tags">${compsBadges}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-project-diagram"></i> Circuit Schematic Layout</div>
        <p class="timeline-text">${lab.circuit}</p>
        <div class="map-placeholder-container" style="height: 120px;">
          <div class="map-placeholder-text">
            <i class="fas fa-microchip"></i>
            <h5>Schematic Layout Active</h5>
            <p>Pins referenced: Arduino Pins Digital/Analog outputs.</p>
          </div>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-code"></i> Arduino Source Code</div>
        <div class="code-block-container">
          <button class="code-copy-btn" onclick="copyLabCode(${lab.num})">
            <i class="far fa-copy"></i> <span>Copy Code</span>
          </button>
          <div class="code-block" id="code-content-${lab.num}">${escapeHTML(lab.code)}</div>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-glasses"></i> Observations logged</div>
        <p class="timeline-text">${lab.obs}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-check-circle"></i> Result / Conclusion</div>
        <p class="timeline-text" style="color: var(--success); font-weight: 500;"><i class="fas fa-check"></i> ${lab.result}</p>
      </div>

      <div class="modal-section" style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent-color);">
        <div class="modal-section-title" style="color: var(--text-primary); margin-bottom: 0.25rem;"><i class="fas fa-user-edit"></i> Mentor Evaluation Remarks</div>
        <p class="timeline-text" style="margin-bottom: 0; font-style: italic;">"${lab.remarks}" - Instructor evaluation signature verified.</p>
      </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scroll background
  };

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  window.copyLabCode = (num) => {
    const codeElement = document.getElementById(`code-content-${num}`);
    if (!codeElement) return;
    
    const codeText = codeElement.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
      const copyBtn = document.querySelector(".code-copy-btn span");
      const copyIcon = document.querySelector(".code-copy-btn i");
      if (copyBtn) {
        copyBtn.textContent = "Copied!";
        copyIcon.className = "fas fa-check";
        setTimeout(() => {
          copyBtn.textContent = "Copy Code";
          copyIcon.className = "far fa-copy";
        }, 2000);
      }
    });
  };

  function escapeHTML(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  renderLabs();

  // 8. Projects Rendering
  const projectsGrid = document.getElementById("projects-grid");
  
  function renderProjects() {
    projectsGrid.innerHTML = "";
    window.projectsDatabase.forEach((project, index) => {
      const card = document.createElement("div");
      card.className = "glass-card project-card";
      
      const compsList = project.comps.map(c => `<span class="module-tag">${c}</span>`).join("");

      card.innerHTML = `
        <span class="project-tag"><i class="fas fa-lightbulb"></i> Capstone Project ${index + 1}</span>
        <h3 class="project-title">${project.name}</h3>
        <div class="timeline-section-title">Problem Statement</div>
        <p class="project-problem">${project.problem}</p>
        
        <div class="timeline-section-title">Hardware Components</div>
        <div class="module-tags" style="margin-bottom: 1.5rem;">${compsList}</div>

        <div class="timeline-section-title">Working Principle</div>
        <p class="timeline-text" style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">${project.principle}</p>

        <div class="timeline-section-title">Project Outcomes</div>
        <p class="timeline-text" style="font-size: 0.9rem; line-height: 1.6; color: var(--success); font-weight: 500; margin-bottom: 1.5rem;">
          <i class="fas fa-award"></i> ${project.outcome}
        </p>

        <button class="lab-action-btn" onclick="openProjectCodeModal(${index})" style="margin-top: auto;">
          <i class="fas fa-code"></i>
          <span>View Circuit & Firmware</span>
        </button>
      `;
      projectsGrid.appendChild(card);
    });
  }

  window.openProjectCodeModal = (index) => {
    const project = window.projectsDatabase[index];
    if (!project) return;

    modalTitle.textContent = project.name;
    const compsBadges = project.comps.map(c => `<span class="module-tag">${c}</span>`).join("");

    modalDetails.innerHTML = `
      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-bullseye"></i> Project Objective</div>
        <p class="timeline-text" style="font-size: 1rem; color: var(--text-primary); font-weight: 500;">${project.obj}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-boxes"></i> Bill of Materials (BOM)</div>
        <div class="module-tags">${compsBadges}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-cogs"></i> Working Principle</div>
        <p class="timeline-text">${project.principle}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-project-diagram"></i> Hardware Connections & Diagram</div>
        <p class="timeline-text">${project.circuit}</p>
        <div class="map-placeholder-container" style="height: 150px;">
          <div class="map-placeholder-text">
            <i class="fas fa-project-diagram"></i>
            <h5>Fritzing Block Schematic Active</h5>
            <p>Pinouts mapping ESP8266/ESP32 sensor lines to standard power gates.</p>
          </div>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-code"></i> Main Firmware Code</div>
        <div class="code-block-container">
          <button class="code-copy-btn" onclick="copyProjectCode(${index})">
            <i class="far fa-copy"></i> <span>Copy Code</span>
          </button>
          <div class="code-block" id="project-code-${index}">${escapeHTML(project.code)}</div>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-star"></i> Future Enhancements & Scope</div>
        <p class="timeline-text">${project.improvements}</p>
      </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  window.copyProjectCode = (index) => {
    const codeElement = document.getElementById(`project-code-${index}`);
    if (!codeElement) return;

    navigator.clipboard.writeText(codeElement.textContent).then(() => {
      const copyBtn = document.querySelector(".code-copy-btn span");
      const copyIcon = document.querySelector(".code-copy-btn i");
      if (copyBtn) {
        copyBtn.textContent = "Copied!";
        copyIcon.className = "fas fa-check";
        setTimeout(() => {
          copyBtn.textContent = "Copy Code";
          copyIcon.className = "far fa-copy";
        }, 2000);
      }
    });
  };

  renderProjects();

  // 9. Attendance Calendar Renderer
  const calendarGrid = document.getElementById("calendar-grid");
  const attendancePercentage = document.getElementById("attendance-percentage");

  function renderAttendance() {
    calendarGrid.innerHTML = "";
    
    // Calendar headers
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    weekdays.forEach(day => {
      const header = document.createElement("div");
      header.className = "calendar-day-header";
      header.textContent = day;
      calendarGrid.appendChild(header);
    });

    // We will render days 1 to 60 as dates in a structured calendar block.
    // Assuming start offset of 1 day (Monday) for visual aesthetics
    const startOffset = 1;
    for (let i = 0; i < startOffset; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "calendar-cell empty";
      calendarGrid.appendChild(emptyCell);
    }

    let presentDaysCount = 0;
    
    // Total days: 60
    for (let dayNum = 1; dayNum <= 60; dayNum++) {
      const cell = document.createElement("div");
      
      // Attendance pattern: present except weekends (Sundays) and odd sick leaves
      // Day 7, 14, 21, 28, 35, 42, 49, 56 are Sundays (approximate)
      // Days 12 and 41 are marked absent as simulated sick leaves
      const isSunday = (dayNum + startOffset) % 7 === 0;
      const isAbsent = isSunday || dayNum === 12 || dayNum === 41;

      cell.textContent = dayNum;

      if (isAbsent) {
        cell.className = "calendar-cell absent";
        cell.title = isSunday ? `Day ${dayNum}: Sunday Holiday` : `Day ${dayNum}: Absent (Medical Leave)`;
      } else {
        cell.className = "calendar-cell present";
        cell.title = `Day ${dayNum}: Present`;
        presentDaysCount++;
      }
      
      calendarGrid.appendChild(cell);
    }

    // Calculate percentage
    const pctVal = Math.round((presentDaysCount / 60) * 100);
    attendancePercentage.textContent = `${pctVal}%`;
  }
  
  renderAttendance();

  // 10. Chart.js Dashboard Graph Configurations
  let weeklyChart = null;

  function initCharts(theme) {
    const isDark = theme === "dark";
    const textLabelColor = isDark ? "#94a3b8" : "#475569";
    const gridLinesColor = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(15, 23, 42, 0.06)";

    // Chart.js global style sets
    Chart.defaults.color = textLabelColor;
    Chart.defaults.font.family = "'Inter', sans-serif";

    if (weeklyChart) {
      weeklyChart.destroy();
    }

    const ctxWeekly = document.getElementById("weeklyProgressChart").getContext("2d");
    weeklyChart = new Chart(ctxWeekly, {
      type: "bar",
      data: {
        labels: ["Wk 1 (D1-7)", "Wk 2 (D8-14)", "Wk 3 (D15-21)", "Wk 4 (D22-30)", "Wk 5 (D31-45)", "Wk 6 (D46-60)"],
        datasets: [
          {
            label: "Topics Completed",
            data: [6, 7, 7, 9, 15, 16],
            backgroundColor: isDark ? "rgba(0, 180, 216, 0.65)" : "rgba(0, 119, 182, 0.75)",
            borderColor: isDark ? "#00b4d8" : "#0077b6",
            borderWidth: 1.5,
            borderRadius: 6
          },
          {
            label: "Labs Executed",
            data: [1, 2, 2, 3, 2, 2],
            backgroundColor: isDark ? "rgba(16, 185, 129, 0.65)" : "rgba(16, 185, 129, 0.75)",
            borderColor: "#10b981",
            borderWidth: 1.5,
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              boxWidth: 12,
              padding: 15
            }
          },
          tooltip: {
            padding: 10,
            cornerRadius: 8,
            backgroundColor: isDark ? "rgba(8, 18, 38, 0.95)" : "rgba(255, 255, 255, 0.95)",
            titleColor: isDark ? "#fff" : "#0f172a",
            bodyColor: isDark ? "#94a3b8" : "#475569",
            borderColor: "rgba(0, 180, 216, 0.2)",
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: {
              color: gridLinesColor
            }
          },
          y: {
            grid: {
              color: gridLinesColor
            },
            ticks: {
              stepSize: 2
            }
          }
        }
      }
    });
  }

  // Init charts for current theme
  initCharts(currentTheme);

  // 11. Animate Statistics counters on viewport entry
  const statNumbers = document.querySelectorAll(".stat-number");
  
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
  };

  const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute("data-count"));
        let countNum = 0;
        const duration = 1200; // ms
        const stepTime = Math.max(Math.floor(duration / countTo), 15);
        
        const counter = setInterval(() => {
          countNum += Math.ceil(countTo / 40);
          if (countNum >= countTo) {
            target.textContent = countTo + (target.getAttribute("data-suffix") || "");
            clearInterval(counter);
          } else {
            target.textContent = countNum + (target.getAttribute("data-suffix") || "");
          }
        }, stepTime);

        observer.unobserve(target);
      }
    });
  }, observerOptions);

  statNumbers.forEach(num => {
    statObserver.observe(num);
  });

  // 12. Contact Form Interactivity
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending message...`;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fas fa-check-circle"></i> Message Sent Successfully!`;
        submitBtn.style.background = "var(--success)";
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = "";
        }, 3000);
      }, 1500);
    });
  }

  // 13. Gallery filter tabs click
  const galleryTabs = document.querySelectorAll(".gallery-tab");
  const galleryCards = document.querySelectorAll(".gallery-card");

  galleryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      galleryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");

      galleryCards.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

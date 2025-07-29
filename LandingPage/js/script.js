// Enhanced mobile menu functionality
      const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
      const mobileMenu = document.querySelector(".mobile-menu");
      const body = document.body;

      mobileMenuToggle.addEventListener("click", () => {
        mobileMenuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        body.style.overflow = mobileMenu.classList.contains("active")
          ? "hidden"
          : "auto";
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".mobile-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenuToggle.classList.remove("active");
          mobileMenu.classList.remove("active");
          body.style.overflow = "auto";
        });
      });

      // Close mobile menu when clicking outside
      document.addEventListener("click", (e) => {
        if (
          !mobileMenuToggle.contains(e.target) &&
          !mobileMenu.contains(e.target)
        ) {
          mobileMenuToggle.classList.remove("active");
          mobileMenu.classList.remove("active");
          body.style.overflow = "auto";
        }
      });

      // Enhanced smooth scrolling with offset for fixed header
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            const headerHeight = document.querySelector("header").offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        });
      });

      // Enhanced scroll animations with stagger effect
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 100);
          }
        });
      }, observerOptions);

      // Observe all animated elements
      document
        .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
        .forEach((el) => {
          observer.observe(el);
        });

      // Enhanced header scroll effect
      let lastScrollY = window.scrollY;
      const header = document.querySelector("header");

      window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }

        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          header.style.transform = "translateY(-100%)";
        } else {
          header.style.transform = "translateY(0)";
        }

        lastScrollY = currentScrollY;
      });

      // Active navigation highlighting
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(
        ".nav-links a, .mobile-menu a"
      );

      window.addEventListener("scroll", () => {
        let current = "";
        const scrollPosition = window.scrollY + 200;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      });

      // Enhanced form handling
      const contactForm = document.querySelector(".contact-form");
      const submitBtn = document.querySelector(".submit-btn");

      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Animate button
        submitBtn.innerHTML = "Sending...";
        submitBtn.style.background =
          "linear-gradient(135deg, #4facfe, #00f2fe)";

        // Simulate form submission
        setTimeout(() => {
          submitBtn.innerHTML = "Message Sent! ✓";
          submitBtn.style.background =
            "linear-gradient(135deg, #11998e, #38ef7d)";

          setTimeout(() => {
            submitBtn.innerHTML = "Send Message";
            submitBtn.style.background =
              "linear-gradient(135deg, #667eea, #764ba2)";
            contactForm.reset();
          }, 2000);
        }, 1500);
      });

      // Floating elements interactive animation
      document
        .querySelectorAll(".floating-element")
        .forEach((element, index) => {
          element.addEventListener("mouseenter", () => {
            element.style.transform = "scale(1.2) rotate(180deg)";
            element.style.background = "rgba(240, 147, 251, 0.3)";
          });

          element.addEventListener("mouseleave", () => {
            element.style.transform = "scale(1) rotate(0deg)";
            element.style.background = "rgba(255, 255, 255, 0.08)";
          });
        });

      // Parallax effect for hero section
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector(".hero");
        if (hero) {
          const rate = scrolled * -0.5;
          hero.style.transform = `translateY(${rate}px)`;
        }
      });

      // Card hover effects with mouse tracking
      document
        .querySelectorAll(".service-card, .project-card, .review-card")
        .forEach((card) => {
          card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
          });

          card.addEventListener("mouseleave", () => {
            card.style.transform =
              "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
          });
        });

      // Loading animation on page load
      window.addEventListener("load", () => {
        document.body.classList.add("loading");
      });

      // Tech items animation on hover
      document.querySelectorAll(".tech-item").forEach((item) => {
        item.addEventListener("mouseenter", () => {
          item.style.transform = "translateY(-15px) scale(1.1) rotate(5deg)";
        });

        item.addEventListener("mouseleave", () => {
          item.style.transform = "translateY(0) scale(1) rotate(0deg)";
        });
      });
// Interview resources data
const interviewResources = [
  {
    level: "easy",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "medium",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "hard",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "easy",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "medium",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "hard",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "easy",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "medium",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "hard",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "easy",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "medium",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
  {
    level: "hard",
    category: "DATA STRUCTURES & ALGORITHMS",
    title: "Design a Free Food App",
    desc: "We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews",
  },
]

// FAQ data
const faqQuestions = [
  {
    question: "How do I schedule an interview?",
    answer:
      "Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atque elementum eu facilibus faucibus interdum posuere.",
  },
  {
    question: "Will I be charged per interview?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I get a trial for On-demand interviews?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
]

// Global variables
let currentOpenFaq = null
const lucide = window.lucide // Declare the lucide variable

// DOM elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const resourcesGrid = document.getElementById("resourcesGrid")
const faqContainer = document.getElementById("faqContainer")
const searchInput = document.getElementById("searchInput")
const newsletterForm = document.getElementById("newsletterForm")
const backToTopBtn = document.getElementById("backToTop")
const loadingSpinner = document.getElementById("loadingSpinner")

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (lucide) {
    lucide.createIcons()
  }

  // Hide loading spinner
  setTimeout(() => {
    if (loadingSpinner) {
      loadingSpinner.classList.add("hidden")
    }
  }, 500)

  // Load content
  loadInterviewResources()
  loadFAQSection()

  // Setup event listeners
  setupEventListeners()

  // Setup scroll effects
  setupScrollEffects()
})

// Setup event listeners
function setupEventListeners() {
  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add("hidden")
      }
    }
  })

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch)
  }

  // Newsletter form
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit)
  }

  // Back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", scrollToTop)
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
}

// Load interview resources
function loadInterviewResources() {
  if (!resourcesGrid) return

  resourcesGrid.innerHTML = ""

  interviewResources.forEach((resource, index) => {
    const card = document.createElement("div")
    card.className = `resource-card ${resource.level}`
    card.setAttribute("data-index", index)

    card.innerHTML = `
      <div class="resource-header">
        <span class="difficulty-tag ${resource.level}">
          ${resource.level.charAt(0).toUpperCase() + resource.level.slice(1)}
        </span>
      </div>
      <div class="resource-category">${resource.category}</div>
      <h3 class="resource-title">${resource.title}</h3>
      <p class="resource-description">${resource.desc}</p>
    `

    resourcesGrid.appendChild(card)
  })
}

// Load FAQ section
function loadFAQSection() {
  if (!faqContainer) return

  faqContainer.innerHTML = ""

  faqQuestions.forEach((faq, index) => {
    const faqItem = document.createElement("div")
    faqItem.className = "faq-item"

    faqItem.innerHTML = `
      <button class="faq-question" data-faq-index="${index}" aria-expanded="false">
        <span>${faq.question}</span>
        <i data-lucide="plus" class="faq-icon" id="faq-icon-${index}"></i>
      </button>
      <div class="faq-answer" id="faq-answer-${index}">
        <p>${faq.answer}</p>
      </div>
    `

    faqContainer.appendChild(faqItem)
  })

  // Reinitialize icons after adding FAQ items
  if (lucide) {
    lucide.createIcons()
  }

  // Add click listeners to FAQ questions
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", handleFAQClick)
  })
}

// Handle FAQ clicks
function handleFAQClick(e) {
  const button = e.currentTarget
  const index = Number.parseInt(button.getAttribute("data-faq-index"))
  toggleFAQ(index)
}

// FAQ functionality
function toggleFAQ(index) {
  const answer = document.getElementById(`faq-answer-${index}`)
  const icon = document.getElementById(`faq-icon-${index}`)
  const button = document.querySelector(`[data-faq-index="${index}"]`)

  if (!answer || !icon || !button) return

  // Close all other FAQs first
  faqQuestions.forEach((_, i) => {
    if (i !== index) {
      const otherAnswer = document.getElementById(`faq-answer-${i}`)
      const otherIcon = document.getElementById(`faq-icon-${i}`)
      const otherButton = document.querySelector(`[data-faq-index="${i}"]`)

      if (otherAnswer && otherIcon && otherButton) {
        otherAnswer.classList.remove("show")
        otherIcon.classList.remove("rotated")
        otherIcon.setAttribute("data-lucide", "plus")
        otherButton.setAttribute("aria-expanded", "false")
      }
    }
  })

  // Toggle current FAQ
  if (answer.classList.contains("show")) {
    answer.classList.remove("show")
    icon.classList.remove("rotated")
    icon.setAttribute("data-lucide", "plus")
    button.setAttribute("aria-expanded", "false")
    currentOpenFaq = null
  } else {
    answer.classList.add("show")
    icon.classList.add("rotated")
    icon.setAttribute("data-lucide", "x")
    button.setAttribute("aria-expanded", "true")
    currentOpenFaq = index
  }

  // Reinitialize icons after changing
  if (lucide) {
    lucide.createIcons()
  }
}

// Search functionality
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase().trim()
  const resourceCards = document.querySelectorAll(".resource-card")

  resourceCards.forEach((card) => {
    const title = card.querySelector(".resource-title")?.textContent.toLowerCase() || ""
    const description = card.querySelector(".resource-description")?.textContent.toLowerCase() || ""
    const category = card.querySelector(".resource-category")?.textContent.toLowerCase() || ""

    const isMatch = title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)

    if (searchTerm === "" || isMatch) {
      card.style.display = "block"
      card.style.opacity = "1"
    } else {
      card.style.display = "none"
      card.style.opacity = "0"
    }
  })
}

// Newsletter form handling
function handleNewsletterSubmit(e) {
  e.preventDefault()

  const emailInput = newsletterForm.querySelector(".newsletter-input")
  const messageDiv = document.getElementById("newsletterMessage")
  const email = emailInput?.value.trim() || ""

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!email) {
    showNewsletterMessage("Please enter your email address.", "error")
    return
  }

  if (!emailRegex.test(email)) {
    showNewsletterMessage("Please enter a valid email address.", "error")
    return
  }

  // Simulate form submission
  const submitBtn = newsletterForm.querySelector(".newsletter-btn")
  const originalHTML = submitBtn?.innerHTML || ""

  if (submitBtn) {
    submitBtn.innerHTML =
      '<div style="width: 20px; height: 20px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>'
    submitBtn.disabled = true
  }

  setTimeout(() => {
    showNewsletterMessage("Thank you for subscribing! We'll keep you updated.", "success")
    if (emailInput) emailInput.value = ""
    if (submitBtn) {
      submitBtn.innerHTML = originalHTML
      submitBtn.disabled = false
    }
    // Reinitialize icons
    if (lucide) {
      lucide.createIcons()
    }
  }, 1500)
}

// Show newsletter message
function showNewsletterMessage(message, type) {
  const messageDiv = document.getElementById("newsletterMessage")
  if (messageDiv) {
    messageDiv.textContent = message
    messageDiv.className = `newsletter-message ${type}`

    setTimeout(() => {
      messageDiv.className = "newsletter-message"
    }, 5000)
  }
}

// Scroll effects
function setupScrollEffects() {
  let ticking = false

  function updateScrollEffects() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // Back to top button
    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add("visible")
      } else {
        backToTopBtn.classList.remove("visible")
      }
    }

    // Add scroll class to header
    const header = document.querySelector(".header")
    if (header) {
      if (scrollTop > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    }

    ticking = false
  }

  function requestScrollUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects)
      ticking = true
    }
  }

  window.addEventListener("scroll", requestScrollUpdate)
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && mobileMenu) {
    mobileMenu.classList.add("hidden")
  }
})

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  // Close mobile menu with Escape key
  if (e.key === "Escape" && mobileMenu && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden")
  }
})

// Console message for developers
console.log("%cIntervue Website Loaded Successfully!", "color: #3b82f6; font-size: 16px; font-weight: bold;")
console.log("%cBuilt with vanilla HTML, CSS, and JavaScript + Lucide Icons", "color: #6b7280; font-size: 12px;")

// Global function for FAQ toggle (accessible from HTML onclick if needed)
window.toggleFAQ = toggleFAQ

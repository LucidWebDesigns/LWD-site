document.addEventListener('DOMContentLoaded', () => {
    // const faqContainer = document.querySelector('.faq-items');

    const faqData = [
    {
        question: "How soon can I expect a response?",
        answer: "We typically respond within 24-48 hours during business days."
    },
    {
        question: "Do you offer free consultations?",
        answer: "Yes, we're happy to offer a free initial consultation to discuss your project."
    },
    {
        question: "What services do you offer?",
        answer: "We offer a range of web development services, including custom website design, e-commerce solutions, website maintenance, SEO optimization, and more. Contact us to discuss how we can help with your specific project."
    },
    {
        question: "How much do your services cost?",
        answer: "Our pricing varies depending on the scope and complexity of the project. We offer both flat-rate and subscription-based pricing models. Contact us for a free consultation and a customized quote."
    },
    {
        question: "How long does it take to complete a project?",
        answer: "The timeline for a project depends on its complexity. A simple brochure website can take 2-4 weeks, while more complex sites, such as e-commerce platforms, may take several months."
    },
    {
        question: "Do you offer website maintenance after the site is launched?",
        answer: "Yes, we offer ongoing website maintenance and support packages to ensure your site stays up-to-date, secure, and running smoothly."
    },
    {
        question: "Can you help with SEO for my website?",
        answer: "Absolutely! We provide on-page SEO optimization services as part of our web development packages and offer additional SEO services to improve your website's visibility in search engines."
    },
    {
        question: "What if I need changes to my website after it's completed?",
        answer: "We're happy to assist with any changes or updates you need after your website is launched, with options including hourly rates or maintenance packages."
    },
    {
        question: "Do you work with clients outside of Austin?",
        answer: "Yes, we work with clients all over the country and internationally. We are equipped to handle projects remotely using various communication tools."
    },
    {
        question: "What platforms do you use for website development?",
        answer: "We specialize in using modern web development technologies like 11ty and other static site generators, choosing the best platform based on the specific requirements of your website."
    },
    {
        question: "Do you provide content writing services?",
        answer: "While our primary focus is on web development, we can collaborate with professional content writers or guide you in creating content that aligns with your brand."
    },
    {
        question: "How do I get started with a project?",
        answer: "Simply contact us via the form on this page, or email us directly at info@lucidwebdesigns.com. We'll schedule a consultation to discuss your project and provide you with a customized proposal."
    },
    {
        question: "Do you provide training on how to manage the website after it’s built?",
        answer: "Yes, we provide training sessions to help you manage and update your website, ensuring you can confidently handle basic updates and maintenance tasks."
    },
    {
        question: "What is your design process?",
        answer: "Our design process starts with a thorough consultation to understand your needs and goals. We then create wireframes and mockups, refining them based on your feedback before proceeding to development, testing, and launch."
    },
    {
        question: "Do you offer any guarantees for your work?",
        answer: "We stand by the quality of our work and offer a satisfaction guarantee. If you're not completely satisfied, we'll work with you to make it right. Our maintenance packages include ongoing support to ensure your site continues to perform well."
    },
    {
        question: "Can you integrate third-party tools and services into my website?",
        answer: "Yes, we can integrate a wide range of third-party tools and services, including payment gateways, CRMs, and email marketing platforms, to enhance your website's functionality."
    },
    {
        question: "What if I don't have a domain name or hosting yet?",
        answer: "No problem! We can assist you in selecting and registering a domain name, as well as setting up hosting. We offer hosting solutions as part of our subscription plans, ensuring everything is managed in one place."
    }
    ];


  faqData.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');
    
    const question = document.createElement('h3');
    question.textContent = faq.question;
    
    const answer = document.createElement('p');
    answer.textContent = faq.answer;
    
    faqItem.appendChild(question);
    faqItem.appendChild(answer);
    faqItem.addEventListener("click", function () {
        const items = document.querySelectorAll(".faq-item");
        // Check if the clicked item already has 'view-faq' class
        const isActive = this.classList.contains("view-faq");

        // Remove 'view-faq' class from all faq-items
        items.forEach(i => i.classList.remove("view-faq"));
        
        // If the clicked item was not active, add 'view-faq' class to it
        if (!isActive) {
        this.classList.add("view-faq");
        }
    });
    
    // faqContainer.appendChild(faqItem);
  });
    


});



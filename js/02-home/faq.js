document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const icon = item.querySelector(".faq-icon i");

        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");

            // Fermer toutes les FAQ
            faqItems.forEach(otherItem => {
                otherItem.classList.remove("is-open");

                const otherIcon = otherItem.querySelector(".faq-icon i");
                if (otherIcon) {
                    otherIcon.classList.remove("fa-minus");
                    otherIcon.classList.add("fa-plus");
                }
            });

            // Si l'élément n'était pas ouvert, on l'ouvre
            if (!isOpen) {
                item.classList.add("is-open");

                if (icon) {
                    icon.classList.remove("fa-plus");
                    icon.classList.add("fa-minus");
                }
            }
        });
    });

});

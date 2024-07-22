const arizaRublBlock = document.getElementById("ariza-rubl");
const arizaDayBlock = document.getElementById("ariza-day");
const arizaRange = document.getElementById("ariza__range");
const arizaRangeDay = document.getElementById("ariza__day");
const ariza = document.getElementById("ariza");
const arizaClose = document.getElementById("ariza__close");
const arizaNext = document.getElementById("ariza-next");
const arizaResult = document.getElementById("ariza__result");
const menuItems = document.querySelectorAll(".menu__items .menu__item");
const arizaAccept = document.getElementById("ariza-accept");
const arizaNextInDay = document.getElementById("ariza-next_in-day");
const contact = document.getElementById("contact");
const contactClose = document.getElementById("contact__close");
const formContact = document.getElementById("form__contact");
const thanks = document.getElementById("thanks");
const thanksClose = document.getElementById("thanks__close");
const calculator = document.getElementById("calculator");
const calculatorClose = calculator.querySelector("#calculator__close");
const calculatorNext = calculator.querySelector("#calculator-next");
const office = document.getElementById("office");
const company = document.getElementById("company");
const companyClose = document.getElementById("company__close");
const faq = document.getElementById("faq");
const faqClose = document.getElementById("faq__close");
const faqAccordionItems = document.querySelectorAll("#faq__accordion-item");
const callmen = document.getElementById("callmen");
const callmenClose = document.getElementById("callmen__close");
const callmenThanks = document.getElementById("callmen__thanks");
const callmenThanksClose = document.getElementById("callmen__thanks--close");
const personalDatas = document.querySelectorAll("#personal_data");
const agreement = document.getElementById("agreement");

// Menu click
menuItems.forEach((menu, i) => {
  menu.addEventListener("click", () => {
    switch (i) {
      case 0:
        ariza.classList.add("show");
        break;
      case 1:
        calculator.classList.add("show");
        break;
      case 2:
        office.classList.add("show");
        break;
      case 3:
        company.classList.add("show");
        break;
      case 4:
        faq.classList.add("show");
        break;
      case 5:
        callmen.classList.add("show");
        break;
    }
  });
});

// Ariza close
arizaClose.addEventListener("click", () => {
  ariza.classList.remove("show");
});

// Arice checked true => next btn
document
  .getElementById("ariza-checkbox")
  .addEventListener("click", function () {
    if (this.checked) {
      arizaNext.disabled = false;

      // day 2
      document.getElementById("ariza-checkbox_day").checked = true;
      arizaNextInDay.disabled = false;

      // ariza form 3
      document.getElementById("contact-checkbox").checked = true;
      document.getElementById("apply-now").disabled = false;
    } else {
      arizaNext.disabled = true;

      // day 2
      document.getElementById("ariza-checkbox_day").checked = false;
      arizaNextInDay.disabled = true;

      // ariza form 3
      document.getElementById("contact-checkbox").checked = false;
      document.getElementById("apply-now").disabled = true;
    }
  });
document
  .getElementById("ariza-checkbox_day")
  .addEventListener("click", function () {
    if (this.checked) {
      arizaNextInDay.disabled = false;

      // rubl 1
      document.getElementById("ariza-checkbox").checked = true;
      arizaNext.disabled = false;

      // ariza form 3
      document.getElementById("contact-checkbox").checked = true;
      document.getElementById("apply-now").disabled = false;
    } else {
      arizaNextInDay.disabled = true;

      // rubl 1
      document.getElementById("ariza-checkbox").checked = false;
      arizaNext.disabled = true;

      // ariza form 3
      document.getElementById("contact-checkbox").checked = false;
      document.getElementById("apply-now").disabled = true;
    }
  });

document
  .getElementById("contact-checkbox")
  .addEventListener("click", function () {
    if (this.checked) {
      document.getElementById("apply-now").disabled = false;

      // rubl 1
      document.getElementById("ariza-checkbox").checked = true;
      arizaNext.disabled = false;

      // day 2
      document.getElementById("ariza-checkbox_day").checked = true;
      arizaNextInDay.disabled = false;
    } else {
      document.getElementById("apply-now").disabled = true;

      // rubl 1
      document.getElementById("ariza-checkbox").checked = false;
      arizaNext.disabled = true;

      // day 2
      document.getElementById("ariza-checkbox_day").checked = false;
      arizaNextInDay.disabled = true;
    }
  });
document
  .getElementById("callmen-checkbox_day")
  .addEventListener("click", function () {
    if (this.checked) {
      document.getElementById("send-message").disabled = false;
    } else {
      document.getElementById("send-message").disabled = true;
    }
  });

// Ariza next btn
arizaNext.addEventListener("click", () => {
  arizaResult.classList.add("show");
});

arizaAccept.addEventListener("click", () => {
  arizaResult.classList.remove("show");

  arizaRublBlock.classList.add("hidden");
  arizaDayBlock.classList.remove("hidden");
});

// Open contact
arizaNextInDay.addEventListener("click", () => {
  contact.classList.add("show");
});
// Close contact
contactClose.addEventListener("click", () => {
  contact.classList.remove("show");
});

// form Submit
formContact.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
  thanks.classList.add("show");
});

// calculator close
calculatorClose.addEventListener("click", () => {
  calculator.classList.remove("show");
});

// company close
companyClose.addEventListener("click", () => {
  company.classList.remove("show");
});

// FAQ close
faqClose.addEventListener("click", () => {
  faq.classList.remove("show");
});

// FAQ accordion
faqAccordionItems.forEach((item, i) => {
  item.addEventListener("click", function () {
    faqAccordionItems.forEach((acc, j) => {
      if (i !== j) {
        acc.querySelector("span").classList.remove("bold");
        acc.querySelector("img").classList.remove("rotate");
        acc
          .querySelector(".faq__accordion--item_content")
          .classList.remove("open");
      } else {
        item.querySelector("img").classList.toggle("rotate");
        item.querySelector("span").classList.toggle("bold");
        this.querySelector(".faq__accordion--item_content").classList.toggle(
          "open"
        );
      }
    });
  });
});

// Call meneger => Связьс менеджером
callmenClose.addEventListener("click", () => {
  callmen.classList.remove("show");
});

callmen.querySelector("#callmen__form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();

  callmenThanks.classList.add("show");
});

callmenThanksClose.addEventListener("click", () => {
  callmenThanks.classList.remove("show");
  callmen.classList.remove("show");
});

// Thanks page close
thanksClose.addEventListener("click", () => {
  thanks.classList.remove("show");
  contact.classList.remove("show");

  ariza.classList.remove("show");
});

// Calculator next => form
calculatorNext.addEventListener("click", () => {
  calculator.classList.remove("show");
  contact.classList.add("show");
});

function formatValue(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

personalDatas.forEach((btn) => {
  btn.addEventListener("click", () => {
    agreement.classList.add("show");
  });
});

agreement.querySelectorAll("#agreement__close").forEach((btn) => {
  btn.addEventListener("click", () => {
    agreement.classList.remove("show");
  });
});

const openAccordion = (index) => {
  const accordion = document.getElementsByClassName("accordion-item");

  for (let i = 0; i < accordion.length; i++) {
    const content = accordion[i].querySelector(".accordion-content");
    const heading = accordion[i].querySelector("div");

    if (index === i) {
      const isOpen = accordion[index].classList.toggle("open");
      accordion[index].classList.toggle("rotate");
      heading.setAttribute("aria-expanded", isOpen);
      if (isOpen) {
        content.style.height = content.scrollY + "px";
      } else {
        // content.style.height = "0px";
      }
    } else {
      accordion[i].classList.remove("open");
      accordion[i].classList.remove("rotate");
      heading.setAttribute("aria-expanded", "false");
      // content.style.height = "0px";
    }
  }
};

document
  .querySelectorAll(".accordion-item .accordion-title")
  .forEach((heading, index) => {
    heading.addEventListener("click", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        openAccordion(index);
      }
    });
  });

office.querySelector("#office__close").addEventListener("click", () => {
  office.classList.remove("show");
});

const progressElements = document.querySelectorAll('input[type="range"]');

progressElements.forEach(function (element) {
  element.addEventListener("input", function () {
    let value = ((this.value - this.min) / (this.max - this.min)) * 100;
    let value2 = this.value;

    this.parentNode.querySelector(".count span").textContent =
      formatValue(value2);
    this.style.background =
      "linear-gradient(to right, #fff 0%, #fff " +
      value +
      "%, #7B7B7B " +
      value +
      "%, #7B7B7B 100%)";

    calculateLoan();
  });
});

function calculateLoan() {
  let sum = parseFloat(document.querySelector("input[name=sum]").value);
  let percent = parseFloat(document.querySelector("input[name=bet]").value);
  let days = parseInt(document.querySelector("input[name=limitation]").value);

  // Convert annual percentage rate to daily rate
  let dailyRate = percent / 100 / 365;

  // Calculate overpayment and total payment
  let overPayment = sum * dailyRate * days;
  let totalPayment = sum + overPayment;

  // Calculate monthly payment considering varying month lengths
  let months = days / 30.42; // average days in a month
  let perMonth = totalPayment / months;

  // Update the document with calculated values
  document.querySelector(".everyMonthsPrice span").textContent =
    perMonth.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  document.querySelector(".overPayment span").textContent =
    overPayment.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  document.querySelector(".totalPayments span").textContent =
    totalPayment.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
}

$(document).ready(function () {
  $("#phone").inputmask("+7(999)-999-9999");
  $("#phone-number").inputmask("+7(999)-999-9999");
});

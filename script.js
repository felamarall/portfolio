const elements = document.querySelectorAll(".reveal");

function reveal() {
  const windowHeight = window.innerHeight;

  elements.forEach((el, i) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      setTimeout(() => {
        el.classList.add("active");
      }, i * 100); // delay em cascata
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/* FORM */
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nome: form.querySelector("input[type='text']").value,
    email: form.querySelector("input[type='email']").value,
    mensagem: form.querySelector("textarea").value
  };

  try {
    const res = await fetch("http://localhost:3000/contato", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.msg);
    form.reset();

  } catch {
    alert("Erro ao enviar.");
  }
});
const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    const wa = document.querySelector("#wa").value;
    if (wa.length < 10) {
        e.preventDefault();
        alert("Nomor WhatsApp minimal 10 digit")
    }
});
    

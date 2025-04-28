document.getElementById("budget-btn").addEventListener("click", function() {
    document.getElementById("popup-box").style.display = "block";
});

function closePopup() {
    document.getElementById("popup-box").style.display = "none";
}

function redirectUser() {
    let budget = document.getElementById("budget").value;
    
    if (budget) {
        window.location.href = `budget-results.html?budget=${budget}`;
    } else {
        alert("How much do you wish for a phone?");
    }
}

fetch("https://api-mobilespecs.azharimm.dev/latest")
.then(response => response.json())
.then(data => console.log("Phones:", data))
.catch(error => console.error("Error fetching phone data:", error));

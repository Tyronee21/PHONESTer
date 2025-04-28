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
        alert("Please enter a budget amount.");
    }
}

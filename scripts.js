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

(async () => {
        const where = encodeURIComponent(JSON.stringify({
          "Cell_Phone_Brand": {
            "$exists": true
          }
        }));
        const response = await fetch(
          `https://parseapi.back4app.com/classes/Cell_Phone_Models_By_Brand?count=1&limit=1000&order=Cell_Phone_Brand&where=${where}`,
          {
            headers: {
              'X-Parse-Application-Id': 'MEqvn3N742oOXsF33z6BFeezRkW8zXXh4nIwOQUT', // This is the fake app's application id
              'X-Parse-Master-Key': 'uZ1r1iHnOQr5K4WggIibVczBZSPpWfYbSRpD6INw', // This is the fake app's readonly master key
            }
          }
        );
        const data = await response.json(); // Here you have the data that you need
        console.log(JSON.stringify(data, null, 2));
      })();

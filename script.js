function calculateAlimony() {
    let age = document.getElementById("age").value;
    let education = document.getElementById("education").value;
    let reason = document.getElementById("reason").value;
    let job = document.getElementById("job").value;
    let children = document.getElementById("children").value;
    let duration = document.getElementById("duration").value;
    let expenses = document.getElementById("expenses").value;
    let spouseIncome = document.getElementById("spouseIncome").value;
    let livingStandard = document.getElementById("livingStandard").value;
    let health = document.getElementById("health").value;
    let property = document.getElementById("property").value;
    let alimony = 0;
    
    if (job === "no") alimony += 200000;
    if (age < 30) alimony += 100000;
    if (education === "higher") alimony += 300000;
    if (reason !== "mutual") alimony += 500000;
    if (children > 0) alimony += children * 100000;
    if (duration > 5) alimony += duration * 50000;
    if (expenses > 20000) alimony += expenses * 0.5;
    if (spouseIncome > 50000) alimony += spouseIncome * 0.2;
    if (livingStandard === "high") alimony += 500000;
    if (health === "poor") alimony += 300000;
    if (property === "substantial") alimony -= 200000;
    
    let bonus = Math.floor(Math.random() * 100000);
    alimony += bonus;
    
    document.getElementById("result").innerText = `Estimated Alimony: ₹${alimony} (Includes bonus: ₹${bonus})`;
}

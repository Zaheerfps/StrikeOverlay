async function loadData() {
    try {
        const response = await fetch("data.json?t=" + Date.now());
        const data = await response.json();

        document.getElementById("rank").textContent = data.rank;
        document.getElementById("rp").textContent = data.rp;
        document.getElementById("wins").textContent = data.wins;
        document.getElementById("kills").textContent = data.kills;
        document.getElementById("deaths").textContent = data.deaths;
        document.getElementById("winStreak").textContent = data.winStreak;

        const kd =
            data.deaths === 0
                ? data.kills.toFixed(2)
                : (data.kills / data.deaths).toFixed(2);

        document.getElementById("kd").textContent = kd;

    } catch (err) {
        console.error("Kunne ikke indlæse data.json", err);
    }
}

loadData();

// Opdater hvert sekund
setInterval(loadData, 1000);

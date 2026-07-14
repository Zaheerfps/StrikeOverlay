
// ==========================
// Blood Strike Overlay
// Sprint 1
// ==========================

// Demo data
const overlayData = {
    player: "Zaheer",
    kills: 12,
    wins: 48,
    kd: 6.38,
    viewers: 127
};

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    updateOverlay();

    // Demo animation
    setInterval(() => {

        overlayData.kills++;

        overlayData.viewers += Math.floor(Math.random() * 3);

        updateOverlay();

    }, 5000);

});

function updateOverlay() {

    setText("playerName", overlayData.player);
    setText("kills", overlayData.kills);
    setText("wins", overlayData.wins);
    setText("kd", overlayData.kd.toFixed(2));
    setText("viewers", overlayData.viewers);

}

function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}

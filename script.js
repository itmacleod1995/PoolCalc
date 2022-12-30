function calc() {
    var chem = document.getElementById("chemNamewel").value;
    /**
     * Calculate Bicarbonate level with the assumption that you want it at 100
     */
    if (chem == "bicarb" || chem == "sodium bicarbonate") {
        var change = document.getElementById("desiredChange").value;
        var result = document.getElementById("res");

        var x = (1.4 * 20 * (change / 10)).toFixed(2);
        result.textContent = x + "lbs of bicarb";
    }
}
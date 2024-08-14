function mudarCor() {
    document.getElementById('div').style.backgroundColor = "red";
}

function corOrigial() {
    document.getElementById('div').style.backgroundColor = "grey";
}

document.getElementById('div').addEventListener('mouseover', mudarCor)
document.getElementById('div').addEventListener('mouseout', corOrigial)
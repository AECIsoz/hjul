let newYearText = document.getElementById('new-year-text');

let changeText = function() {
    if (window.innerWidth < 1024) {
        newYearText.innerHTML = 'Nyår på Kivik';
        newYearText.style.fontSize = '20px';
        newYearText.style.gridArea = '4 / 18 / span 1 / span 8'
    }
    
}

newYearText.onmouseover = changeText;
const changeNavItemColor = (e)=>{
    e.style.backgroundColor = "#ffffff";
    e.style.color = "#278cc9";
}

const resetNavItemColor = (e)=>{
    e.style.backgroundColor = "#278cc9";
    e.style.color = "#ffffff";
    document.getElementsByClassName('fa-solid fa-phone')[0].style.color = "#ffffff";
    document.getElementsByClassName('item_appointment')[0].style.backgroundColor = " rgb(65, 65, 65)";
}

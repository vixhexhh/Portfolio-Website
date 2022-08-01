console.log("js working");
document.querySelector('.close').style.display = 'none';
document.querySelector('.sidebarbuttons').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarfade');
    if(document.querySelector('.sidebar').classList.contains('sidebarfade')){        
        document.querySelector('.threeline').style.display = 'inline';
        document.querySelector('.close').style.display = 'none';
    }
    else{
        document.querySelector('.threeline').style.display = 'none';
        document.querySelector('.close').style.display = 'inline';
    }
});
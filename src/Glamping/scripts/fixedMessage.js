window.onscroll = function(){checkfixed();}
function checkfixed(){

    try{
        var BannerText = document.querySelectorAll('.banner-square')[0];
        if(window.scrollY > 150){
            BannerText.classList.remove('initial');
        }else{
            BannerText.classList.add('initial');
        }
    }catch(error){
    }
}
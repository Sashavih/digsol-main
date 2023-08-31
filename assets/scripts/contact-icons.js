let whats = document.querySelector(".whats");
let mail = document.querySelector(".mail");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    whats.style.display = "block";
    mail.style.display = "block";
  } else {
    whats.style.display = "none";
    mail.style.display = "none";
  }
  if(window.innerWidth <= 480){
    mail.style.display = "none";
  }
}

$('body').on('click', '.whats', function(e){
  window.open('http://wa.me/79037293137','_blank');
})
$('body').on('click', '.mail', function(e){
  document.location.href = 'mailto:support@digsol.tech?subject=Заявка с сайта';
  // window.open('mailto:support@digsol.tech?subject=Заявка с сайта');
})

const message = `sorryy tak tulis kat kotakk kau :( aku tulis kat sini jelah. goodluck on your exam! kau bolehh buatt. papepun result yang keluar, kau dah buat yang terbaik. Thanks sudi berkawan dengan aku even aku tak sempurna jadi kawan terbaik untuk kau. terimakasih teman aku main pubg sampai pagi HAHA.. rinduu. aku appreciate sngt". aku tak pandai bagi kata" untuk happy kau. tapi aku harap kau selalu happy dengan apa yg kau buat. aku doakan kau capai target kau.. goodluck for your spm, i wish all the best, dont giveup ily`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
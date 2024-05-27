const again = document.querySelector(".again");
const num = document.querySelector(".num");
const input = document.querySelector(".input");
const check = document.querySelector(".check");
const head = document.querySelector(".head");
const attemp = document.querySelector(".attemp");
const recod = document.querySelector(".recod");
let um = Math.floor(Math.random() * 20);
// num.textContent = um;
console.log(um);
function agains() {
    check.addEventListener("click", () => {
        function recodd() {
            let incremente = attemp.textContent--;
            let score = recod.textContent++;
            let count = 0;
            count += score;
            score.textContent == count;
        }
        recodd();
        if (um == input.value) {
            num.style.backgroundColor = "green";
            num.textContent = `${um} you win`;
        } else {
            num.style.backgroundColor = "red";
            num.textContent = "nocoorect";
        }
    });
}

agains();

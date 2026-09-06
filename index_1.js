/* ─────────────────────────────────────────────
   여기서부터가 JavaScript입니다. 3주차에 배웁니다.
   지금은 "버튼을 누르면 글자가 바뀐다" 정도만 보시면 됩니다.
───────────────────────────────────────────── */

// 1. '출석하기' 버튼을 찾는다
//////
const button = document.getElementById("attend");

// 2. 그 버튼이 눌리는 순간을 기다린다
button.addEventListener("click", function () {
  // 3. 눌리면 글자와 모양을 바꾼다
  button.textContent = "출석 완료 ✓";
  button.classList.add("done");
});

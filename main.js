const modalElement = document.querySelector(".modal");
const btnShow = document.querySelector(".confirm-btn");
const gridTitle = document.querySelector(".grid-title");
const grid = document.querySelector(".grid");
const teamTitle = document.querySelector(".teams");

const buttonSubmit = document.querySelector("#submit");
const changeLayoutBtn = document.querySelector("#changeLO");
const listTeams = [
  {
    name: "A1K45",
  },
  {
    name: "A13K45",
  },
  {
    name: "A2 + A3 (K40)",
  },
  {
    name: "A3K43",
  },
  {
    name: "A2K43",
  },
  {
    name: "A9K43",
  },
  {
    name: "A1K44",
  },
  {
    name: "A2K42",
  },
  {
    name: "A1K41",
  },
  {
    name: "A2K44",
  },
  {
    name: "LQ K38",
  },
  {
    name: "LQ K37",
  },
];

const leagues = [
  {
    name: "Bảng A",
  },
  {
    name: "Bảng B",
  },
  {
    name: "Bảng C",
  },
];

function renderTeams(listTeams) {
  var htmls = listTeams.map((team) => {
    return `
            <div class="content-left-item">${team.name}</div>
        `;
  });
  var html = htmls.join("");
  document.querySelector(".content-left").innerHTML = html;
}

function renderLeagues(leagues) {
  var htmls = leagues.map((league) => {
    return `
        <div class="content-right-item">
           <h3 class="league-name">${league.name}</h3>
           <div class="list-team"></div>
       </div>
        `;
  });
  var html = htmls.join("");
  document.querySelector(".content-right").innerHTML = html;
}
let aCopy = [];
let d = 0;
let r = 0;
function randomTeams() {
  d++;
  if (d <= 12) {
    let leagues = document.querySelectorAll(".list-team");
    // let newarrayTeams = Array.prototype.slice.call(leagues);

    let indexTeam = Math.floor(Math.random() * listTeams.length);
    let result = listTeams[indexTeam].name;

    // kiểm tra nếu random rồi thì xóa luôn phần tử đã random trúng ra khỏi mảng
    if (listTeams[indexTeam]) {
      var newListTeams = listTeams.splice(indexTeam, 1);
      renderTeams(listTeams);
    }
    // Xử lí hạn chế random trùng bảng liên tục


    do {
      r++;
      // aCopy.push(r);
      // console.log(aCopy);
      // console.log(r);
      if (r > 2) {
        r =0;
      }
    } while (document.getElementsByClassName(`countTeam${r}`).length > 3);
    // đẩy các team vào thẻ chứa
    let divElement = document.createElement("div");
    divElement.className = "team";
    divElement.classList.add(`countTeam${r}`);
    divElement.innerHTML = result;
    leagues[r].appendChild(divElement);
  } else {
    alert("Đủ rồi bạn ơii :))");
  }
}

// Hàm ẩn hiện loader
function showHideLoader() {
  modalElement.classList.add("show");
  setTimeout(function () {
    modalElement.classList.remove("show");
  }, 2000);
}
// handle khi click submit button
buttonSubmit.addEventListener("click", () => {
  changeLayoutBtn.style.display = "block";
  showHideLoader();
  setTimeout(function () {
    randomTeams();
  }, 2000);
});
// handle khi click change layout button
changeLayoutBtn.addEventListener("click", () => {
  showHideLoader();
  gridTitle.classList.add("changeCol");
  grid.classList.add("changeCol");
  teamTitle.style.display = "none";
});
renderTeams(listTeams);
renderLeagues(leagues);

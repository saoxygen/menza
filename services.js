function serviceSwitch(id) {
  const divs = document.querySelectorAll("#full_service .service");

  divs.forEach((div, index) => {
    //console.log(div);
    if (!divs[index].classList.toString().includes("hideDivs")) {
      divs[index].classList.add("hideDivs");
    }
  });

  console.log(id.toString());

  document.getElementById(id.toString()).classList.remove("hideDivs");
}

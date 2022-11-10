

    function Search(item){
        var car = document.getElementsByClassName("car");
        for (i = 0;i < car.length; i++){
            if (((car[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
                car[i].style.display = "";
                } else {
                    car[i].style.display = "none";
                    }
        }
}
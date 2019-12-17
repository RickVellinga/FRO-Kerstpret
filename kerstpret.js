const fotos = [
    /* 1 */ ["https://cdn.pixabay.com/photo/2017/01/28/16/18/christmas-2015729_960_720.jpg", true], // VERTICAL IMAGE!!!
    /* 2 */ ["https://cdn.pixabay.com/photo/2017/07/28/00/57/bank-2547356_1280.jpg", false],
    /* 3 */ ["https://cdn.pixabay.com/photo/2019/12/12/12/25/advent-4690556_1280.jpg", false],
    /* 4 */ ["https://cdn.pixabay.com/photo/2019/12/09/13/17/candle-4683512_1280.jpg", false],
    /* 5 */ ["https://cdn.pixabay.com/photo/2018/12/02/23/43/christmas-tree-3852471__340.jpg", false],
    /* 6 */ ["https://cdn.pixabay.com/photo/2018/12/02/23/42/christmas-tree-3852469__340.jpg", false],
    /* 7 */ ["https://cdn.pixabay.com/photo/2019/12/07/14/57/christmas-tree-4679463__340.jpg", false],
    /* 8 */ ["https://cdn.pixabay.com/photo/2017/12/16/22/08/christmas-3023415_960_720.jpg", true], // VERTICAL IMAGE!!!
    /* 9 */ ["https://cdn.pixabay.com/photo/2018/12/14/19/51/christmas-images-3875706__340.jpg", false],
    /* 10 */ ["https://cdn.pixabay.com/photo/2016/12/18/15/44/christmas-1916050__340.jpg", false],
];

let wrapper = document.getElementById(`wrapper`);
for(i=0;i<fotos.length;i++){
    let foto = document.createElement(`img`);
    foto.setAttribute(`src`, fotos[i][0]);
    foto.setAttribute(`alt`, `${fotos[i]}e kerstfoto.`);
    foto.setAttribute(`width`, `100%`);
    foto.setAttribute(`heigth`, `100%`);

    if(fotos[i][1] === true){
        foto.setAttribute(`id`, `verticalSpan`);
        foto.setAttribute(`style`, `margin: auto;`)
    }

    wrapper.appendChild(foto);
}

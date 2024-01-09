$(document).ready(() => {
    const quantidade = 6
    let contador = 0

    for (let j = 1; j < quantidade + 1; j++) {
        contador = contador + 1
        let projeto = `
            <div class="card1pt2">
                <div class="up">
                    <div class="icone">
                        <img src="img/book-open-svgrepo-com.svg" alt="icone de livro">
                    </div>
                    <div class="titlesUp">
                        <h1>00${contador}</h1>
                        <h1>Lorem ipsum dolor</h1>
                        <div class="subDn">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quia voluptas dolorem blanditiis tempore rem commodi.</p>
                        </div>
                    </div>  
                </div> 
            </div>
        `
        $('.cardsPart').append(projeto);
    }
});

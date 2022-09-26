class Prato {
    constructor(nome,imagem, descricao, preco){
        this.nome = nome,
        this.imagem = imagem,
        this.descricao = descricao,
        this.preco = preco
    }
    criarPrato(){
        const view = document.createElement("div");
        view.classList.add("opcao");
        view.addEventListener("click", () => {
            this.selecionarPrato(view, this.nome, this.preco);
        });
        view.innerHTML = `
                <img src="${this.imagem}" />
                <div class="titulo">${this.nome}</div>
                <div class="descricao">${this.descricao}</div>
                <div class="fundo">
                    <div class="preco">R$ ${this.preco.toFixed(2)}</div>
                    <div class="check">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </div>
            `;
        const pratosContainer = document.querySelector(".opcoes.prato");
        pratosContainer.appendChild(view)
    }

    selecionarPrato(elemento, nome, preco){
        const selecionado = document.querySelector(".prato .selecionado");
        if (selecionado !== null) {
          selecionado.classList.remove("selecionado");
        }
        elemento.classList.add("selecionado");
      
        let pratoSelecionado = {
          nome,
          preco,
        };
        return pratoSelecionado
    }  
}

class Bebida {
    constructor(nome,imagem, descricao, preco){
        this.nome = nome,
        this.imagem = imagem,
        this.descricao = descricao,
        this.preco = preco
    }
    criaBebida(){
        const view = document.createElement("div");
        view.classList.add("opcao");
        view.addEventListener("click", () => {
          this.selecionarBebida(view, this.nome, this.preco);
        });
        view.innerHTML = `
              <img src="${this.imagem}" />
              <div class="titulo">${this.nome}</div>
              <div class="descricao">${this.descricao}</div>
              <div class="fundo">
                  <div class="preco">R$ ${this.preco.toFixed(2)}</div>
                  <div class="check">
                      <ion-icon name="checkmark-circle"></ion-icon>
                  </div>
              </div>
          `;
        const bebidasContainer = document.querySelector(".opcoes.bebida");
        bebidasContainer.appendChild(view)      
    }

    selecionarBebida(elemento, nome, preco){
        const selecionado = document.querySelector(".bebida .selecionado");
        if (selecionado !== null) {
          selecionado.classList.remove("selecionado");
        }
        elemento.classList.add("selecionado");
      
        let bebidaSelecionada = { nome, preco };
        return bebidaSelecionada
    }
}

class Sobremesa {
    constructor(nome,imagem, descricao, preco){
        this.nome = nome,
        this.imagem = imagem,
        this.descricao = descricao,
        this.preco = preco
    }

    criaSobremesa(){
        const view = document.createElement("div");
        view.classList.add("opcao");
        view.addEventListener("click", () => {
            this.selecionarSobremesa(view, this.nome, this.preco);
        });
        view.innerHTML = `
                <img src="${this.imagem}" />
                <div class="titulo">${this.nome}</div>
                <div class="descricao">${this.descricao}</div>
                <div class="fundo">
                    <div class="preco">R$ ${this.preco.toFixed(2)}</div>
                    <div class="check">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </div>
            `;
        const sobremesasContainer = document.querySelector(".opcoes.sobremesa");
        sobremesasContainer.appendChild(view);                             
    }
    selecionarSobremesa(elemento, nome, preco){

        const selecionado = document.querySelector(".sobremesa .selecionado");
        if (selecionado !== null) {
          selecionado.classList.remove("selecionado");
        }
        elemento.classList.add("selecionado");
      
        let sobremesaSelecionada = { nome, preco };            
    }
}

const prato1 = new Prato("Estrombelete de Frango","img/frango_yin_yang.png", "Um pouco de batata, um pouco de salada", 14.9)
const prato2 = new Prato("Asa de Boi","img/frango_yin_yang.png", "Com molho shoyu", 14.9)
const prato3 = new Prato("Carne de Monstro","img/frango_yin_yang.png", "Com batata assada e farofa", 14.9)
prato1.criarPrato()
prato2.criarPrato()
prato3.criarPrato()


const bebida1 = new Bebida("Coquinha gelada","img/coquinha_gelada.png","Lata 350ml",4.9)
const bebida2 = new Bebida("Caldo de Cana","img/coquinha_gelada.png","Lata 350ml",4.9)
const bebida3 = new Bebida("Corote Gelado","img/coquinha_gelada.png","Garrafa 400ml",4.9)
bebida1.criaBebida()
bebida2.criaBebida()
bebida3.criaBebida()
  
const sobre1 = new Sobremesa("Pudim","img/pudim.png","Gosto de doce de leite",7.9)
const sobre2 = new Sobremesa("Flam","img/pudim.png","Gosto de chocolate",7.9)
const sobre3 = new Sobremesa("Brigadeiro","img/pudim.png","3 unidades",7.9)
sobre1.criaSobremesa()
sobre2.criaSobremesa()
sobre3.criaSobremesa()


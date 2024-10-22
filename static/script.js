
let sanduiches = [
{ nome: 'X-TUDO', preco: 25.00, imagem: 'static/espetinho-1.jpg', ingredientes: 'HAMBÚRGUER, SALSICHA, PRESUNTO, MUÇARELA, TOMATE, ALFACE, BATATA PALHA, BACON, OVO, CHEDDAR' },
{ nome: 'X-BACON', preco: 17.00, imagem: 'static/espetinho-cupim.png', ingredientes: 'HAMBÚRGUER, BACON, PRESUNTO, MUÇARELA, TOMATE, ALFACE, CHEDDAR'},
{ nome: 'X-SALADA', preco: 13.00, imagem: 'static/espetinho-3.jpg', ingredientes:'HAMBÚRGUER, TOMATE, ALFACE, PRESUNTO, MUÇARELA, MILHO' },
{ nome: 'X-FRANGO', preco: 20.00, imagem: 'static/espetinho-4.webp', ingredientes: 'FRANGO, PRESUNTO, MUÇARELA, OVO, BATATA PALHA, TOMATE, ALFACE, MILHO' },
{nome: 'X-FRANBACON', preco:25.00, imagem: 'static/coxinha.png', ingredientes: 'FRANGO, BANCON, PRESUNTO, MUÇARELA, OVO, BATATA PALHA, TOMATE, ALFACE'},
{nome: 'X-VEGETARIANO', preco:12.00, imagem: 'static/bolinho-queijo.jpg', ingredientes: 'MUÇARELA, OVO, TOMATE, ALFACE, MILHO, CHEDDAR'},
{nome: 'X-LOMBO', preco:20.00, imagem: 'static/bolinho-carne.png', ingredientes: 'LOMBO, PRESUNTO, MUÇARELA, BATATA PALHA, TOMATE, ALFACE'},
{nome: 'X-CONTRA FILÉ', preco:25.00, imagem: 'static/xtudo.png',ingredientes: 'CONTRA FILÉ, PRESUNTO, MUÇARELA, TOMATE, ALFACE, MILHO'},
{nome: 'X-CONTRA FILÉ ESPECIAL', preco:32.00, imagem: 'static/calabresa.png', ingredientes: 'CONTRA FILÉ, PRESUNTO, BACON,  MUÇARELA, OVO, BATATA PALHA, TOMATE, ALFACE, CHEDDAR'},
{nome: 'HAMBURGUER ARTESANAL', preco:30.00, imagem: 'static/paopizza.png', ingredientes: 'HAMBURGUER ARTESENAL, PRESUNTO,BACON, MUÇARELA, OVO, BATATA PALHA, TOMATE, ALFACE, CHEDDAR'},
{nome: 'PÃO COM PERNIL', preco:20.00, imagem:'', ingredientes: 'PERNIL, MUÇARELA, TOMATE, MILHO, CEBOLA, CHEDDAR'}
]; 
let adicionais= [
{ nome: 'HAMBÚRGUER ARTESANAL 180G', preco: 8.00 },
{ nome: 'HAMBÚRGUER ARTESANAL 100G', preco: 4.00 },
{ nome: 'SALSISHA', preco: 2.00,},
{ nome: 'PRESUNTO', preco: 1.00 },
{ nome: 'MUÇARELA', preco: 2.00 },
{ nome: 'BACON', preco: 4.00,},
{ nome: 'OVO', preco: 2.00 },
{ nome: 'CHEDDAR', preco: 3.00,},
{ nome: 'CATUPIRY', preco: 3.00 },
{ nome: 'FRANGO', preco: 4.00,},
{ nome: 'LOMBO', preco: 4.00,},
]; 
let hotDogs = [
{ nome: 'HOT DOG', preco: 13.00, ingredientes: 'SALSICHA, MOLHO, PRESUNTO, MUÇARELA, TOMATE, MILHO, BATATA PALHA'} ,
{ nome: 'DOGÃO', preco: 20.00, ingredientes: 'SALSICHA, MOLHO, PRESUNTO, MUÇARELA, CHEDDAR, TOMATE, MILHO, BATATA PALHA'},
{ nome: 'HOT DOG INFANTIL', preco: 9.00, ingredientes: 'SALSICHA, MOLHO, PRESUNTO, MUÇARELA, TOMATE, MILHO, BATATA PALHA'},

]
function gerarProdutos() {
    const containerProdutos = document.getElementById('sanduiches');

    sanduiches.forEach(produto => {
        const col = document.createElement('div');
        col.classList.add('col-6', 'col-md-3');
        //<img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
        let collapseId = `collapse-${produto.nome.replace(/\s+/g, '-')}`; // substitui espaços por traços para ids válidos
        col.innerHTML = `
        <div class="card h-100">
            <div class="card-body adicional">
                    <h5 class="adicional card-title d-flex justify-content-between align-items-center">${produto.nome}
                    <button class="btn btn-link p-0 " data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}" >
                        <i class="bi bi-chevron-down fs-5" style="color: #000;" ></i>
                    </button>
                    </h5>
                <div class="collapse" id="${collapseId}">
                    <p class="adicional"><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
                    <p class="mb-4 adicional">${produto.ingredientes}</p>
                    <div class="d-flex justify-content-center" style="position: absolute; bottom: 0;">
                        <button class="btn btn-secondary me-2" onclick="alterarQuantidade('${produto.nome}', -1)">-</button>
                        <span id="quantidade-${produto.nome}">0</span>
                        <button class="btn btn-secondary ms-2" onclick="alterarQuantidade('${produto.nome}', 1)">+</button>
                    </div>
                </div>
               
                
            </div>
        </div>
    `;
        containerProdutos.appendChild(col);
    });
}

function gerarAdicionais() {
    const containerAdicionais = document.getElementById('adicionais');
        adicionais.forEach(adicional => {
        const colAdicionais = document.createElement('div');
        colAdicionais.classList.add('col-4', 'col-md-3');
        let collapseId = `collapse-${adicional.nome.replace(/\s+/g, '-')}`; // substitui espaços por traços para ids válidos

        colAdicionais.innerHTML = `
            <div class="card h-100" style="background-color: linear-gradient(#f1f07f, #ffee06);">
                <div class="card-body">
                    <h5 class="card-title adicional ajustetitulo d-flex justify-content-between">${adicional.nome}
                    <button class="btn btn-link p-0 " data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}" >
                        <i class="bi bi-chevron-down fs-5" style="color: #000;" ></i>
                    </button>
                    </h5>
                    <div class="collapse" id="${collapseId}">
                        <p  class="mb-4 adicional"><strong>Preço:</strong> R$ ${adicional.preco.toFixed(2)}</p>
                        <div class="d-flex justify-content-center" style="position: absolute; bottom: 0;">
                            <button class="btn btn-secondary me-2" onclick="alterarQuantidade('${adicional.nome}', -1)">-</button>
                            <span id="quantidade-${adicional.nome}">0</span>
                            <button class="btn btn-secondary ms-2" onclick="alterarQuantidade('${adicional.nome}', 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        containerAdicionais.appendChild(colAdicionais);
    });
}
function gerarHotDogs() {
    const containerHotDog = document.getElementById('hotDog');
    hotDogs.forEach(hotdog => {
    const colHotDog = document.createElement('div');
    colHotDog.classList.add('col-6', 'col-md-3');
    let collapseId = `collapse-${hotdog.nome.replace(/\s+/g, '-')}`; // substitui espaços por traços para ids válidos

    colHotDog.innerHTML = `
        <div class="card h-100" style="background-color: linear-gradient(#f1f07f, #ffee06);">
            <div class="card-body">
                <h5 class="card-title adicional d-flex justify-content-between ">${hotdog.nome}
                 <button class="btn btn-link p-0" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}" >
                        <i class="bi bi-chevron-down fs-5" style="color: #000;" ></i>
                    </button>
                </h5>
                <div class="collapse" id="${collapseId}">
                    <p class="adicional"><strong>Preço:</strong> R$ ${hotdog.preco.toFixed(2)}</p>
                    <p class="mb-4 adicional">${hotdog.ingredientes}</p>
                    <div class="d-flex justify-content-center" style="position: absolute; bottom: 0;">
                        <button class="btn btn-secondary me-2" onclick="alterarQuantidade('${hotdog.nome}', -1)">-</button>
                        <span id="quantidade-${hotdog.nome}">0</span>
                        <button class="btn btn-secondary ms-2" onclick="alterarQuantidade('${hotdog.nome}', 1)">+</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    containerHotDog.appendChild(colHotDog);
});
}
let pasteis = [
    {nome: 'PASTEL MISTO DE CARNE', preco:14.00, ingredientes:'CARNE, PRESUNTO, MUÇARELA, TOMATE, MILHO, CHEDDAR'},
    {nome: 'PASTEL MISTO DE FRANGO', preco:14.00, ingredientes:'FRANGO, PRESUNTO, MUÇARELA, TOMATE, MILHO, CHEDDAR'},
    {nome: 'PASTEL DE CARNE', preco:12.00, ingredientes:''},
    {nome: 'PASTEL DE FRANGO', preco:11.00, ingredientes:''},
    {nome: 'PASTEL DE PRESUNTO E MUSSARELA', preco:12.00, ingredientes:''},
    {nome: 'PASTEL DE QUEIJO', preco:15.00, ingredientes:''},
    {nome: 'PASTEL DE CALABRESA', preco:15.00, ingredientes:'CALABRESA, MUÇARELA, TOAMTE, CEBOLA, ORÉGANO'},
    {nome: 'PASTEL DE PIZZA', preco:14.00, ingredientes:'PRESUNTO, MUÇARELA, BACON, TOMATE, CHEDDAR, ORÉGANO'},
]
function gerarPasteis() {
    const containerPasteis = document.getElementById('pasteis');
        pasteis.forEach(pastel => {
        const colPasteis = document.createElement('div');
        colPasteis.classList.add('col-6', 'col-md-3');
        let collapseId = `collapse-${pastel.nome.replace(/\s+/g, '-')}`; // substitui espaços por traços para ids válidos
        if(pastel.ingredientes) {
            colPasteis.innerHTML = `
            <div class="card h-100" style="background-color: linear-gradient(#f1f07f, #ffee06);">
                <div class="card-body">
                    <h5 class="card-title adicional d-flex justify-content-between">${pastel.nome}
                        <button class="btn btn-link p-0 " data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}" >
                            <i class="bi bi-chevron-down fs-5" style="color: #000;" ></i>
                        </button>
                    </h5>
                    <div class="collapse" id="${collapseId}">
                        <p class="adicional"><strong>Preço:</strong> R$ ${pastel.preco.toFixed(2)}</p>
                        <p class="mb-4 adicional">${pastel.ingredientes}</p>
                        <div class="d-flex justify-content-center" style="position: absolute; bottom: 0;">
                            <button class="btn btn-secondary me-2" onclick="alterarQuantidade('${pastel.nome}', -1)">-</button>
                            <span id="quantidade-${pastel.nome}">0</span>
                            <button class="btn btn-secondary ms-2" onclick="alterarQuantidade('${pastel.nome}', 1)">+</button>
                        </div> 
                    </div>
                </div>
            </div>
        `;
        } else {
            colPasteis.innerHTML = `
            <div class="card h-100" style="background-color: linear-gradient(#f1f07f, #ffee06);">
                <div class="card-body">
                    <h5 class="card-title adicional d-flex justify-content-between">${pastel.nome}
                    <button class="btn btn-link p-0 " data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}" >
                            <i class="bi bi-chevron-down fs-5" style="color: #000;" ></i>
                        </button>
                    </h5>
                                    
                    <div class="collapse" id="${collapseId}">
                        <p class="mb-4 adicional"><strong>Preço:</strong> R$ ${pastel.preco.toFixed(2)}</p>
                        <div class="d-flex justify-content-center" style="position: absolute; bottom: 0;">
                            <button class="btn btn-secondary me-2" onclick="alterarQuantidade('${pastel.nome}', -1)">-</button>
                            <span id="quantidade-${pastel.nome}">0</span>
                            <button class="btn btn-secondary ms-2" onclick="alterarQuantidade('${pastel.nome}', 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }
        
        containerPasteis.appendChild(colPasteis);
    });
}
let bebidas = [
    {nome: 'FANTA UVA 2L', preco: 12.00},
    {nome: 'RED BULL', preco: 10.00},
    {nome: 'TONICA 350ML', preco: 4.00},
    {nome: 'H2OH! 500ML', preco: 5.00}
];

let categorias = {
    "MINEIRO": [
        {nome: 'MINEIRO 2L', preco: 10.00},
        {nome: 'MINEIRO 1.5L', preco: 8.00},
        {nome: 'MINEIRO 600ML', preco: 6.00},
        {nome: 'MINEIRO GARRAFA 200ML', preco: 3.00},
        {nome: 'MINEIRO LATA', preco: 4.00}
    ],
    "SUCO DE LARANJA" : [
        {nome:'SUCO DE LARANJA 500ML' , preco: 10.00 },
        {nome:'SUCO DE LARANJA 400ML' , preco: 7.00 },
        {nome:'SUCO DE LARANJA 300ML' , preco: 5.00},
    ],
    "FANTA LARANJA" : [
        {nome:'FANTA LARANJA 2L', preco: 12.00 },
        {nome:'FANTA LARANJA 1.5L' , preco: 9.00 },
        {nome:'FANTA LARANJA 1L' , preco: 8.00 },
    ],
    "SPRITE LIMÃO" : [
        {nome:'SPRITE LIMÃO 2L' , preco: 12.00},
        {nome:'SPRITE LIMÃO 1L' , preco: 8.00},
    ],
    "SCHWEPPES" : [
        {nome: 'SCHWEPPES 1.5L' , preco: 9.00 },
        {nome: 'SCHWEPPES 310ML', preco: 4.00 },
    ],
    "PEPSI": [
        {nome: 'PEPSI 2L', preco: 8.50},
        {nome: 'PEPSI BLACK 2L', preco: 8.50},
        {nome: 'PEPSI 1L', preco: 4.99},
        {nome: 'PEPSI BLACK 1L', preco: 4.99},
        {nome: 'PEPSI 350ML', preco: 4.00},
        {nome: 'PEPSI BLACK 350ML', preco: 4.00},
        {nome: 'PEPSI 200ML', preco: 2.00},
        {nome: 'PEPSI BLACK 200ML', preco: 2.00}
    ],
    "GUARANÁ": [
        {nome: 'GUARANÁ ANTARCTICA 2L', preco: 10.00},
        {nome: 'GUARANÁ ANTARCTICA 1L', preco: 4.99},
        {nome: 'GUARANÁ ANTARCTICA 500ML', preco: 5.00},
        {nome: 'GUARANÁ ANTARCTICA 200ML', preco: 2.00}
    ],
    "COCA-COLA": [
        {nome: 'COCA COLA 2L', preco: 12.00},
        {nome: 'COCA COLA 1.5L', preco: 9.00},
        {nome: 'COCA COLA 1L', preco: 8.00},
        {nome: 'COCA COLA 600ML', preco: 6.00},
        {nome: 'COCA COLA 310ML', preco: 4.00}
    ],
    "ANTARCTICA": [
        {nome: 'ANTARCTICA 300ML', preco: 3.50},
        {nome: 'ANTARCTICA 600ML', preco: 7.50},
        {nome: 'ANTARCTICA 1L', preco: 8.00},
        {nome: 'ANTARCTICA ORIGINAL 300ML', preco: 4.75},
        {nome: 'ANTARCTICA ORIGINAL 600ML', preco: 10.00},
        {nome: 'ANTARCTICA ORIGINAL 1L', preco: 12.00}
    ],
    "SKOL": [
        {nome: 'SKOL 300ML', preco: 3.50},
        {nome: 'SKOL 600ML', preco: 7.50},
        {nome: 'SKOL 1L', preco: 9.50}
    ],
    "BOHEMIA": [
        {nome: 'BOHEMIA PURO MALTE 300ML', preco: 3.50},
        {nome: 'BOHEMIA PURO MALTE 600ML', preco: 8.00},
        {nome: 'BOHEMIA PURO MALTE 1L', preco: 9.00}
    ],
    "BRAHMA": [
        {nome: 'BRAHMA 300ML', preco: 3.50},
        {nome: 'BRAHMA 600ML', preco: 8.50},
        {nome: 'BRAHMA 1L', preco: 9.50},
        {nome: 'BRAHMA DUPLO MALTE 300ML', preco: 4.00},
        {nome: 'BRAHMA DUPLO MALTE 600ML', preco: 9.00},
        {nome: 'BRAHMA DUPLO MALTE 1L', preco: 10.00}
    ],
    "BUDWEISER": [
        {nome: 'BUDWEISER 300ML', preco: 4.00},
        {nome: 'BUDWEISER 600ML', preco: 9.00},
        {nome: 'BUDWEISER 990ML', preco: 10.00}
    ],
    "SPATEN": [
        {nome: 'SPATEN 600ML', preco: 10.00}
    ],
    "STELLA ARTOIS": [
        {nome: 'STELLA ARTOIS 600ML', preco: 12.00}
    ]
};
function gerarBebidas() {
    
    
    const containerBebidas = document.getElementById('bebidas');

    // Função para gerar os cards das bebidas
    bebidas.forEach(bebida => {
        const col = document.createElement('div');
        col.classList.add('col-6', 'col-md-3', 'bebida', 'adicional');
        
        let collapseId2 = `collapse-${bebida.nome.replace(/\s+/g, '-')}`; // substitui espaços por traços para ids válidos
        col.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title adicional d-flex justify-content-between align-items-center">
                        ${bebida.nome}
                        <button class="btn btn-link fs-5 p-0" data-bs-toggle="collapse" data-bs-target="#${collapseId2}" aria-expanded="false" aria-controls="${collapseId2}">
                            <i class="bi bi-chevron-down"></i>
                        </button>
                    </h5>
                    <div id="${collapseId2}" class="collapse">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <p class="mb-0"><strong>R$ ${bebida.preco.toFixed(2)}</strong></p>
                            <div class="d-flex">
                                <button class="btn btn-secondary me-2" onclick="alterarQuantidade('${bebida.nome}', -1)">-</button>
                                <span id="quantidade-${bebida.nome}">0</span>
                                <button class="btn btn-secondary ms-2" onclick="alterarQuantidade('${bebida.nome}', 1)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        containerBebidas.appendChild(col);
    });

    // Função para gerar os cards das categorias
    Object.keys(categorias).forEach(categoria => {
        const col2 = document.createElement('div');
        col2.classList.add('col-6', 'col-md-3', 'bebida', 'adicional');
        
        // Gerar um ID único para o collapse
        const collapseId = `collapse-${categoria.replace(/\s+/g, '-')}`;
    
        col2.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title adicional d-flex justify-content-between align-items-center">
                        ${categoria}
                        <button class="btn btn-link fs-5 p-0" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                            <i class="bi bi-chevron-down"></i>
                        </button>
                    </h5>
                    <div id="${collapseId}" class="collapse">
                        <div id="lista-${categoria}"></div>
                    </div>
                </div>
            </div>
        `;
        
        containerBebidas.appendChild(col2);
        
        const lista = document.getElementById(`lista-${categoria}`);
        
        categorias[categoria].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-2');
            
            itemDiv.innerHTML = `
                <div class="d-flex flex-column">
                    <p class="mb-0">${item.nome}</p>
                    <p class="mb-0"><strong>R$ ${item.preco.toFixed(2)}</strong></p>
                </div>
    
                <div class="d-flex">
                    <button class="btn btn-secondary me-2" onclick="alterarQuantidade('${item.nome}', -1)">-</button>
                    <span id="quantidade-${item.nome}">0</span>
                    <button class="btn btn-secondary ms-2" onclick="alterarQuantidade('${item.nome}', 1)">+</button>
                </div>
            `;
            
            lista.appendChild(itemDiv);
        });
    });
}


let cafedamanhaitens = [
    {nome: 'COPO DE CAFÉ', preco:2.00},
    {nome: 'COPO DE CAFÉ COM LEITE', preco:3.00},
    {nome: 'PÃO DE QUEIJO', preco:1.00},
    {nome: 'PÃO FRANCÊS', preco:1.00},
    {nome: 'PÃO COM OVO', preco:6.00},
    {nome: 'PÃO COM MUÇARELA', preco:5.00},
    {nome: 'MISTO', preco:6.00},
    {nome: 'SANDUÍCHE DE BAURU', preco:6.00},
]

function gerarCafedamanha() {
    const containerCafe = document.getElementById('collapsecafe') 
    cafedamanhaitens.forEach(item=>{
        const col4 = document.createElement('div');
        // col4.classList.add('card-body');
            col4.innerHTML = `
            <div class="d-flex justify-content-between align-items-center adicional">
                <div class="d-flex flex-column m-0">
                <p class="card-title mb-0 m-0"><strong>${item.nome}</strong> </p>
                <p class="mb-1" ><strong> Preço:</strong> R$ ${item.preco.toFixed(2)}</p>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-secondary me-2" onclick="alterarQuantidade('${item.nome}', -1)">-</button>
                    <span id="quantidade-${item.nome}">0</span>
                    <button class="btn btn-secondary ms-2" onclick="alterarQuantidade('${item.nome}', 1)">+</button>
                </div>
            </div>
            `;
        containerCafe.appendChild(col4);
        })
}

gerarCafedamanha();
gerarProdutos();
gerarAdicionais();
gerarHotDogs();
gerarPasteis();
gerarBebidas(); 

let produtosSelecionados = {};
let opcao = 'Na Mesa'; // Padrão

let precosProdutos = {};

// Função para adicionar produtos de uma lista ao objeto precosProdutos
function adicionarPrecos(lista) {
    lista.forEach(item => {
        precosProdutos[item.nome] = item.preco;
    });
} 
precosProdutos['JANTINHA'] = 14.00

// Adicionando as listas ao objeto
adicionarPrecos(cafedamanhaitens)
adicionarPrecos(sanduiches);
adicionarPrecos(adicionais);
adicionarPrecos(hotDogs);
adicionarPrecos(pasteis);
adicionarPrecos(bebidas);

// Adicionando as categorias de bebidas
for (let categoria in categorias) {
    adicionarPrecos(categorias[categoria]);
}

// Função para alterar a quantidade e atualizar o subtotal
function alterarQuantidade(produto, quantidade) {
    // Verifica se o produto já foi adicionado ao objeto produtosSelecionados, se não, inicializa com 0
    if (!produtosSelecionados[produto]) {
        produtosSelecionados[produto] = 0;
    }

    // Atualiza a quantidade do produto (não permite números negativos)
    produtosSelecionados[produto] += quantidade;
    if (produtosSelecionados[produto] < 0) {
        produtosSelecionados[produto] = 0;
    }

    // Atualiza a visualização da quantidade no span correspondente
    document.getElementById(`quantidade-${produto}`).textContent = produtosSelecionados[produto];

    // Atualiza a lista de produtos no carrinho e o subtotal
    atualizarListaCarrinho();
    atualizarSubtotal();
}

let totalPromocao = 0;
// Função para atualizar a lista de produtos no carrinho
function atualizarListaCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';

    let totalPromocao = 0; // Contador para produtos em promoção
    let precoPromocao = 0; // Preço total das cervejas em promoção

    for (const produto in produtosSelecionados) {
        if (produtosSelecionados[produto] > 0) {
            const li = document.createElement('li');
            const quantidade = produtosSelecionados[produto];

            // Verifica se o produto está na promoção
            if (produto === 'BOHEMIA PURO MALTE 300ML' || 
                produto === 'SKOL 300ML' || 
                produto === 'BRAHMA 300ML' || 
                produto === 'ANTARCTICA 300ML') {
                totalPromocao += quantidade; // Soma a quantidade para calcular os pares
            } else {
                const precoTotal = (precosProdutos[produto] * quantidade).toFixed(2);
                li.textContent = `${produto} - Quantidade: ${quantidade} - R$${precoTotal}`;
                listaCarrinho.appendChild(li);
            }
        }
    }

    // Calcular o preço total das cervejas em promoção
    if (totalPromocao > 0) {
        const pares = Math.floor(totalPromocao / 2); // Número de pares de produtos em promoção
        const restantes = totalPromocao % 2; // Unidades fora da promoção
        precoPromocao = (pares * 6.50 + restantes * 3.50).toFixed(2); // Preço total para cervejas em promoção

        // Adiciona apenas um item para as cervejas em promoção
        const liPromocao = document.createElement('li');
        liPromocao.textContent = `Cervejas em Promoção - Total: ${totalPromocao} unidades - R$${precoPromocao}`;
        listaCarrinho.appendChild(liPromocao);
    }

    // Mostra o botão de finalizar se houver produtos no carrinho
    if (listaCarrinho.children.length > 0) {
        document.getElementById('botaoF').classList.remove('d-none');
    } else {
        document.getElementById('botaoF').classList.add('d-none');
    }
}

// Função para atualizar o subtotal
function atualizarSubtotal() {
    let subtotal = 0;
    for (const produto in produtosSelecionados) {
        const quantidade = produtosSelecionados[produto];

        // Aplica a promoção apenas para os produtos específicos
        if (produto === 'BOHEMIA PURO MALTE 300ML' || 
            produto === 'SKOL 300ML' || 
            produto === 'BRAHMA 300ML' || 
            produto === 'ANTARCTICA 300ML') {
            const pares = Math.floor(quantidade / 2); // Número de pares
            const restantes = quantidade % 2; // Unidades fora da promoção
            subtotal += pares * 6.50 + restantes * 3.50; // Cálculo do subtotal para cervejas em promoção
        } else {
            subtotal += quantidade * precosProdutos[produto]; // Cálculo normal para outros produtos
        }
    }

    // Atualiza a visualização do subtotal na tela
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);

    // Atualiza a visibilidade do botão de finalizar
    if (subtotal === 0) {
        document.getElementById('botaoF').classList.add('d-none');
    } else {
        document.getElementById('botaoF').classList.remove('d-none');
    }  
}

// Função para finalizar a compra
function finalizarCompra() {
    const nome = document.getElementById('nome').value;
    let mensagem = `Nome: ${nome}\nOpção: ${opcao}\nProdutos:\n`;
    if (!nome.trim()) {
        alert("Por favor, preencha o campo de nome.");
        return; // Impede o envio se o nome não estiver preenchido
    }

    let temProdutoNoCarrinho = false;
    for (const produto in produtosSelecionados) {
        if (produtosSelecionados[produto] > 0) {
            temProdutoNoCarrinho = true;
            mensagem += `${produto} - Quantidade: ${produtosSelecionados[produto]}\n`;
        }
    }

    if (!temProdutoNoCarrinho) {
        alert("Por favor, adicione pelo menos um produto ao carrinho.");
        return; // Impede o envio se o carrinho estiver vazio
    }

    let subtotal = 0;
    for (const produto in produtosSelecionados) {
        subtotal += produtosSelecionados[produto] * precosProdutos[produto];
    }
    
    mensagem += `\nSubtotal: R$ ${subtotal.toFixed(2)}\n`;

    if (opcao === 'Para Entregar') {    
        const endereco = document.getElementById('endereco').value;
        if (!endereco.trim()) {
            alert("Por favor, preencha o campo Endereço.");
            return; // Impede o envio se o endereço não estiver preenchido
        }
        
        mensagem += `Endereço: ${endereco}`;
    } else if(opcao =='Na Mesa') {
        const numeroMesa = document.getElementById('numeroMesa').value;
        if (!numeroMesa.trim()) {
            alert("Por favor, preencha o campo Número da Mesa.");
            return; // Impede o envio se o número da mesa não estiver preenchido
        }
        mensagem += `Número da Mesa: ${numeroMesa}`;
    }

    const pagamento = document.getElementById('pagamento').value; 
    if (pagamento == '') {
        alert("Por favor, preencha a forma de pagamento.");
        return;
    } else {
    mensagem += `\nPagamento: ${pagamento}`
    }


    const observacoesPedido = document.getElementById('observacoes').value; 
    if (observacoesPedido != '') {
        mensagem+= `\nObservações: ${observacoesPedido}`;
    }

    const numeroWhatsApp = '5534997822852'; // Coloque o número do WhatsApp do restaurante aqui
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    console.log(mensagem)
    window.open(url);
}

// Função para escolher entre "Na Mesa" ou "Para Entregar"
function escolherOpcao(escolha) {
    opcao = escolha;
    if (opcao === 'Para Entregar') {
        document.getElementById('opcaoMesa').classList.add('d-none');
        document.getElementById('opcaoEntrega').classList.remove('d-none');
        document.getElementById('observacoesPedido').classList.remove('d-none');

    } else if(opcao=='Na Mesa') {
        document.getElementById('opcaoMesa').classList.remove('d-none');
        document.getElementById('opcaoEntrega').classList.add('d-none');
        document.getElementById('observacoesPedido').classList.remove('d-none');
    } else if(opcao=='Retirada') {
        document.getElementById('opcaoMesa').classList.add('d-none');
        document.getElementById('opcaoEntrega').classList.add('d-none');
        document.getElementById('observacoesPedido').classList.remove('d-none');
    }
}


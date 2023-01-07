// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: false,
    headless: false // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


//BOTÕES
const buttons_mas = [{"buttonText": {"displayText": "Fina"}},{"buttonText": {"displayText": "Tradicional"}},{"buttonText": {"displayText": "Pan"}}];
const buttons_ad = [{"buttonText": {"displayText": "Adicionar pizza"}},{"buttonText": {"displayText": "Adicionar bebida"}},{"buttonText": {"displayText": "Encerrar pedido"}}];
const buttons_m = [{"buttonText": {"displayText": "1 Sabor"}},{"buttonText": {"displayText": "2 Sabores"}}];
const buttons_e = [{"buttonText": {"displayText": "Retirada"}},{"buttonText": {"displayText": "Entrega"}}];
const buttons_bebidas = [{"buttonText": {"displayText": "Coca-cola lata"}},{"buttonText": {"displayText": "Guaraná lata"}},{"buttonText": {"displayText": "Coca-cola 1 litro"}},{"buttonText": {"displayText": "Guaraná 1 litro"}}];
const buttons_cf = [{"buttonText": {"displayText": "Confirmar ✔"}},{"buttonText": {"displayText": "Tem algo errado ✖"}}];
const buttons_pg = [{"buttonText": {"displayText": "Dinheiro"}},{"buttonText": {"displayText": "Cartão"}},{"buttonText": {"displayText": "Pix"}},{"buttonText": {"displayText": "Link de pagamento"}}];
const buttons_ec = [{"buttonText": {"displayText": "Reiniciar pedido"}},{"buttonText": {"displayText": "Quero um atendente"}}];


//CARDAPIOS
const lista_ad = [{title:"ADICIONAIS",rows:[{ title: "Borda Catupiry Original",description: "- R$ 6.00",},{ title: "Borda Cheddar",description: "- R$ 6.00",},{ title: "Borda Chocolate",description: "- R$ 6.00",},{ title:"Bacon",description: "- R$ 5.00",},{ title:"Catupiry original",description: "- R$ 5.00",},{ title: "Cheddar",description: "- R$ 5.00",},{ title: "calabresa",description: "- R$ 5.00",},{ title: "Não quero adicional",description: "- R$ 0.00",}]}];

const list_intG = [
    {
      title: "PIZZAS TRADICIONAIS",
      rows: [
        {
          title: "Calabresa",
          description: "- Calabresa, Cebola E Mussarela.\nR$ 40.00",
        },
        {
            title: "Portuguesa",
            description: "- Presunto, Mussarela, Ovos E Cebola.\nR$ 40.00",
        },
        {
            title: "Marguerita",
            description: "- Rodelas De Tomate, Manjericão E Mussarela.\nR$ 40.00",
        }
      ]
    },
    {
      title: "PIZZAS ESPECIAIS",
      rows: [
        {
          title: "Frango Catupiry",
          description: "- Frango Desfiado, Catupiry Original, Milho E Mussarela.\nR$ 55.00",
      },
      {
          title: "Nordestina",
          description: "- Carne De Sol, Cebola, Bacon, Mussarela E Cream Chesse.\nR$ 55.00",
      },
      {
          title: "Calabresa Especial",
          description: "- Calabresa, Cebola, Gorgonzola E Mussarela.\nR$ 55.00",
      },
      {
          title: "Lombo Canadense",
          description: "– Lombo, Catupiry Original, Cebola E Mussarela.\nR$ 55.00",
      },
      {
          title: "4 Queijos",
          description: "- Catupiry Original, Gorgonzola, Provolone E Mussarela.\nR$ 60.00",
      },
      {
          title: "Filé com Bacon",
          description: "- File, Bacon E Mussarela.\nR$ 65.00",
      },
      {
          title: "Filé com Gorgonzola",
          description: "- File, Gorgonzola E Mussarela.\nR$ 65.00",
      },
      {
          title: "Carlos Pizza",
          description: "- File, Bacon, Cheddar, Cebola Caramelizada E Mussarela.\nR$ 65.00",
      }
      ]
    },
    {
      title: "PIZZAS DOCES",
      rows: [
        {
          title: "Chocolate",
          description: "- Chocolate Ao Leite.\nR$ 40.00",
        },
        {
            title: "Chocolate com Morango",
            description: "- Chocolate Ao Leite E Morango.\nR$ 40.00",
        },
        {
            title: "Cartola",
            description: "- Banana, Leite Condensado, Canela E Mussarela.\nR$ 55.00",
        }
      ]
    },
   ];
const list_meiaG = [
  {
    title: "PIZZAS TRADICIONAIS",
    rows: [
      {
        title: "Meia Calabresa",
        description: "- Calabresa, Cebola E Mussarela.\nR$ 20.00",
      },
      {
          title: "Meia Portuguesa",
          description: "- Presunto, Mussarela, Ovos E Cebola.\nR$ 20.00",
      },
      {
          title: "Meia Marguerita",
          description: "- Rodelas De Tomate, Manjericão E Mussarela.\nR$ 20.00",
      }
    ]
  },
  {
    title: "PIZZAS ESPECIAIS",
    rows: [
      {
        title: "Meia Frango Catupiry",
        description: "- Frango Desfiado, Catupiry Original, Milho E Mussarela.\nR$ 27.50",
    },
    {
        title: "Meia Nordestina",
        description: "- Carne De Sol, Cebola, Bacon, Mussarela E Cream Chesse.\nR$ 27.50",
    },
    {
        title: "Meia Calabresa Especial",
        description: "- Calabresa, Cebola, Gorgonzola E Mussarela.\nR$ 27.50",
    },
    {
        title: "Meia Lombo Canadense",
        description: "– Lombo, Catupiry Original, Cebola E Mussarela.\nR$ 27.50",
    },
    {
        title: "Meia 4 Queijos",
        description: "- Catupiry Original, Gorgonzola, Provolone E Mussarela.\nR$ 30.00",
    },
    {
        title: "Meia Filé com Bacon",
        description: "- File, Bacon E Mussarela.\nR$ 32.50",
    },
    {
        title: "Meia Filé com Gorgonzola",
        description: "- File, Gorgonzola E Mussarela.\nR$ 32.50",
    },
    {
        title: "Meia Carlos Pizza",
        description: "- File, Bacon, Cheddar, Cebola Caramelizada E Mussarela.\nR$ 32.50",
    }
    ]
  },
  {
    title: "PIZZAS DOCES",
    rows: [
      {
        title: "Meia Chocolate",
        description: "- Chocolate Ao Leite.\nR$ 20.00",
      },
      {
          title: "Meia Chocolate com Morango",
          description: "- Chocolate Ao Leite E Morango.\nR$ 20.00",
      },
      {
          title: "Meia Cartola",
          description: "- Banana, Leite Condensado, Canela E Mussarela.\nR$ 27.50",
      }
    ]
  }
 ];
const list_intP = [
  {
    title: "PIZZAS TRADICIONAIS",
    rows: [
      {
        title: "Calabresa",
        description: "- Calabresa, Cebola E Mussarela.\nR$ 25.00",
      },
      {
          title: "Portuguesa",
          description: "- Presunto, Mussarela, Ovos E Cebola.\nR$ 25.00",
      },
      {
          title: "Marguerita",
          description: "- Rodelas De Tomate, Manjericão E Mussarela.\nR$ 25.00",
      }
    ]
  },
  {
    title: "PIZZAS ESPECIAIS",
    rows: [
      {
        title: "Frango Catupiry",
        description: "- Frango Desfiado, Catupiry Original, Milho E Mussarela.\nR$ 30.00",
    },
    {
        title: "Nordestina",
        description: "- Carne De Sol, Cebola, Bacon, Mussarela E Cream Chesse.\nR$ 30.00",
    },
    {
        title: "Calabresa Especial",
        description: "- Calabresa, Cebola, Gorgonzola E Mussarela.\nR$ 30.00",
    },
    {
        title: "Lombo Canadense",
        description: "- Lombo, Catupiry Original, Cebola E Mussarela.\nR$ 30.00",
    },
    {
        title: "4 Queijos",
        description: "- Catupiry Original, Gorgonzola, Provolone E Mussarela.\nR$ 33.00",
    },
    {
        title: "Filé com Bacon",
        description: "- File, Bacon E Mussarela.\nR$ 35.00",
    },
    {
        title: "Filé com Gorgonzola",
        description: "- File, Gorgonzola E Mussarela.\nR$ 35.00",
    },
    {
        title: "Carlos Pizza",
        description: "- File, Bacon, Cheddar, Cebola Caramelizada E Mussarela.\nR$ 35.00",
    }
    ]
  },
  {
    title: "PIZZAS DOCES",
    rows: [
      {
        title: "Chocolate",
        description: "- Chocolate Ao Leite.\nR$ 25.00",
      },
      {
          title: "Chocolate com Morango",
          description: "- Chocolate Ao Leite E Morango.\nR$ 25.00",
      },
      {
          title: "Cartola",
          description: "- Banana, Leite Condensado, Canela E Mussarela.\nR$ 30.00",
      }
    ]
  },
 ];


 //ARRAYS COMPARATIVOS E ARMAZENAMENTO
 let parar_mgs = [];
 let contato = [];
 let pedido = [];
 let cardapio = ['Calabresa','Portuguesa','Marguerita','Frango Catupiry','Nordestina','Calabresa Especial','Lombo Canadense','4 Queijos','Filé com Bacon','Filé com Gorgonzola','Carlos Pizza','Chocolate','Chocolate com Morango','Cartola']
 let bordas = ['Borda Catupiry Original','Borda Cheddar','Borda Chocolate'];
 let adc = ['Bacon','Catupiry original','Cheddar','calabresa'];
 


//RECEBIMENTO DE MENSAGEM E INICIO DE PROCESSO
 function start(client) {
  client.onMessage(async (message) => {

//VERIFICA SE O CONTATO JA FALOU E ENVIA BOTÕES DE TAMANHO DE PIZZA
    if (parar_mgs.includes(message.from) && message.isGroupMsg === false) {
    }
    else if (contato.includes(message.from) === false && message.isGroupMsg === false){
      
      await client.sendText(message.from, `*Olá ${message.notifyName}, bem-vindo à Carlo's Pizza!🍕*\nNosso atendimento é dinâmico e rápido, vamos lá?.\nCardápio: https://abrir.link/eTmP1\n\nDurante o pedido se sentir dificuldade digite "Ajuda".`).then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
      const buttons_t = [{"buttonText": {"displayText": "P"}},{"buttonText": {"displayText": "G"}}]

      await client.sendButtons(message.from, 'Escolha o tamanho da sua primeira pizza 🍕', buttons_t, 'Se desejar mais de uma pizza você poderá adiciona-la posteriormente.')  .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
      contato.push(message.from)
      var contat = new Object();
      contat[0] = message.from;
      pedido.push(contat);
      //console.log(pedido);
    } else{

      const words = message.body.split('\n');
      const words_preco = message.body.split(' ');
      //console.log(words)
      //console.log(words_preco)

//BLOCO DE PIZZAS
//VERIFICA MENSAGEM E MANDA CARDAPIO P
    if (message.body === 'P' && message.isGroupMsg === false) {
    await client.sendListMenu(message.from, 'Escolha no cardápio o sabor da sua pizza.', 'subTitle', 'A pizza P só possui um sabor, ok?', 'Cardápio', list_intP)
    }
//VERIFICA SE A PRIMEIRA PARTE DA MENSAGEM ESTA INCLUIDA E ADICIONA PIZZA
    else if (cardapio.includes(words[0]) === true && message.isGroupMsg === false) {
      const result = pedido.find( num => num[0] === message.from )
        var tam = Object.keys(result).length;
        result[tam] = words[0];
        result[tam+".1"] = parseFloat(words_preco[words_preco.length-1]);
        await client.sendButtons(message.from, 'Escolha sua massa', buttons_mas, 'Não cobramos pela massa');
        //await client.sendListMenu(message.from, 'Deseja algum adicional?', 'subTitle', 'Escolha no cardápio abaixo o adicional ou "Não quero adicional"', 'Adicionais', lista_ad)
        //console.log(pedido);
    } 
//VERIFICA MENSAGEM E MANDA BOTÕES DE SABOR
    else if (message.body === 'G' && message.isGroupMsg === false) {
    await client.sendButtons(message.from, 'Escolha o tipo da sua pizza G', buttons_m, 'Você pode escolher entre 1 ou 2 sabores.');
    } 
//VERIFICA MENSAGEM E MANDA CADAPIO G
    else if (message.body === '1 Sabor' && message.isGroupMsg === false) {
    await client.sendListMenu(message.from, 'Escolha no cardápio o sabor da sua pizza.', 'subTitle', 'Pizza G - inteira', 'Cardápio', list_intG)
    } 
//VERIFICA MENSAGEM E MANDA CARDAPIO G MEIA
    else if (message.body === '2 Sabores' && message.isGroupMsg === false) {
    await client.sendListMenu(message.from, 'Escolha no cardápio o primeiro sabor da sua pizza.', 'subTitle', 'Pizza G - 2 sabores', 'Cardápio', list_meiaG)
    }
//VERIFICA MENSAGEM E MANDA CARDAPIO G MEIA
    else if (words_preco[0] === 'Meia' && message.isGroupMsg === false) {
      const result = pedido.find( num => num[0] === message.from )
      var tam = Object.keys(result).length;
//VERIFICA SE JA EXISTE A PROPRIEDADE NO OBJETO PEDIDO
      if (result.hasOwnProperty(tam-2+"m")===true){
        result[tam-2+"m2"] = words[0];
        result[tam-2+"m2.1"] = parseFloat(words_preco[words_preco.length-1]);
        await client.sendButtons(message.from, 'Escolha sua massa', buttons_mas, 'Não cobramos pela massa');
   
        //await client.sendListMenu(message.from, 'Deseja algum adicional?', 'subTitle', 'Escolha no cardápio abaixo o adicional ou "Não quero adicional"', 'Adicionais', lista_ad)
        //console.log(pedido);

     } else {
      result[tam+"m"] = words[0];
      result[tam+"m.1"]= parseFloat(words_preco[words_preco.length-1]);
      await client.sendListMenu(message.from, 'Escolha no cardápio o segundo sabor da sua pizza.', 'subTitle', 'Pizza G - 2 sabores', 'Cardápio', list_meiaG)
      //console.log(pedido);
    }
      ;}
//VERIFICA MENSAGEM E ENVIA BOTÕES DE TAMANHO DE PIZZA
    else if (message.body === 'Adicionar pizza' && message.isGroupMsg === false) {
      await client.sendButtons(message.from, 'Escolha o tamanho da sua próxima pizza', buttons_t, 'Se desejar mais de uma pizza você poderá adiciona-la posteriormente.');
    }
//VERIFICA TIPO DE MASSAS
  else if (['Fina','Tradicional','Pan'].includes(message.body)=== true && message.isGroupMsg === false) {
    const result = pedido.find( num => num[0] === message.from );
    var tam = Object.keys(result).length;
    result[tam-1+"massa"] = message.body;
    await client.sendListMenu(message.from, 'Deseja algum adicional?', 'subTitle', 'Escolha no cardápio abaixo o adicional ou "Não quero adicional"', 'Adicionais', lista_ad)
        
    //console.log(pedido);
  }


//BLOCO DE BEBIDAS
//VERIFICA MENSAGEM E ENVIA BOTÕES DE BEBIDAS
    else if (message.body === 'Adicionar bebida' && message.isGroupMsg === false) {
      await client.sendButtons(message.from, 'Qual sua bebida?🥤', buttons_bebidas, 'Lata - R$5.00 e 1 Litro - R$9.00' );
    }
//VERIFICA SE JA EXISTE A PROPRIEDADE NO OBJETO PEDIDO
    else if (['Coca-cola lata','Guaraná lata'].includes(message.body)=== true && message.isGroupMsg === false) {
      const result = pedido.find( num => num[0] === message.from );
      var tam = Object.keys(result).length;
      result[tam-1+"b"] = message.body;
      result[tam-1+"b1"] = 5.00;
      await client.sendButtons(message.from, 'Deseja algo mais?', buttons_ad, 'proximo passo é a entrega');
      //console.log(pedido);
    }

//VERIFICA SE JA EXISTE A PROPRIEDADE NO OBJETO PEDIDO
    else if (['Coca-cola 1 litro','Guaraná 1 litro'].includes(message.body)=== true && message.isGroupMsg === false) {
      const result = pedido.find( num => num[0] === message.from );
      var tam = Object.keys(result).length;
      result[tam-1+"b"] = message.body;
      result[tam-1+"b1"] = 9.00;
      await client.sendButtons(message.from, 'Deseja algo mais?', buttons_ad, 'proximo passo é a entrega');
      //console.log(pedido);
    }


//BLOCO DE ENTREGA
//ENCERRA PEDIDO E ENVIA BOTÕES DE ENTREGA
    else if (message.body === 'Encerrar pedido' && message.isGroupMsg === false) {
      await client.sendButtons(message.from, 'Como deseja receber o seu pedido?', buttons_e, 'O prazo de entrega é de até 60min e retirada de até 40min / taxa: R$5,00.');
     // console.log(pedido);
    }
//VERIFICA MENSAGEM E MANDA BOTÕES DE PG
    else if (message.body === 'Retirada' && message.isGroupMsg === false) {
      await client.sendText(message.from, `📍 A Carlo's Pizza fica na Rua Antônio Bezerra, N°9, Abolição II, por trás do Posto Olinda.`);
      await client.sendButtons(message.from, 'Como deseja pagar pelo seu pedido?', buttons_pg, 'Estamos quase finalizando!');    
    }
//VERIFICA MENSAGEM E PEDE INFROMAÇÕES DE ENDEREÇO
    else if (message.body === 'Entrega' && message.isGroupMsg === false) {
      await client.sendText(message.from, 'Certo, me envia seu endereço com ponto de referência!\n*ATENÇÃO*: É importante que você comece com "Rua" ou "Av".');
    }
//VERIFICA SE MENSAGEM É ENDEREÇO E MANDA BOTOES DE PG
    else if (['rua','Rua','Av.','av','Av','av.'].includes(words_preco[0])=== true && message.isGroupMsg === false) {
      const result = pedido.find( num => num[0] === message.from );
      var tam = Object.keys(result).length;
      result[tam-1+"end"] = message.body;
      result[tam-1+"end1"] = 5.00;
      await client.sendButtons(message.from, 'Como deseja pagar pelo seu pedido?', buttons_pg, 'Estamos quase finalizando!');    
    //console.log(pedido);
    }



//BLOCO DE ADICIONAIS
//VERIFICA SE MENSAGEM ESTA INCLUIDA NO ARRAY DE BORDAS 
    else if (bordas.includes(words[0]) === true && message.isGroupMsg === false) {
      const result = pedido.find( num => num[0] === message.from );
      var tam = Object.keys(result).length;
      result[tam-1+"ad"] = words[0];
      result[tam-1+"ad1"] = 6.00;
      await client.sendButtons(message.from, 'Deseja algo mais?', buttons_ad, 'proximo passo é a entrega');
      //console.log(pedido);
    }
//VERIFICA SE MENSAGEM ESTA INCLUIDA NO ARRAY DE ADICIONAIS
    else if (adc.includes(words[0]) === true && message.isGroupMsg === false) {
      const result = pedido.find( num => num[0] === message.from );
      var tam = Object.keys(result).length;
      result[tam-1+"ad"] = words[0];
      result[tam-1+"ad1"] = 5.00;
      await client.sendButtons(message.from, 'Deseja algo mais?', buttons_ad, 'proximo passo é a entrega');
      //console.log(pedido);
    }
//VERIFICA MENSAGEM
    else if (words[0] === 'Não quero adicional' && message.isGroupMsg === false) {
      await client.sendButtons(message.from, 'Deseja algo mais?', buttons_ad, 'proximo passo é a entrega');
    }


//BLOCO DE PAGAMENTO
//VERIFICA SE MENSAGEM ESTA INCLUIDO NO ARRAY DE PAGAMENTOS
    else if (['Dinheiro','Pix','Link de pagamento','Cartão'].includes(message.body)=== true && message.isGroupMsg === false) {
      const result = pedido.find( num => num[0] === message.from );
      var tam = Object.keys(result).length;
      var resultado = "";
      var total = 0;
      var i;

        if (message.body === 'Dinheiro' && message.isGroupMsg === false) {
          result[tam-1+"pg"] = message.body;
        } else if (message.body === 'Pix' && message.isGroupMsg === false) {
          result[tam-1+"pg"] = message.body;
          await client.sendText(message.from, 'Chave Pix CPF: 08377831430\nNome: Mariana Carlos Rebouças');
        } else if (message.body === 'Cartão' && message.isGroupMsg === false) {
          result[tam-1+"pg"] = message.body;
        } else if (message.body === 'Link de pagamento' && message.isGroupMsg === false) {
          result[tam-1+"pg"] = message.body;
          await client.sendText(message.from, 'Iremos te mandar o link em instantes 🔗');}
          

      for (i = 1; i < tam; i++){
        if(result.hasOwnProperty(i)===true){
          resultado += result[i] + " - R$" +result[i+".1"]+"\n";
          total += result[i+".1"];
        } else if (result.hasOwnProperty(i+"m")===true) {
          resultado += result[i+"m"] +"/"+result[i+"m2"]+ " - R$" +(result[i+"m.1"]+result[i+"m2.1"])+"\n";
          total += (result[i+"m.1"]+result[i+"m2.1"]);
        } else if (result.hasOwnProperty(i+"b")===true) {
          resultado += result[i+"b"] + " - R$" +(result[i+"b1"])+"\n";
          total += result[i+"b1"];
        } else if (result.hasOwnProperty(i+"ad")===true) {
          resultado += "+ "+result[i+"ad"] + " - R$" +(result[i+"ad1"])+"\n";
          total += result[i+"ad1"];
        } else if (result.hasOwnProperty(i+"end")===true) {
          resultado += "\n"+result[i+"end"] + "\nTaxa: R$" +(result[i+"end1"])+"\n";
          total += result[i+"end1"];
        } else if (result.hasOwnProperty(i+"pg")===true) {
          resultado += "\nForma de pagamento: " +(result[i+"pg"])+"\n";
        }
        else if (result.hasOwnProperty(i+"massa")===true) {
          resultado += "Massa: " +(result[i+"massa"])+"\n";
        }
          
      }
        await client.sendButtons(message.from, `Pedido N°${100+(pedido.indexOf(result))}`, buttons_cf, `${resultado}\nTotal do Pedido\nR$${total}`);
        //console.log(resultado);
        //console.log(total)  
     
    }
  
    
//BLOCO DE FINALIZAÇÃO
//CONFIRMA PEDIDO E ENVIA PARA ARMAZENAMENTO DE PEDIDOS
    else if (message.body === 'Confirmar ✔' && message.isGroupMsg === false) {
      await client.sendText(message.from, "Pedido confirmado! Obrigado por escolher a Carlo's Pizza 🍕🤍");
      const result = pedido.find( num => num[0] === message.from );
      var tam = Object.keys(result).length;
      var resultado = "";
      var total = 0;
      var i;

      for (i = 1; i < tam; i++){
        if(result.hasOwnProperty(i)===true){
          resultado += result[i] + " - R$" +result[i+".1"]+"\n";
          total += result[i+".1"];
        } else if (result.hasOwnProperty(i+"m")===true) {
          resultado += result[i+"m"] +"/"+result[i+"m2"]+ " - R$" +(result[i+"m.1"]+result[i+"m2.1"])+"\n";
          total += (result[i+"m.1"]+result[i+"m2.1"]);
        } else if (result.hasOwnProperty(i+"b")===true) {
          resultado += result[i+"b"] + " - R$" +(result[i+"b1"])+"\n";
          total += result[i+"b1"];
        } else if (result.hasOwnProperty(i+"ad")===true) {
          resultado += "+ "+result[i+"ad"] + " - R$" +(result[i+"ad1"])+"\n";
          total += result[i+"ad1"];
        } else if (result.hasOwnProperty(i+"end")===true) {
          resultado += "\n"+result[i+"end"] + "\nTaxa: R$" +(result[i+"end1"])+"\n";
          total += result[i+"end1"];
        } else if (result.hasOwnProperty(i+"pg")===true) {
          resultado += "\nForma de pagamento: " +(result[i+"pg"])+"\n";
        }
        else if (result.hasOwnProperty(i+"massa")===true) {
          resultado += "Massa: " +(result[i+"massa"])+"\n";
        }
          
      }
        await client.sendText('5584981029944@c.us', `Pedido N°${100+(pedido.indexOf(result))}\nCliente: ${message.notifyName}\n\n${resultado}\nTotal do Pedido\nR$${total}`);
        await client.sendText('558491471070@c.us', `Data: ${(new Date).getDate()}/${(new Date).getMonth()+1}/${(new Date).getFullYear()}\nPedido: ${100+(pedido.indexOf(result))}\nCliente: ${message.notifyName}\nTotal: R$${total}`);
      
      }
//VERIFICA MENSAGEM E DAR OPÇÃO DE REINICIAR
    else if (message.body === 'Tem algo errado ✖' && message.isGroupMsg === false) {
      await client.sendButtons(message.from, `Deseja recomeçar o seu pedido?`, buttons_ec,'Você pode recomeçar o seu pedido do zero ou solicitar um atendente.');
    }
//VOLTA PARA O COMEÇO DO PROCESSO
    else if (message.body === 'Reiniciar pedido' && message.isGroupMsg === false) {
      const result = pedido.find( num => num[0] === message.from );
      var indice = pedido.indexOf(result);
      pedido.splice(indice,1);
      contato.push(message.from)
      await client.sendButtons(message.from, 'Escolha o tamanho da sua primeira pizza 🍕', buttons_t, 'Se desejar mais de uma pizza você poderá adiciona-la posteriormente.');
      var contat = new Object();
      contat[0] = message.from;
      pedido.push(contat);
      //console.log(pedido);
      }


//AJUDA
     else {
          if (['Ajuda','ajuda','Quero um atendente'].includes(message.body)&& message.isGroupMsg === false) {
            parar_mgs.push(message.from)
            await client.sendText('5584981029944@c.us', `Cliente: ${message.notifyName} precisa de ajuda`);}
          }
         
            
  }
});
}

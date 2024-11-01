# DESAFIO: Calculadora de Partidas Rankeadas
## Objetivo
Criar um programa onde uma função recebe a quantidade de vitórias e derrotas de um jogador para calcular o saldo de vitórias, esse sendo a diferença entre vitória e derrotas. O resultado retornado é usado para definir o ranking do jogador, estes sendo:
- Saldo menor do que 10 = Ferro
- Saldo entre 11 e 20 = Bronze
- Saldo entre 21 e 50 = Prata
- Saldo entre 51 e 80 = Ouro
- Saldo entre 81 e 90 = Diamante
- Saldo entre 91 e 100= Lendário
- Saldo maior ou igual a 101 = Imortal

## Saída
A seguinte mensagem deve ser exibida: "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

## Adições
Outra funcionalidade adicionada foram as *Partidas*:
- Antes de ter seu nível definido, o herói joga 100 partidas;
- Em uma partida, o herói é colocado contra um outro jogador, tendo um saldo de vitória aleatório;
- *O saldo de vitórias do oponente varia entre 90% a 110% do saldo de vitória do herói;*
- Caso o saldo de vitória do herói seja maior ou igual ao seu oponente, ele ganha. Caso contrário, ele perde;
- O resultado da partida é armazenado e o saldo de vitórias do jogador é calculado novamente;
- Após as 100 partidas, o jogador tem seu nível definido.

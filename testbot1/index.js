const { Client, GatewayIntentBits } = require('discord.js');
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const path = require('path');

const client = new Client({
  intents: [Guilds, GuildMessages, MessageContent]
});

client.once('ready', () => {
  console.log(`${client.user.tag} 준비됨`);
});

client.login('MTM2OTU2MDQ0NjgyNjE4NDc0NA.G1OPdy.tpVlUFkKJy6UbA8yH2RWprO_7o9YIU2UpRO87Y');


//채팅팅
client.on('messageCreate', (msg) => {
    const cmd = msg.content; 

    if (cmd === 'ㅎㅇ') {
        msg.reply('반갑노?');
    }

    if (cmd === '롤?') {
        msg.reply('**레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?롤로롤ㄹ로로롤ㄹㄹ로로로로로로롤?로로로로로로로로로로렐렐롤**레롤?**레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?레롤?**');
    }

    if (cmd === '확률') {
        //랜덤함수수
        const randomNum = Math.floor(Math.random() * 100) + 1;
        msg.reply(`오늘 형준이형이 공부할 확률은 ${randomNum}%입니다 ㅋ`);
    }

    if (cmd === '주사위') {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      msg.reply('주사위를 굴리는중...')
      setTimeout(() => {
        msg.reply(`${randomNum}`);
      }, Math.floor(Math.random() * 1000) + 1000);
    }
});

const choices = ['가위', '바위', '보'];

client.on('messageCreate', async (message) => {
    // 봇이 응답하지 않도록 하기 위해 봇의 메시지는 무시
    if (message.author.bot) return;

    // 사용자가 '!가위바위보' 명령어를 입력하면 게임 시작
    if (message.content.toLowerCase() === '가위바위보') {
        // 사용자가 가위바위보 선택을 할 수 있도록 안내
        const filter = response => {
            return choices.includes(response.content.toLowerCase()) && response.author.id === message.author.id;
        };

        // 가위바위보 선택을 받는 메시지 보내기
        message.channel.send('**가위, 바위, 보** 중 하나를 선택해주세요.');

        try {
            // 사용자가 30초 이내에 선택을 하면 그 선택을 받아서 게임 진행
            const collected = await message.channel.awaitMessages({
                filter,
                max: 1,
                time: 10000, // 30초 대기
                errors: ['time'],
            });

            const userChoice = collected.first().content.toLowerCase();

            // 봇의 선택
            const botChoice = choices[Math.floor(Math.random() * choices.length)];

            // 결과 계산
            let result;
            if (userChoice === botChoice) {
                result = '비겼습니다!';
            } else if (
                (userChoice === '가위' && botChoice === '보') ||
                (userChoice === '바위' && botChoice === '가위') ||
                (userChoice === '보' && botChoice === '바위')
            ) {
                result = '당신이 이겼습니다!';
            } else {
                result = '봇이 이겼습니다!';
            }

            // 결과 출력
            message.channel.send(`사용자: ${userChoice}\n봇: ${botChoice}\n${result}`);
        } catch (error) {
            // 시간이 초과되었을 때
            message.channel.send('시간이 초과되었습니다! 다시 시도해주세요.');
        }
    }
});

client.on('messageCreate', message => {
  if (message.content === '허거덩') {
    const imagePath = path.join(__dirname, 'hyeongjun.jpg');

    message.channel.send({
      files: [imagePath]
    });
  }
})

client.on('messageCreate', message => {
  if (message.content === '형이다형') {
    const imagePath = path.join(__dirname, 'pepeHuk.jpg');

    message.channel.send({
      files: [imagePath]
    });
  }
})
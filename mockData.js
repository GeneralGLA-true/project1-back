const mockArray = [];
const colectionObjectFor = {
  photosColection: new Set,
  idColection: new Set,
};
const minMaxFor = {
  coments: [0, 37],
  id: [1, 500],
  avatar: [1, 6],
  photos: [1, 25],
  likes: [15, 200],
  comentsMessage: [0, 24],
  names: [0, 24]
};

const names = [
    'Анна', 'Богдан', 'Василь', 'Галина', 'Дмитро',
    'Євгенія', 'Жанна', 'Зеновій', 'Ігор', 'Йосип',
    'Катерина', 'Леся', 'Максим', 'Наталія', 'Олександр',
    'Павло', 'Роксолана', 'Сергій', 'Тетяна', 'Уляна',
    'Федір', 'Христина', 'Цезар', 'Чеслав', 'Шарлотта'
  ];
const photoDescriptions = [
    'Нічний мегаполіс, освітлений світловими рекламами.',
    'Кібернетичний самурай, обладнаний високотехнологічним озброєнням.',
    'Таємничий хакер, який проникає в корпоративну мережу.',
    'Густий туман над кіберпростором, заповнений світловими сигналами.',
    'Робот-кумпаньйон у вигляді штучного інтелекту.',
    'Панорамний вид на велике місто, повне гігантських хмарочосів.',
    'Дістопійний кібермайданчик із зламаними андроїдами.',
    'Спілка хакерів, збираючись для великої атаки.',
    'Електронна реклама на високих вежах і над магістральними шляхами.',
    'Кібер-кафе з аркадними ігровими автоматами та VR-розвагами.',
    'Агент з таємної кіберполіції в броньованому костюмі.',
    'Багатокімнатний кібернетичний ліжко в ультрасучасному житловому комплексі.',
    'Темний алеї міста, заселеного кібернетичними гангами.',
    'Вогняні струміні по вулиці, виникаючи від розривів в кібермережі.',
    'Мерехтливі світлові фітовершини на дахах хмарочосів.',
    'Бойовий дрон, обслуговуваний кібернетичним пілотом.',
    'Кіберпанк-художник, що творить на вулиці міста.',
    'Андроїд-бармен в кібернетичному клубі.',
    'Незаконний кібербазар із забороненими технологіями.',
    'Кіберпротест проти корпоративного утискання.',
    'Нейроімплантати та кіберпротези на ярмарці майбутнього.',
    'Шумна кібернетична арена для бійців з підсиленою реальністю.',
    'Кіберкот, обладнаний датчиками та штучним інтелектом.',
    'Містичний кіберзахід, коли світлові плями сходять за горизонт.',
    'Жвава атмосфера кібер-бару з великою кількістю мерехтливих неонових вогників.'
  ];
  
const photoComments = [
    'Ця фотографія вражає своєю кібернетичною атмосферою.',
    'Справжній майстер кіберпанку зафіксував цей момент.',
    'Що за футуристичний світ! Просто захоплююче.',
    'Здається, майбутнє вже зараз. Дивовижно!',
    'Цей кадр викликає відчуття власного поглиблення в кіберреальність.',
    'Кожна фотографія - це як погляд у вікно іншого світу.',
    'Зачаровуюче поєднання технології та арт-стилю.',
    'Фантастичні деталі і вражаюча гра світла.',
    'Якесь містичне поєднання майбутнього та технології.',
    'Хто б міг подумати, що світ кіберпанку може бути настільки красивим!',
    'Ця фотографія - справжнє технічне диво.',
    'Холодний відтінок кіберміста залишає незабутнє враження.',
    'Колірне гама та композиція - на вищому рівні.',
    'Ці кадри переносять у світ кібернетичних фантазій.',
    'Відмінна глибина та вражаюча динаміка в кожному кадрі.',
    'Тут втілена ідеальна гра світла та тіні.',
    'Кіберпанк виглядає так, ніби він завжди існував.',
    'Не забути про деталі - це те, що робить ці фотографії виразними.',
    'Кожен кадр - це маленька кіберпанк історія.',
    'Фотограф вдало захопив дух кіберпанку в цих знімках.',
    'Інтригуючий космічний аспект у цих кіберпанк образах.',
    'Щось в цих фотографіях заставляє задуматися про майбутнє.',
    'Кожен елемент цих фото розкриває якийсь новий куток кіберпростору.',
    'Це не просто фотографії, а справжнє поглиблення у кіберреальність.',
    'Такий стиль кіберпанку заворожує і не дає відпустити погляд.'
  ];
  
function mockArrayFiller () {
    const max = 25;
    for (let i = 0; i < max; i++) {
        mockArray[i] = {};
        mockArray[i].id = i + 1;
        mockArray[i].url = `photos/${getRandomPhotos(...minMaxFor.photos)}.jpg`;
        mockArray[i].description = photoDescriptions[i];
        mockArray[i].likes = getRandomNumber(...minMaxFor.likes);
        mockArray[i].coments = getComentsArray();
    };
  };

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


function getRandomPhotos (min, max) {
    let number = 0;
    if (colectionObjectFor.photosColection.size == max) {
        return 'colection is full';
    };
  do {
    number = getRandomNumber(min, max);
  } while (colectionObjectFor.photosColection.has(number))
  colectionObjectFor.photosColection.add(number);
  return number;
};

function getRandomId (min, max) {
  let number = 0;
  if (colectionObjectFor.idColection.size == max) {
      return 'colection is full';
  };
do {
  number = getRandomNumber(min, max);
} while (colectionObjectFor.idColection.has(number))
colectionObjectFor.idColection.add(number);
return number;
};

function getComentsArray () {
  const comentsQuantity = getRandomNumber(...minMaxFor.coments);
  const comentArray = [];

  for (let i = 0; i < comentsQuantity; i++) {
    comentArray[i] = {
      id: getRandomId(...minMaxFor.id),
      avatar: `img/avatar-${getRandomNumber(...minMaxFor.avatar)}.svg`,
      message: photoComments[getRandomNumber(...minMaxFor.comentsMessage)],
      name: names[getRandomNumber(...minMaxFor.names)],
    };

  };
  return comentArray;
}

mockArrayFiller();

const fs = require('fs');

fs.writeFile('mockData.txt', JSON.stringify(mockArray), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

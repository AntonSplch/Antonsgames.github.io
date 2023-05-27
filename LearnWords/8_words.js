
//создаю объект настроек. потом добавить конструктор!
const settings = {
  name: '',
  place: '',
  DICT: '',
  score: '',
  timer: false,
  seconds: 0,
  currentTime: '',
  Eng: [],
  Rus: [],
  recordMistakes: [],
  partsOfSpeech_edited: [],
  flag: 'false',
  showList: function (param) {
    settings.sumupWords.text("");
    settings.sumupWords.show();
          settings.sumupWords.on({'click': function (event) {
            settings.sumupWords.hide();
            $('#game').html("<p>the game is OVER</p>" + "  <P><a href='#'  id='p2' onclick='location.reload(); return false;'>TRY MORE/TO  <br> </a> <a href=''../index.html' id='p'>GO BACK</a></p>" );
          }});
          if (param == 'words')
          {
    for (num in Eng)
   
    settings.sumupWords.append(`<i> ${Eng[num]} -- ${Rus[num]} </i></br> `);
  }

  if (param == 'score' && settings.flag === 'true')
 {  settings.sumupWords.text("");
        settings.sumupWords.append("<i class ='red'>ИМЯ - ОТКУДА - СЛОВАРЬ - ВРЕМЯ - ОЧКИ(%)</i>");
        settings.sumupWords.append(settings.bestScoreTable);}

  if (param == 'score' && settings.flag === 'false')
  { 
    settings.flag = 'true';
    settings.sumupWords.text("LOADING...ЗАГРУЗКА...");
    str = JSON.stringify(settings);
      var xhttp;
      if (str == "") {
       window.alert("no singnal, sorry");
        return;
      }
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        response = this;
        settings.bestScoreTable = response.response;
        settings.sumupWords.text("");
        settings.sumupWords.append("<i class ='red'>ИМЯ - ОТКУДА - СЛОВАРЬ - ВРЕМЯ - ОЧКИ(%)</i>");
        settings.sumupWords.append(settings.bestScoreTable);

        //.responseText;
       
        //document.getElementById("txtHint").innerHTML = response.response;
       //console.log(JSON.parse(response));
        }
      };
      
      xhttp.open("GET", "report.php?q="+str, true);
      xhttp.send();
     
    ;}

  }, 
  timer: function () {
    ++settings.seconds;
 document.getElementById("timer").innerHTML = settings.seconds + 'sec.';
},
//showBestScore: fucntion() {document.getElementById("myForm").submit(); }
  //как работает эта математика?
};
// спец объект для задания
partsOfSpeech = 
  `СОЧИНИТЕЛЬНЫЕ СОЮЗЫ: и, да (= и), не только … но и, также, тоже, и…и, ни…ни, как…так и; сколько... столько и,  или, или…или, либо, либо…либо, то…то, то ли…то ли, не то…не то, а, но, да (= но), зато, же, однако, однако же, все же,  не только… но и; не то чтобы…а, не столько…сколько,  тоже, также, да и, притом, причем,  а именно, то есть, или (= то есть)

ПОДЧИНИТЕЛЬНЫЕ СОЮЗЫ: что, чтобы, как, когда, лишь, едва, где, куда, откуда, столько, настолько, так, до такой степени, до того, как, как будто, словно, будто, точно, как бы, так как, потому что, если, если бы, коли, ежели, если … то, несмотря на то, что, хотя, хоть, пускай, чтобы, дабы, с тем чтобы, так что

ЧАСТИЦЫ: не, ни, вовсе не, далеко не, отнюдь не, нет, неужели, разве, ли (ль), что, что ли, вон, это,
именно, как раз, прямо, точно, точь-в-точь, только, лишь, исключительно, почти, единственно, -то (я-то), всего, всего-навсего, что за, ну и, как, куда как, даже, же, ни, ведь, уж, все-таки, ну, всё,
едва ли, вряд ли

МЕСТОИМЕНИЕ: я, ты, он, она, оно, мы, вы, они,  мой, твой, наш, ваш, его, ее, их, это, те, этот, таков, тот, столько, сей, оный,  кто, что, какой, каков, сколько, чей, чем, кому, кого, сам, самый, весь, всякий, каждый, иной, любой, другой, всяк, всяческий, некто, нечто, некоторый, некий, кто-то, кое-кто  никто, ничто, никакой, ничей, ничего

НАРЕЧИЕ: так, по-летнему, по-товарищески, весело, громко, вдвоемочень, чересчур, втрое, вдоволь, чуть-чуть, немного, вперед, издали, справа, вдалеке, здесь, куда-то, сегодня, ночью, давно, сейчас, послезавтра, всегда, тогда, потому, сгоряча, поневоле, назло, нарочно, затем, назло, наперекор, специально

ВВОДНОЕ СЛОВО: К счастью, к несчастью, к ужасу, к стыду, на беду, Может, может быть, по-видимому, по сути, кажется, казалось бы, бесспорно, правда, надо полагать, по сути, безусловно, Итак, следовательно, к слову сказать, во-первых, во-вторых, с другой стороны, к примеру, главное, таким образом, кстати, значит, наоборот, По слухам, говорят, по мнению кого-либо, на мой взгляд, по-моему, по преданию, помнится, сообщают, передают, Другими словами, иными словами, попросту сказать, мягко выражаясь, одним словом, Знаешь (ли), знаете (ли), пойми, извините, простите, послушайте, поверьте, согласитесь, вообразите , пожалуйста,
По крайней мере, самое большее, самое меньшее,
По обыкновению, бывает, бывало, случается,
Сказать по чести, честно говоря, по правде, по совести, смешно сказать,

ПРИЧАСТИЕ: Битый, питый, резан, сделан, сказана, написанная, нарисованные, кошеный, писавший, рубившие, говорящий, колющее, смотрящий, несомый, носимый, побеленный

ДЕЕПРИЧАСТИЕ: Бегая, прыгая, играя, писав, сказав, сыграв, читав, 

ПРИЛАГАТЕЛЬНОЕ: большой, крутой, старших, старыми, гусиное, каменный, карманный, более смелый, чернее, белее

СУЩЕСТВИТЕЛЬНОЕ: Дом, столом, машиной, кино, студенты, в школе, о дороге, собака

ПРЕДЛОГ: В, на, о, под, за, через, с, вследствие, в течение, из-за, по, навстречу, несмотря на 

ГЛАГОЛ: Играл, учусь, буду работать, узнал, курит, видим, объсняете, смотри, говорю`
;

wordsOfExpression = 

`Эпитет: золотая роща, весёлый ветер

Сравнение: И берёзы стоят / как большие свечки, великолепными коврами снег лежит, небо словно море

Метафора: Ситец неба голубой, море работы, крылатость души, Тайсон с алиэкспресса 

Олицетворение: Спит черёмуха в белой накидке, Отговорила роща золотая, Забормотал спросонок гром

Гипербола: Двести лет тебя не видел, В сто сорок солнц закат пылал

Литота: Подожди 5 секунд, ваш шпиц не более наперстка!

Фразеологизмы: зарыть талант в землю, бить баклуши, пришли деньги, жить душа в душу

Ирония: Ты всё пела? Это дело

Инверсия: Тебя мы ждали долго, мастер Йода писал текст этот

Риторический вопрос: Кто ж не сможет его догнать?, О чем задумалась/ берёза?

Риторическое обращение: О Море! Как же я скучал!

параллелизм: прощение — сила. прощать — благородство, летал сокол по небу/гулял молодец по свету

Градация: Тишина накрывала/наваливалась/поглощала

Антитеза: Волос длинный--ум короткий

Анафора: Берегите друг/друга Берегите...

Эпифора: Лес не тот! Куст не тот!

Парцелляция:Зашёл человек.В кожаной куртке., Я! ИДУ! СЮДА!

Формы речи: диалог, полилог, монолог

Авторские знаки препинания: Да — вот что — возвращайся…,  Мать – не плакала
`



settings.finalWindow = $('#window');
settings.finalWindow.hide();

// глобальные переменные
settings.seconds = 0;
settings.finalCount = false;
totalResult = "";

function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

let Eng = [];
           let Rus = [];




     
    // передай счётчик ошибок     
           function Round2(Eng, Rus, correct, mistakes, game)

{

/*  $('#mainWord').show().html("ПЕРЕТАЩИ! MATCH!");

  matches = 0;
for(j=0;j<3; j++)
{
  
  dop = j + 4;
  
  //функиц snap: function ... CSS со случайными координатами j выполняет роль разграничителя для пар ответов
  $('#'+j).html(Eng[j]).addClass('alert'+j).css('top', '' + getRandom(1,200)).css('left', '' + getRandom(1,300)).draggable({cursor: 'crosshair', opacity: 0.5, snap: 'true', snap : '#'+dop, snapMode:'both', snapTolerance: 10, zIndex: 1000});
  $('#'+j).droppable({accept: '#'+dop,
drop: function (event, ui) {

window.alert(matches++)
this.hide();


}
});

$('#'+dop).draggable(

  {cursor: 'crosshair', opacity: 0.5, snap: 'true', snap : '#'+j, snapMode:'both', snapTolerance: 10, zIndex: 1000}

).html(Rus[j]).addClass('alert'+dop).css('left', '' + getRandom(1,300)).css('top', '' + getRandom(1,200)).droppable({accept: '#'+j,
drop: function (event, ui) {
window.alert(matches++)
this.hide();
}
});
/*
$('#'+j+4).html(Rus[j]).draggable({cursor: 'crosshair', opacity: 0.5, snap: 'true', snap : '#'+j, snapMode:'both', snapTolerance: 10, zIndex: 100})
.droppable({accept: '#'+j,
drop: function (event, ui) {
alert ('Т овар д о б а в л е н 2');
}
}); 

}
*/
/*.dropable({accept: '#mainWord',
drop: function (event, ui) {

alert ('Т овар д о б а в л е н ');
}
}); 
*/



//ну не всё должно исчезать ?!!
$('td').hide();
$('#game').show();
$('#Round2_5').hide('slow');
$("#firstA").hide('slow');
$("#secondA").hide('slow');
//забыл скобки после random, а это же метод
let randOrder = Math.floor(Math.random() * 8);
console.log(randOrder); 
settings.oldRandOrder = randOrder;
//задаём  слово для угадывания (1-8)
//тест
  //тест
       // Round3(Eng,  Rus, correct, mistakes, game);

$('#round2').show();
$('#mainWord').html(Eng[randOrder]);
mainWord = $('#mainWord')[0].innerText;
//моя первая передача объекта в jquery + сверка с нумерацией массива. работает вполне

for (s=0; s<8; s++)
{
$('#'+s).html(Rus[s]).on({'click': function (event) {           
       console.log(event);
       // switch?
       if (correct > 15) { Round3(Eng,Rus, correct, mistakes, game)}; 
       if (event.currentTarget.id == randOrder)
       {console.log("+"+correct);
      correct++;
      Counter(game, mistakes, correct);
      angelHits(mistakes, correct);
      // код с повторами ниже - это тест анимаций jquery, в том числе со словом this и callback'ами
      that = this;
      $(this).css('backgroundColor','green');
      setTimeout(function() {
        $(that).css('backgroundColor','white');}, 500)
      NewRandOrder = Math.floor(Math.random() * 8);
      //тест вторая генерация, чтобы сделать меньше совпадений
      // можно решить с помощью randomArray, но условие - кол-во прав-х отв-в 
      randOrder = Math.floor(Math.random() * 8);
      settings.oldRandOrder == randOrder ? randOrder = Math.floor(Math.random() * 8) : randOrder;
      settings.oldRandOrder == randOrder ? randOrder = Math.floor(Math.random() * 8) : randOrder;
      $('#mainWord').fadeOut(50).html(Eng[randOrder]).fadeIn(100)
      $(that).animate
      (
{
 fontSize:'+=10px',
}, 500,
function() {
  $(that).animate
      (
{
 fontSize:'-=10px',
}
      ) 
  ;}
      );
      
      }

       else 
      {
        //settings.recordMistakes(randOrder);
        console.log("wrong. correcr answer is "+ mainWord +" " +Rus[randOrder]);
       mistakes++;
      
       Counter(game, mistakes, correct);
      demonHits(mistakes, correct);
       that = this;
       $(this).css('backgroundColor','red');
      setTimeout(function() {
        $(that).css('backgroundColor','white');}, 500)
       }
      
  }});
}

// закрыл round 2
}

function Round2_5(Eng,Rus, correct, mistakes, game)

{

 //тест
 //finalAnimaition(correct, mistakes, game);
  minus = 0;
  
  //пример из книги Макфарланда по jquery. здесь я хочу сделать вопрос на два варианта

function Questions(Eng,Rus, correct, mistakes, game, minus) {

   //динамическое присвоение из книги Кантора -- двойка либо тройка 
   //идём от размера массива ниже, минусуя случ число от -1 до -3 Ускорить?
   rand1 = 1+(rand2 = Math.floor(Math.random()*2)+1);
  console.log(rand1, rand2);

  $('#Round2_5').html(`<h1><p class="table alert1" id="quest">${Eng[Eng.length-minus-2]} - это...</p><p id="firstA" class="alert3 handler">${Rus[Rus.length-rand1-minus]}</p><p id=secondA class="alert5 handler">${Rus[Rus.length-rand2-minus]}</p><h1>`);

  // тут нужна общая функция для двух действий

    $("#firstA").click(function() {if(Eng.length-2 == Rus.length-rand1) {++correct; angelHits(mistakes, correct)} else {++mistakes; demonHits(mistakes, correct); 
      mistakeInWord = Eng.length-minus-2;
     // settings.recordMistakes(mistakeInWord)
      ;}

     

//Counter (game, mistakes, correct); 
//minus+=1;
Questions(Eng,Rus, correct, mistakes, game, minus);
    }).addClass("Cursor2");

$("#secondA").addClass("Cursor2").click(function() {if (Eng.length-2 == Rus.length-rand2) { ++correct &&  angelHits(mistakes, correct)} else  {++mistakes; demonHits(mistakes, correct); 
  mistakeInWord = Eng.length-minus-2;
     // settings.recordMistakes(mistakeInWord);
  } 


Questions(Eng,Rus, correct, mistakes, game, minus);
});
// тест ускорим
minus+=2;
//minus+=Math.floor(Math.random()*2);
//важен ПОРЯДОК передачи параметров!!! иначе counter не сработает
Counter (game, mistakes, correct); 
/*проверяем наличие udentified в словах и сразу открываем следующий раунд, если
слова закончились IFtrue | IFtrue | последнее

*/
Rus[Rus.length-rand1-minus] || Rus[Rus.length-rand1-minus] || Round2(Eng,  Rus, correct, mistakes, game); 
    }
//перезагрузка вопросов. стоп, почему она в трёх местах?
  Questions(Eng,Rus, correct, mistakes, game, minus);


// 

//function Check(this) {window.alert(this);}



}

function Round3(Eng,Rus, correct, mistakes, game)
{

//тест

//$('#P_Round3').show();
   $('#round2').hide();
   $('#mainWord').hide();
   // за то, что не вынес генератор чисел отедльно
   

   settings.finalWindow.show();
   var password = document.getElementById("SuperWord");

   newRandom = Math.floor(Math.random()*10);
   if (newRandom == 9 || 8) {newRandom = 7};
   
   //проблема
 // settings.finalWindow.prepend('</br><p>'+Rus[newRandom]+'</p>');
 $('#answerWord').html('<i class="red">'+Rus[newRandom]+'</i>'+'-ЖМИ OK,если НАПИСАЛ-');

   /*document.on('keypress',function(e) {
    window.alert(e);
    if(e.which == 13) {
      if (Boolean(password.value) == false) {
      window.alert("ENTER the TRANSLATION");
      //game.append("ENTER the TRANSLATION PLEASE");
      
     
     } 
     else
        {FinishALL(Eng,Rus, correct, mistakes, game);}
    }
  });
*/

function activateButton ()
{ 
    if (Boolean(password.value) == false) {
      //window.alert("ВВЕДИТЕ ОТВЕТ//ENTER the TRANSLATION");
      // тест эксперимент
      game.innerHTML = "<p class='big'>ВВЕДИТЕ ОТВЕТ<BR>ENTER TRANS-<BR>LATION<p>";
      
     } 
     else
     { 
      FinishALL(Eng,Rus, correct, mistakes, game);}
  }
//активируем проверку enter -- что за which?
  settings.finalWindow.on("click", activateButton);
  $(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    activateButton();  
  }});
   
   //settings.finalWindow.click(FinishALL(Eng,Rus, correct, mistakes, game));
 
   //settings.finalWindow.$('#theWord').html('</br>'+Rus[newRandom]+"</br>OK");
   

  
 // $('#answerWord').click(FinishALL(Eng,Rus, correct, mistakes, game));

//$(settings.finalWindow).dialog(
  //{
 // dialogClass: "no-close",
 // position: { my: "bottom", at: "top left", of: "#ANGEL"},
 // buttons:  [
  
  //  {
     // text: "OK",
     // poisiton: 'left',
     
     // click: function() {
    //    FinisALL();
    //    

    //  }
   // } ]
 // }
  //    );

 function FinishALL(Eng,Rus, correct, mistakes, game)  
{
  settings.finalWindow.hide();
  clearInterval(settings.myInterval);
var password = document.getElementById("SuperWord");
//тест на понижение размера букв!! эксп

 if (password.value.toLowerCase().trim() == Eng[newRandom].toLowerCase()) 
 {
  correct = correct + 1;
 Counter(game, mistakes, correct);
 }
 else {mistakes = mistakes + 1;
  Counter(game, mistakes, correct);}
 //для указания на ответ 
  yourFinalAnswer = Eng[newRandom] + " -- " + Rus[newRandom] + "!";


//$( this ).dialog( "close" );

 //если пользователь пишет с capslook'ом +  It's called the conditional operator!!! This is a one-line shorthand for an if-else statement
 
//час расплаты!


settings.finalCount=true;


     if (correct > mistakes)
    {
      $(".healthDemon").hide('slow');
      $("#DEMON").removeClass('sprite-image');
        $("#DEMON").addClass('DEMONdies');
        
        //game.show().html("YOU WON!")
        totalResult += "DEMONdies";
        //тест
      
       // break
    }

      if (10 < mistakes)
     {$(".healthAngel").hide('slow');
     
      $("#ANGEL").removeClass('sprite-image');
        $("#ANGEL").addClass('ANGELdies');
        totalResult += "ANGELdies";
        //break
    }

  //clearInterval(myInterval);
  

  
  let text = "none";
      if (totalResult === "DEMONdiesANGELdies")
      {text = "BLOODY DRAW";}
      else if (totalResult == "ANGELdies")
      {text = "YOU LOSE";
      $( "body" ).prepend( "<img src='startDemon.jpg' class='zeroCord'>" );}
      else
      {text= "YOU WIN";
      $( "body" ).prepend( "<img src='startAngel.jpg' class='zeroCord'>" );
    }
     //yourFinalAnswer +  BETTER FORMULA? TEST 26.05
     // вес параметров - 50 на 50
     numofQuestiones = correct + mistakes;
     countingofScore = (((numofQuestiones - mistakes)/numofQuestiones)*0.5 + ((400 - settings.seconds)/1000)*0.5)*100;
     settings.score = Math.floor(countingofScore);
    settings.Result.html(totalResult + " ! " + text + " , " + settings.name + "!" + "</br>ОШИБКИ:" +
    mistakes + " ПРАВИЛЬНО:" + correct + "</br> time in sec:" + settings.seconds + " score:"+ settings.score + "%</BR>");
    //тест вывода вместо перебора?
    //мб использовать деструктур-е? details ОКНО? onclick
//тест
 // showList(); TEST

  settings.Result.append(`<P onclick = "settings.showList(param = 'words')" CLASS = "Cursor2 red" "cursor">ВСПОМНИТЬ СВОЙ СПИСОК СЛОВ</P>`);
  settings.Result.append(`<P onclick = "settings.showList(param = 'score')" CLASS = "Cursor2 red" "cursor">ЛУЧШИЕ РЕЗУЛЬТАТЫ</P>`);
//+ отправить AJAX
  }

    //game.html();
 $('#game').html("<p>the game is OVER</p>" + "  <P><a href='#'  id='p2' onclick='location.reload(); return false;'>TRY MORE/TO  <br> </a> <a href=''../index.html' id='p'>GO BACK</a></p>" );


}

 

       //inner();
        

// + "  <P><a href='#'  id='p2' onclick='location.reload(); return false;'>TRY MORE  <br> </a> <a href=''../index.html' id='p'>GO BACK</a></p>" 
  
  
  




//тест 30.11 конец диалогового окна???
   
// append РАБОТАЕТ 

   //if (Boolean(password.value) == false) {Round3(Eng,Rus, correct, mistakes, game);} 
   //if (parseInt(password.value) == 0) {dialog();} 



//функция Начало Всего -- не подгружаем
$('#Round3Window').hide();
      $('P_Round3').hide();
      pannel =  $("#timer, #DEMON, #ANGEL, #game, #start, #p3").hide();
      pressStart = $('#p3').hide();
     start = $("#start").hide();
     playerForm = $("#Window1").hide();

   window.onload = Done;

    function Done()
    {
      const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
settings.currentTime = `${day}-${month}-${year}`;

 
//ловлю местоположение
      function json(url) {
          return fetch(url).then(res => res.json());
        }
        
        let apiKey = '78ed43a697a618045bc9ab705f6eca48267e9532b628893566fc8ab4';
        json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
          console.log(data.ip);
          console.log(data.city);
          console.log(data.country_code);
          console.log(data);
         city = data.city;
         country = data.country_name;

     
        settings.place = city + " " + country;
          // so many more properties
        });

     // $("#wordlist2").load("ENGLISH_5000.html");
     settings.sumupWords = $("#sumupWords");
     settings.sumupWords.hide();

     //console.log(partsOfSpeech.split(":"));
    //Pannel.show();
   
  
      // начинаем с бодрой анимации из jquery
      //вот тут с задержкой
      playerForm.delay(4500).fadeIn();

    angelSays =  $('#angelSays').animate(
{
left: '100',
top:'200', 
width: "300px",
},
3000).text("HEY DEMON YOU ARE NEXT!").hide('slow');

demonSays = $('#demonSays').animate(
{
left: '50',
top:'350', 
width: "300px",
},
3000).text("Mastermind! I AM CLOSING IN FOR A KILL!").hide('slow');




      $("#startAngel").animate(
{

left: '0', 
//top: '300px',

//width: "50px",
opacity: .7, 
textAlign: 'left',
},
2000 
).animate(
{
//left: '0рх', 
//width: "80px",
//opacity: .5, 
top:100,
textAlign: 'left',
},
2000 
).hide('1000s');
//ах эти старые сладкие эффекты .toggle( "bounce", { times: 3 }, "slow" 
//переглючило на сервере

$("#startDemon").animate(
{
//top: '700', 
left: '100px',
//width: "400px",
opacity: .5, 
//textAlign: 'left',
//color: 'red',

},
1000 
)
//
.animate(
{
left: '100', 
top: '350',
//width: "200px",
//opacity: .7, 
//textAlign: 'left',
},
3000 
).hide('1000s');

// toggle( "pulsate" )
//$( "body" ).css( "backgroundImage", "red");
//delay(1000).queue(function(n) {
   //$(this).css( "backgroundColor", "white"); 
//}));

//$('body').animate(
 // {backgroundColor: "black",
//},
//5000
//);



     //Window1 = $("#Window1").dialog(
    //  'close'
   //{
    //modal: true,
    //show: 1000,
    //position: 'right center',
    //autoOpen: false
  //}
  //);
  


  $("#Window1").submit(function(e) 
  { 
    e.preventDefault();
    //фишка из jquery с val и сохраняем в объект данные
    settings.name = $("#username").val();
   // settings.level = $("#level").val();
    settings.DICT = $("#dictionary").val();
    console.log(settings);
    $("#Window1").hide();
    //работает... а Prevent default?
    Done2();
    return false;
   
  
  }
    );
  
    }
    
    function Done2() 
    {
    
      //settings.remindWordList.show();
      //remindWordList.style.display = "block";
     /// тест
     //Round3(Eng,Rus, correct, mistakes, game);
     // demonSays.show();

  //window.alert("ddd");

   //тест
   pannel.show();
   settings.Result = $('#Result');
   settings.Result = $('#Result2');


   //убираю окно финального раунда или надо вставить внутри
 
      game = document.getElementById("game");

      function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
// это функция для случ последовательности           
       var random_start = 0; // От какого генерировать
var random_end = 7; // До какого генерировать
allСycles = 8;

var arrayX= [];
var arrayZ=[];
var arrayX2= [];
var arrayZ2=[];

//просто массив чисел по порядку
for(i=random_start;i<=random_end;i++){
 arrayX.push(i);
 arrayX2.push(i);
         
}
//вырезаем и добавляем в новые два массива, чтобы создать 2 последовательности
for(countCycles=1;countCycles<=allСycles;countCycles++){
  Z = arrayZ.push(arrayX.splice(Math.random()*arrayX.length,1)[0]);
  Z2 = arrayZ2.push(arrayX2.splice(Math.random()*arrayX.length,1)[0]);
  //запишу в объект для дальнейших заданй
  settings.randomArray = arrayZ;
  settings.randomArray2 = arrayZ2;
 // console.log(arrayZ);
     /// console.log(arrayZ2);
}


// ВЫБОР СЛОВАРЯ (вывести в отдельную функцию??)
switch(settings.DICT) {
case "RUS-ENG 5000 WORDS":
      {
     
      for(i=0;i<8;i++) {
         rand = getRandomInRange(0, 5000);
         table = document.getElementById("wordlist2");
      let child = table.children[rand].innerText;
          child = child.split('\t');
      Eng.push(child[1]);
      Rus.push(child[2]);
      //console.log(Rus);
      //console.log(Eng);
      }
         
         break
      }
   

//теперь из этого всего можно создать объект для использования?? }
    case "LATIN":
{
  for(i=0;i<8;i++) {
         rand = getRandomInRange(10, 180);
         table = $("ol#wordlist3 li p");
        // if (table[rand].innerText != 0)
        //child=[];
        child2 = table[rand].innerText;
        //три типа тире? -1 как false ЗАМЕНИТЬ на одно тире
        if (child2.indexOf('-') > -1)
{
  child2 = child2.split('-');
}
if (child2.indexOf('–') > -1)
{
  child2 = child2.split('–');
}      
if (child2.indexOf('—') > -1)
{
  child2 = child2.split('—');
}                  
      //сравнение фейлилось из-за пробелов. я потратил целый час, чтобы верно подчистить их через trim, зато вспомнил, как работает код
      Eng.push(child2[0].trim());
      
     if (child2[2]) 
     { 
     Rus.push(child2[1].trim()+child2[2].trim());}
     else Rus.push(child2[1].trim());
     
//Rus.forEach(element => element.trim());
//Eng.forEach(element => element.trim());
//Eng[0].trim();
//Rus[0].trim();
      console.log(Eng);
     console.log(child2);
      console.log(Rus);
         }
         break
}

   
        // тест -- моя обработка не работает... была проблема с || в условии
      case "RUSSIAN: CHASTI RECHI":
      { cutTheList = partsOfSpeech.split('\n\n');
    fromTable();
  break}
      case "RUSSIAN: SREDSTVA VYRAZ.":
       {cutTheList = wordsOfExpression.split('\n\n');
      fromTable();
      break;
      }
function fromTable() {
  for (l=0; l<cutTheList.length; l++)
{ cutTheList[l] = cutTheList[l].split(':');

cutTheList[l][1] = cutTheList[l][1].split(',');
} 
//я считаю кол-во элементов по ключам -- это бред, да?
c=0;
for (el in cutTheList)
{ 
  totalNumber = el;
 while (c<8)
 c++;}

Not_copied = [];

 for(a=0;a<8;a++) {

 choosePartOfSpeech = getRandomInRange(0, totalNumber);
 ///includeS забыл свою S!!   А тут я исключаю повторы в частях речи
 if (Not_copied.includes(choosePartOfSpeech) == false)
 {

  Not_copied.push(choosePartOfSpeech);
  // ТЕСТ ТЕСТ все ошибки из-за -1???
 chooseWord = getRandomInRange(0, cutTheList[choosePartOfSpeech][1].length-1);
 // Eng у меня - это то, что нужно определить в последнем вопросе ПОЧЕМУ ОШИБКА ОТ ПЕРЕМЕНЫ МЕСТ?? TRIM неверный??
 RusPush = cutTheList[choosePartOfSpeech][1][chooseWord].trim();
 EngPush = cutTheList[choosePartOfSpeech][0].trim();
 Eng.push(EngPush);
 Rus.push(RusPush);
 }
 else {a = a - 1;}
 }
    
     //cutTheList = wordsOfExpression.split('\n\n');
     // cutTheList2 = cutTheList();

 //console.log(cutTheList.map(e));
   // OF - это сразу ЗНАЧЕНИЕ, а не ключ, как в IN... START here - а как создать ключи???
// if = needed DICT do funct generate[LENGTH] nuber push to ENG RUS arrays как прим OF IN?
// мб вывести of IN именно с объектом в качестве результата?
// может, создать объект


      }
    }

         //тут идёт грубое создание таблицы из Дронова

l=0;        

         for(j=0;j<2;j++) {
          let table = document.createElement('table');
          table.id = "away";
         let tr = document.createElement('tr');
         tr.class = "alert";
         document.body.append(tr);
         table.class = "table";
     

         
         for(k=0;k<4;k++) {

         // let a = document.createElement('iframe');
          let td = document.createElement('td');
         td.classList = "alert"+l;
         td.id="alert";
     
        // a.classList = "iframe";
         //a.src='https://scrolller.com/'+Eng[l];
         //document.body.append(a);
         document.body.append(td);
       
        
         td.innerHTML = Eng[l]+" - "+Rus[l];
        
         
         ///console.log(arrayX[k]);
         l++;

         }
         
         document.body.append(table);      }

         let h4 = document.createElement('p');
        document.body.append(h4);
        h4.id="back";
        h4.innerHTML = "</br></br></br><details><br><summary>Random  fairytale</summary> : <br> Once apon a time a "+ Eng[0]+" went to the <br>" + Eng[5] + " and saw there the "+Eng[1]+ "ing " + Eng[2]+"s. So eventually <br> a " +Eng[0]+ " became just a "+Eng[6] + "</details>";
        //ПЕРЕДАЮ ПЕРЕМЕННЫЕ, ЧТОБЫ ОТКРЫТЬ В  СЛЕД ФУНКЦИИ
        hide1 = $('#p').hide();
        hide2 = $('#p2').hide();
        $("#wordlist").hide();
        $("#wordlist3").hide();
        //функция стрелка - тест эксп
        clickToStart = $('#p3').click(function() {putWords(Eng, Rus, arrayZ, h4, hide1, hide2, clickToStart)});

   //идея: сравниваем случайные варианты с основным. проблема повторов без перегрузки массивами??

   //а это окно для последнего раудна
 
     
        ;}

       
    
 //это была хорошая идея, чтобы не дублировать! display of counter
      function Counter (game, mistakes, correct)

      {
        //использование обратных кавычек с переменными
       
        game.innerHTML= `YOU'VE GOT ${mistakes} MISTAKE(S)<br> and ${correct} correct answers`;
      

      }
        
    


    /*
setInterval(function() {
    $('.Timer').text((new Date - start) / 1000 + " Seconds");
}, 1000);
    */


    //для каждой  тест пока не разработано
    
    function recordMistakes(choice) {
    
    window.alert("записана ошибка"+ Eng[choice]+" - "+Rus[choice]);
    settings.recordMistakes.push(Eng[choice]+" - "+Rus[choice]);
    console.log(settings);
  }

    //correct answer animation + final
    function angelHits(mistakes, correct)
    {
      Demon = $(".healthDemon").css('width');
       Demon = parseInt(Demon)-correct; 
       console.log(Demon);
      $(".healthDemon").css('width', Demon);
      $("#DEMON").addClass('DEMONgetsHurt');

      // test
     // $("#DEMON").removeClass('sprite-image');
      //$("#DEMON").addClass('DEMONdies');
      //
      $("#ANGEL").addClass('ANGELhits');
      //анонимная функция внутри?
      setTimeout(function() 
      {
       $("#DEMON").removeClass('DEMONgetsHurt');
        $("#ANGEL").removeClass('ANGELhits');
        //$("#ANGEL").removeClass('sprite-image');
        //$("#ANGEL").addClass('ANGELdies');
      }, 1000)

 
    }

    //wrong answer animation + answer
    function demonHits(mistakes, correct)
    {
       Angel = $(".healthAngel").css('width');
       Angel = parseInt(Angel) - (mistakes); 
       console.log(Angel);
      $(".healthAngel").css('width', Angel);
      //$("#ANGEL").addClass('getsHurt');
      $("#DEMON").addClass('DEMONhits');
      $("#ANGEL").addClass('ANGELgetsHurt');
      $("#ANGEL").removeClass('sprite-image');
      
      //анонимная функция внутри?
      setTimeout(function() 
      {
        $("#ANGEL").removeClass('ANGELgetsHurt');
        $("#DEMON").removeClass('DEMONhits');
        $("#ANGEL").addClass('sprite-image');
      
      }, 1000)

 
    }
       
     function finalText (correct,mistakes,game) {
     console.log(totalResult);
     


   

  //пробую такую штучку
 
    
     } 
        
        function putWords (Eng,  Rus, arrayZ, h4, hide1, hide2, clickToStart)
        { 
          // тест -- 
          //FinishALL(Eng,Rus, correct, mistakes, game);
         

          //Round3(Eng,Rus, correct, mistakes, game);
          //settings.finalWindow.show();
          //$("#window").dialog(
  //{
  //dialogClass: "no-close",
  //position: { my: "bottom", at: "top", of: "#ANGEL"},
  //buttons:  [
  //  {
    //  text: "OK",
      //poisiton: 'center',}]});
         
          //запуск таймера
          settings.myInterval = setInterval(settings.timer, 1000);
          //тест
      //Round3();
    
        //settings.myInterval = setInterval(settings.timer, 1000);
      
        
        //Round2_5(Eng,  Rus, correct, mistakes, game);

          clickToStart.hide('normal');
         
          game.innerHTML="<strong>ROUND 1 </br> MATCH WORDS!</BR> ПОДБЕРИ СЛОВА </br> ПО ПАРАМ!</strong>";
          //$(game).draggable();
          

          h4.innerHTML = "";
       //динамическое создание таблицы в духе Дронова, не очень получилось...
       // теперь снизим до 6 тест
       
          for (h=0; h<8; h++) 
        {
        //td = body.createElement('h3');
         //td.class = "h3";
         //document.body.append(td);
         
         allTd = document.getElementsByClassName("alert"+h);
         
         
         allTd[0].innerHTML= "<div onclick=changeColor(event) class = 'firstRoundwords'>" + Eng[arrayZ[h]] + "</div>" + "<div id='left' onclick=changeColor(event) class = 'firstRoundwords'> "+Rus[[h]]+" </div>";
        
      
        // console.log(allTd[0]);
        // table = document.getElementById("away");
         //document.removeChild(table);
         //table.innerHTML = "" + Eng[arrayZ[h]];
       // h4.style.size = '200%';
         //h4.innerHTML += "" + Rus[[h]];
        }



        
        }
        
        //td = getElementsByTag("td");

      //tds = document.getElementById("alert");
//console.log(tds);
     //tds.addEventListener('click', changeColor);

    
     

     index1 = -1, index2 = -1, 
     Green=0;
     object1=""; object2="";
     mistakes=0;
     correct=0;
  
        function changeColor(event)
        { 
           
          console.log(event); 
          //устанавливаем текст, по к-му щёлкнули
          E1 = Eng.indexOf(event.target.innerText);
          R1 = Rus.indexOf(event.target.innerText);
          // по русскому или английскому слову?
          choice = (E1 > R1) ? E1 : R1;
          console.log(choice,E1,R1,Green); 
          // зарядить здесь switch??
          if (E1==-1)
           {
            //это бы в отдельную функцию?? текст inner. а то повтор
            firstClick1 = event.target.style;
          firstClick1.backgroundColor = "green";
       
           index1 = R1;
           object1 = event.target;
           Green +=1;
          }
            if (R1==-1)
           {
          firstClick2 = event.target.style;
          firstClick2.backgroundColor = "green";
            object2 = event.target;
      
          index2 = E1;
          
          Green += 1;
        }
            if (index1==index2)
              {correct++;
                Counter(game, mistakes, correct);
                angelHits(mistakes, correct);
               setTimeout(() => {

              object1.innerHTML=" ";
              object2.innerHTML=" ";
//TEST эти кликеры мешали МНЕ, создавая ложный набор просто уничтожить их?
              object1.remove();
              object2.remove();

              Green=0;

              } ,100); 
// тест эксперимент с length ДЕЛО БЫЛО В ТАБЛИЧКАХ
              if (correct == 8)
              {
                //тест
               //Round2(Eng,  Rus, correct, mistakes, game);
               Round2_5(Eng,  Rus, correct, mistakes, game);
            }
            
            }
            if (Green==2 && index1!==index2)
            { 
              mistakes++;
              Counter(game, mistakes, correct);
              demonHits(mistakes, correct);
              //recordMistakes(choice);
              //index1=-1; index2=-1;
              //event.target.innerHTML.backgroundColor="white";
              all = document.querySelectorAll('div');
              i=0;
             while (i<all.length)
              {current = all[i];
                current.style.backgroundColor = "white";
                i++;}
              Green=0;
               
              //console.log(all); }
            //object2.innderHTML.backgroundColor="white";
            //green==false;

            
           
          }
          //тест
          

         // getElementById('back').innerHTML = "YOUR SCORE:";




        }
         /*
          
          if (Rus.indexOf(event.target.innerText)==-1)
          {index2=Eng.indexOf(event.target.innerText);
            console.log(index1, index2);
            event2=event;
          }
          if (index1==index2)
          {console.log(Rus);
          event.target.innerText="..";
          event2.target.innerText="..";
          index1=-1; index2=-1;}
         else 
         {index1=-1; index2=-1;
          event.target.style.backgroundColor="white";
          event2.target.style.backgroundColor="white"; 
        */ 
        
   
        
    // не работает никак...


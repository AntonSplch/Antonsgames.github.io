<html>
    <head>
        <meta charset="utf-8"> 
        
        <style>

* {
  padding: 0;
  margin: 0;
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0.0, 0.5, 0.0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
    table {font-size: 30px;
    font-family:'Courier New', Courier, monospace;
      color: rgb(235, 10, 202);
      text-align: left;
    }


      a{
color: #f70000;
text-decoration: none;
border-bottom: 3px solid #fa0808;
}

p {
  font-size: 30px;
  text-align: center;
  animation-duration: 1s;
  animation-name: slidein;}
   
        </style>
        <title>Anton's games</title></head>
    <body>
        <table>
          <tr>
            <td>    <span><img src='./index.jpg'></span></td>

            <td>
        <span>Hello world! I'm Anton.</span>
        <span> I will upload some of my games here,</span>
        <span>powered by JavaScript, PHP or C#</span>
        <span>Please, be welcome and try my games:</span>
        </td>
       
    </tr>
</table>

       <p>
             <a href ="./Poetical_Horse/Poetical_Horse.HTML">РЕШИ ШАХМАТНО-ПОЭТИЧНСКУЮ ЗАДАЧКУ О КОНЕ (CHESS GAME IN RUSSIAN)</A>
      </p>
      <p></p>;
      <p>
        <a href ="Undressser/Undresser.html">РАЗДЕНЬ ЛЮДЕЙ (UNDRESS PEOPLE)</A>
 </p>
 <P></P><BR>
 <p>
  <a href ="Dresser/Dresser.html">ОДЕНЬ ДЕВУШКУ НА СВИДАНИЕ (DRESS A GIRL GET A GUY)</A>
</p>
 <script>
  //для браузера и системы
 //console.log(navigator.userAgent);
 //для мобильных
 //window.alert(screen.availWidth);
 //window.alert(screen.availHeight);
 //mass1 = Object.keys(location);
 // ПРОТЕСТИРОВАТЬ онлайн
//window.alert(location.host);
//window.alert(location.port);
//window.alert(location.protocol);
console.log(history);
console.log(location);
console.log(Cookie);
//console.log(document.Referrer);
// <p><a href ="javascript:history.back();">BACK</a></p>
 </script>

<?php
echo "Hello World!";
?> 

    </body>
</html>
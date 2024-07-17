import './App.css'


function App() {
  return(
    <body class="font-custom font-normal">
      <div class="">
        <img class="object-scale-down origin-left-top w-full" src="/src/assets/Baner.png" alt="Hero" />
        <h1 class="2xl:text-5xl text-2xl bg-[#1b2d79] text-white text-center">Akcesoria Lakiernicze</h1>
        <div class="relative top-[15px] 2xl:grid 2xl:grid-cols-3">
          <div class="portrait:hidden items-center justify-items-center relative left-[20px] grid grid-cols-3 grid-rows-4">
            <img class="2xl:h-[70px] h-[30px]" src="src/assets/logos/Challenger.png" alt="" />
            <img class="" src="src/assets/logos/mobihel.png" alt="" />
            <img class="" src="src/assets/logos/nippon.png" alt="" />
            <img class="h-[70px]" src="src/assets/logos/3m.png" alt="" />
            <img class="h-[70px]" src="src/assets/logos/siro.jpg" alt="" />
            <img class="h-[70px]" src="src/assets/logos/troton.jpg" alt="" />
            <img class="h-[70px]" src="src/assets/logos/exlak.png" alt="" />
            <img class="h-[70px]" src="src/assets/logos/mipa.jpg" alt="" />
            <img class="h-[70px]" src="src/assets/logos/sunmight.png" alt="" />
            <img class="h-[90px]" src="src/assets/logos/roberlo.png" alt="" />
            <img class="" src="src/assets/logos/ivat.png" alt="" />
            <img class="h-[90px]" src="src/assets/logos/redpaint.png" alt="" />
          </div>
          <div class="text-2xl 2xl:text-3xl relative 2xl:left-[150px] ml-[20px]">
            <div>
            <p>ul. Mikołowska 268A, <br />43-100 Tychy</p>
            <br />
              <ul>
                <ol><a href="502351308">tel: 515 189 700</a></ol>
                <ol><a href="502351307">tel: 502 351 307</a></ol>
              </ul> 
            </div>
            <br />
          <div>
            <p>Godziny otwarcia:</p>
            <p>pon. - pt.: 9-16</p>
            <p>sob.: 10-12</p>
            <p>niedz.: <span class="text-[#ff0000] font-medium">zamknięte</span></p>
          </div>
          </div>
          <div class="2xl:h-[380px] 2xl:w-[600px] w-full h-[400px]">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.0194776349043!2d18.94353864983107!3d50.15260541813913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c906733d58e1%3A0xcf4c41113efe6ade!2sLakiery%20Samochodowe%20-%20LAKUS!5e0!3m2!1spl!2spl!4v1721247491090!5m2!1spl!2spl" width="200px" class="h-full w-full"></iframe>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App

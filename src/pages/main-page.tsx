function MainPage(): JSX.Element {
  return (
    <>
      <head>
        <link rel="stylesheet" href="lib/style.css"></link>
        <title>Погода</title>
      </head>
      <body>
        <ul className="weather-cards-list">
          <li className="button">
            <span className="triangle left">▲</span>
          </li>
          <li className="weather-card">
            <figure>
              <figcaption className="top-caption">Вт</figcaption>
              <img className="weather-card-image" src="img\weather-clear.png" width="100px" height="100px"/>
              <figcaption className="bottom-caption">Солнечно</figcaption>
            </figure>
          </li>
          <li className="weather-card">
            <figure>
              <figcaption className="top-caption">Ср</figcaption>
              <img className="weather-card-image" src="img\weather-overcast.png" width="100" height="100"/>
              <figcaption className="bottom-caption">Пасмурно</figcaption>
            </figure>
          </li>
          <li className="weather-card">
            <figure>
              <figcaption className="top-caption">Чт</figcaption>
              <img className="weather-card-image" src="img\weather-showers.png" width="100" height="100"/>
              <figcaption className="bottom-caption">Дождь</figcaption>
            </figure>
          </li>
          <li className="button">
            <span className="triangle right">▲</span>
          </li>
        </ul>
        <button className="refresh">Обновить прогноз...</button>

        {/* <script src="js/script.js" type="module"></script> */}
      </body>
    </>
  );
}

export default MainPage;

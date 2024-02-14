import "./App.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [leng, setLeng] = useState("en")

  useEffect(()=>{
    let changeLeng = localStorage.getItem("leng"); 
    if(changeLeng){
      setLeng(changeLeng)
      i18n.changeLanguage(changeLeng)
    }
  }, [])

  function heandleChange(e){
    i18n.changeLanguage(e.target.value)
    setLeng(e.target.value)
    localStorage.setItem("leng", e.target.value)
  }

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="actions">
              <select onChange={heandleChange} value={leng}>
                <option value="en">En</option>
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
              </select>
              <div className="mode">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
              </div>
            </div>
            <ul>
              <li>{t("about")}</li>
              <li>{t("skill")}</li>
              <li>{t("project")}</li>
              <li>{t("contact")}</li>
            </ul>
          </div>
          <div className="main">
            <div className="main__text">
              <h2>{t("heading")}</h2>
              <p>{t("desc")}</p>
              <div className="btns">
                <button className="white__btn">{t("hire")}</button>
                <button className="black__btn">{t("see")}</button>
              </div>
            </div>
            <div className="main__img">
              <img src="/men.png"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  // To save the returned results from the API request
  const [translated, setTranslated] = useState("");

  // Make an API request when the app start and when 'language' and 'text' changed
  useEffect(() => {
    const doTranslation = async () => {
      // Get only 'data' from the request's response
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      // Set result to 'translated' variable
      setTranslated(data.data.translations[0].translatedText);
    };

    // Call it to make the API request
    doTranslation();
  }, [language, text]);

  return (
    <div>
      <h2 className="ui header">{translated}</h2>
    </div>
  );
};

export default Convert;

import React, { useContext } from "react";
import {
  FormattedMessage,
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedTime,
} from "react-intl";
import { Context } from "./Wrapper";

const I18 = (props) => {
  const context = useContext(Context);

  return (
    <div className="i18">
      {/* <header className="language-select"> */}
        <select value={context.locale} onChange={context.selectLanguage} className='i18__langage'>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
        </select>
        <p>
          <FormattedMessage
            id="app.header"
            defaultMessage="Edit the files and save to reload"
            values={{
              fileName: "src/App.js",
              code: (word) => <strong>{word}</strong>,
            }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.content" defaultMessage="Learn React" />
        </a>


        <br />
        <FormattedDate
          value={props.date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
        <br />
        <FormattedNumber
          value={20.42}
          style="currency"
          currencyDisplay="symbol"
          currency="USD"
        />
        <br />
        <FormattedNumber value={10000} />
        <br />
        <FormattedTime
          value={new Date()}
          hour="numeric"
          minute="numeric"
          second="numeric"
          timeZoneName="long"
        />
      {/* </header> */}
    </div>
  );
};

export default I18;

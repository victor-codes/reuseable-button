import Button from "./Components/Button";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <div className="button">
        <Button variant="default" name="<Button />" />
        <Button variant="default-state" name="&:hover, &:focus" state="state" />
      </div>
      <div className="outline-grp">
        <Button variant="outline" name="<Button variant=”outline” />" />
        <Button variant="outline-state" name="&:hover, &:focus" state="state" />
      </div>
      <div className="text-grp">
        <Button variant="text" name="<Button variant=”text” />" />
        <Button variant="text-state" name="&:hover, &:focus" state="state" />
      </div>
      <Button variant="disableShadow" name="<Button disableShadow />" />
      <div className="disabled-grp">
        <Button
          value="Disabled"
          name="<Button disabled />"
          disabled="disabled"
        />
        <Button
          variant="text-state"
          value="Disabled"
          name="<Button variant=”text” disabled />"
          disabled="disabled"
        />
      </div>
      <div className="icon-grp">
        <Button
          variant="icon"
          name="<Button startIcon=”local_grocery_store” />"
          startIcon="true"
        />
        <Button
          variant="icon"
          name="<Button startIcon=”local_grocery_store” />"
          endIcon="true"
        />
      </div>
      <div className="size">
        <Button size="sm" name="<Button size=”sm” />" />
        <Button size="md" name="<Button size=”md” />" />
        <Button size="lg" name="<Button size=”lg” />" />
      </div>
      <div className="color">
        <div className="colgrp">
          <Button variant="default" name="<Button color=”default” />" />
          <Button
            variant="default-state"
            name="&:hover, &:focus"
            state="state"
          />
        </div>
        <div className="colgrp">
          <Button
            color="primary"
            value="Primary"
            name="<Button color=”primary” />"
          />
          <Button color="primary-state" value="Primary" />
        </div>
        <div className="colgrp">
          <Button
            color="secondary"
            value="Secondary"
            name="<Button color=”secondary” />"
          />
          <Button color="secondary-state" value="Secondary" />
        </div>
        <div className="colgrp">
          <Button
            color="danger"
            value="Danger"
            name="<Button color=”danger” />"
          />
          <Button color="danger-state" value="Danger" />
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

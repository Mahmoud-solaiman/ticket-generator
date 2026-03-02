import { Header } from "../../components/Header";
import { WelcomeMessage } from "./WelcomeMessage";
import { UploadArea } from "./UploadArea";
import { InfoFields } from "./InfoFields";
import './homeResponsive.css';

export function Home({ nameInput, emailInput, githubInput, image , setImage }) {
  return (
    <>
      <Header />

      <WelcomeMessage />

      <form className="upload-container" onSubmit={(event) => event.preventDefault()}>
        <UploadArea setImage={setImage} />

        <InfoFields nameInput={nameInput} emailInput={emailInput} githubInput={githubInput} image={image} />
      </form>
    </>

  );
}
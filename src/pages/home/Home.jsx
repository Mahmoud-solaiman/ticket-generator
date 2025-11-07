import { Header } from "../../components/Header";
import { WelcomeMessage } from "./WelcomeMessage";
import { UploadArea } from "./UploadArea";
import { InfoFields } from "./InfoFields";

export function Home() {
  return (
    <>
      <Header />

      <WelcomeMessage />

      <form className="upload-container">
        <UploadArea />

        <InfoFields />
      </form>
    </>

  );
}
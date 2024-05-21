import { headers } from "next/headers";
// import StatusLabel, { Status } from "./components/StatusLabel";
import AddCompanyButton from "./components/AddCompanyButton";
import ServerComponent from "./components/ServerComponent";
import ClientComponent from "./components/ClientComponent";
import ServerComponentCopy from "./components/ServerComponentCopy";
import MagicButton from "./components/magic-button";


export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home page{new Date().toTimeString()}</h1>
      <AddCompanyButton/>
<MagicButton/>

    </main>
  );
}

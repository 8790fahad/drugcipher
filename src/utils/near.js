import { connect, Contract, keyStores, WalletConnection } from "near-api-js";
import environment from "./config";
const nearEnv = environment("testnet");
export async function initializeContract() {
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearEnv
    )
  );
  window.walletConnection = new WalletConnection(near);
  window.accountId = window.walletConnection.getAccountId();
  window.contract = new Contract(
    window.walletConnection.account(),
    nearEnv.contractName,
    {
      viewMethods: ["get_drugs_info", "view_drug_info"],
      changeMethods: ["set_drug_info", "recall_drug_fun","delete_drug_info"],
    }
  );
}

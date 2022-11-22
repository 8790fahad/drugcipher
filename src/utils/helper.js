import { formatNearAmount } from "near-api-js/lib/utils/format";
import { toast } from "react-toastify";
import environment from "./config";
import { NotificationError } from "./Notification";
const nearEnv = environment("testnet");
export async function accountBalance() {
  return formatNearAmount(
    (await window.walletConnection.account().getAccountBalance()).total,
    2
  );
}

export async function getAccountId() {
  return window.walletConnection.getAccountId();
}

export function login() {
  window.walletConnection.requestSignIn(nearEnv.contractName);
}

export function logout() {
  window.walletConnection.signOut();
  window.location.reload();
}
export const WALLET_ID = process.env.WALLET_ID || "drugcipher.near";

const serverUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:34561"
    : "https://yge.wvi.mybluehost.me/test/drug-cipher-server";
export const apiURL = serverUrl + "/api";

const _fetchApi = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  fetch(apiURL + url)
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        empty();
      }
    })
    .catch((err) => {
      error(err);
    });
};

export function formatNumber(x) {
  let num = Math.round(parseInt(x), 0);
  if (num) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  } else {
    return "0";
  }
}

/**
 * _postApi()
 * An helper function that posts data to the database
 * @params route (string) => the api route to submit on
 * @params data (object) => item to be submitted
 * @params callback => optional callback function
 */
const _postApi = (url, data = {}, success = (f) => f, error = (f) => f) => {
  fetch(apiURL + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => success(response))
    .catch((err) => error(err));
};

/**
 * _deleteData()
 * An helper function that deletes data from the database
 * @params route (String) => the api route
 * @params data (object) => object containing the details of
 * the item to be deleted
 * @params callback (func) => optional callback
 */
const _deleteApi = (
  route,
  data = {},
  callback = (f) => f,
  err_cb = (f) => f
) => {
  fetch(apiURL + route, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : null,
  })
    .then((raw) => raw.json())
    .then((response) => callback(response))
    .catch((err) => err_cb(err));
};

const _updateApi = (
  url = "",
  data = [],
  success = (f) => f,
  error = (f) => f
) => {
  fetch(`${apiURL + url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => success(response))
    .catch((err) => error(err));
};

const recoverAccount = (passPhrase, success = (f) => f) => {
  return (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    _postApi(
      "/v1/recover-account-passphrass",
      { passPhrase },
      (resp) => {
        console.log(resp);
        if (resp.success) {
          localStorage.setItem("@@cipher", resp.token);
          dispatch({ type: "RECOVER_ACCOUNT", payload: resp });
          dispatch({ type: "LOADING", payload: false });
          success();
        } else {
          toast(<NotificationError text={resp.message} />);
          dispatch({ type: "LOADING", payload: false });
        }
      },
      (err) => {
        toast(<NotificationError text="Failed, try again" />);
        dispatch({ type: "LOADING", payload: false });
        console.log(err);
      }
    );
  };
};

const loadWithToken = (err = (f) => f) => {
  const token = localStorage.getItem("@@cipher");
  const _token = token?.split(" ");
  console.log(_token);
  if (!token === "undefined") {
    return (dispatch) => {
      _fetchApi(
        `/v1/load-with-token?token=${_token[1]}`,
        (resp) => {
          if (resp.success) {
            dispatch({ type: "RECOVER_ACCOUNT", payload: resp });
          } else {
            err();
          }
        },
        (err) => {
          toast(<NotificationError text="Failed, try again" />);
          console.log(err);
          err();
        }
      );
    };
  }
};
const clearToken = (goMenu = (f) => f) => {
  localStorage.removeItem("@@cipher");
  goMenu();
};

export const getMarketer = (url, success = (f) => f, error = (f) => f) => {
  _fetchApi(
    url,
    (res) => {
      // if (res.success) {
      success(res);
      // }
    },
    (err) => {
      error(err);
    }
  );
};

export {
  _updateApi,
  _deleteApi,
  _postApi,
  _fetchApi,
  recoverAccount,
  loadWithToken,
  clearToken,
};
